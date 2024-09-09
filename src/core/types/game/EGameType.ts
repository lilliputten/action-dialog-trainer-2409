export enum EGameType {
  First = 'first',
  Second = 'second',
  Third = 'third',
}
export const gameTypes = [
  // prettier-ignore
  EGameType.First,
  EGameType.Second,
  EGameType.Third,
] as const;
export const defaultGameType = gameTypes[0];

export const gameNames: Record<EGameType, string> = {
  [EGameType.First]: 'Первая игра',
  [EGameType.Second]: 'Первая игра',
  [EGameType.Third]: 'Первая игра',
};
