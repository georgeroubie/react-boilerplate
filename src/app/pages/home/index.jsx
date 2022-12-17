import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';

const List = styled.ul`
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing.large}`};
  padding-left: ${({ theme: { spacing } }) => spacing.large};
  list-style: square;
`;

const ListItem = styled.li``;

const Home = () => {
  return (
    <PageWrapper>
      <Title>React boilerplate</Title>
      <Subtitle>About</Subtitle>
      <Description>
        This is the React boilerplate that I use in every React project as a starting point. Some of the basic features
        are:
      </Description>
      <List>
        <ListItem>Folder structure based on some best practices</ListItem>
        <ListItem>State management with React Context</ListItem>
        <ListItem>Styled components</ListItem>
        <ListItem>Light/Dark Theme</ListItem>
        <ListItem>Routing with React Router</ListItem>
        <ListItem>Basic Icons</ListItem>
        <ListItem>Basic UI Components</ListItem>
        <ListItem>ESLint</ListItem>
        <ListItem>Prettier</ListItem>
        <ListItem>Testing</ListItem>
      </List>
      <Subtitle>Creator</Subtitle>
      <Description>
        My name is George Roubie and you can follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank">
          LinkedIn
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank">
          Medium
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie" target="_blank">
          Codepen
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://github.com/georgeroubie" target="_blank">
          GitHub
        </Hyperlink>
        .
      </Description>
    </PageWrapper>
  );
};

export default Home;
