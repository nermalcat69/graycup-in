import * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        data-slot="textarea"
        className={cn(
          "bg-white placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex min-h-[80px] w-full min-w-0 rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-md resize-vertical",
          "hover:border-neutral-300 focus:border-neutral-300",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
