
import { useUser } from "../../context/UserContext";





const Profile = () => {
  const { isUser } = useUser();



  return (
    <>
      <div>
        <img src={isUser.avatar} />
      </div>

      <div>
        <h3>{isUser.firstName}</h3>
        <h3>{isUser.lastName}</h3>
        <h3>{isUser.gender}</h3>
        <h3>{isUser.birthdate}</h3>
        <h3>{isUser.email}</h3>
      </div>
    </>
  )

};



export default Profile;
