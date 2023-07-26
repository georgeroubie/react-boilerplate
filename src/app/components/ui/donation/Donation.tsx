import React from 'react';
import Hyperlink from '../../typography/hyperlink/Hyperlink';
import Subtitle from '../../typography/subtitle/Subtitle';
import styles from './Donation.module.scss';

const Donation = (): React.ReactElement => {
  return (
    <>
      <Subtitle>Donation</Subtitle>
      <Hyperlink href="https://www.buymeacoffee.com/georgeroubie" target="_blank">
        <img
          className={styles.image}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </Hyperlink>
    </>
  );
};

export default Donation;
