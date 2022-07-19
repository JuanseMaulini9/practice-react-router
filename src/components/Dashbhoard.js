import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Dashbhoard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashbhoard</h1>
      <button onClick={handleClick}>Logout</button>
      <br></br>
      <Link to="welcome">say welcome</Link>
      <br></br>
      <Link to="goodbye">say goodbye</Link>
      
      <Outlet />

    </div>
  );
}
