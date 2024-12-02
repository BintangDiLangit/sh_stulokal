"use client";

import { Card } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

export function ScheduleTimeline() {
  const hours = Array.from({ length: 8 }, (_, i) => i + 10);

  return (
    <Card className="p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Upcoming Schedule</h2>
        <button>
          <MoreVertical className="text-muted-foreground" />
        </button>
      </div>

      <div className="relative min-w-[800px]">
        <div className="flex justify-between mb-4">
          {hours.map((hour) => (
            <div key={hour} className="text-sm text-muted-foreground">
              {hour}:00
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(8,1fr)] gap-4 relative min-h-[120px]">
          <div className="absolute inset-0 grid grid-cols-[repeat(8,1fr)]">
            {hours.map((hour) => (
              <div key={hour} className="border-l border-gray-200 h-full" />
            ))}
          </div>

          <TimelineEvent
            start={2}
            duration={2}
            title="Lorem Ipsum"
            description="Lorem ipsum"
            color="bg-[#8B2635]"
          />

          <TimelineEvent
            start={4}
            duration={2}
            title="Lorem Ipsum"
            description="Lorem ipsum"
            color="bg-[#4A90E2]"
          />

          <TimelineEvent
            start={6}
            duration={2}
            title="Lorem Ipsum"
            description="Lorem ipsum"
            color="bg-[#F4D03F]"
          />
        </div>
      </div>
    </Card>
  );
}

function TimelineEvent({
  start,
  duration,
  title,
  description,
  color,
}: {
  start: number;
  duration: number;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div
      className="absolute p-2 rounded-lg h-[80px]"
      style={{
        gridColumn: `${start} / span ${duration}`,
        backgroundColor: color,
        opacity: 0.1,
        top: "20px",
      }}
    >
      <div
        className={`h-full border-l-2 pl-2 ${color.replace("bg-", "border-")}`}
      >
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
