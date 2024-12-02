"use client";

import { HomeIcon, BarChart2, FolderIcon, Settings, Image } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-[#8B2635] text-white p-6 flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">.stulokal</h1>
      </div>

      <nav className="space-y-6">
        <SidebarItem icon={<HomeIcon />} label="Home Page" href="/" active />
        <SidebarItem icon={<Image />} label="Studio" href="/studio" />
        <SidebarItem
          icon={<BarChart2 />}
          label="Statistik"
          href="/statistics"
        />
        <SidebarItem icon={<FolderIcon />} label="Storage" href="/storage" />
        <SidebarItem icon={<Settings />} label="Settings" href="/settings" />
      </nav>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
        ${active ? "bg-white/10" : "hover:bg-white/5"}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
