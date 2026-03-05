/**
 * TaskMan Day View Calendar Component
 * Displays 24-hour timeline with time slots (30-min increments)
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Plus, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CalendarEvent } from '@/lib/calendar-types';

export default function DayView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [events] = useState<CalendarEvent[]>([]);

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = () => {
    return currentDate.toDateString() === new Date().toDateString();
  };

  const renderTimeSlot = (hour: number) => {
    const timeLabel = hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;
    return (
      <div className="text-xs font-medium text-muted-foreground py-2 border-r border-input w-20">
        {timeLabel}
      </div>
    );
  };

  const renderEvent = (event: CalendarEvent) => {
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    const startHour = startDate.getHours();
    const duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60); // hours

    const categoryColors: Record<string, string> = {
      meeting: 'bg-blue-500',
      appointment: 'bg-green-500',
      deadline: 'bg-red-500',
      recurring: 'bg-purple-500',
      work_block: 'bg-yellow-500',
      personal: 'bg-pink-500',
      milestone: 'bg-indigo-500',
      holiday: 'bg-orange-500',
      travel: 'bg-teal-500',
    };

    const bgColor = categoryColors[event.type] || 'bg-gray-500';

    return (
      <Card
        key={event.id}
        className={`
          ${bgColor} bg-opacity-20 border-l-4 border-${bgColor.replace('bg-', '')} rounded-r-md p-3 mb-2 cursor-pointer
          hover:bg-opacity-30 transition-all
        `}
        onClick={() => setSelectedEvent(event)}
      >
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">{event.title}</h4>
            <Badge variant="secondary" className="text-xs">
              {event.type}
            </Badge>
          </div>
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>
                {startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                {' - '}
                {endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
            )}
            {event.attendees && event.attendees.length > 0 && (
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{event.attendees.length}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Date Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDay('prev')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
          </h2>
          <p className="text-sm text-muted-foreground">
            {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          {!isToday() && (
            <Button
              variant="link"
              size="sm"
              className="mt-1 text-primary"
              onClick={goToToday}
            >
              Go to Today
            </Button>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDay('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Day Events */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            {isToday() ? "Today's Schedule" : `${currentDate.toLocaleDateString('en-US', { weekday: 'long' })}'s Schedule`}
          </h3>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        {/* Time Slots */}
        <div className="space-y-1">
          {Array.from({ length: 24 }, (_, hour) => (
            <div key={hour} className="flex">
              <div className="border-r border-input border-b border-input">
                {renderTimeSlot(hour)}
              </div>
              <div className="flex-1 min-h-[60px] border-b border-input p-2 hover:bg-cardHover cursor-pointer transition-colors">
                {/* Sample event for demo */}
                {hour === 9 && renderEvent({
                  id: '1',
                  title: 'Team Standup',
                  start: new Date(new Date().setHours(9, 0, 0, 0)),
                  end: new Date(new Date().setHours(9, 30, 0, 0)),
                  type: 'meeting',
                  attendees: ['Alice', 'Bob'],
                })}
                {hour === 11 && renderEvent({
                  id: '2',
                  title: 'Design Review',
                  start: new Date(new Date().setHours(11, 0, 0, 0)),
                  end: new Date(new Date().setHours(12, 0, 0, 0)),
                  type: 'appointment',
                  location: 'Conference Room A',
                  attendees: ['Sarah', 'Mike'],
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Selected Event Details */}
      {selectedEvent && (
        <Card className="p-6 border-primary/40">
          <h3 className="text-lg font-semibold text-foreground mb-3">Event Details</h3>
          <div className="space-y-2">
            <p className="text-sm text-foreground">
              <span className="font-medium">Title:</span> {selectedEvent.title}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Type:</span> {selectedEvent.type}
            </p>
            {selectedEvent.description && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Description:</span> {selectedEvent.description}
              </p>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
