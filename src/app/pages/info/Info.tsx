import React from 'react';
import PageWrapper from '../../components/layout/page-wrapper';
import Title from '../../components/typography/title';
import ButtonPresentation from './button';
// import Divider from '../../components/ui/Divider';
// import CheckboxPresentation from './CheckboxPresentation';
// import IconsPresentation from './IconsPresentation';
// import InputPresentation from './InputPresentation';
// import LottiePresentation from './LottiePresentation';

const Info = (): React.ReactElement => {
  return (
    <PageWrapper>
      <Title>Info</Title>
      <ButtonPresentation />
      {/* <Divider />
      <IconsPresentation />
      <Divider />
      <CheckboxPresentation />
      <Divider />
      <InputPresentation />
      <Divider />
      <LottiePresentation /> */}
    </PageWrapper>
  );
};

export default Info;
