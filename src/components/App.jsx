import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: []
  }

  handleSubmitImg = query => {
    this.setState({
      page: 1,
      query,
      items: []
    })
  }

  render() {
    return (
      <div>
    <Searchbar page = {this.state.page} query={this.state.query} onSubmit={this.handleSubmitImg}/>
    <ImageGallery query={this.state.query}></ImageGallery>
      </div>
    );
  }
}

