import { Link } from "react-router-dom"
export default function Footer() { 
    return (
        <footer className="text-secondary d-flex flex-row flex-wrap justify-content-center align-items-center">
            <div>
                <section className="d-flex flex-row align-items-center justify-content-center">
                    <Link to="https://www.instagram.com/is_axis/" target="_blank"><i className="bi bi-instagram me-1"></i></Link>
                    <Link to="https://www.x.com/isidoraxis/" target="_blank"><i className="bi bi-twitter-x"></i></Link>
                </section>
                <section>
                    <span className="me-1">Made by Axis</span>
                    <span>© 2025</span>
                </section>
            </div>
        </footer>
    )
}