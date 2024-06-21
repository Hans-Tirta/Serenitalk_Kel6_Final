const ContactUs = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>Have a question, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out to us using the contact form below, and our friendly team will get back to you as soon as possible. Whether you're seeking assistance with navigating our platform, have inquiries about our services, or simply want to connect, we're here to help.</p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>Your Email</label>
            <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1 border-primaryColor' />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>Subject</label>
            <input type="text" id='subject' placeholder='Let us know how we can help you' className='form__input mt-1 border-primaryColor' />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className='form__label'>Your Message</label>
            <textarea rows='6' type="text" id='message' placeholder='Leave a comment...' className='form__input mt-1 border-primaryColor' />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs