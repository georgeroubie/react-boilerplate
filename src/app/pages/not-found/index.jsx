import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Title from '../../components/typography/Title';

const NotFound = () => {
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
