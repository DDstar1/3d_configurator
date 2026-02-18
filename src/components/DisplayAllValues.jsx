import { useState } from "react";
import { useDoorStore } from "@/store/door_store";

export function DisplayAllValues() {
  const door = useDoorStore((s) => s.door); // subscribe to the whole door object
  const [isOpen, setIsOpen] = useState(false); // state for dropdown

  return (
    <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 text-sm">
      {/* Header / Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-semibold text-gray-700 mb-2"
      >
        <span>Current Door State</span>
        <span className="transform transition-transform duration-200">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="space-y-2">
          {Object.entries(door).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between border-b border-gray-200 py-1"
            >
              <span className="text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="font-medium text-gray-900">{String(value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
