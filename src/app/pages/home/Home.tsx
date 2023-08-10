import PageWrapper from '@components/layout/page-wrapper';
import Description from '@components/typography/description';
import Hyperlink from '@components/typography/hyperlink';
import Subtitle from '@components/typography/subtitle';
import Title from '@components/typography/title';
import Donation from '@components/ui/donation';
import { ReactElement } from 'react';
import styles from './Home.module.scss';

const Home = (): ReactElement => {
  return (
    <PageWrapper>
      <Title>React boilerplate</Title>
      <Subtitle>About</Subtitle>
      <Description>
        This is the React boilerplate that I use in every React project as a starting point. Some of the basic features
        are:
      </Description>
      <ul className={styles.list}>
        <li>Folder structure based on some best practices</li>
        <li>State management with zustand</li>
        <li>CSS Modules</li>
        <li>Light/Dark Theme</li>
        <li>Routing with React Router</li>
        <li>Basic Icons</li>
        <li>Basic UI Components</li>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>Testing</li>
      </ul>
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
      <Donation />
    </PageWrapper>
  );
};

export default Home;
