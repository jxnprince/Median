

import styles from "./footer.module.css";




const Footer = () => {


  const groupMembers = [
    {
      link: 'https://github.com/jSchutza',
      img: 'https://i.imgur.com/8gXNaxd.jpg',
      innerDivClass: 'joshDiv'
    },
    {
      link: 'https://github.com/jxnprince',
      img: 'https://i.imgur.com/O7VszxE.jpg',
      innerDivClass: 'jacksonDiv'
    },
    {
      link: 'https://github.com/robert-debug',
      img: 'https://i.imgur.com/T1ho184.jpg',
      innerDivClass: 'robertDiv'
    },
    {
      link: 'https://github.com/TroyD9241',
      img: 'https://i.imgur.com/20xUGOw.jpg',
      innerDivClass: 'troyDiv'
    },
  ];




  return (
    <>
      <div className={styles.Footer} >
        {groupMembers.map(eachPerson => (
          <>
            <div className={styles.purple_filter}>
              <a href={`${eachPerson.link}`} target={'_blank'}>
                <div id={`${eachPerson.innerDivClass}`}>
                  <img src={eachPerson.img} id={'person-img'} className={styles.person_img} />
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  )
};



export default Footer;
