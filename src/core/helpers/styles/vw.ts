import { SxOpts, processOpts } from './SxOpts';

export function vw(n: number, opts?: SxOpts): string {
  return processOpts(`${n}vw`, opts);
}
