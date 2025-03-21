import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div className='text-white'>
      <div className='py-20 bg-black text-center px-4'>
        <h1 className='text-4xl sm:text-5xl leading-snug font-bold mb-5'>Contact Us</h1>
      </div>

      {/* contact content */}
      <div className='my-10 max-w-7xl mx-auto px-4'>
        <div className='flex flex-col items-center gap-8'>
          <div className='w-full sm:w-3/4 md:w-1/2'>
            <img src={contactImg} alt='Contact' className='w-full h-auto' />
          </div>
          <div className='w-full sm:w-3/4 md:w-1/2'>
            <form action='https://formbold.com/s/FORM_ID' method='POST' className='w-full'>
              <div className='mb-4'>
                <label htmlFor='name' className='mb-2 block text-base font-medium text-white'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Full Name'
                  className='w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='mb-2 block text-base font-medium text-white'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='example@domain.com'
                  className='w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='subject' className='mb-2 block text-base font-medium text-white'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Enter your subject'
                  className='w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='mb-2 block text-base font-medium text-white'>
                  Message
                </label>
                <textarea
                  rows='4'
                  name='message'
                  id='message'
                  placeholder='Type your message'
                  className='w-full resize-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md'
                ></textarea>
              </div>
              <div>
                <button className='w-full hover:shadow-lg rounded-md bg-indigo-600 hover:bg-orange-600 py-2 px-6 text-base font-semibold text-white outline-none'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
