import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Apps } from './App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { FetchImg } from 'components/FetchImg/FetchImg';
export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true });

      FetchImg(this.state.query, this.state.page)
        .then(({ hits }) => this.setState({ items: hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleLoadMoreBtn = e => {
    this.setState({ loading: true });
    e.target.style.display = 'none';

    FetchImg(this.state.query, this.state.page + 1)
      .then(({ hits }) =>
        this.setState(prevState => ({
          items: [...prevState.items, ...hits],
          page: prevState.page + 1,
        }))
      )
      .finally(() => {
        this.setState({ loading: false });
        e.target.style.display = 'block';
      });
  };
  handleSubmitImg = query => {
    this.setState({
      page: 1,
      query,
      items: [],
    });
  };

  render() {
    return (
      <Apps>
        <Searchbar
          page={this.state.page}
          query={this.state.query}
          onSubmit={this.handleSubmitImg}
        />

        <ImageGallery
          items={this.state.items}
          handleModal={this.toggleModal}
        ></ImageGallery>
        {this.state.items.length !== 0 && (
          <Button onClick={this.handleLoadMoreBtn} />
        )}
        {this.state.loading && <Loader />}
      </Apps>
    );
  }
}
