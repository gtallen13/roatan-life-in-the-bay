import {connect} from '../../../utils/database';

export default async function (req,res){
    try {
        const {db} = await connect();
        const tours = await db.collection("tours").find().toArray();

        console.log(tours);
    } catch (error) {
        res.status(500);
        res.json({error: "Unable to fetch tours...sorry"});
    }
    
    res.json({tours:[]})
}
