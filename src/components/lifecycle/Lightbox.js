// Create a <LightBox src={ blah } /> component that takes the URL of an image as a src prop. It should display a small version of the image. When the image is clicked it should show the image in a lightbox (e.g. full-size with a darkened background around it). When anything other than the image is clicked it should hide the lightbox.

// Hint: you might need to look at stopPropagation()

import { Component } from 'react'

class Lightbox extends Component {

    constructor(props){
        super(props);

        this.state = {
            lightboxOn: false,
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {lightboxOn} = this.state;
        this.setState({lightboxOn: !lightboxOn})
    }


    render() {
        // let imgSrc = this.props;

        let {lightboxOn} = this.state;

        let imgSmall = {
            height: 300,
            width: 300,
            margin: '1rem'
        }

        let imgLarge = {
            width: '75%',
            height: '75%',
        }

        let lightbox = {
            zIndex: 1,
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: '100%',  
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: 'black',         
        }

        return(
            <>
                {!lightboxOn ? <img onClick={this.handleClick} style={imgSmall} src="https://scx2.b-cdn.net/gfx/news/2018/1-park.jpg" alt=""></img> : <div style={lightbox}><img onClick={this.handleClick} style={imgLarge} src="https://scx2.b-cdn.net/gfx/news/2018/1-park.jpg" alt=""></img></div>}
            </>
        )
    }

}

export default Lightbox