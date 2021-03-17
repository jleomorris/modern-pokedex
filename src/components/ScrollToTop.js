import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import upArrow from '../img/up-arrow.png';

const ScrollToTop = () => {
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    const innerDetails = document.querySelectorAll('.inner-details')[0];

    innerDetails.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledScrollToTop className="scroll-to-top">
      <div
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={scrollToTop}
      >
        <img src={upArrow} alt="Go to top" />
      </div>
    </StyledScrollToTop>
  );
};

// Styled components
const StyledScrollToTop = styled.div`
  background: #d2d2d2eb;
  padding: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 80%;
  right: 0px;
  transform: translateY(-80%);
  cursor: pointer;

  img {
    height: 60px;
    width: 60px;

    @media (max-width: 1500px) {
      height: 35px;
      width: 35px;
    }
  }
`;

export default ScrollToTop;
