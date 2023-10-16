import React from 'react';
import Collapse from '../components/Collapse';
import '../style/collapse.css';


function About() {
    return (
      <main className='main__about'>
        <div className='about'>
          <Collapse title='Présentation' content={
            <div>
                <p>
                Développeur web formé à Open Classrooms, je vous propose mes services en HTML, CSS, Javascript, React, Node et Mongo DB.
                </p>
                <p>
                Ancien avocat, j'ai tiré de mon expérience dans le droit une grande rigueur et une solide capacité d'analyse.
                Artiste plasticien, j'ai également une passion pour le design et un regard original que je souhaite mettre au service de projets front-end inspirants.
                </p>
                <p>
                Ayant des origines argentines et anglaises, je suis capable de travailler en trois langues (français, anglais, espagnol).
                </p>
                <p>
                N'hésitez pas à me contacter pour tout renseignement complémentaire, je serai ravi d'échanger avec vous!
                </p>
            </div>
            } />
          <Collapse title='Formation' content={
            <div>
                <p>2023 – Formation Développeur Web, OpenClassrooms</p>
                <p>2017 – Diplôme d'avocat, Université de Buenos Aires (équivalent Master)</p>
            </div>
            } />
          <Collapse title='Parcours' content={
            <div>
                <p>
                Après plusieurs années d'assistant juridique en cabinet d'avocat et au sein de plusieurs tribunaux, parmi lesquels la Cour de cassation argentine, je me suis installé en France en 2021.
                </p>
                <p>
                Décidé à me reconvertir, j'ai d'abord exercé plusieurs professions (professeur d'espagnol, puis réceptionniste), avant de trouver ma voie dans le développement web.
                </p>
                <p>
                Au terme d'une formation très complète au sein d'Open Classrooms, je suis à présent en recherche de premières expériences professionnelles dans le domaine.
                </p>
                <p>
                Je poursuis en parallèle une carrière d'artiste plasticien : j'ai participé à plusieurs expositions collectives en région parisienne et en Bretagne, et ai été primé au concours "Clichy a du talent" 2023.
                </p>
            </div>
            } />
        </div>
      </main>
    )
  }
  
  export default About;