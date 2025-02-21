import { Button } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

export default function Main() { 
    return (
        <div>
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
            <div>
            <img src="https://assets.objkt.media/file/assets-003/KT1HtDvksXmgmk6H6vp48r1agxp772XLQgN1/62/thumb288" alt="gif"  
                        width="220" 
                        height="auto" 
                        loading="lazy" 
                        class="rounded mt-2"
                        style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
}