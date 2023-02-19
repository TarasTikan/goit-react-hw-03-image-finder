import { ModalImg, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
// import { Component } from 'react';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
const ModalRoot = document.querySelector('#ModalRoot');
export function Modal({ imgModal, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });
  const keyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onOverlayClose}>
      <ModalImg>
        <img src={imgModal} alt="pictureModal" />
      </ModalImg>
    </Overlay>,
    ModalRoot
  );
}
// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.keyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.keyDown);
//   }

//   keyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onOverlayClose = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.onOverlayClose}>
//         <ModalImg>
//           <img src={this.props.imgModal} alt="pictureModal" />
//         </ModalImg>
//       </Overlay>,
//       ModalRoot
//     );
//   }
// }

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgModal: PropTypes.string.isRequired,
};
