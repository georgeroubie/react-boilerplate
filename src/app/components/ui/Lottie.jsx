import LottiePlayer from 'lottie-web';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const LottieStyled = styled.div`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  ${({ $centered }) =>
    $centered &&
    css`
      margin: auto;
    `}
`;

const Lottie = (props) => {
  const {
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
  } = props;

  const ref = useRef(null);
  const lottie = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  function onClick() {
    if (isPlaying) {
      return;
    }

    lottie.current.goToAndPlay(0);
    setIsPlaying(true);
    onPlay?.();
  }

  useEffect(() => {
    lottie.current = LottiePlayer.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      path: `${process.env.PUBLIC_URL}/lottie/${name}.json`,
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

    return () => lottie.current && lottie.current.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LottieStyled
      ref={ref}
      className={className}
      $centered={centered}
      $width={width}
      $height={height}
      onClick={onClick}
    />
  );
};

Lottie.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  speed: PropTypes.number,
  centered: PropTypes.bool,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  player: PropTypes.shape({}),
  onPlay: PropTypes.func,
  onComplete: PropTypes.func,
};

Lottie.defaultProps = {
  className: '',
  speed: undefined,
  centered: false,
  loop: false,
  autoplay: true,
  player: undefined,
  onPlay: () => {},
  onComplete: () => {},
};

export default Lottie;
