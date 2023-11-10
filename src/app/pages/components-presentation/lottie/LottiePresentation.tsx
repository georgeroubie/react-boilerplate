import Lottie from '@components/ui/lottie';
import { LottieAnimations } from '@components/ui/lottie/constants';
import { Subtitle } from '@typography-components';
import { ReactElement } from 'react';

const LottiePresentation = (): ReactElement => {
  return (
    <>
      <Subtitle>Lottie component</Subtitle>
      <Lottie name={LottieAnimations.EmptyState} width={300} height={300} />
    </>
  );
};

export default LottiePresentation;
