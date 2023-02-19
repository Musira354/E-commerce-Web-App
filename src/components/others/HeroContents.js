import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HeroContents() {
  return (
    <div className='HeroContents'>
      <Container className='carouselNumbersParent'>
        <div className='carouselNumbers'>
          <div className='carouselNumber'>01</div>
          <div className='multiLines'>
            <div className='line1'></div>
            <div className='line2'></div>
          </div>
          <div className='carouselNumber'>05</div>
        </div>
        <h1 className='mianHeading'>Sale of the summer collection</h1>
        <a className='moreLink' href='/'>
          <i class='fas fa-arrow-right'></i> Check More
        </a>
      </Container>
    </div>
  );
}

export default HeroContents;
