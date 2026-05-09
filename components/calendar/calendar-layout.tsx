/**
 * TaskMan Calendar Layout Component
 * Wrapper for calendar views with navigation
 */

'use client';

import { ReactNode } from 'react';

export interface CalendarLayoutProps {
  children: ReactNode;
  title: string;
}

export default function CalendarLayout({ children, title }: CalendarLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Layout Header */}
      <div className="border-b border-input bg-card px-6 py-4">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </div>

      {/* Calendar Content */}
      <div className="min-h-[calc(100vh-12rem)]">
        {children}
      </div>
    </div>
  );
}
