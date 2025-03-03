import { Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

export default function Main() { 
    return (
        <div className="d-flex flex-column text-center align-items-center">
            <h1>Isidora Axis</h1>
            <p>artist</p>
            <section className="d-flex flex-row">
                <div className="mx-1">
                    <Button className="text-white" as={ Link } to='/nfts' variant="outline-light">NFTs</Button>
                </div>
                <div className="mx-1">
                    <Button className="text-white" as={ Link } to='/traditional' variant="outline-light">Traditional Art</Button>
                </div>
                <div className="mx-1">
                    <Button className="text-white" as={ Link } to='/fineart-prints' variant="outline-light">Fine Art Prints</Button>
                </div>
            </section>
            <div className="mt-2">
                <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1740931284/muselux59_y7fqf0.webp" alt="gif"  
                            width="220" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                            style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="mt-4">
                <p className="m-0 text-secondary">2024 Group Exhibition, Show us your best work, AWITA NEW YORK STUDIO, NYC</p>
                <p className="m-0 text-secondary">2023 Group Exhibition, WXw3 Exhibition, NFT FACTORY Gallery, NFT.Paris Event, Paris</p>
                <p className="m-0 text-secondary">2023 Group Exhibition, WXw3 Exhibition, The Glass Ceiling NoMad, NFT.NYC event, NYC</p>
            </div>
        </div>
        
    )
}