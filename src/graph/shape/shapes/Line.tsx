import React from "react";
import { Line as SkiaLine } from "@shopify/react-native-skia";
import { AddSVGProps } from "../types";

interface Point {
  x?: number;
  y?: number;
}

export type LineProps = {
  /** reference to line element. */
  innerRef?: React.Ref<SVGLineElement>;
  /** fill color applied to line element. */
  fill?: string;
  /** Starting x,y point of the line. */
  from?: Point;
  /** Ending x,y point of the line. */
  to?: Point;
};

export default function Line({
  from = { x: 0, y: 0 },
  to = { x: 1, y: 1 },
  fill = "transparent",
  innerRef,
  ...restProps
}: AddSVGProps<LineProps, SVGLineElement>) {
  const isRectilinear = from.x === to.x || from.y === to.y;
  return (
    <SkiaLine
      ref={innerRef}
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      color={fill}
      shapeRendering={isRectilinear ? "crispEdges" : "auto"}
      {...restProps}
    />
  );
}
