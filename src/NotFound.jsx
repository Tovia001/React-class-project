import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;