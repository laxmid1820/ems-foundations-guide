import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  className?: string;
}

export function VideoPlaceholder({ title, duration = "2:00", className }: VideoPlaceholderProps) {
  return (
    <div 
      className={`relative w-full aspect-video rounded-lg bg-muted overflow-hidden ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
        {/* Play button */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
          <Play className="h-7 w-7 ml-1" />
        </div>
        
        {/* Title and duration */}
        <div className="text-center">
          <p className="font-medium text-foreground mb-1">{title}</p>
          <p className="text-sm text-muted-foreground">Video • {duration}</p>
        </div>
      </div>
      
      {/* Coming soon badge */}
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 text-xs font-medium text-muted-foreground">
        Coming Soon
      </div>
    </div>
  );
}
