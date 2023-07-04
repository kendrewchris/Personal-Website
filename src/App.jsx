import React from 'react';
import styles from './styles';
import { Navbar, About, Home, CursorLight, Education, Projects, Contact, Footer } from './components/index';

const App = () => (
  <div>
  <div className="bg-primary w-full overflow-hidden" >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar class/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home/>
      </div>
    </div>

    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  </div>
  </div>
);

export default App;

