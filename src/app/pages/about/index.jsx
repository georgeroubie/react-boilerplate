import PageWrapper from '../../components/layout/PageWrapper';
import Title from '../../components/typography/Title';
import ButtonPresentation from './ButtonPresentation';
import CheckboxPresentation from './CheckboxPresentation';
import IconsPresentation from './IconsPresentation';

const About = () => {
  return (
    <PageWrapper>
      <Title>Available components</Title>
      <ButtonPresentation />
      <IconsPresentation />
      <CheckboxPresentation />
    </PageWrapper>
  );
};

export default About;
