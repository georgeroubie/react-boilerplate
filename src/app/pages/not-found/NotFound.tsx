import React from 'react';
import PageWrapper from '../../components/layout/page-wrapper';
import Description from '../../components/typography/description';
import Hyperlink from '../../components/typography/hyperlink';
import Title from '../../components/typography/title';

const NotFound = (): React.ReactElement => {
  return (
    <PageWrapper>
      <Title>Oops :(</Title>
      <Description>The page you are looking for does not exist!</Description>
      <Description>
        Click <Hyperlink href="/">here</Hyperlink> to go to home page.
      </Description>
    </PageWrapper>
  );
};

export default NotFound;
