'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Calendar, Plus, TrendingUp, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Zap, label: 'Today' },
  { href: '/calendar', icon: Calendar, label: 'Calendar' },
  { href: '/tasks', icon: Plus, label: 'Tasks' },
  { href: '/levelup', icon: TrendingUp, label: 'Level Up' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-20 bg-card border-r border-input flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <Zap className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group relative',
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
              title={item.label}
            >
              <Icon className="h-5 w-5" />
              {/* Tooltip */}
              <span className="absolute left-14 bg-popover text-popover-foreground px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User Avatar */}
      <div className="mt-8">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:scale-105 transition-transform">
          U
        </div>
      </div>
    </aside>
  );
}
