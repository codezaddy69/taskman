/**
 * TaskMan Month View Calendar Component
 * Displays a 7-column x 5-6 row grid of days for selected month
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarEvent } from '@/lib/calendar-types';

export default function MonthView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events] = useState<CalendarEvent[]>([]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const isSelected = (date: Date) => {
    return selectedDate
      ? date.toDateString() === selectedDate.toDateString()
      : date.toDateString() === new Date().toDateString();
  };

  const isToday = (date: Date) => {
    return date.toDateString() === new Date().toDateString();
  };

  const renderDayCell = (day: number | null) => {
    if (day === null) {
      return <div className="h-28 border border-input bg-muted/30" />;
    }

    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const selected = isSelected(date);
    const today = isToday(date);

    return (
      <div
        className={`
          h-28 border border-input p-2 cursor-pointer transition-colors
          ${selected ? 'bg-primary/20 border-primary/40' : 'bg-card hover:bg-cardHover'}
        `}
        onClick={() => setSelectedDate(date)}
      >
        <div
          className={`
            flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium
            ${today && !selected ? 'bg-primary text-primary-foreground' : ''}
            ${selected ? 'bg-primary text-primary-foreground' : ''}
            ${!today && !selected ? 'text-foreground' : ''}
          `}
        >
          {day}
        </div>

        {/* Event Indicators */}
        <div className="mt-1 space-y-1">
          {/* Sample event - in production, render actual events for this day */}
          {date.toDateString() === new Date().toDateString() && (
            <div className="flex items-center space-x-1 text-xs">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground truncate">Team Standup</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const cells = [];

    // Empty cells for days before first of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      cells.push(renderDayCell(null));
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(renderDayCell(day));
    }

    // Empty cells for days after last day
    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (startingDayOfWeek + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      cells.push(renderDayCell(null));
    }

    return cells;
  };

  return (
    <div className="space-y-4">
      {/* Month Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('prev')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-primary-foreground" />
          <h2 className="text-xl font-bold text-foreground">
            {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-card rounded-xl border border-input overflow-hidden">
        {/* Day Header */}
        <div className="grid grid-cols-7 border-b border-input bg-muted/30">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-3">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {renderCalendarGrid()}
        </div>
      </div>
    </div>
  );
}
