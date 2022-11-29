// eslint-disable-next-line import/no-anonymous-default-export
export default function (req,res){
    const {
        fullName,
        email,
        tourDate,
        shipResortName,
        arrTours, 
        transportationNeeded,
        nGuestsU5yrs,
        nGuestsO5yrs,
    } = req.body;
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        secure:true
    });
    const mailBody= `Details of booking:
    \nReservation made by: ${fullName}
    \nEmail: ${email},
    \nDate for the reservation: ${tourDate}
    \nShip/Resort's name: ${shipResortName}
    \nTour(s) reserved: ${arrTours.join(', ')}
    \nTransportaion needed: ${transportationNeeded?'Yes':'No'}
    \nGuests 5 years and older: ${nGuestsO5yrs}
    \nGuests under 5 years of age: ${nGuestsU5yrs}`
    const mailData = {
        from: email,
        to: "gtallenpadi13@gmail.com",
        subject: `${fullName}'s booking`,
        text: mailBody,
    }
    transporter.sendMail(mailData,(err,info)=>{
        if (err){
            console.log(err);
            res.status(500).json({message:"Something went wrong"})
        }
        else{
            console.log(info);
            res.status(200).json({message:"Success"});
        }
    })
    res.status(200).json({message:"Hello bro"});
}