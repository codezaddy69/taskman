/**
 * TaskMan Week View Calendar Component
 * Displays a 7-column grid of days for the selected week with time slots
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarEvent } from '@/lib/calendar-types';

export default function WeekView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events] = useState<CalendarEvent[]>([]);

  const getDaysInWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Go back to start of week

    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const isSelected = (date: Date) => {
    return selectedDate
      ? date.toDateString() === selectedDate.toDateString()
      : date.toDateString() === new Date().toDateString();
  };

  const getWeekRange = () => {
    const days = getDaysInWeek(currentDate);
    const start = days[0];
    const end = days[6];
    const month = start.getMonth() === end.getMonth()
      ? start.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : `${start.toLocaleDateString('en-US', { month: 'short' })} - ${end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
    return month;
  };

  const renderTimeSlot = (hour: number) => {
    const timeLabel = hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;
    return (
      <div className="text-xs font-medium text-muted-foreground py-1 border-r border-input">
        {timeLabel}
      </div>
    );
  };

  const renderDayNumber = (date: Date) => {
    const day = date.getDate();
    const isToday = date.toDateString() === new Date().toDateString();
    const selected = isSelected(date);

    return (
      <div
        className={`
          flex items-center justify-center h-full text-sm font-medium rounded-full w-8 h-8 mx-auto
          ${selected ? 'bg-primary text-primary-foreground' : ''}
          ${isToday && !selected ? 'border-2 border-primary text-primary' : ''}
          ${!selected && !isToday ? 'text-foreground' : ''}
        `}
      >
        {day}
      </div>
    );
  };

  const renderEventInSlot = (date: Date, hour: number) => {
    // Sample event rendering - in production, filter events by date and hour
    if (date.toDateString() === new Date().toDateString() && hour >= 9 && hour < 10) {
      return (
        <div className="bg-primary/20 border-l-2 border-primary rounded-r-md p-1 mb-1 cursor-pointer hover:bg-primary/30 transition-colors">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3 text-primary-foreground" />
            <span className="text-xs font-medium text-foreground">Team Standup</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Week Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateWeek('prev')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          <Calendar className="h-6 w-6 text-primary-foreground" />
          <h2 className="text-xl font-bold text-foreground">
            {getWeekRange()}
          </h2>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateWeek('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Week Grid */}
      <div className="bg-card rounded-xl border border-input overflow-hidden">
        {/* Day Header Row */}
        <div className="grid grid-cols-8 border-b border-input">
          {/* Time column */}
          <div className="text-xs font-semibold text-muted-foreground py-3 px-2 text-center">
            Time
          </div>
          {/* Days of week */}
          {getDaysInWeek(currentDate).map((day, index) => (
            <div
              key={day.toDateString()}
              className="text-center py-3 cursor-pointer hover:bg-cardHover transition-colors"
              onClick={() => setSelectedDate(day)}
            >
              <div className="text-xs text-muted-foreground">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
              </div>
              {renderDayNumber(day)}
            </div>
          ))}
        </div>

        {/* Time Slots */}
        {Array.from({ length: 12 }).map((_, hour) => (
          <div key={hour} className="grid grid-cols-8 border-b border-input">
            {/* Time label */}
            <div className="border-r border-input">
              {renderTimeSlot(hour + 8)}
            </div>
            {/* Day columns */}
            {getDaysInWeek(currentDate).map((day) => (
              <div
                key={`${day.toDateString()}-${hour}`}
                className="min-h-[60px] border-r border-input last:border-r-0 hover:bg-cardHover cursor-pointer transition-colors p-1"
                onClick={() => setSelectedDate(day)}
              >
                {renderEventInSlot(day, hour + 8)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
