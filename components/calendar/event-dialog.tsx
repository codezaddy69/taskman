/**
 * TaskMan Event Dialog Component
 * Modal for creating and editing calendar events
 */

'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Tag, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarEvent } from '@/lib/calendar-types';

interface EventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event?: CalendarEvent | null;
  onSave: (event: Partial<CalendarEvent>) => void;
  onDelete?: (eventId: string) => void;
}

export default function EventDialog({
  open,
  onOpenChange,
  event,
  onSave,
  onDelete,
}: EventDialogProps) {
  const [formData, setFormData] = useState<Partial<CalendarEvent>>({
    title: '',
    description: '',
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour from now
    location: '',
    type: 'meeting' as CalendarEvent['type'],
    attendees: [],
    location_type: 'physical',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (event) {
      setFormData({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      });
    } else {
      setFormData({
        title: '',
        description: '',
        start: new Date(),
        end: new Date(new Date().getTime() + 60 * 60 * 1000),
        location: '',
        type: 'meeting',
        attendees: [],
        location_type: 'physical',
      });
    }
    setErrors({});
  }, [event, open]);

  const eventTypes: { value: CalendarEvent['type']; label: string; color: string }[] = [
    { value: 'meeting', label: 'Meeting', color: 'bg-blue-500' },
    { value: 'appointment', label: 'Appointment', color: 'bg-green-500' },
    { value: 'deadline', label: 'Deadline', color: 'bg-red-500' },
    { value: 'recurring', label: 'Recurring', color: 'bg-purple-500' },
    { value: 'work_block', label: 'Work Block', color: 'bg-yellow-500' },
    { value: 'personal', label: 'Personal', color: 'bg-pink-500' },
    { value: 'milestone', label: 'Milestone', color: 'bg-indigo-500' },
    { value: 'holiday', label: 'Holiday', color: 'bg-orange-500' },
    { value: 'travel', label: 'Travel', color: 'bg-teal-500' },
  ];

  const locationTypes = [
    { value: 'physical', label: 'In Person' },
    { value: 'virtual', label: 'Online' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.start) {
      newErrors.start = 'Start time is required';
    }

    if (!formData.end) {
      newErrors.end = 'End time is required';
    }

    if (formData.start && formData.end && new Date(formData.end) <= new Date(formData.start)) {
      newErrors.end = 'End time must be after start time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSave(formData);
    onOpenChange(false);
  };

  const handleDelete = () => {
    if (event?.id && onDelete) {
      onDelete(event.id);
      onOpenChange(false);
    }
  };

  const handleInputChange = (field: keyof CalendarEvent, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const selectedEventType = eventTypes.find(t => t.value === formData.type);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{event ? 'Edit Event' : 'Create Event'}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            {event ? 'Update event details' : 'Add a new event to your calendar'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Event title"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Start</span>
              </label>
              <Input
                type="datetime-local"
                value={formData.start ? new Date(formData.start).toISOString().slice(0, 16) : ''}
                onChange={(e) => handleInputChange('start', new Date(e.target.value))}
                className={errors.start ? 'border-red-500' : ''}
              />
              {errors.start && (
                <p className="text-sm text-red-500">{errors.start}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>End</span>
              </label>
              <Input
                type="datetime-local"
                value={formData.end ? new Date(formData.end).toISOString().slice(0, 16) : ''}
                onChange={(e) => handleInputChange('end', new Date(e.target.value))}
                className={errors.end ? 'border-red-500' : ''}
              />
              {errors.end && (
                <p className="text-sm text-red-500">{errors.end}</p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                value={formData.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Location name or address"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="justify-between">
                    {locationTypes.find(t => t.value === formData.location_type)?.label || 'Select type'}
                    <MoreHorizontal className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {locationTypes.map((type) => (
                    <DropdownMenuItem
                      key={type.value}
                      onClick={() => handleInputChange('location_type', type.value)}
                    >
                      {type.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Event Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>Event Type</span>
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${selectedEventType?.color}`} />
                    <span>{selectedEventType?.label || 'Select type'}</span>
                  </div>
                  <MoreHorizontal className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {eventTypes.map((type) => (
                  <DropdownMenuItem
                    key={type.value}
                    onClick={() => handleInputChange('type', type.value)}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-3 h-3 rounded-full ${type.color}`} />
                    <span>{type.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Add event details..."
              className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          {/* Attendees */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Attendees</span>
            </label>
            <Input
              value={formData.attendees?.join(', ') || ''}
              onChange={(e) => handleInputChange('attendees', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
              placeholder="Enter names separated by commas"
            />
          </div>

          {/* Footer */}
          <DialogFooter className="flex items-center justify-between">
            <div>
              {event && onDelete && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              )}
            </div>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {event ? 'Save Changes' : 'Create Event'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
