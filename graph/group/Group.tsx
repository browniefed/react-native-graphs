import React from "react";
import { Group as SkiaGroup } from "@shopify/react-native-skia";

type GroupProps = {
  /** Top offset applied to `<g/>`. */
  top?: number;
  /** Left offset applied to `<g/>`. */
  left?: number;
  /** Override `top` and `left` to provide the entire `transform` string. */
  transform?: React.ComponentProps<typeof SkiaGroup>["transform"];
  children?: React.ReactNode;
  /** ref to underlying `<g/>`. */
  innerRef?: React.Ref<SVGGElement>;
};

//todo: forwardref
export default function Group({
  top = 0,
  left = 0,
  transform,

  children,
  innerRef,
  ...restProps
}: GroupProps & Omit<React.SVGProps<any>, keyof GroupProps>) {
  // account for 0;
  let origin = top && left ? { x: top, y: left } : undefined;

  return (
    <SkiaGroup
      ref={innerRef}
      //@ts-ignore
      origin={origin}
      transform={transform}
      {...restProps}
    >
      {children}
    </SkiaGroup>
  );
}
