// eslint-disable-next-line import/no-anonymous-default-export
export default function (req,res){
    const {email, fullName, description} = req.body;
    let nodemailer = require('nodemailer')
    console.log(description);
    const transporter = nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        secure:true
    });

    const mailData = {
        from: "gtallenpadi13@gmail.com",
        to: email,
        subject: `Questions from  ${fullName}`,
        text: description,
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