export enum EDialogGameType {
  Default = 'default',
}
export const dialogGameTypes = [
  // prettier-ignore
  EDialogGameType.Default,
] as const;
export const defaultDialogGameType = dialogGameTypes[0];

export const dialogGameNames: Record<EDialogGameType, string> = {
  [EDialogGameType.Default]: 'Диалоговый тренажёр',
};
