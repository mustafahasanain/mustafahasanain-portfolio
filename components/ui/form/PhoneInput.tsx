"use client";

import React from "react";
import PhoneInputWithCountry from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string | undefined) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, value, onChange, error, required, disabled }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium mb-2 text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div
          className={cn("phone-input-wrapper", error && "phone-input-error")}
        >
          <PhoneInputWithCountry
            international
            defaultCountry="IQ"
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cn(
              "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
              "bg-background text-foreground",
              "border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error &&
                "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/20"
            )}
          />
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}

        <style jsx global>{`
          .phone-input-wrapper .PhoneInput {
            display: flex;
            align-items: center;
          }

          .phone-input-wrapper .PhoneInputCountry {
            margin-right: 0.75rem;
            display: flex;
            align-items: center;
          }

          .phone-input-wrapper .PhoneInputCountrySelect {
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            border: 1px solid hsl(var(--border));
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
            cursor: pointer;
            transition: all 0.2s;
          }

          .phone-input-wrapper .PhoneInputCountrySelect:hover {
            background-color: hsl(var(--accent));
          }

          .phone-input-wrapper .PhoneInputCountrySelect:focus {
            outline: none;
            border-color: hsl(var(--primary));
            ring: 2px;
            ring-color: hsl(var(--primary) / 0.2);
          }

          .phone-input-wrapper .PhoneInputInput {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            color: hsl(var(--foreground));
            font-size: 1rem;
          }

          .phone-input-wrapper .PhoneInputInput::placeholder {
            color: hsl(var(--muted-foreground));
          }

          .phone-input-wrapper .PhoneInputCountryIcon {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.5rem;
          }
        `}</style>
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
