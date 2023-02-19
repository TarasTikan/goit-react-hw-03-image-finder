// import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Apps } from './App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { FetchImg } from 'FetchImg/FetchImg';
import { useState, useEffect } from 'react';
export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    FetchImg(query, page)
      .then(({ hits }) => setItems(prevItems => [...prevItems, ...hits]))
      .finally(() => {
        setLoading(false);
        setVisibleLoadMore(true);
      });
  }, [query, page]);

  const handleLoadMoreBtn = e => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
    setVisibleLoadMore(false);
  };

  const handleSubmitImg = querys => {
    if (query === querys) {
      return;
    }
    setPage(1);
    setQuery(querys);
    setItems([]);
  };
  return (
    <Apps>
      <Searchbar page={page} query={query} onSubmit={handleSubmitImg} />
      {items.length !== 0 && <ImageGallery items={items} />}
      {loading && <Loader />}
      {visibleLoadMore && <Button onClick={handleLoadMoreBtn} />}
    </Apps>
  );
}
// export class App extends Component {
//   state = {
//     page: 1,
//     query: '',
//     items: [],
//     loading: false,
//     visibleLoadMore: false,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.setState({ loading: true });

//       FetchImg(query, page)
//         .then(({ hits }) =>
//           this.setState(prevState => ({
//             items: [...prevState.items, ...hits],
//           }))
//         )
//         .finally(() =>
//           this.setState({ loading: false, visibleLoadMore: true })
//         );
//     }
//   }

//   handleLoadMoreBtn = e => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       loading: true,
//       visibleLoadMore: false,
//     }));
//   };
//   handleSubmitImg = query => {
//     this.setState({
//       page: 1,
//       query,
//       items: [],
//     });
//   };

//   render() {
//     const { page, query, items, loading, visibleLoadMore } = this.state;
//     return (
//       <Apps>
//         <Searchbar page={page} query={query} onSubmit={this.handleSubmitImg} />
//         {items.length !== 0 && (
//           <ImageGallery items={items} handleModal={this.toggleModal} />
//         )}
//         {loading && <Loader />}
//         {visibleLoadMore && <Button onClick={this.handleLoadMoreBtn} />}
//       </Apps>
//     );
//   }
// }
