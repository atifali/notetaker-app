import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios"
import toast from "react-hot-toast";

const NoteDetailPage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`);
                setNote(res.data);
            } catch (error) {
                if (error.response.status === 429) {
                    toast.error("Slow down! You are fetching note too quickly!", {
                        duration: 4000,
                        icon: "💀"
                    });
                } else {
                    toast.error("Failed to fetch the Note!");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchNote();
    }, [id]);

    return (
        <div>NoteDetailPage</div>
    )
}

export default NoteDetailPage