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
I believe every product deserves to be the best version of itself, and good design is how you get there. Working across print, brand, marketing, and digital product design, I've seen the same thing play out every time: thoughtful design makes life easier, thoughtless design makes it harder.
          </p>
          <p>
           I put a lot of heart into what I do, and I think the best work comes from teams that value each other as much as they value the outcome. I'm looking to move into UX and product roles where design can have a real impact, helping build a future that works a little better for everyone.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
