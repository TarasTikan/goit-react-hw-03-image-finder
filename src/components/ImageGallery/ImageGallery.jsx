
import { ListGallery } from './ImageGallery.styled';
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
