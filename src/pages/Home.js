import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import Banner1 from '../assets/Banner.png';
import Card from '../components/Card';
import projetsData from '../projets.json';
import '../style/card.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const [projets, setProjets] = useState ([]);

  useEffect (() => {
    setProjets(projetsData);
  }, []);

  return (
    <main className='main__home'>
      <Banner imageUrl={Banner1} title="Ignacio Kingston - Développeur Web" />
    <h1 className= 'title__home'>Mes Projets</h1>
    <div className='projets-container'>
      {projets.map (projet => (
        <Card
          key={projet.id}
          id={projet.id}
          title={projet.title}
          cover={projet.cover}
        />
      ))}
      </div>
      <h2 className= 'competences'>Compétences</h2>
        <div className='competences__icons'>
          <div className='competences__icons--text'>
          <FontAwesomeIcon icon={faHtml5} size='2xl'/>
          <span>HTML5</span>
          </div>
          <div className='competences__icons--text'>
          <FontAwesomeIcon icon={faCss3Alt} size='2xl'/>
          <span>CSS3</span>
          </div>
          <div className='competences__icons--text'>
          <FontAwesomeIcon icon={faSquareJs} size='2xl'/>
          <span>Javascript</span>
          </div>
          <div className='competences__icons--text'>
          <FontAwesomeIcon icon={faReact} spin size='2xl'/>
          <span>React</span>
          </div>
          <div className='competences__icons--text'>
          <FontAwesomeIcon icon={faNodeJs} size='2xl'/>
          <span>Node.js</span>
          </div>
        </div>
    </main>
  );
};


export default Home

