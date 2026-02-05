import Button from "./Button";

import "../styles/Contact.css";


const Contact = () => {
  return (
    <section id="contact" className="contact-section-minimal">
      <div className="contact-inner-minimal">
        <h2>Get In Touch</h2>
        <p>
          I’m always open to discussing new projects, collaborations, or ideas.
        </p>

        <div className="contact-buttons-minimal">
          <a href="mailto:charlie.loughran@outlook.com">
            <Button type="button" variant="primary">
              Email me
            </Button>
          </a>

          <a
            href="https://linkedin.com/in/charlie-loughran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" variant="outline">
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
