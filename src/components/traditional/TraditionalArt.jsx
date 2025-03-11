import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import traditional from "/public/traditional.jpg"

export default function TraditionalArt(){
    return(
        <>
        <div>
            <div>
                <h1>Traditional Art</h1>
                <Link to="https://www.saatchiart.com/en-cl/isidorax" target="_blank">Visit Official store</Link>
                <p>Worldwide shipping</p>
            </div>
            <div>
                <img src={traditional} alt="say yes painting" className="img-fluid" width="300" 
                        height="auto"  />
            </div>
            <section className="d-flex flex-row align-selft-center justify-content-center mt-5">
                        <div className="m-2">
                            <Button className="text-white" as={ Link } to='/' variant="outline-light">Return</Button>
                        </div>
            </section>
        </div>
        </>
    )
}