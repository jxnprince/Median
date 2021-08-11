import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_checkIfThereIsAUser } from '../thunks/session.js';


const UserContext = createContext();

const useUser = () => useContext(UserContext);


const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isUser = useSelector((store) => store.userReducer.user);



  useEffect(() => {
    dispatch(thunk_checkIfThereIsAUser());
  }, [dispatch]);


  return (
    <UserContext.Provider value={{ isUser }} >
      {children}
    </UserContext.Provider>
  );
};




// exports here:
export {
  useUser,
  UserProvider,

};
