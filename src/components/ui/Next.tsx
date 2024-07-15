import React from 'react'; // Import React
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the props the component accepts
interface NextButtonProps {
    onClick?: () => void; // Optional onClick function
    className?: string; // Optional className string
    children?: React.ReactNode; // Optional children to render
    disabled?: boolean; // Optional disabled boolean
  }

// Adjust the function to accept props
export function NextButton({ onClick, className, children }: NextButtonProps) {
    return (
        <Button variant="outline" size="icon" onClick={onClick} className={className} >
          {children ? children : <ChevronRight className="h-4 w-4" />}
        </Button>
    );
}