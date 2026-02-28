/**
 * TaskMan Day View Calendar Component
 * Displays 24-hour timeline with time slots (30-min increments)
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DayView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const renderTimeSlot = (hour: number) => {
    return (
      <div className="border-l border-r border-t border-input h-12 flex items-center justify-between px-2 hover:bg-cardHover cursor-pointer transition-colors">
        <span className="text-xs font-medium text-muted-foreground">
          {hour.toString().padStart(2, '0')}:00
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {(hour * 100 + 100).toString().padStart(2, '0')}:00
        </span>
      </div>
    );
  };

  const renderEventInSlot = (hour: number) => {
    const hasEvent = (hour >= 9 && hour < 12);
    if (!hasEvent) return null;

    return (
      <div className="bg-primary/20 border-primary/40 rounded-lg p-3 absolute inset-0 top-16 left-0 right-0 z-10">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-white">
            Team Standup
          </span>
          <Badge variant="secondary" className="ml-auto">
            Meeting
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Date Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDay('prev')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <h2 className="text-xl font-bold text-foreground">
          {currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long' })}
        </h2>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDay('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Today's Events */}
      <div className="bg-card rounded-xl border border-input p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Today's Events
        </h3>

        {/* Time Slots */}
        <div className="space-y-2">
          {Array.from({ length: 24 }, (_, i) => renderTimeSlot(i))}
        </div>
      </div>

      {/* Quick Add Event Button */}
      <Button className="w-full" size="lg">
        <Plus className="h-5 w-5 mr-2" />
        Add Event
      </Button>
    </div>
  );
}
FILES2_EOF
