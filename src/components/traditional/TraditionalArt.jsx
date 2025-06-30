import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import traditional from "/public/traditional.jpg"

export default function TraditionalArt(){
    return(
        <>
        <div className="vh-100">
            <div>
                <h1>Traditional Art</h1>
                <Link to="https://www.saatchiart.com/en-cl/isidorax" target="_blank">Visit Official store</Link>
                <p>Worldwide shipping</p>
                <p className="text-secondary">(There are more pieces that the ones showcased down here!)</p>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                <section>
                    <img src={traditional} alt="say yes painting" className="img-fluid" width="300" 
                        height="auto"  />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751245210/patience_prints_fniu54.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244692/Connectionagosto9_c0aics.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244689/fromtheshadows_JULIO5_hc1y2n.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244682/Ninthwavepng_sufkcq.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                 <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244676/themiracleofthe_sun_png_xm6ipa.png" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244664/Smoke_marble_tebxs8.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244661/the_fight_mgpqln.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751245402/bowie2_zakebi.png" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244640/iN_F_we_trust_zksfa0.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
                <section className="m-1">
                    <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1751244610/untitled_ybod2x.jpg" alt="gif"  
                            width="300" 
                            height="auto" 
                            loading="lazy" 
                            class="rounded mt-2"
                           />
                </section>
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