"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

export function TemplatePrint() {
  return (
    <Card className="relative overflow-hidden">
      {/* Left side - Add New Schedule */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] p-8 bg-white z-10">
        <div className="space-y-4">
          <div className="text-6xl text-[#8B2635]">
            <Plus />
          </div>
          <h3 className="text-xl font-semibold">Add New Schedule</h3>
          <p className="text-muted-foreground">
            Hurry up and add your schedule now!
          </p>
          <Button className="bg-[#8B2635] hover:bg-[#7A1F2D] text-white">
            Create Schedule
          </Button>
        </div>
      </div>

      {/* Right side - Template Grid */}
      <div className="ml-[300px] bg-[#E5E9E3] min-h-[300px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Template Print</h2>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm font-medium">2+</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={`https://source.unsplash.com/random/300x400?template&sig=${i}`}
                alt={`Template ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
