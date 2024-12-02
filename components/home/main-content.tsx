"use client";

import { BellIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { ScheduleTimeline } from "./schedule-timeline";
import { ProgressChart } from "./progress-chart";
import { TemplatePrint } from "./template-print";

export function MainContent() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold mb-1">Welcome Back, Agus</h1>
          <p className="text-muted-foreground">Monday, November 09 2024</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search.."
              className="pl-10 w-full sm:w-64 bg-gray-50"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              <Button variant="ghost" size="icon" className="text-gray-500">
                <BellIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-8">
          <TemplatePrint />
          <ScheduleTimeline />
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <Calendar
              mode="single"
              className="rounded-md"
              classNames={{
                head_cell: "text-muted-foreground font-normal",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                day_selected:
                  "bg-[#8B2635] text-white hover:bg-[#7A1F2D] hover:text-white focus:bg-[#8B2635] focus:text-white",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
              }}
            />
          </Card>

          <ProgressChart />
        </div>
      </div>
    </div>
  );
}
