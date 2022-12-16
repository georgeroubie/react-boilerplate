import PropTypes from 'prop-types';

const IconGenerator = ({ className, viewBox, width, height, children }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      width={width}
      height={height}
    >
      {children}
    </svg>
  );
};

IconGenerator.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

IconGenerator.defaultProps = {
  className: '',
};

export default IconGenerator;
