import style from '../styleAppStore.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const About = () => {
  return (
    <div className={style.about}>
      <h2>About Us</h2>
      <br />
      <br />
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cum...
      </h4>
      <br />
      <br />
      <div className={style.aboutLinks}>
        <Link to="team">Team</Link>
        <br />
        <Link to="mission">Mission</Link>
        <br />
        <br />
        <Suspense fallback={<div>Loading page....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default About;
