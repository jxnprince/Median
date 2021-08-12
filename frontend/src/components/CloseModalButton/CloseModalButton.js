
import { Link } from "react-router-dom";



const CloseModalButton = ({ closeModal }) => {

  const handleClose = event => {
    event.preventDefault();
    closeModal();
  }

  return (
    <>
      <Link to={'/'} onClick={event => handleClose(event)}> Close </Link>
    </>
  )
};



export default CloseModalButton;
