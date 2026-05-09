/**
 * TaskMan Calendar Page
 * Main page with view switcher (Month, Week, Day)
 */

'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCalendarState } from '@/lib/calendar-state';
import { CalendarEvent } from '@/lib/calendar-types';
import MonthView from '@/components/calendar/month-view';
import WeekView from '@/components/calendar/week-view';
import DayView from '@/components/calendar/day-view';
import { Button } from '@/components/ui/button';
import EventDialog from '@/components/calendar/event-dialog';

export default function CalendarPage() {
  const { state, setCurrentView, addEvent, updateEvent, deleteEvent } = useCalendarState();
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);

  const handleCreateEvent = () => {
    setEditingEvent(null);
    setEventDialogOpen(true);
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setEditingEvent(event);
    setEventDialogOpen(true);
  };

  const handleSaveEvent = (eventData: Partial<CalendarEvent>) => {
    if (editingEvent) {
      // Update existing event
      updateEvent(editingEvent.id, eventData);
    } else {
      // Create new event
      const newEvent: CalendarEvent = {
        id: `event-${Date.now()}`,
        title: eventData.title || 'New Event',
        start: eventData.start || new Date(),
        end: eventData.end || new Date(new Date().getTime() + 60 * 60 * 1000),
        description: eventData.description,
        location: eventData.location,
        location_type: eventData.location_type,
        attendees: eventData.attendees,
        type: eventData.type || 'meeting',
        preparation_required: eventData.preparation_required,
        xp: eventData.xp,
      };
      addEvent(newEvent);
    }
    setEventDialogOpen(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    deleteEvent(eventId);
    setEventDialogOpen(false);
    setEditingEvent(null);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="border-b border-input bg-card px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Calendar
              </h1>
              <p className="text-sm text-muted-foreground">
                Never be unprepared again
              </p>
            </div>

            <Button onClick={handleCreateEvent} size="lg">
              <Plus className="h-5 w-5 mr-2" />
              New Event
            </Button>
          </div>
        </div>
      </div>

      {/* View Tabs */}
      <div className="border-b border-input bg-card sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentView('month')}
              className={`flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                state.currentView === 'month'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Month
            </button>

            <button
              onClick={() => setCurrentView('week')}
              className={`flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                state.currentView === 'week'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Week
            </button>

            <button
              onClick={() => setCurrentView('day')}
              className={`flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                state.currentView === 'day'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-6 max-w-7xl mx-auto">
        {state.currentView === 'month' && <MonthView />}
        {state.currentView === 'week' && <WeekView />}
        {state.currentView === 'day' && <DayView />}
      </div>

      {/* Event Dialog */}
      <EventDialog
        open={eventDialogOpen}
        onOpenChange={setEventDialogOpen}
        event={editingEvent}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}
