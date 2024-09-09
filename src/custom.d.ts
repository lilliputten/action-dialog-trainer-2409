/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {}

// Allow mp4 video files in project
declare module '*.mp4' {
  const src: string;
  export default src;
}
