import { ListGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ items }) {
  return (
    <ListGallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ListGallery>
  );
}
ImageGallery.propTypes = {
  items:  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired
};

