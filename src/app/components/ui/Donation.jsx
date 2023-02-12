import styled from 'styled-components';
import Hyperlink from '../typography/Hyperlink';
import Subtitle from '../typography/Subtitle';

const Image = styled.img`
  height: 60px;
  width: 217px;
`;

const Donation = () => {
  return (
    <>
      <Subtitle>Donation</Subtitle>
      <Hyperlink href="https://www.buymeacoffee.com/georgeroubie" target="_blank">
        <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
      </Hyperlink>
    </>
  );
};

export default Donation;
