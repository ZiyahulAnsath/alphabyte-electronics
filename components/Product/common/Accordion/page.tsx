// Accordion.tsx
import React, { useState, ReactElement } from 'react';
import AccordionItem, { AccordionItemProps } from '../AccordionItem/page';

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[]; // Specify children prop type
}

const Accordion: React.FC<AccordionProps> = ({ children }: AccordionProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setActiveAccordion(activeAccordion === title ? null : title);
  };

  return (
    <div className="container mx-auto pt-20 sm:pt-10">
      <div className="grid grid-cols-1 gap-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              activeAccordion,
              toggleAccordion,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Accordion;
