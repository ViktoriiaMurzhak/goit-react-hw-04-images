import { Component } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <FiSearch />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
