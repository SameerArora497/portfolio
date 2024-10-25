import '../css/Home.css';

const Home = () => {
  return (
    <section section id="home" className="home-section py-5">
      <div className="container text-center">
        <h1 className="headline">
          I’m <span className="highlight">Sameer Arora</span>, Android Developer.
        </h1>
        <p className="description">
          I am an Android app developer and currently learning ReactJS for frontend and Node.js for backend development. I am a fresher, eager to grow and work on exciting projects.
        </p>
        <div className="btn-group mt-4">
          <a href="#contact" className="btn btn-gradient">Connect with me</a>
          <a href="#resume" className="btn btn-outline-light">My resume</a>
        </div>
      </div>
    </section>
  );
  
};

export default Home;
