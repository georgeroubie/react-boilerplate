import PageWrapper from '@components/layout/page-wrapper';
import Title from '@components/typography/title';
import Divider from '@components/ui/divider/Divider';
import { ReactElement } from 'react';
import ButtonPresentation from './button';
import CheckboxPresentation from './checkbox';
import IconsPresentation from './icons';
import LottiePresentation from './lottie';

const Info = (): ReactElement => {
  return (
    <PageWrapper>
      <Title>Info</Title>
      <ButtonPresentation />
      <Divider />
      <IconsPresentation />
      <Divider />
      <LottiePresentation />
      <Divider />
      <CheckboxPresentation />
      <Divider />
      {/*
      <InputPresentation />*/}
    </PageWrapper>
  );
};

export default Info;
