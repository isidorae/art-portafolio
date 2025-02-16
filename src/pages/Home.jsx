import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Home() { 
    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Main/>
        </div>
        <Footer />
        </>
    )
}