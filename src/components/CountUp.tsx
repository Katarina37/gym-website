import { useCountUp } from "../useCountUp";

interface Props {
  value: string | number;
  duration?: number;
}

export default function CountUp({ value, duration = 3000 }: Props) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? "";

  const { ref, value: current } = useCountUp<HTMLSpanElement>(target, duration);

  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}