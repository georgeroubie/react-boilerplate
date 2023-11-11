import { PageWrapper } from '@layout-components';
import { Title } from '@typography-components';
import { Divider } from '@ui-components';
import { ReactElement } from 'react';
import ButtonPresentation from './button';
import CheckboxPresentation from './checkbox';
import IconsPresentation from './icons';
import InputPresentation from './input';
import LottiePresentation from './lottie';

const ComponentsPresentation = (): ReactElement => {
  return (
    <PageWrapper>
      <Title>Available components</Title>
      <IconsPresentation />
      <Divider />
      <ButtonPresentation />
      <Divider />
      <CheckboxPresentation />
      <Divider />
      <InputPresentation />
      <Divider />
      <LottiePresentation />
    </PageWrapper>
  );
};

export default ComponentsPresentation;
