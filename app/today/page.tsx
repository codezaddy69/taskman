/**
 * TaskMan Today Page
 * Main page showing today's events and tasks
 */

'use client';

import { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { useCalendarState } from '@/lib/calendar-state';
import { CalendarEvent } from '@/lib/calendar-types';
import TodayDashboard from '@/components/today/today-dashboard';
import EventDialog from '@/components/calendar/event-dialog';
import { Button } from '@/components/ui/button';

export default function TodayPage() {
  const { state, addEvent, updateEvent, deleteEvent } = useCalendarState();
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);

  const handleCreateEvent = () => {
    setEditingEvent(null);
    setEventDialogOpen(true);
  };

  const handleCreateTodo = () => {
    // In a real app, this would open a todo creation dialog
    console.log('Create todo');
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setEditingEvent(event);
    setEventDialogOpen(true);
  };

  const handleSaveEvent = (eventData: Partial<CalendarEvent>) => {
    if (editingEvent) {
      updateEvent(editingEvent.id, eventData);
    } else {
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

  // Filter events for today
  const today = new Date();
  const todayEvents = state.events.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate.toDateString() === today.toDateString();
  });

  return (
    <div>
      {/* Dashboard Content */}
      <div className="p-6 max-w-7xl mx-auto">
        <TodayDashboard
          events={todayEvents}
          onCreateEvent={handleCreateEvent}
          onCreateTodo={handleCreateTodo}
        />
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
