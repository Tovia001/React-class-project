import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <p>Your one-stop platform for managing student affairs and academic resources.</p>
      <Link to="/about">
        <button>Learn more about us</button>
      </Link>
    </div>
  );
}

export default Home;
