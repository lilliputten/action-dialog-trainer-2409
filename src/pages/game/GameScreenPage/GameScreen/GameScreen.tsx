import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Box, ButtonBase, Stack } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

import { isDev } from 'src/core/constants/config';
import { showError } from 'src/ui/Basic';
import { ScreenWrapper } from 'src/components/screens/ScreenWrapper';
import { TScreenData } from 'src/core/hooks/routes';
import { px } from 'src/core/helpers/styles';
import { getVideoSizeByRef } from 'src/core/helpers/video';
import { useContainerSize } from 'src/ui/hooks';
import { animationTime, effectTime } from 'src/core/assets/scss';
import { getNextScreenRoute } from 'src/core/helpers/routes';
import { TPropsWithClassName } from 'src/core/types';
import { ShowError } from 'src/components/app/ShowError';

import styles from './GameScreen.module.scss';

const doDebug = isDev && false;
const testingAnswerLayouts = isDev && false;

type TGameScreenProps = TScreenData & TPropsWithClassName;

export const GameScreen: React.FC<TGameScreenProps> = (props) => {
  const {
    // prettier-ignore
    gameId,
    scenarioId,
    screenNo,
    // gameData,
    scenarioData,
    screenData,
  } = props;
  /* console.log('[GameScreen:DEBUG]', {
   *   gameId,
   *   scenarioId,
   *   screenNo,
   *   // gameData,
   *   scenarioData,
   *   screenData,
   * });
   */
  // Eg page url: /game/first/irina/1
  const navigate = useNavigate();
  // Get game data...
  const {
    // prettier-ignore
    videoUrl,
    // finalSplashUrl,
    answers,
    finalComment,
    finalImage,
  } = screenData;
  const answersCount = Array.isArray(answers) ? answers.length : 0;
  const hasAnswers = !!answersCount;
  const screensCount = scenarioData.screens.length;
  const isLastScreen = screenNo === screensCount;
  // Initialize video ref (to update geometry)...
  const {
    ref: refVideo,
    width: videoContainerWidth,
    height: videoContainerHeight,
  } = useContainerSize<HTMLVideoElement>();
  const videoNode = refVideo.current;
  const buttonBorderWidth = videoContainerWidth && videoContainerWidth / 100;
  const buttonBorderRadius = videoContainerWidth && videoContainerWidth / 80;
  const finalButtonBorderWidth = videoContainerWidth && videoContainerWidth / 200;
  const finalTextSize = videoContainerWidth && videoContainerWidth / 45;
  const finalImageSize = videoContainerWidth && videoContainerWidth / 5;
  const refBox = React.useRef<HTMLDivElement>(null);
  /** Video has already played */
  const [videoComplete, setVideoComplete] = React.useState(false);
  const [isVideoStarted, setVideoStarted] = React.useState(false);
  /** After video effect has finished */
  const [videoEffectComplete, setVideoEffectComplete] = React.useState(false);
  const [isCanPlay, setCanPlay] = React.useState(false);
  const enableCanPlay = React.useCallback(() => setCanPlay(true), []);
  const [isActive, setActive] = React.useState(false);
  const [isFinished, setFinished] = React.useState(false);
  const [isFinishedComplete, setFinishedComplete] = React.useState(false);
  /** Answer */
  const [answerIdx, setAnswerIdx] = React.useState<number | undefined>();
  const isAnswered = videoComplete && (!hasAnswers || answerIdx !== undefined);
  const [hasNavigated, setHasNavigated] = React.useState(false);
  // const [hasInited, setInited] = React.useState(false);
  /* // DEBUG
   * React.useEffect(() => {
   *   // const video = refVideo.current;
   *   console.log('[GameScreen:DEBUG]', {
   *     isVideoStarted,
   *     refVideo,
   *     videoContainerWidth,
   *     videoContainerHeight,
   *     videoComplete,
   *     videoEffectComplete,
   *     isCanPlay,
   *     isActive,
   *     isFinished,
   *     isFinishedComplete,
   *     answerIdx,
   *     isAnswered,
   *     hasNavigated,
   *     hasInited,
   *   });
   * }, [
   *   // prettier-ignore
   *   isVideoStarted,
   *   refVideo,
   *   videoContainerWidth,
   *   videoContainerHeight,
   *   videoComplete,
   *   videoEffectComplete,
   *   isCanPlay,
   *   isActive,
   *   isFinished,
   *   isFinishedComplete,
   *   answerIdx,
   *   isAnswered,
   *   hasNavigated,
   *   hasInited,
   * ]);
   */
  // Update geometry...
  const updateBoxGeometry = React.useCallback(() => {
    const box = refBox.current;
    if (box) {
      const { width, height } = getVideoSizeByRef(refVideo);
      /* console.log('[updateBoxGeometry]', {
       *   width,
       *   height,
       *   box,
       *   // videoContainerWidth,
       *   // videoContainerHeight,
       * });
       */
      if (width && height) {
        box.style.width = px(width);
        box.style.height = px(height);
      }
    }
  }, [
    // prettier-ignore
    refBox,
    refVideo,
  ]);
  React.useEffect(updateBoxGeometry, [
    // prettier-ignore
    isVideoStarted,
    videoContainerWidth,
    videoContainerHeight,
    updateBoxGeometry,
    videoNode,
  ]);
  // Init screen...
  React.useEffect(() => {
    /* console.log('[GameScreen: Init screen]', {
     *   gameId,
     *   scenarioId,
     *   screenNo,
     * });
     */
    // setInited(true);
    setTimeout(() => {
      // console.log('[GameScreen: Init screen : setActive]');
      enableCanPlay();
      setActive(true);
    }, animationTime);
  }, [gameId, scenarioId, screenNo, enableCanPlay]);
  // Start video handler...
  const startVideoPlay = React.useCallback(() => {
    const video = refVideo.current;
    if (video) {
      /* console.log('[GameScreen] startVideoPlay', {
       *   video,
       *   testingAnswerLayouts,
       * });
       */
      if (!testingAnswerLayouts) {
        video.play();
      }
      updateBoxGeometry();
    }
  }, [refVideo, updateBoxGeometry]);
  // Start and initialize video with a delay...
  const startVideoPlayHandler = React.useRef<NodeJS.Timeout | undefined>(undefined);
  React.useEffect(() => {
    if (isCanPlay) {
      // console.log('[GameScreen: delayed startVideoPlay]');
      if (startVideoPlayHandler.current) {
        clearTimeout(startVideoPlayHandler.current);
      }
      startVideoPlayHandler.current = setTimeout(startVideoPlay, effectTime);
    }
  }, [isCanPlay, startVideoPlay]);
  /* // Set enableCanPlay handler (TODO?)...
   * React.useEffect(() => {
   *   const video = videoNode;
   *   console.log('[GameScreen: Set enableCanPlay handler]', {
   *     video,
   *     // refVideo,
   *   });
   *   if (video) {
   *     video.addEventListener('canplay', enableCanPlay);
   *     return () => {
   *       video?.removeEventListener('canplay', enableCanPlay);
   *     };
   *   }
   * }, [videoNode, enableCanPlay]);
   */
  const handleVideoPlay = React.useCallback(() => {
    setVideoStarted(true);
  }, []);
  const handleVideoEnd = React.useCallback(() => {
    setVideoComplete(true);
    setTimeout(() => {
      setVideoEffectComplete(true);
    }, effectTime);
  }, []);
  const [error, setError] = React.useState<Error>();
  const handleVideoError = React.useCallback(
    (error: unknown) => {
      // eslint-disable-next-line no-console
      console.error('[GameScreen:handleVideoError]', {
        error,
      });
      const nextError = new Error(`Ошибка показа видео ("${videoUrl}")`);
      showError(nextError);
      setError(nextError);
    },
    [videoUrl],
  );
  /** Final action */
  const handleUserChoice = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      const answerIdx = Number(event.currentTarget.id);
      setAnswerIdx(answerIdx);
    },
    [],
  );
  React.useEffect(() => {
    /* console.log('[GameScreen: All effects have finished : before]', {
     *   hasNavigated,
     *   // isFinished,
     *   isFinishedComplete,
     *   isAnswered,
     * });
     */
    if (!hasNavigated && isFinishedComplete && isAnswered) {
      const nextScreenRoute = isLastScreen
        ? `/game/${gameId}/finished`
        : getNextScreenRoute(gameId, scenarioId, screenNo, true);
      /* console.log('[GameScreen:All effects have finished : navigate]', {
       *   nextScreenRoute,
       * });
       */
      setHasNavigated(true);
      navigate(nextScreenRoute);
    }
  }, [
    gameId,
    hasNavigated,
    isAnswered,
    isFinishedComplete,
    isLastScreen,
    navigate,
    scenarioId,
    screenNo,
  ]);
  const handleFinished = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    // console.log('[GameScreen:handleFinished]');
    setFinished(true);
    // TODO: Store an answer to the store for further analization?
    setTimeout(() => {
      setFinishedComplete(true);
    }, effectTime);
  }, []);
  // Generate action buttons using `handleUserChoice`
  const answerButtons = React.useMemo(() => {
    return answers?.map((item, idx) => {
      const { text, isCorrect, buttonSx } = item;
      const key = ['answer-button', scenarioId, idx].join('-');
      const isSelected = answerIdx === idx;
      return (
        <ButtonBase
          key={key}
          id={String(idx)}
          className={classNames(
            styles.button,
            isSelected && styles.selected,
            isAnswered && isCorrect && styles.correct,
          )}
          onClick={handleUserChoice}
          sx={{ ...buttonSx, borderWidth: buttonBorderWidth, borderRadius: buttonBorderRadius }}
          title={text}
        ></ButtonBase>
      );
    });
  }, [
    answerIdx,
    answers,
    handleUserChoice,
    scenarioId,
    isAnswered,
    buttonBorderWidth,
    buttonBorderRadius,
  ]);
  const finalButtonText = isLastScreen ? 'Завершить' : 'Дальше';
  if (error) {
    return <ShowError error={error} />;
  }
  return (
    <ScreenWrapper
      className={classNames(
        styles.root,
        (doDebug || videoComplete) && styles.videoComplete,
        (doDebug || videoEffectComplete) && styles.videoEffectComplete,
        (doDebug || isFinished) && styles.finished,
        (doDebug || isAnswered) && styles.answered,
        (doDebug || isActive) && !isFinished && styles.active,
        isFinishedComplete && styles.finishedComplete,
        doDebug && styles.DEBUG,
      )}
    >
      {!isFinishedComplete && (
        <video
          key={['video', gameId, scenarioId, screenNo].join('-')}
          src={videoUrl}
          className={styles.video}
          preload="auto"
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          onPlay={handleVideoPlay}
          ref={refVideo}
          // controls
          // autoPlay
          muted
        ></video>
      )}
      <Box className={classNames(styles.overContainer)}>
        <Box
          key={['overBox', gameId, scenarioId, screenNo].join('-')}
          ref={refBox}
          className={classNames(styles.overBox)}
        >
          <Box className={classNames(styles.overButtons)}>
            {/* Answer buttons */}
            {answerButtons}
          </Box>
          <Stack
            className={classNames(styles.overFinalComment)}
            sx={{
              width: '90%',
              fontSize: finalTextSize,
              gap: '0.75em',
              // gap: finalButtonBorderWidth,
            }}
          >
            {isAnswered && (
              <>
                {!!finalImage && (
                  <Box
                    className={classNames(styles.finalImage)}
                    sx={{
                      textAlign: 'center',
                      height: finalImageSize,
                      // height: '30%',
                      width: '100%',
                      backgroundImage: `url("${finalImage}")`,
                    }}
                  />
                )}
                <Box
                  className={classNames(styles.finalComment)}
                  sx={{
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  {finalComment}
                </Box>
                <ButtonBase
                  className={classNames(styles.finalButton)}
                  title={finalButtonText}
                  onClick={handleFinished}
                  sx={{
                    borderWidth: finalButtonBorderWidth,
                    fontSize: finalTextSize,
                    // marginTop: '0.2em',
                  }}
                >
                  {finalButtonText}
                  <PlayArrow />
                </ButtonBase>
              </>
            )}
          </Stack>
          {/* */}
        </Box>
      </Box>
      <Box className={classNames(styles.curtain)}></Box>
    </ScreenWrapper>
  );
};
