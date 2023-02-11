import { ButtonLoadMore } from './Button.styled';
// import { Loader } from 'components/Loader/Loader';
export function Button({ onClick }, e) {
  return (
    <>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </>
  );
}
