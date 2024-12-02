"use client";

import { Card } from "@/components/ui/card";
import { MoreVertical, Rocket } from "lucide-react";

export function ProgressChart() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Progress minggu ini</h2>
        <button>
          <MoreVertical className="text-muted-foreground" />
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--chart-4))"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="70.7"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--chart-5))"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="141.4"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#8B2635] rounded-full p-3">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <ProgressItem label="Photo" progress={80} color="bg-[#F4D03F]" />
        <ProgressItem
          label="Edit Template"
          progress={60}
          color="bg-[#F4D03F]"
        />
        <ProgressItem label="Print Photo" progress={40} color="bg-[#FF69B4]" />
      </div>
    </Card>
  );
}

function ProgressItem({
  label,
  progress,
  color,
}: {
  label: string;
  progress: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
