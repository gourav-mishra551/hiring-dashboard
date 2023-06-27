import React from 'react'
import './candidate.css'
import Data from './candidate.data';
import logo from '../../components/NavBar/logo.svg'
import { BrandImage } from '../../components/NavBar/NavbarStyle';
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Candidate = () => {
    const [query, setQuery] = useState('');
    return (
      <div className="app">
        <div>
					<Link to="/">
						<BrandImage className='home'  src={logo} alt="logo" />
					</Link>
					</div>
          <div className='search'>
        <input
          placeholder="Enter query"
          className="search-bar"
          onChange={event => setQuery(event.target.value)}
        />
        <i class="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
        <div className='data'>
        {Data.filter(data => {
          if (query === '') {
            return data;
          } else if (data.title.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        })
          .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  
          .map((data, index) => (
            <div className="box" key={index}>
              <h3>{data.title}</h3>
              <p>{data.date}</p>
              <div className='hire'>
              <p>{data.author}</p>
              <button> Hire</button>
              </div>
              
            </div>
          ))}
          
          </div>
          
      </div>
    )
}

export default Candidate