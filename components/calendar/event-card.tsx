/**
 * TaskMan Event Card Component
 * Displays a calendar event with details
 */

'use client';

import { Event } from '@/lib/calendar-types';

export interface EventCardProps {
  event: Event;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function EventCard({ event, isSelected, onSelect }: EventCardProps) {
  const startTime = new Date(event.start).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const endTime = new Date(event.end).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const getEventTypeColor = (type: string) => {
    const colors = {
      meeting: 'border-purple-500/40',
      appointment: 'border-blue-500/40',
      deadline: 'border-red-500/40',
      recurring: 'border-green-500/40',
      work_block: 'border-yellow-500/40',
      personal: 'border-pink-500/40',
      milestone: 'border-orange-500/40',
      holiday: 'border-cyan-500/40',
      travel: 'border-indigo-500/40',
    };
    return colors[type as keyof typeof colors] || 'border-gray-500/40';
  };

  return (
    <div
      className={`rounded-xl p-4 bg-card border border-input hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer ${isSelected ? 'ring-2 ring-primary' : ''}`}
      onClick={onSelect}
    >
      {/* Event Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full flex items-center justify-center text-xs font-semibold text-white ${getEventTypeColor(event.type).replace('border-', 'bg-')}`}>
            {event.type.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {startTime} - {endTime}
            </p>
          </div>
        </div>

        {isSelected && (
          <div className="bg-primary/20 border-primary/40 rounded px-2 py-1">
            <span className="text-xs font-semibold text-primary-foreground">
              Selected
            </span>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="space-y-3">
        {event.description && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">
              {event.description}
            </p>
          </div>
        )}

        {event.location && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Location</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {event.location}
              </span>
              {event.location_type === 'virtual' && (
                <span className="ml-2 text-xs font-semibold text-blue-500">
                  Virtual
                </span>
              )}
            </div>
          </div>
        )}

        {event.attendees && event.attendees.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Attendees</h4>
            <div className="flex flex-wrap gap-2">
              {event.attendees.slice(0, 3).map((attendee, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-foreground">
                    {attendee.charAt(0)}
                  </div>
                  {index === 2 && event.attendees.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                      +{event.attendees.length - 2}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {event.preparation_required && (
          <div>
            <div className="bg-primary/10 border-primary/30 rounded-lg p-3 mb-3">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span>⚡</span>
                <span>Preparation Required</span>
              </h4>
              <p className="text-xs text-primary-foreground">
                Review 3-key prep card before this event
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
FILES5_EOF
