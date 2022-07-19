import { Link } from "react-router-dom"

const userID = 'Juanse'

export default function HomePage(){
  return <div>
    <h1>Application</h1>
    <Link to={`/users/${userID}`}>Users</Link>
    </div>
}