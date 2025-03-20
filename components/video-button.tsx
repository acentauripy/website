"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface VideoButtonProps {
  embedUrl: string;
}

export function VideoButton({ embedUrl }: VideoButtonProps) {
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => window.location.href = embedUrl}
    >
      Ver entrevista
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}