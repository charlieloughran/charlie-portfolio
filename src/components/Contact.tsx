import Button from "./Button";

import "../styles/Contact.css";


const Contact = () => {
  return (
    <section id="contact" className="contact-section-minimal">
      <div className="contact-inner-minimal">
        <h2>Let's Connect</h2>
         <p> I’m always open to learning something new and connecting with others - happy to chat. :)
        </p>

        <div className="contact-buttons-minimal">
          {/* <a href="mailto:charlie.loughran@outlook.com">
            <Button type="button" variant="primary">
              Email me
            </Button>
          </a> */}

          <a
            href="https://linkedin.com/in/charlie-loughran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" variant="secondary">
              Connect with me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
