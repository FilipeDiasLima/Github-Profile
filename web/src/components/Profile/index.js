import React from 'react';
import { FiStar, FiUsers, FiBook } from 'react-icons/fi';

import Repository from '../Repository';

import { Container, InfoMain, InfoSecundary } from './styles';

export default function Profile() {
  return (
    <Container>
      <InfoMain>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <p>diego3g</p>
          <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</p>
        </div>
        <button type="button">View on Github</button>
      </InfoMain>

      <InfoSecundary>
        <ul className="statusInfo">
          <li>
            <FiStar color="#FFF" size={35} />
            <p>434</p>
          </li>

          <li>
            <FiUsers color="#FFF" size={35} />
            <p>14.403</p>
          </li>

          <li>
            <FiBook color="#FFF" size={35} />
            <p>19 Repositories</p>
          </li>
        </ul>

        <strong>Some repositories</strong>

        <Repository />
        <Repository />
        <Repository />


      </InfoSecundary>

    </Container>
  );
}