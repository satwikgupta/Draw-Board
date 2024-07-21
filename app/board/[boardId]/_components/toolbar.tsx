import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pen,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";


interface ToolbarProps {
  canvasState: CanvasState
  setCanvasState: (newState: CanvasState) => void;
  undo: ()=> void;
  redo: ()=> void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}:ToolbarProps) => {
  return (
    <div className="absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4">
      <div className=" bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">

        {/* Select Toolbar */}
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {
            setCanvasState({mode: CanvasMode.None})
            
        }}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Resizing ||
            canvasState.mode === CanvasMode.Pressing
          }
        />

        {/* Text Toolbar */}
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {
            setCanvasState({
            mode: CanvasMode.Inserting,
            layerType: LayerType.Text
          })}
        }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />

        {/* Sticky Note Toolbar  */}
        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            layerType: LayerType.Note
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />

        {/* Rectangle Toolbar */}
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            layerType: LayerType.Rectangle
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />

        {/* Ellipse toolbar */}
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            layerType: LayerType.Ellipse
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />

        {/* Pen Toolbar */}
        <ToolButton
          label="Pen"
          icon={Pen}
          onClick={() => setCanvasState({
            mode: CanvasMode.Pencil
          })}
          isActive={
            canvasState.mode === CanvasMode.Pencil
          }
        />
      </div>

      <div className=" bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">

        {/* Undo Toolbar */}
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={undo}
          isDisabled={!canUndo}
        />

        {/* Redo Toolbar */}
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] left-2 -translate-y-[50%] flex shadow-md rounded-md flex-col gap-y-4 bg-white h-[360px] w-[52px]" />
  );
};
