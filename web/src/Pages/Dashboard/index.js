import React from 'react';
import { FiSearch } from 'react-icons/fi'

import Profile from '../../components/Profile'

import gitlogo from '../../assets/github-logo.png';

import { Header, Form } from './styles';

export default function Dashboard() {
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

      <Form>
        <input placeholder="Search profile..." />

        <button type="submit">
          <FiSearch color="#FFF" size={30} />
        </button>
      </Form>

      <Profile />

    </>
  )
}