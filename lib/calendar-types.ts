/**
 * TaskMan Calendar Types
 * Type definitions for calendar components
 */

'use client';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date | string;
  end: Date | string;
  location?: string;
  location_type?: 'physical' | 'virtual' | 'hybrid';
  attendees?: string[];
  type: 'meeting' | 'appointment' | 'deadline' | 'recurring' | 'work_block' | 'personal' | 'milestone' | 'holiday' | 'travel';
  preparation_required?: boolean;
  xp?: number;
}

export interface Event extends CalendarEvent {
  // EventCard uses this alias
}
