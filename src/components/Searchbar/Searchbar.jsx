import { Component } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    console.log('this.state.value', this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            value={value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
