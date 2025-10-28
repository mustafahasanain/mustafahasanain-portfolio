import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="flex items-start space-x-3">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "mt-1 h-4 w-4 rounded border transition-colors duration-200 cursor-pointer",
              "border-border bg-background text-primary",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500",
              className
            )}
            {...props}
          />
          <label className="text-sm text-muted-foreground cursor-pointer flex-1">
            {label}
          </label>
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
