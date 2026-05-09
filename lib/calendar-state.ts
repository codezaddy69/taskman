/**
 * TaskMan Calendar State Management
 * React hooks for calendar state with localStorage persistence
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

const STORAGE_KEY = 'taskman-calendar-events';

// Helper to safely convert date strings to Date objects
const ensureDateObjects = (events: CalendarEvent[]): CalendarEvent[] => {
  return events.map(event => ({
    ...event,
    start: event.start instanceof Date ? event.start : new Date(event.start),
    end: event.end instanceof Date ? event.end : new Date(event.end),
  }));
};

// Helper to convert Date objects to strings for localStorage
const prepareForStorage = (events: CalendarEvent[]): any[] => {
  return events.map(event => ({
    ...event,
    start: (event.start instanceof Date ? event.start : new Date(event.start)).toISOString(),
    end: (event.end instanceof Date ? event.end : new Date(event.end)).toISOString(),
  }));
};

export const useCalendarState = () => {
  const [state, setState] = useState<CalendarState>({
    currentDate: new Date(),
    selectedDate: new Date(),
    currentView: 'month',
    events: [],
    selectedEvent: null,
  });

  // Load events from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsedEvents = JSON.parse(stored);
          setState(prev => ({
            ...prev,
            events: ensureDateObjects(parsedEvents),
          }));
        }
      } catch (error) {
        console.error('Failed to load events from localStorage:', error);
      }
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && state.events.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prepareForStorage(state.events)));
      } catch (error) {
        console.error('Failed to save events to localStorage:', error);
      }
    }
  }, [state.events]);

  // Current Date Management
  const setCurrentDate = useCallback((date: Date) => {
    setState(prev => ({ ...prev, currentDate: date }));
  }, []);

  const setSelectedDate = useCallback((date: Date | null) => {
    setState(prev => ({ ...prev, selectedDate: date }));
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
      events: [...prev.events, event],
    }));
  }, []);

  const updateEvent = useCallback((eventId: string, updates: Partial<CalendarEvent>) => {
    setState(prev => ({
      ...prev,
      events: prev.events.map(event =>
        event.id === eventId ? { ...event, ...updates } : event
      ),
    }));
  }, []);

  const deleteEvent = useCallback((eventId: string) => {
    setState(prev => ({
      ...prev,
      events: prev.events.filter(event => event.id !== eventId),
    }));
  }, []);

  // Selected Event Management
  const setSelectedEvent = useCallback((event: CalendarEvent | null) => {
    setState(prev => ({ ...prev, selectedEvent: event }));
  }, []);

  // Reset to Today
  const resetToToday = useCallback(() => {
    const today = new Date();
    setState(prev => ({
      ...prev,
      currentDate: today,
      selectedDate: today,
    }));
  }, []);

  // Clear all events (for testing/reset)
  const clearAllEvents = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setState(prev => ({ ...prev, events: [] }));
  }, []);

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
    clearAllEvents,
  };
};
