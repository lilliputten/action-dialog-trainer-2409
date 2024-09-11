import { SxOpts, processOpts } from './SxOpts';

export function px(n: number, opts?: SxOpts): string {
  return processOpts(`${n}px`, opts);
}
