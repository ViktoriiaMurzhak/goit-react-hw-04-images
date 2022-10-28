import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, currentImage }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img className={css.ModalImage} src={currentImage} alt="lalala" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
};
