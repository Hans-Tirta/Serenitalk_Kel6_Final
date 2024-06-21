import { useState } from 'react'
import starIcon from '../assets/images/Star.png'
import TherapistAbout from './Therapists/TherapistAbout'
import Feedback from './Therapists/Feedback'
import SidePanel from './Therapists/SidePanel'
import PaymentPageSidePanel from './PaymentPageSidePanel'
import { BASE_URL } from '../config';
import useFetchData from '../hooks/useFetchData'
import Loader from '../components/Loader/Loading'
import Error from '../components/Error/Error'
import { useParams } from 'react-router-dom'
import '../App.css'

const PaymentPage = () => {

    const [tab, setTab] = useState('about')

    const { id } = useParams()

    const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`)

    const {
        name,
        qualifications,
        experiences,
        timeSlots,
        reviews,
        bio,
        about,
        averageRating,
        totalRating,
        specialization,
        ticketPrice,
        photo,
    } = doctor

    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>

                {loading && <Loader />}
                {error && <Error />}

                {!loading && !error && (
                    <div className='grid md:grid-cols-3 gap-[50px]'>
                        <div className='md:col-span-2'>
                            <p className='text-[32px] font-bold mb-4'>Pay with Credit Card</p>

                            <form action="#" className='space-y-4'>
                                <div>
                                    <label htmlFor="email" className='form__label'>Your Email</label>
                                    <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1 border-primaryColor' />
                                </div>
                                <div>
                                    <label htmlFor="information" className='form__label'>Card Information</label>
                                    <input type="text" id='subject' placeholder='1234 1234 1234 1234' className='form__input mt-1 border-primaryColor' />
                                    <input type="text" id='subject' placeholder='MM/YY' className='form__input mt-1 border-primaryColor' />
                                    <input type="text" id='subject' placeholder='CVC' className='form__input mt-1 border-primaryColor' />
                                </div>

                                <div>
                                    <label htmlFor="name" className='form__label'>Name on card</label>
                                    <input type="text" id='name' placeholder='Name on credit card' className='form__input mt-1 border-primaryColor' />
                                </div>

                                <div className="sm:col-span-2">

                                    <p className="form__label">Country or Region</p>
                                    <select
                                        name="gender"
                                        value={FormData.gender} className="form__input py-3.5 border-primaryColor text-textColor">
                                        <option value="">Select</option>
                                        <option value="male">Indonesia</option>
                                        <option value="female">USA</option>
                                        <option value="other">Malaysia</option>
                                    </select>
                                </div>

                                {/* Checkbox */}
                                <p className="form__label">Save Payment Info</p>
                                <div className="border border-primaryColor rounded p-3 flex items-center h-18">
                                    
                                    <input
                                        type="checkbox"
                                        id="nameOnCard"
                                        name="nameOnCard"
                                        className="h-6 w-6 text-primaryColor border-primaryColor focus:ring-primaryColor"
                                    />
                                    <label htmlFor="nameOnCard" className="ml-3 text-sm text-textColor font-regular">
                                        Securely save my information for 1-click checkout
                                    </label>
                                </div>


                            </form>

                        </div>

                        <div>
                            <PaymentPageSidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
                        </div>
                    </div>)
                }
            </div >
        </section >
    )
}

export default PaymentPage