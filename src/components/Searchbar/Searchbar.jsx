import PropTypes from 'prop-types';
// import { Component } from 'react';
import {
  Search,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';
import { useState } from 'react';
export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          onChange={handleQueryChange}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
}
// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.query);
//   };
//   handleQueryChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <Search>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <SearchButtonLabel>Search</SearchButtonLabel>
//           </SearchButton>

//           <SearchInput
//             onChange={this.handleQueryChange}
//             type="text"
//             name="query"
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Search>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
