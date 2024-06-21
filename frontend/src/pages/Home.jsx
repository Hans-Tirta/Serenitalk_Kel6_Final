import heroImg01 from "../assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from 'react-router-dom';
import { BsArrowRight, } from 'react-icons/bs'
import FaqList from '../components/Faq/FaqList';


const Home = () => {
  return (
    <>

      {/* hero section */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px] item-center justify-between">
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-textColor font-[800] md:text-[60px] md:leading-[70px]'>
                  Discover Your Path to Mental Wellness                </h1>
                <p className='text__para'>
                  Find a new way to prioritize your mental health with Serenitalk. Connect with licensed therapist online, book appointments effortlessly, and embark on a journey towards emotional well-being. Take control of your mental wellness journey today.
                </p>

                <Link to='/therapists'>
                  <button className='btn'>Find A Therapist</button>
                </Link>

              </div>
              {/* hero counter */}

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor'>
                    10+
                  </h2>
                  <span className='w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor'>
                    75+
                  </h2>
                  <span className='w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor'>
                    99%
                  </h2>
                  <span className='w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>


              </div>
            </div>
            {/* hero content */}

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt='' />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className="container">
          <div className="mx-auto">
            <h2 className='heading text-center text-textColor'>How To Use Our Service</h2>
            <p className='text__para text-center'>Follow these steps to successfully book and attend an appointment with our psychologists</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt='' style={{ maxWidth: '300px', minHeight: '200px', maxHeight: '200px', width: 'auto' }}/>
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>1. Search a Therapist</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Find licensed therapist matching your needs, expertise, and availability.</p>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt='' style={{ maxWidth: '300px', minHeight: '200px', maxHeight: '200px', width: 'auto' }} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>2. Book an Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Schedule therapy sessions seamlessly according to your preferred time slots.</p>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt='' style={{ maxWidth: '300px', minHeight: '200px', maxHeight: '200px', width: 'auto' }} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>3. Join Zoom Sessions</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Connect securely for virtual therapy sessions with your chosen psychologist.</p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* faq section */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-full'>
              <h2 className='text-center heading'>
                Frequently Asked Questions
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home