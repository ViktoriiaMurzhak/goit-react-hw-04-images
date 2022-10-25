import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.Sorry}>
      <h3 className={css.SorryText}>Sorry, image was not found</h3>
    </div>
  );
};
