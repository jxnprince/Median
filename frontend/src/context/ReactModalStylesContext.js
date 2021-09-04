import { createContext, useContext, useState } from 'react';


const ModalStyleContext = createContext();
const useModalStyle = () => useContext(ModalStyleContext);




const ModalStyleProvider = ({ children }) => {

  const currentStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#000'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#1f1f35',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  };



  return (
    <ModalStyleContext.Provider value={
      {
        currentStyle,

      }

    } >

      {children}
    </ModalStyleContext.Provider>
  );
};




// exports here:
export {
  useModalStyle,
  ModalStyleProvider,

};
