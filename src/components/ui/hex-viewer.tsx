import React from "react";
import { cn } from "@/lib/utils";

interface HexViewerProps {
  data: string;
  className?: string;
}

export function HexViewer({ data, className }: HexViewerProps) {
  // Convert string to hex representation
  const getHex = (str: string) => {
    const hex = [];
    for (let i = 0; i < str.length; i++) {
      hex.push(str.charCodeAt(i).toString(16).padStart(2, "0"));
    }
    return hex;
  };

  const hexData = getHex(data);
  const rows = [];
  const bytesPerRow = 16;

  for (let i = 0; i < hexData.length; i += bytesPerRow) {
    const rowHex = hexData.slice(i, i + bytesPerRow);
    const rowText = data
      .slice(i, i + bytesPerRow)
      .replace(/[^\x20-\x7E]/g, ".");

    // Pad the last row if needed
    const paddedHex = [...rowHex];
    while (paddedHex.length < bytesPerRow) {
      paddedHex.push("  ");
    }

    rows.push({
      offset: i.toString(16).padStart(8, "0"),
      hex: paddedHex,
      text: rowText,
    });
  }

  return (
    <div className={cn("font-mono text-xs overflow-x-auto", className)}>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="flex gap-4 hover:bg-muted/50 py-0.5 px-2 rounded"
        >
          <span className="text-muted-foreground select-none">
            {row.offset}
          </span>
          <div className="flex gap-2">
            <div className="flex gap-1 w-[19rem]">
              {row.hex.slice(0, 8).map((h, i) => (
                <span
                  key={i}
                  className={h === "  " ? "invisible" : "text-primary/80"}
                >
                  {h}
                </span>
              ))}
              <span className="w-2" />
              {row.hex.slice(8).map((h, i) => (
                <span
                  key={i}
                  className={h === "  " ? "invisible" : "text-primary/80"}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="border-l border-border pl-4 text-foreground/80 whitespace-pre">
            {row.text}
          </div>
        </div>
      ))}
    </div>
  );
}
