import './App.css';
import { useNavigate } from "react-router-dom";

function AppHome() {

  const navigate = useNavigate();

  const OpenHousesApp = () => {
    navigate("/houses");
  }

  const OpenSpeakersApp = () => {
    navigate("/speakers");
  }

  return (
    <>
      <h3>create-react-app Test Application</h3>
      <div className='row'>
        <button className='btn btn-primary col-2' style={{ "marginRight": "30px" }} onClick={OpenHousesApp}>Open Houses App</button>
        <button className='btn btn-primary col-2' style={{ "marginRight": "30px" }} onClick={OpenSpeakersApp}>Open Speakers App</button>
      </div>
    </>
  )
}

export default AppHome;
