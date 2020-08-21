import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiChevronRight } from 'react-icons/fi';

import bolinha from '../../assets/bolinha.png';
import gitnetwork from '../../assets/git-network.png';

import { Container } from './styles';

export default function Repository() {
  return (
    <Container>
      <Link>
        <div className="content">
          <div className="infos">
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <footer>
            <div>
              <img src={bolinha} alt="Linguage" />
              <p>Typescript</p>
            </div>

            <div>
              <FiStar color="#DDFF0C" size={14} />
              <p>3.725</p>
            </div>

            <div>
              <img src={gitnetwork} alt="fork" />
              <p>397</p>
            </div>

          </footer>
        </div>
        <FiChevronRight size={30} />
      </Link>
    </Container>
  );
}