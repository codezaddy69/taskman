/**
 * TaskMan Week View Calendar Component
 * Displays a 7-column x 8-row grid of days for selected week
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WeekView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
    return date.getDate() === selectedDate?.getDate() &&
           date.getMonth() === selectedDate?.getMonth();
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
            {currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long' })}
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
      <div className="grid grid-cols-7 gap-2">
        {/* Day of Week Header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
            {day}
          </div>
        ))}

        {/* Calendar Grid - 7 columns x 8 rows */}
        {Array.from({ length: 7 }).map((_, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {Array.from({ length: 8 }).map((_, dayIndex) => {
              const dayIndexInWeek = weekIndex * 7 + dayIndex;
              const dayOfDate = getDaysInWeek(currentDate)[dayIndexInWeek];

              return (
                <div
                  key={dayIndexInWeek}
                  className={isSelected(dayOfDate) ? 'bg-primary/20 border-primary/40' : 'bg-card border-input hover:bg-cardHover'}
                  onClick={() => setSelectedDate(dayOfDate)}
                >
                  {renderDayNumber(dayIndexInWeek)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderDayNumber = (dayIndexInWeek: number) => {
    if (dayIndexInWeek < 7) {
      return (
        <div className="flex items-center justify-center h-full text-sm font-medium text-foreground">
          {dayIndexInWeek + 1}
        </div>
      );
    }
    return null;
  };
}
FILES4_EOF
