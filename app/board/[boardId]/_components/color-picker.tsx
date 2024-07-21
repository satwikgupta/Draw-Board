"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onChange}color={{r: 243,g: 63,b: 25,}}/>
      <ColorButton onClick={onChange}color={{r: 195,g: 255,b: 147,}}/>
      <ColorButton onClick={onChange}color={{r: 255,g: 112,b: 171,}}/>
      <ColorButton onClick={onChange}color={{r: 255,g: 219,b: 92,}}/>
      <ColorButton onClick={onChange}color={{r: 90,g: 188,b: 255,}}/>
      <ColorButton onClick={onChange}color={{r: 202,g: 244,b: 255,}}/>
      <ColorButton onClick={onChange}color={{r: 255,g: 255,b: 255,}}/>
      <ColorButton onClick={onChange}color={{r: 25,g: 25,b: 25,}}/>
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 flex items-center justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
