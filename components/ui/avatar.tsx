import * as React from "react"
import { Avatar as RadixAvatar, AvatarFallback as RadixAvatarFallback } from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = RadixAvatar

const AvatarGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex -space-x-2", className)} {...props} />
)

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatarFallback>,
  React.ComponentPropsWithoutRef<typeof RadixAvatarFallback>
>(({ className, ...props }, ref) => (
  <RadixAvatarFallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  >
    <span className="text-xs font-medium text-muted-foreground">?</span>
  </RadixAvatarFallback>
))
AvatarFallback.displayName = "AvatarFallback"

const AvatarGroupItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative flex h-9 w-9 rounded-full", className)} {...props} />
)

export { Avatar, AvatarGroup, AvatarFallback, AvatarGroupItem }
