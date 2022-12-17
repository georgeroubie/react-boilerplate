import PageWrapper from '../../components/layout/PageWrapper';
import Title from '../../components/typography/Title';
import Divider from '../../components/ui/Divider';
import ButtonPresentation from './ButtonPresentation';
import CheckboxPresentation from './CheckboxPresentation';
import IconsPresentation from './IconsPresentation';

const Info = () => {
  return (
    <PageWrapper>
      <Title>Available components</Title>
      <ButtonPresentation />
      <Divider />
      <IconsPresentation />
      <Divider />
      <CheckboxPresentation />
      <Divider />
    </PageWrapper>
  );
};

export default Info;
