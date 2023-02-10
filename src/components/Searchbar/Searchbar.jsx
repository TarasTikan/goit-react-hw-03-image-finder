import { Component } from "react";

export class Searchbar extends Component {
    state = {
        query: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }
    handleQueryChange = e => {
        this.setState({query: e.currentTarget.value.toLowerCase()})
    }

    render () {
        return (<header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
          onChange={this.handleQueryChange}
            type="text"
            name='query'
            placeholder="Search images and photos"
          />
        </form>
      </header>)
    }
}