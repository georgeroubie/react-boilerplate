import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';

const Home = () => {
  return (
    <PageWrapper>
      <Title>Welcome</Title>
      <Subtitle>About</Subtitle>
      <Description>
        This is the React boilerplate that I use in every React project as a starting point. Some of the basic features
        are:
        <ul>
          <li>State management with React Context</li>
          <li>Styled components</li>
          <li>Light/Dark Theme</li>
          <li>React Routing</li>
          <li>Icons</li>
          <li>Basic UI Components</li>
          <li>ESLint</li>
          <li>Testing</li>
        </ul>
      </Description>
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
