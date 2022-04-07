import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  // const [githubInfo, setGitHubInfo] = useState({
  //   stars: null,
  //   forks: null,
  //   britStars: null,
  //   britForks: null,
  // });

  // useEffect(() => {
  //   // if (process.env.NODE_ENV !== 'production') {
  //   //   return;
  //   // }

  //   const fetchData = async () => {
  //     const respGlobal = await axios('https://api.github.com/repos/lulasp/portfolio2022');
  //     const respBrit = await axios('https://api.github.com/repos/bchiang7/v4');

  //     setGitHubInfo({
  //       stars: respGlobal.data.stargazers_count,
  //       forks: respGlobal.data.forks_count,
  //       britStars: respBrit.data.stargazers_count,
  //       britForks: respBrit.data.forks_count,
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a href="https://github.com/lulasp/portfolio2022" target="_blank" rel="noreferrer">
          <div>Edited &amp; Improved by Luís Serpa Pinto</div>

          {/* {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )} */}
        </a>
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer">
          <div>Built by Brittany Chiang</div>

          {/* {githubInfo.britStars && githubInfo.britForks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.britStars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.britForks.toLocaleString()}</span>
              </span>
            </div>
          )} */}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
