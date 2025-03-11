import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import hannibal from "/public/hannibal.jpg"

export default function PrintsStore(){
    return(
        <>
        <div>
            <div>
                <h1>Prints</h1>
                <section className="d-flex flex-column">
                    <Link to="https://www.artpal.com/isidorax" target="_blank">Visit Official Prints store</Link>
                    <Link to="https://www.inprnt.com/gallery/axis/" target="_blank">Muse Lux Unique Prints</Link>
                </section>
                <p>Worldwide shipping</p>
            </div>
            <div>
                <img src={hannibal} alt="say yes painting" className="img-fluid" width="300" height="auto"  />
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