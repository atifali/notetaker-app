import { useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitBanner from "../components/RateLimitBanner";

const HomePage = () => {
    const [rateLimited, setRateLimited] = useState(false);
    return (
        <div className="min-h-screen">
            <Navbar />
            {rateLimited && <RateLimitBanner />}
        </div>
    )
}

export default HomePage