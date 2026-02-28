import * as React from "react"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const AvatarGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex -space-x-2", className)} {...props} />
)

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Avatar.Image>,
  React.ComponentPropsWithoutRef<typeof Avatar.Image>
>(({ className, ...props }, ref) => (
  <Avatar.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = "Avatar.Image"

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Avatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof Avatar.Fallback>
>(({ className, ...props }, ref) => (
  <Avatar.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  >
    <span className="text-xs font-medium text-muted-foreground">?</span>
  </Avatar.Fallback>
))
AvatarFallback.displayName = "Avatar.Fallback"

const AvatarGroupItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative flex h-9 w-9 rounded-full", className)} {...props} />
)

export { Avatar, AvatarGroup, AvatarImage, AvatarFallback, AvatarGroupItem }
