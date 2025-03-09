import { Link } from "react-router-dom"
import './nft-collections.css'
import { Button } from "react-bootstrap"
import justforfun from "/public/justforfun.avif"
import animamundi from "/public/animamundi.avif"
import allart from "/public/allnfts.jpg"
import muselux from "/public/muselux.avif"
import nofantasy from "/public/no-fantasy-required.jpg"

export default function NftCollections() { 
    return (
        <>
        <div className="vh-100">
            <section className="d-flex flex-row align-selft-start justify-content-start">
                    <div className="m-2">
                        <Button className="text-white" as={ Link } to='/' variant="outline-light">Return</Button>
                    </div>
            </section>
          <p>Choose a collection</p>
          <div className="d-flex flex-column mb-5">
            <section className="collection-container p-0 m-2">
                    <Link to="/nfts">
                        <div className="border-collections">
                            <img src={allart} className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">All Nfts | No collection</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/anima-mundi">
                        <div className="border-collections">
                            <img src={animamundi} className="img-fluid" />
                            
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Anima Mundi</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/muse-lux">
                        <div className="border-collections">
                            <img src={muselux} className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Muse Lux</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/just-for-fun">
                        <div className="border-collections">
                            <img src={justforfun} className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Just for fun</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/no-fantasy-required">
                        <div className="border-collections">
                            <img src={nofantasy} className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">no-fantasy-required</p>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
        </>
    )
}