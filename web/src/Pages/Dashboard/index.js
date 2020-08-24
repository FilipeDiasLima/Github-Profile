import React, { useState } from 'react';
import { FiSearch, FiStar, FiUsers, FiBook, FiChevronRight } from 'react-icons/fi'
import api from '../../services';

import bolinha from '../../assets/bolinha.png';
import gitnetwork from '../../assets/git-network.png';
import gitlogo from '../../assets/github-logo.png';

import { Header, Form, Profile, InfoMain, InfoSecundary, Repositories, Error } from './styles';

export default function Dashboard() {
  const [profile, setProfile] = useState(false);
  const [newProfile, setNewProfile] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [infoProfile, setInfoProfile] = useState();

  async function handleProfile(e) {
    e.preventDefault();

    if (!newProfile) {
      setInputError('Write a git_login user');
      return;
    }

    try {
      const response = await api.get(`users/${newProfile}`);
      const responseRepo = await api.get(`users/${newProfile}/repos`);

      const {
        avatar_url,
        login,
        name,
        html_url,
        repos_url,
        bio,
        public_repos,
        followers,
      } = response.data;

      let starCount = 0;
      let i = 0;
      for (i = 0; i < responseRepo.data.length; ++i) {
        starCount += responseRepo.data[i].stargazers_count;
      }

      const profile = {
        avatar_url,
        login,
        name,
        html_url,
        repos_url,
        bio,
        public_repos,
        followers,
        starCount,
      }

      setInfoProfile(profile);
      setProfile(true);
      setRepositories(responseRepo.data);

      setInputError('');
    } catch (err) {
      setInputError('User not found...:(');
    }
  }


  return (
    <>
      <Header>
        <div className="title">
          <img src={gitlogo} alt="Github Logo" />
          <h1>Github Profiles</h1>
        </div>

        <div className="description">
          <p>search  Github profiles</p>
        </div>
      </Header>

      <Form hasError={!!inputError} hasCorrect={infoProfile} onSubmit={handleProfile}>
        <input
          value={newProfile}
          onChange={e => setNewProfile(e.target.value)}
          placeholder="Search profile..."
        />

        <button type="submit">
          <FiSearch color="#FFF" size={30} />
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {profile &&
        <Profile>
          <InfoMain>
            <img
              src={infoProfile.avatar_url}
              alt={infoProfile.name}
            />
            <div>
              <strong>{infoProfile.name}</strong>
              <p>{infoProfile.login}</p>
              <p>{infoProfile.bio}</p>
            </div>
            <a href={infoProfile.html_url} target="_blank" rel="noopener noreferrer"><button type="button">View on Github</button></a>
          </InfoMain>

          <InfoSecundary>
            <ul className="statusInfo">
              <li>
                <FiStar color="#FFF" size={35} />
                <p>{infoProfile.starCount}</p>
              </li>

              <li>
                <FiUsers color="#FFF" size={35} />
                <p>{infoProfile.followers}</p>
              </li>

              <li>
                <FiBook color="#FFF" size={35} />
                <p>{infoProfile.public_repos} Repositories</p>
              </li>
            </ul>

            <strong>Repositories</strong>

            <Repositories>
              {repositories.map(repository => (
                <a key={repository.id} href={repository.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="infos">
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>

                    <footer>
                      {repository.language &&
                        <div>
                          <img src={bolinha} alt="Language" />
                          <p>{repository.language}</p>
                        </div>
                      }

                      <div>
                        <FiStar color="#DDFF0C" size={14} />
                        <p>{repository.stargazers_count}</p>
                      </div>

                      <div>
                        <img src={gitnetwork} alt="fork" />
                        <p>{repository.forks_count}</p>
                      </div>
                    </footer>
                  </div>

                  <FiChevronRight size={30} />
                </a>
              ))}
            </Repositories>


          </InfoSecundary>
        </Profile>}

    </>
  )
}