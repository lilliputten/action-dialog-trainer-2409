import React from 'react';

export function getVideoSizeByRef(refVideo: React.RefObject<HTMLVideoElement>) {
  const video = refVideo.current;
  let width: number | undefined = undefined;
  let height: number | undefined = undefined;
  if (video) {
    const {
      // prettier-ignore
      clientWidth,
      clientHeight,
      videoWidth,
      videoHeight,
    } = video;
    if (videoWidth && videoHeight && clientWidth && clientHeight) {
      const videoRatio = videoHeight / videoWidth;
      const widthRatio = videoWidth / clientWidth;
      const heightRatio = videoHeight / clientHeight;
      if (widthRatio > heightRatio) {
        width = clientWidth;
        height = width * videoRatio;
      } else {
        height = clientHeight;
        width = height / videoRatio;
      }
    }
  }
  return { width, height };
}
