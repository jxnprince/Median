

import styles from "./splashlogo.module.css";






const SplashLogo = () => {

  return (
    <>
      <div id={styles.logoDiv} className={styles.splashLogo} >
        <img src={'https://i.imgur.com/cJgn5hy.png'} id={styles.mainLogo} className={styles.splashLogo} />
      </div>
    </>
  )
};



export default SplashLogo;
