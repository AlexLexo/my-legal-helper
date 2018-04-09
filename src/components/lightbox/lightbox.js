import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import sampleLetter from './../../assets/sample-letter.png';
import sampleLetterThumb from './../../assets/sample-letter-thumb.png';

export default class LightboxExample extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <img
          alt="Example Letter"
          src={sampleLetterThumb}
          onClick={() => this.setState({ isOpen: true })}
          className="lightbox-btn"
        />
        {isOpen && (
          <Lightbox
            mainSrc={sampleLetter}
            onCloseRequest={() => this.setState({ isOpen: false })}
            mainSrcThumbnail={sampleLetter}
          />
        )}
      </div>
    );
  }
}
