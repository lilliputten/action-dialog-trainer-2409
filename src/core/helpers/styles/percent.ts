// @see https://mui.com/system/getting-started/the-sx-prop/

import { SxOpts, processOpts } from './SxOpts';

export function percent(n: number, opts?: SxOpts): string {
  return processOpts(`${n}%`, opts);
}
