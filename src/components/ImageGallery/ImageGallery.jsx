import { Component } from "react";

export class ImageGallery extends Component {
    componentDidUpdate (prevState, prevProps) {
        if(prevProps.query !== this.props.query) {
            // fetch(
            //     `https://pixabay.com/api/?q=${this.props.query}&page=1&key=32151990-9b10be0026312dee6c1690c83&image_type=photo&orientation=horizontal&per_page=12`
            //   )
            //     .then(res => res.json())
            //     .then(data => console.log(data));
            console.log('heloo')
        }
    } 
    render () {
        return(<ul>
            <li><p>hello</p></li>
      </ul>)
    }
}