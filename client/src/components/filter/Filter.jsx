import React from "react";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

function FilterComponent({ filters }) {
  const [openSections, setOpenSections] = useState([]);

  const handleToggleSection = (sectionId) => {
    if (openSections.includes(sectionId)) {
      setOpenSections(openSections.filter((id) => id !== sectionId));
    } else {
      setOpenSections([...openSections, sectionId]);
    }
  };

  return (
    <div>
      {filters.map((section) => (
        <div key={section.id} className="border-t border-gray-200 px-4 py-6">
          <h3 className="-mx-2 -my-3 flow-root">
            <button
              onClick={() => handleToggleSection(section.id)}
              className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
            >
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                {openSections.includes(section.id) ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </button>
          </h3>
          {openSections.includes(section.id) && (
            <div className="pt-6">
              <div className="space-y-6">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`filter-mobile-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      defaultChecked={option.checked}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
