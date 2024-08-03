// Iterator implementation
class IteratorRange implements Iterator<number> {
  private current: number;
  private end: number;
  private step: number;

  constructor(start: number, end: number, step: number) {
    this.current = start;
    this.end = end;
    this.step = step;
  }

  next(): IteratorResult<number> {
    if (this.current < this.end) {
      const result = { value: this.current, done: false };
      this.current += this.step;
      return result;
    }
    return { value: undefined, done: true };
  }

  [Symbol.iterator](): Iterator<number> {
    return this;
  }
}

export function rangeWithIterator(
  start: number,
  end: number,
  step: number
): Iterable<number> {
  return new IteratorRange(start, end, step);
}

// Generator implementation
export function* rangeWithGenerator(
  start: number,
  end: number,
  step: number
): Generator<number> {
  for (let current = start; current < end; current += step) {
    yield current;
  }
}
