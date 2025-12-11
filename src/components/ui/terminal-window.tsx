import React from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export function TerminalWindow({
  title = "bash",
  children,
  className,
  ...props
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground overflow-hidden shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground font-mono select-none">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
