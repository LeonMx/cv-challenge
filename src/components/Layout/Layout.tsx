import React from 'react';
import {
    Switch,
    Link,
    Route
} from "react-router-dom";
import '../../App.css';
import Education from '../Education/Education';
import Jobs from '../Jobs/Jobs';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

function Layout() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="app-container">
          <header className="header">
            <nav>
              <ul>
                <li><Link to={`/education`}>Educación</Link></li>
                <li><Link to={`/jobs`}>Experiencia</Link></li>
                <li><Link to={`/portfolio`}>Portafolio</Link></li>
                <li><Link to={`/skills`}>Conocimientos y habilidades</Link></li>
              </ul>
            </nav>
          </header>
          <aside className="aside">
            <div className="">
              <div className="aside-content">
                <div className="profile-image">
                  <img src={process.env.PUBLIC_URL + '/assets/vector.png'} alt=""/>
                  <img src={process.env.PUBLIC_URL + '/assets/vector-line1.png'} alt=""/>
                  <img src={process.env.PUBLIC_URL + '/assets/vector-line2.png'} alt=""/>
                  <img src={process.env.PUBLIC_URL + '/assets/profile-picture.png'} alt=""/>
                </div>
                <div className="profile-information">
                  <h1>Luis Carlos Ariza</h1>
                  <h3>Acerca de mi</h3>
                  <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ullamcorper nisi. In a ornare felis. Suspendisse tempor nisi ac lacus suscipit, ut elementum magna ullamcorper. Integer ultrices sem a sodales tincidunt.</p>
                  <div className="profile-contact">
                    <h3>Contacto</h3>
                    <p><i><img src={process.env.PUBLIC_URL + '/assets/mobile.png'} alt=""/></i><span>+52 5552102230</span></p>
                    <p><i><img src={process.env.PUBLIC_URL + '/assets/mail.png'} alt=""/></i><span>luis.carlos.ariza@gmail.com</span></p>
                    <p><i><img src={process.env.PUBLIC_URL + '/assets/linkedin.png'} alt=""/></i><span>www.linkedin.com/in/carlosariza</span></p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <article className="main">
            <div className="wrapper white">
                <Switch>
                    <Route exact path="/education" >
                        <Education />
                    </Route>
                    <Route exact path="/jobs" >
                        <Jobs />
                    </Route>
                    <Route exact path="/portfolio" >
                        <Portfolio />
                    </Route>
                    <Route exact path="/skills" >
                        <Skills />
                    </Route>
                </Switch>
            </div>
          </article>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
