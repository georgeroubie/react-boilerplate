/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useColorTheme, useReducedMotion } from '@hooks';
import c from 'clsx';
import LottiePlayer from 'lottie-web';
import { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './Lottie.module.scss';
import { LottieAnimations } from './constants';

type Props = {
  className?: string;
  name: LottieAnimations;
  width: number;
  height: number;
  speed?: number;
  centered?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  player?: any;
  onPlay?: () => void;
  onComplete?: () => void;
};

const Lottie = ({
  className,
  name,
  speed,
  width,
  height,
  centered = false,
  loop = true,
  autoplay = true,
  player,
  onPlay,
  onComplete,
}: Props): ReactElement => {
  const ref = useRef<any>(null);
  const lottie = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const colorTheme = useColorTheme();

  const reducedMotion = useReducedMotion();

  function onClick() {
    if (isPlaying) {
      return;
    }

    lottie?.current?.goToAndPlay(0);
    setIsPlaying(true);
    onPlay?.();
  }

  useEffect(() => {
    lottie?.current?.destroy();

    lottie.current = LottiePlayer.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop,
      autoplay: reducedMotion ? false : autoplay,
      path: `/animations/${colorTheme}/${name}.json`,
    });

    lottie.current.onComplete = () => {
      setIsPlaying(false);
      onComplete?.();
    };

    if (speed) {
      lottie.current.setSpeed(speed);
    }

    if (player) {
      player.current = lottie.current;
    }

    if (reducedMotion) {
      lottie.current.stop();
    }

    return () => {
      lottie.current && lottie.current.destroy();
    };
  }, [autoplay, loop, name, player, speed, colorTheme, reducedMotion, onComplete]);

  return (
    <div
      ref={ref}
      className={c(centered && styles.centered, className)}
      style={{
        height: height + 'px',
        width: width + 'px',
      }}
      onClick={onClick}
    />
  );
};

export default Lottie;
