import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import sampleLetter from './../../assets/sample-letter.png';
import sampleLetterThumb from './../../assets/sample-letter-thumb.png';
import ImgLetterThumb from './../styled-components/img-letter-thumb';
export default class LightboxExample extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <ImgLetterThumb alt="Example Letter" src={sampleLetterThumb} onClick={() => this.setState({ isOpen: true })} />
        {isOpen && (
          <Lightbox
            mainSrc={sampleLetter}
            onCloseRequest={() => this.setState({ isOpen: false })}
            mainSrcThumbnail={sampleLetter}
          />
        )}
      </React.Fragment>
    );
  }
}
