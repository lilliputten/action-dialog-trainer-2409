const stubImagesCount = 11;

export function getRandomStubImageNumber() {
  return Math.round(Math.random() * (stubImagesCount - 1));
}

export function getRandomStubImageUrl(stubImageNumber: number | undefined) {
  if (!stubImageNumber || isNaN(stubImageNumber)) {
    stubImageNumber = getRandomStubImageNumber();
  } else {
    stubImageNumber = Math.round(stubImageNumber) % stubImagesCount;
  }
  return `/images/stubs/${stubImageNumber}.jpg`;
}
