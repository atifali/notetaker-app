import { useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitBanner from "../components/RateLimitBanner";

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RateLimitBanner />}
        </div>
    )
}

export default HomePage