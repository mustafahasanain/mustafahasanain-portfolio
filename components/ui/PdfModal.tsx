"use client";

import { useEffect } from "react";
import { X, Download, Maximize2 } from "lucide-react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PdfModal = ({ isOpen, onClose, pdfUrl }: PdfModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-6xl h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            Mustafa Hasanain - CV
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Mustafa_Hasanain_CV.pdf"
              className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              title="Download CV"
            >
              <Download className="text-xl text-neutral-700 dark:text-neutral-300" />
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              title="Open in new tab"
            >
              <Maximize2 className="text-xl text-neutral-700 dark:text-neutral-300" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              title="Close"
            >
              <X className="text-2xl text-neutral-700 dark:text-neutral-300" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
            aria-label="CV PDF Viewer"
          >
            <embed
              src={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
            />
          </object>
        </div>

        {/* Footer with instructions */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            Press <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded">ESC</kbd> to close or click outside
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
