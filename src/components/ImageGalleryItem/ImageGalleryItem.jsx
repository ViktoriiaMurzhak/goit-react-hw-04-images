import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ key, url }) => {
  return (
    <li key={key} className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={url} alt="lalala" />
    </li>
  );
};
