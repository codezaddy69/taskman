/**
 * TaskMan Month View Calendar Component
 * Displays a 7-column x 5-6 row grid of days for selected month
 */

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MonthView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = Math.floor((lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24));
    return daysInMonth;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const days = [];
    // Empty cells for days before first of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={'empty-' + i} className="h-24 border border-input" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<div key={day} className="h-24 border border-input bg-card hover:bg-cardHover" />);
    }

    // Empty cells for days after last day
    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (startingDayOfWeek + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={'empty-end-' + i} className="h-24 border border-input" />);
    }

    return days;
  };

  const renderDayNumber = (day: number) => {
    return (
      <div className="flex items-center justify-center h-full text-sm font-medium text-foreground">
        {day}
      </div>
    );
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate?.getDate() &&
           date.getMonth() === selectedDate?.getMonth() &&
           date.getFullYear() === selectedDate?.getFullYear();
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

        <h2 className="text-lg font-bold text-foreground">
          {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </h2>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('next')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
            {day}
          </div>
        ))}

        {renderCalendarGrid()}
      </div>
    </div>
  );
}
