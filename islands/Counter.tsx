import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button id="decrement" onClick={() => props.count.value -= 1}>⬇︎</Button>
      <p class="text-3xl tabular-nums">I know how to count all the way to {props.count}.</p>
      <Button id="increment" onClick={() => props.count.value += 1}>⬆︎</Button>
    </div>
  );
}
