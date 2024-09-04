import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "w-full flex items-center justify-center rounded-2xl bg-[#171717] py-1 px-1",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "w-full flex items-center justify-center text-[12px] md:text-xs lg:text-sm font-medium whitespace-nowrap rounded-xl px-3 py-1 md:py-2.5 text-[#A3ADB2]  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#28292F] data-[state=active]:text-white data-[state=active]:shadow-custom-shadow relative overflow-hidden before:absolute before:inset-0 before:bg-custom-gradient before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-0 hover:text-white data-[state=active]:before:hidden",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "my-4 mr-4 text-[#969696] text-sm md:text-sm lg:text-base font-normal ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
