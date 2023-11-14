import React from "react";

import { linkHorizontal } from "d3-shape";
import { SharedLinkProps, AccessorProps, AddSVGProps } from "../../../types";
import { getY, getX, getSource, getTarget } from "../../../util/accessors";

export function pathHorizontalDiagonal<Link, Node>({
  source,
  target,
  x,
  y,
}: Required<AccessorProps<Link, Node>>) {
  return (data: Link) => {
    const link = linkHorizontal<Link, Node>();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

export type LinkHorizontalDiagonalProps<Link, Node> = AccessorProps<
  Link,
  Node
> &
  SharedLinkProps<Link>;

export default function LinkHorizontalDiagonal<Link, Node>({
  children,
  data,
  innerRef,
  path,
  x = getY, // note this returns a y value
  y = getX, // note this returns an x value
  source = getSource,
  target = getTarget,
  ...restProps
}: AddSVGProps<LinkHorizontalDiagonalProps<Link, Node>, SVGPathElement>) {
  const pathGen = path || pathHorizontalDiagonal({ source, target, x, y });
  if (children) return <>{children({ path: pathGen })}</>;
  return <path ref={innerRef} d={pathGen(data) || ""} {...restProps} />;
}
