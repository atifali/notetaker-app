import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitBanner from "../components/RateLimitBanner"
import axios from "axios"
import toast from "react-hot-toast"

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/notes");
                console.log(res.data);
                setNotes(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.error("Error fetching notes", error);
                if (error.response?.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load Notes!");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchNotes();
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RateLimitBanner />}
        </div>
    )
}

export default HomePage