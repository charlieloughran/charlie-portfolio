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
          <h2>Hey, I'm Charlie!</h2>
          <p>
I care a lot about design.

 

          </p>
          <p>Whatever I'm working on, I think about the whole process. Not just how it looks, but how it's built, delivered, and maintained with as little friction as possible.</p>
          <p>
I've worked across print, brand, marketing, and digital, and what I've taken from all of it so far is that thoughtful design genuinely makes a difference. I'm still early in my journey, but I bring a lot of curiosity, care, and a willingness to learn from everyone around me.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
