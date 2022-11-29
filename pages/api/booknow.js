// eslint-disable-next-line import/no-anonymous-default-export
export default function (req,res){
    const {
        fullName,
        email,
        date,
        shipResortName,
        arrTour, 
        bTransport,
        guestMore5yrs,
        guestLess5yrs
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
    \nDate for the reservation: ${date}
    \nShip/Resort's name: ${shipResortName}
    \nTour(s) reserved: ${arrTour}
    \nTransportaion needed: ${bTransport?'Yes':'No'}
    \nGuests 5 years and older: ${guestMore5yrs}
    \nGuests under 5 years of age: ${guestLess5yrs}`
    const mailData = {
        from: "gtallenpadi13@gmail.com",
        to: email,
        subject: `${fullName}'s booking`,
        text: mailBody,
    }
    transporter.sendMail(mailData,(err,info)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })

    res.status(200);
}