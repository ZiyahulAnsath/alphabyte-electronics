// AccordionItem.tsx
import React from 'react';

export interface AccordionItemProps {
  title: string;
  activeAccordion: string | null;
  toggleAccordion: (title: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  activeAccordion,
  toggleAccordion,
  children,
}:any) => {
  return (
    <div key={title}>
      <div
        className={`border rounded-lg ${
          activeAccordion === title ? 'border-primary' : 'border-light'
        }`}
      >
        <button
          onClick={() => toggleAccordion(title)}
          className="flex items-center justify-between w-full py-3 px-6 text-left focus:outline-none"
        >
          <span className="text-lg font-medium">{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform ${
              activeAccordion === title ? 'rotate-180' : 'rotate-180'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                activeAccordion === title
                  ? 'M5 8l5 5 5-5h-3V3H8v5H5z'
                  : 'M5 10l5-5 5 5h-3v4H8v-4H5z'
              }
              clipRule="evenodd"
            />
          </svg>
        </button>
        {activeAccordion === title && (
          <div className="px-6 py-4 bg-gray-100">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
