function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Get in touch with us!</p>
      
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Contact;