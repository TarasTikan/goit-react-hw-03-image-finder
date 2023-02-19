// import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
export function ImageGalleryItem({ item: { largeImageURL, webformatURL } }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = e => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GalleryItem>
        <GalleryItemImg
          src={webformatURL}
          alt="imageItem"
          onClick={toggleModal}
        />
        {showModal && <Modal onClose={toggleModal} imgModal={largeImageURL} />}
      </GalleryItem>
    </>
  );
}
// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = e => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { webformatURL, largeImageURL } = this.props.item;
//     return (
//       <>
//         <GalleryItem>
//           <GalleryItemImg
//             src={webformatURL}
//             alt="imageItem"
//             onClick={this.toggleModal}
//           />
//           {this.state.showModal && (
//             <Modal onClose={this.toggleModal} imgModal={largeImageURL} />
//           )}
//         </GalleryItem>
//       </>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
