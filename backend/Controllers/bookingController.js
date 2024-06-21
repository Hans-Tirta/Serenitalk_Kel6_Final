import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BookingSchema.js"

export const getCheckoutSession = async (req, res) => {
    try {
        // get current booked doctor
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
        })

        await booking.save()

        res.status(200).json({ success: true, message: 'Successfully paid' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Error" })
    }
}