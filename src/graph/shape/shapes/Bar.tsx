import React from "react";
import { AddSVGProps } from "../types";
import { Rect } from "@shopify/react-native-skia";

export type BarProps = {
  /** reference to rect element. */
  innerRef?: React.Ref<SVGRectElement>;
};

export default function Bar({
  innerRef,
  fill,
  ...restProps
}: AddSVGProps<BarProps, SVGRectElement>) {
  return <Rect ref={innerRef} color={fill} {...restProps} />;
}
