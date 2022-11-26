export interface IVersions {
  node: () => number
  chrome: () => number
  electron: () => number
}
declare global {
  var versions: IVersions;
}
