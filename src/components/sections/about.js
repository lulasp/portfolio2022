import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Hubspot', 'JavaScript (ES6+)', 'React', 'Drupal', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              As a web developer from Porto, Portugal, I have always been passionate about computers and the internet and their limitless 
              potential. With a degree in Multimedia Communication Technologies from <a href="https://www.ismai.pt/pt" target="_blank">ISMAI</a>,
              I have achieved my goal of becoming a web developer. 
              I am committed to using my skills and expertise to create exceptional digital experiences and to continuously evolve with 
              the ever-changing technology landscape.
            </p>

            <p>
              Currently, I am a web developer at <a href="https://www.visma.com/" target="_blank">Visma</a>, an international company 
              where I specialize in working with HubSpot. In addition to my daily work, I am also expanding my knowledge and skills. 
              Recently, I have begun learning Solidity through <a href='https://cryptozombies.io/' target="_blank">CryptoZombies.io</a> 
              which has been an exciting new challenge for me. 
            </p>
            
            <p>
              Prior to joining Visma, I worked at {' '}
              <a href="https://youlead.pt" target="_blank">YouLead</a>, a Digital Marketing Agency, where I developed a 
              website for a major insurance company in Portugal - <a href="https://okteleseguros.pt" target="_blank">OKteleseguros.pt</a>, 
              which was a highly rewarding experience and a significant accomplishment in my career. Before that, I had the opportunity 
              to work at a rapidly growing Dutch start-up - <a href="https://www.technologycatalogue.com/" target="_blank">TechnologyCatalogue.com</a>,
              a well-known and trusted Portuguese health software player - <a href="https://www.glintt.com/" target="_blank">Glintt</a>, 
              and a small yet relevant web solutions company - <a href="https://fastluza.com" target="_blank">Fastluza</a>.
              Through these experiences, I have gained a wealth of knowledge and skills in the field of web development and design.
            </p>

            <p>Here are a few technologies I have recently been utilizing:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
