import React from "react";
import { Circle as SkiaCircle } from "@shopify/react-native-skia";
import { AddSVGProps } from "../types";

export type CircleProps = {
  /** reference to circle element. */
  innerRef?: React.Ref<SVGCircleElement>;
};

export default function Circle({
  innerRef,
  ...restProps
}: AddSVGProps<CircleProps, SVGCircleElement>) {
  return <SkiaCircle ref={innerRef} {...restProps} />;
}
