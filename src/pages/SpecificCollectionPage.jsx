import SpecificCollection from '../components/art/SpecificCollection';
import { useParams } from 'react-router-dom';

export default function SpecificCollectionPage() {

    const{ nftCollection } = useParams();
    let data;
    if(`${nftCollection}` === "muse-lux") {
        data = "muse lux"
    }
    if(`${nftCollection}` === "just-for-fun") {
        data = "just for fun"
    }
    if(`${nftCollection}` === "anima-mundi") {
        data = "anima mundi"
    }
    if(`${nftCollection}` === "no-fantasy-required") {
        data = "no fantasy required"
    }

    console.log(data)

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <SpecificCollection 
                collection={data}/>
            </div>
        </>
    )
}