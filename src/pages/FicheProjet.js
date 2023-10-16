import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import projetsData from '../projets.json';
import '../style/ficheprojets.css';

function FicheProjet() {
  const {id} = useParams();

  const projet = projetsData.find(projet => projet.id === id);

  if (!projet) {
    return <Navigate to="/*"/>
  }

    return (
      <div>
       <Slideshow pictures={projet.pictures} />
       <div className='ficheprojet'>
          <div className='ficheprojet__title'>
          <Title title={projet.title} subtitle={projet.subtitle}/>
          </div>
          <div className='ficheprojet__tags'>
          <Tags tags={projet.tags} />
          </div>
          <div className='ficheprojet__collapses'>
            <div className='ficheprojet__collapses--left'>
            <Collapse title='Description' content={projet.description.map((description, index) => (
                    <div className='ficheprojet__collapses--left2' key={index}>{description}</div>
                  ))}/>
            </div>
            <div className='ficheprojet__collapses--right'>
            <Collapse title='Compétences' 
                        content={projet.skills.map((skill, index) => (
                    <div className='ficheprojet__collapses--right2' key={index}>{skill}</div>
                  ))}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FicheProjet;