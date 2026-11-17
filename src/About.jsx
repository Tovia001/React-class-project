import {Link} from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Our portal helps students manage their academic journey and access essential resources.</p>
      <p>Students can view their course schedules, grades, and other important information.</p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
}

export default About;