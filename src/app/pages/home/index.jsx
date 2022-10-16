import { useContext } from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';
import { AppContext } from '../../state/Context';

const Input = styled.input``;

const Home = () => {
  const { state, setUserName } = useContext(AppContext);
  const { userName } = state;

  function handleOnChange({ target }) {
    setUserName(target.value);
  }

  return (
    <PageWrapper>
      <Title>Welcome {userName}</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Description>
      <Input type="text" placeholder="Change your name" onChange={handleOnChange} />
    </PageWrapper>
  );
};

export default Home;
