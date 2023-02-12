import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Apps } from './App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { FetchImg } from 'FetchImg/FetchImg';
export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });

      FetchImg(query, page)
        .then(({ hits }) =>
          this.setState(prevState => ({
            items: [...prevState.items, ...hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleLoadMoreBtn = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };
  handleSubmitImg = query => {
    this.setState({
      page: 1,
      query,
      items: [],
    });
  };

  render() {
    const { page, query, items, loading } = this.state;
    return (
      <Apps>
        <Searchbar page={page} query={query} onSubmit={this.handleSubmitImg} />
        <ImageGallery
          items={items}
          handleModal={this.toggleModal}
        ></ImageGallery>
        {loading && <Loader />}
        {items.length !== 0 && <Button onClick={this.handleLoadMoreBtn} />}
      </Apps>
    );
  }
}
