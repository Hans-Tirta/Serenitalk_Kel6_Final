/* eslint-disable react/prop-types */
import convertTime from "../../utils/convertTime"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
    const [selectedSlot, setSelectedSlot] = useState('');

    const handleSlotChange = (event) => {
        setSelectedSlot(event.target.value);
    };

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between mb-5">
                <p className='text__para mt-0 font-bold text-[28px]'>Price</p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-textColor font-bold'>Rp{ticketPrice}</span>
            </div>

            <hr style={{ border: '1px solid gray' }} />

            <div className='mt-[30px]'>
                <p className='text__para mt-0 font-semibold text-headingColor'>Available Slots:</p>
                <ul className='mt-3'>
                    {timeSlots?.map((item, index) => (
                        <li key={index} className='flex items-center justify-between mb-2'>
                            <label>
                                <input
                                    type="radio"
                                    name="timeSlot"
                                    value={item.day + ' ' + item.startingTime + ' - ' + item.endingTime}
                                    checked={selectedSlot === (item.day + ' ' + item.startingTime + ' - ' + item.endingTime)}
                                    onChange={handleSlotChange}
                                />
                                <span className='text-[15px] leading-6 text-textColor font-semibold'>
                                    {item.day.charAt(0).toUpperCase() + item.day.slice(1)}: {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <button className='btn px-2 w-full rounded-md'>Book Appointment</button> */}

            <Link to={`/payment/${doctorId}`}>
                <button className='btn px-2 w-full rounded-md'>Book Appointment</button>
            </Link>
        </div>
    )
}

export default SidePanel