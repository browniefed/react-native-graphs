import React from "react";
import { Path } from "@shopify/react-native-skia";
import Stack, { StackProps } from "./Stack";
import { AddSVGProps, StackKey } from "../types";

type PickProps =
  | "top"
  | "left"
  | "keys"
  | "data"
  | "curve"
  | "defined"
  | "x"
  | "x0"
  | "x1"
  | "y0"
  | "y1"
  | "value"
  | "order"
  | "offset"
  | "color"
  | "children";

export type AreaStackProps<Datum, Key> = Pick<
  StackProps<Datum, Key>,
  PickProps
>;

export default function AreaStack<Datum, Key extends StackKey = StackKey>({
  top,
  left,
  keys,
  data,
  curve,
  defined,
  x,
  x0,
  x1,
  y0,
  y1,
  value,
  order,
  offset,
  color,
  children,
  ...restProps
}: AddSVGProps<AreaStackProps<Datum, Key>, SVGPathElement>) {
  return (
    <Stack<Datum, Key>
      top={top}
      left={left}
      keys={keys}
      data={data}
      curve={curve}
      defined={defined}
      x={x}
      x0={x0}
      x1={x1}
      y0={y0}
      y1={y1}
      value={value}
      order={order}
      offset={offset}
      color={color}
      {...restProps}
    >
      {children ||
        (({ stacks, path }) =>
          stacks.map((series, i) => (
            <Path
              key={`area-stack-${i}-${series.key || ""}`}
              d={path(series) || ""}
              fill={color?.(series.key, i)}
              {...restProps}
            />
          )))}
    </Stack>
  );
}
