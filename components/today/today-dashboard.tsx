/**
 * TaskMan Today Dashboard
 * Shows today's events, tasks, and timeline
 */

'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, Circle, Clock, TrendingUp, Plus, Flame, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarEvent } from '@/lib/calendar-types';

interface TodoItem {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
  dueDate?: Date;
  category: 'mind' | 'health' | 'spirit' | 'career' | 'home';
  xp?: number;
}

interface TodayDashboardProps {
  events?: CalendarEvent[];
  todos?: TodoItem[];
  onCreateEvent?: () => void;
  onCreateTodo?: () => void;
}

export default function TodayDashboard({
  events = [],
  todos = [],
  onCreateEvent,
  onCreateTodo,
}: TodayDashboardProps) {
  const [completedTodos, setCompletedTodos] = useState<Set<string>>(new Set());

  // Sample data for demo
  const sampleEvents: CalendarEvent[] = events.length > 0 ? events : [
    {
      id: '1',
      title: 'Team Standup',
      start: new Date(new Date().setHours(9, 0, 0, 0)),
      end: new Date(new Date().setHours(9, 30, 0, 0)),
      type: 'meeting',
      attendees: ['Alice', 'Bob', 'Charlie'],
      location: 'Zoom',
      location_type: 'virtual',
    },
    {
      id: '2',
      title: 'Design Review',
      start: new Date(new Date().setHours(11, 0, 0, 0)),
      end: new Date(new Date().setHours(12, 0, 0, 0)),
      type: 'appointment',
      attendees: ['Sarah', 'Mike'],
      location: 'Conference Room A',
      location_type: 'physical',
    },
    {
      id: '3',
      title: 'Product Sync',
      start: new Date(new Date().setHours(14, 0, 0, 0)),
      end: new Date(new Date().setHours(15, 0, 0, 0)),
      type: 'meeting',
      attendees: ['Product Team'],
      location: 'Meeting Room B',
      location_type: 'physical',
    },
  ];

  const sampleTodos: TodoItem[] = todos.length > 0 ? todos : [
    {
      id: '1',
      title: 'Review Q2 roadmap',
      description: 'Prepare notes for the upcoming planning session',
      completed: false,
      priority: 'high',
      category: 'career',
      xp: 25,
    },
    {
      id: '2',
      title: 'Email client about deliverables',
      description: 'Send update on project timeline',
      completed: false,
      priority: 'medium',
      category: 'career',
      xp: 15,
    },
    {
      id: '3',
      title: '30-minute meditation',
      completed: false,
      priority: 'medium',
      category: 'mind',
      xp: 20,
    },
    {
      id: '4',
      title: 'Gym workout',
      completed: false,
      priority: 'medium',
      category: 'health',
      xp: 30,
    },
    {
      id: '5',
      title: 'Call mom',
      completed: false,
      priority: 'low',
      category: 'spirit',
      xp: 10,
    },
  ];

  const priorityColors = {
    low: 'bg-slate-500',
    medium: 'bg-yellow-500',
    high: 'bg-orange-500',
    critical: 'bg-red-500',
  };

  const categoryColors = {
    mind: 'bg-purple-500',
    health: 'bg-green-500',
    spirit: 'bg-pink-500',
    career: 'bg-blue-500',
    home: 'bg-amber-500',
  };

  const categoryLabels = {
    mind: 'Mind',
    health: 'Health',
    spirit: 'Spirit',
    career: 'Career',
    home: 'Home',
  };

  const handleTodoToggle = (todoId: string) => {
    setCompletedTodos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(todoId)) {
        newSet.delete(todoId);
      } else {
        newSet.add(todoId);
      }
      return newSet;
    });
  };

  const getTodayStats = () => {
    const now = new Date();
    const todayEvents = sampleEvents.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === now.toDateString();
    });

    const pendingTodos = sampleTodos.filter(todo => !completedTodos.has(todo.id));
    const completedTodosCount = sampleTodos.filter(todo => completedTodos.has(todo.id)).length;
    const totalXP = sampleTodos.reduce((sum, todo) => sum + (todo.xp || 0), 0);
    const earnedXP = sampleTodos
      .filter(todo => completedTodos.has(todo.id))
      .reduce((sum, todo) => sum + (todo.xp || 0), 0);

    return {
      eventsToday: todayEvents.length,
      pendingTodos: pendingTodos.length,
      completedTodos: completedTodosCount,
      totalXP,
      earnedXP,
      streak: 7, // Sample streak
    };
  };

  const stats = getTodayStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Today
          </h1>
          <p className="text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex space-x-2">
          {onCreateEvent && (
            <Button variant="outline" onClick={onCreateEvent}>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          )}
          {onCreateTodo && (
            <Button onClick={onCreateTodo}>
              <Plus className="h-4 w-4 mr-2" />
              Add Todo
            </Button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.eventsToday}</p>
              <p className="text-sm text-muted-foreground">Events Today</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.pendingTodos}</p>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.earnedXP} / {stats.totalXP}</p>
              <p className="text-sm text-muted-foreground">XP Today</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.streak}</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline Column */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Today's Timeline</span>
              </h2>
              <Badge variant="secondary">{sampleEvents.length} events</Badge>
            </div>

            <div className="space-y-4">
              {sampleEvents.map((event) => {
                const startDate = new Date(event.start);
                const endDate = new Date(event.end);
                const timeRange = `${startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} - ${endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;

                return (
                  <div
                    key={event.id}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-input hover:bg-cardHover cursor-pointer transition-colors"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-0.5 h-12 bg-border" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-foreground">{event.title}</h3>
                        <span className="text-xs text-muted-foreground">{timeRange}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        {event.location && <span>{event.location}</span>}
                        {event.attendees && event.attendees.length > 0 && (
                          <span>{event.attendees.length} attendees</span>
                        )}
                      </div>
                      {event.description && (
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Tasks Column */}
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Tasks</span>
              </h2>
              <Badge variant="secondary">{sampleTodos.length} tasks</Badge>
            </div>

            <div className="space-y-3">
              {sampleTodos.map((todo) => {
                const isCompleted = completedTodos.has(todo.id);

                return (
                  <div
                    key={todo.id}
                    className={`
                      p-3 rounded-lg border transition-all cursor-pointer
                      ${isCompleted ? 'bg-muted/50 opacity-60' : 'bg-card hover:bg-cardHover'}
                    `}
                    onClick={() => handleTodoToggle(todo.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <button
                        className="mt-0.5 flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTodoToggle(todo.id);
                        }}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className={`text-sm font-medium ${isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                            {todo.title}
                          </h3>
                          {todo.xp && (
                            <Badge variant="secondary" className="text-xs flex-shrink-0">
                              +{todo.xp} XP
                            </Badge>
                          )}
                        </div>
                        {todo.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {todo.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-2 mt-2">
                          <div className={`w-2 h-2 rounded-full ${priorityColors[todo.priority]}`} />
                          <span className="text-xs text-muted-foreground capitalize">{todo.priority}</span>
                          <div className={`w-2 h-2 rounded-full ${categoryColors[todo.category]}`} />
                          <span className="text-xs text-muted-foreground">{categoryLabels[todo.category]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
