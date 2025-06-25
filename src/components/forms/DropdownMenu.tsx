"use client";
import { useState } from "react";
import { colorMap } from "../colors";

type DropdownMenuColorProps = {
  color: string;
  onColorChange?:
    | React.Dispatch<React.SetStateAction<string>>
    | ((color: string) => void);
};

export function DropdownMenuColor({
  color,
  onColorChange,
}: DropdownMenuColorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleColorChange = (color: string) => {
    setIsOpen(!isOpen);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        className={`text-white px-3 py-2 rounded`}
        style={{
          backgroundColor: colorMap[color]?.base || colorMap.green.base,
        }}
      >
        Cor do Post
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
        {isOpen &&
          Object.entries(colorMap).map(([key, value]) => (
            <div
              key={key}
              onClick={() => {
                handleColorChange(value.base);
              }}
              className={`bg-gradient-to-r ${value.from} ${value.to} p-4 text-white z-10`}
            >
              {key.toUpperCase()}
            </div>
          ))}
      </div>
    </div>
  );
}
