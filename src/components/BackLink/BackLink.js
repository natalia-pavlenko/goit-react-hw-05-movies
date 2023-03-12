import { StyledLink } from './BackLink.styled';
import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="18" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node,
};
export default BackLink;
