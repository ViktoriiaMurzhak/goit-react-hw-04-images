import { Component } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { PropTypes } from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  hanleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.hanleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <FiSearch />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
