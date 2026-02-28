/**
 * TaskMan Calendar State Management
 * React hooks for calendar state
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { CalendarEvent } from './calendar-types';

export interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  currentView: 'month' | 'week' | 'day';
  events: CalendarEvent[];
  selectedEvent: CalendarEvent | null;
}

export const useCalendarState = () => {
  const [state, setState] = useState<CalendarState>({
    currentDate: new Date(),
    selectedDate: null,
    currentView: 'month',
    events: [],
    selectedEvent: null,
  });

  // Current Date Management
  const setCurrentDate = useCallback((date: Date) => {
    setState(prev => ({ ...prev, currentDate: date, selectedDate: date }));
  }, []);

  // View Management
  const setCurrentView = useCallback((view: 'month' | 'week' | 'day') => {
    setState(prev => ({ ...prev, currentView: view }));
  }, []);

  // Event Management
  const setEvents = useCallback((events: CalendarEvent[]) => {
    setState(prev => ({ ...prev, events }));
  }, []);

  const addEvent = useCallback((event: CalendarEvent) => {
    setState(prev => ({
      ...prev,
      events: [...prev.events, event]
    }));
  }, []);

  const updateEvent = useCallback((eventId: string, updates: Partial<CalendarEvent>) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(event =>
        event.id === eventId ? { ...event, ...updates } : event
      )
    }));
  }, []);

  const deleteEvent = useCallback((eventId: string) => {
    setState(prev => ({
      ...prev,
      events: prev.events.filter(event => event.id !== eventId)
    }));
  }, []);

  // Selected Event Management
  const setSelectedEvent = useCallback((event: CalendarEvent | null) => {
    setState(prev => ({ ...prev, selectedEvent: event }));
  }, []);

  // Reset to Today
  const resetToToday = useCallback(() => {
    const today = new Date();
    setState({
      currentDate: today,
      selectedDate: today,
      currentView: 'day',
      events: state.events.filter(event => {
        const eventDate = new Date(event.start);
        return eventDate.toDateString() === today.toDateString();
      })
    });
  }, [state.events]);

  return {
    state,
    setCurrentDate,
    setSelectedDate,
    setCurrentView,
    setEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    setSelectedEvent,
    resetToToday,
  };
};
FILES6_EOF
