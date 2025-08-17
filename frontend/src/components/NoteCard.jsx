import { Link } from "react-router"

const NoteCard = ({ note }) => {
    return (
        <Link to={`/note/${note._id}`}
            className="card bg-base-100 hover:shadow-lg transition-all duration-200
                border-t-4 border-solid border-primary"
        >
            <div className="card-body">
                <h3>{note.title}</h3>
            </div>
        </Link>
    )
}

export default NoteCard