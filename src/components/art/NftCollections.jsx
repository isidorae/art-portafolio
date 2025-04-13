import { Link } from "react-router-dom"
import './nft-collections.css'
import { Button } from "react-bootstrap"
import justforfun from "/public/justforfun.avif"
import animamundi from "/public/animamundi.avif"
import allart from "/public/all_nfts_resized.jpg"
import muselux from "/public/muselux.avif"
import nofantasy from "/public/no-fantasy-required.jpg"
import Footer from "../Footer"

export default function NftCollections() { 
    return (
        <>
        <div className="vh-100">
            <section className="d-flex flex-row align-selft-start justify-content-start">
                    <div className="m-2">
                        <Button className="text-white" as={ Link } to='/' variant="outline-light">Return</Button>
                    </div>
            </section>
          <div className="d-flex flex-column mb-5">
            <h2>Pick a Collection</h2>
            <section className="d-flex flex-row align-items-center justify-content-center">
                <div>
                    <a href="https://objkt.com/users/tz1dCSZqaEQSK5xBD5KA5dPHrVyp4MeY6JSk" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236354/objkt_blrldn.png" 
                            alt="objkt logo" 
                            className="img-fluid m-2" 
                            style={{ width: 'auto', height: '30px' }} 
                        />
                    </a>
                </div>
                <div>
                    <a href="https://opensea.io/is_axis" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236354/opensealogo_jdhsg8.png" 
                        alt="opensea logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://rarible.com/is-axis/owned" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236355/rariblelogo_dlh8jb.png" 
                        alt="rarible logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://teia.art/axis" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236355/teia_w9y2gn.png" 
                        alt="teia logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://exchange.art/isidora-axis/nfts" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236359/exchange_art_alg7wl.png" 
                        alt="exchange art logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://makersplace.com/axis" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742236361/makersplace_logo_zptueq.png" 
                        alt="makersplace logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
                <div>
                    <a href="https://foundation.app/@axis" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1744579815/foundation_logo_keydvo.png" 
                        alt="foundation logo" 
                        className="img-fluid m-2" 
                        style={{ width: 'auto', height: '30px' }}
                        />
                    </a>
                </div>
            </section>
            <section className="collection-container p-0 m-2">
                    <Link to="/nfts">
                        <div className="border-collections">
                            <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742235917/all_nfts_resized_qzbj7p.jpg" alt="ninth wave painting" className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">All Nfts | No collection</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/anima-mundi">
                        <div className="border-collections">
                            <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742235917/animamundi_laphzv.avif" alt="anima mundi collection" className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Anima Mundi</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/muse-lux">
                        <div className="border-collections">
                            <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742235939/muselux_eahjc2.avif" alt="muse lux collection" className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Muse Lux</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/just-for-fun">
                        <div className="border-collections">
                            <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742235939/justforfun_z0tx89.avif" alt="just for fun collection" className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">Just for fun</p>
                        </div>
                    </Link>
                </section>
                <section className="collection-container p-0 m-2">
                    <Link to="/nfts/no-fantasy-required">
                        <div className="border-collections">
                            <img src="https://res.cloudinary.com/djnxhqgym/image/upload/v1742235939/no-fantasy-required_no3sn0.jpg" alt="no fantasy required collection" className="img-fluid" />
                        </div>
                        <div className="text-on-image">
                            <p className="xxl-font text-center">no-fantasy-required</p>
                        </div>
                    </Link>
                </section>
            </div>
            <div className="mb-5 pb-5">
            <Footer />
            </div>
        </div>
        </>
    )
}