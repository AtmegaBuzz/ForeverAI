import { Button } from "@/components/ui/button";
import React from "react";
 // Ensure React is imported if using JSX.
interface SendButtonComponentProps {
    onClick: () => void; // Use () => Promise<void> if the handler is async
  }
// Renamed and made exportable
export function SendButtonComponent({ onClick }: SendButtonComponentProps) {
    return (
      <Button variant="outline" size="icon" onClick={onClick}>
        <SendIcon className="h-4 w-4" />
      </Button>
    );
  }
// Supporting component, now correctly exported
export function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

// Supporting component, already correctly exported
export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}