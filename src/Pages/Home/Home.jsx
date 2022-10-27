import { Link } from "react-router-dom";
import BG from '../../assets/bg/home-bg.jpg';

const Home = () => {

  return (
    <div className="mt-[-58px] lg:mb-[-63px] mb-[-38px]">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${BG})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-4xl font-bold">Learning Frontend Development</h3>
            <p className="mb-5">Learning Frontend Development is the world best learning platform to learn frontend web development.</p>
            <Link to="/courses" className="btn btn-primary">All Courses</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
