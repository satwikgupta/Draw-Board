import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";


interface RectangleProps {
    id: string;
    layer: RectangleLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Rectangle = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}: RectangleProps) =>{
    const { x, y, width, height, fill } = layer;
    return (
        <rect
            x={0}
            y={0}
            width={width}
            height={height}
            onPointerDown={(e) => onPointerDown(e, id)}
            fill={fill ? colorToCss(fill) : "#CCC"}
            stroke = {selectionColor || "transparent"}
            strokeWidth={1}
            className=" drop-shadow-md"
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`,
            }}
        />
    );
}