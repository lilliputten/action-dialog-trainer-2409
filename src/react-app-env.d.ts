/// <reference types="react-scripts" />

// Allow mp4 video files in project
declare module '*.mp4' {
  const src: string;
  export default src;
}
