import {connectToDatabase} from "../../utils/mongodb"

export default async(req,res)=>{
    const {db} = await connectToDatabase();

    const tours = await db
    .collection("tours")
    .find()
    .toArray();

    res.json(tours);
}
