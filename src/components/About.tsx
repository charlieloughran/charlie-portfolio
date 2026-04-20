import "../styles/About.css";



const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Image */}
        <div className="about-image">
          <img src="/images/charlie-loughran.png" alt="Charlie sat on a wall in front of Charles' Bridge"></img>
        </div>
                

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m a UX & Digital Designer passionate about creating intuitive and
            delightful experiences. With experience across web, mobile, and
            interactive media, I focus on clarity, usability, and design that
            connects with users.
          </p>
          <p>
            I love turning complex problems into simple, elegant solutions, and
            constantly learning new tools and techniques to stay at the
            forefront of design and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
