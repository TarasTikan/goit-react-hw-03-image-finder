import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';
export function Button({ onClick }, e) {
  return (
    <>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
