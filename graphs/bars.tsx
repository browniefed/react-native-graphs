import React, { useMemo } from "react";
import { Bar } from "@/graph/shape";
import { Group } from "@/graph/group";
import letterFrequency, {
  LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
import { scaleBand, scaleLinear } from "@/graph/scale";

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// accessors
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};

export default function Example({ width, height, events = false }: BarsProps) {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax]
  );

  return (
    <Group top={verticalMargin / 2}>
      {data.map((d) => {
        const letter = getLetter(d);
        const barWidth = xScale.bandwidth();
        const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
        const barX = xScale(letter);
        const barY = yMax - barHeight;
        return (
          <Bar
            key={`bar-${letter}`}
            x={barX}
            y={barY}
            width={barWidth}
            height={barHeight}
            fill="rgba(23, 233, 217, .5)"
          />
        );
      })}
    </Group>
  );
}
