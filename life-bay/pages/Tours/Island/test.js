import { connectToDatabase } from "../../../utils/mongodb";
export default function test ({tours}) {
    return (
        <div>
            <h1>Tours</h1>

            <ul>
                {tours.map((tour)=>(
                    <li>
                        <h2>{tour.name}</h2>
                        <p>{tour.description}</p>
                        <span>{tour.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps(){
    const {db} = await connectToDatabase();
    
    const tours = await db
    .collection("tours")
    .find()
    .toArray();
    
    return{
        props:{
            tours:JSON.parse(JSON.stringify(tours)),
        },
    };
}

