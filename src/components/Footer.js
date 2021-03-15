import React from 'react';
import styled from 'styled-components';
// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Images
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jleomorris"
        >
          <img src={github} alt="github icon    " />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/james-morris-62a66b166/"
        >
          <img src={linkedin} alt="linkedIn" style={{ height: '35px' }} />
        </a>
      </div>
      <div className="copyright-contact">
        <p>© James Morris 2020</p>
        <a href="mailTo:james-morris2010@hotmail.co.uk">
          {/* <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              display: 'inline-block',
              margin: '0rem 0.5rem',
              fontSize: '1rem',
            }}
          /> */}
          <p style={{ display: 'inline-block', wordBreak: 'break-all' }}>
            james-morris2010@hotmail.co.uk
          </p>
        </a>
        <p>
          All product names, logos, and brands are property of their respective
          owners. All company, product and service names used in this website
          are for identification purposes only. Use of these names, logos, and
          brands does not imply endorsement
        </p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #070707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 8rem;

  a,
  p {
    color: white;
  }
  @media (max-width: 800px) {
    padding: 1rem 0rem;
  }
  a {
    text-decoration: none;
  }
  svg {
    font-size: 2rem;
    color: white;
  }
  .copyright-contact {
    flex: 2;
    padding: 0;
    p {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
  .links {
    padding: 0;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;

    a {
      width: 30%;
      text-align: center;
      color: white;
      margin: 1rem 2rem;
    }
  }
`;

export default Footer;
