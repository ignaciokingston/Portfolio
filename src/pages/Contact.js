import React from 'react';
import Banner from '../components/Banner';
import Banner2 from '../assets/Banner2.jpg';
import '../style/contact.css';

const Contact = () => {

return (
    <main className='main__home'>
      <Banner imageUrl={Banner2} title= ''/>
      <div className='contact'>
        <h1 className='contact__title'>Contact</h1>
        <div className='contact__text'>
        <p>
          Si vous souhaitez échanger sur un projet, n'hésitez pas à me contacter directement par mail à kingston.ignacio2@gmail.com
        </p>
        <p>
        Vous pouvez aussi consulter ma page <a href="https://www.linkedin.com/in/ignacio-kingston/">LinkedIn.</a>
        </p>
        <p>
        Merci de votre visite et à bientôt !
        </p>
        </div>
    </div>
      </main>
  );
};

export default Contact
