import Image from 'next/image'
import Arrow from '../public/icon-arrow.svg';
import styles from '../styles/Home.module.css'

const Search = ({data1, data2, data3, data4, changeIP, searchIP, enterKey}) => {
  
  return (  
    <div className={styles.body} id={styles.absolute}>
      <form action="" method="get" className={styles.form}>
        <div className={styles.button} onClick={searchIP}>
          <div className={styles.cont}>
            <Image src={Arrow} alt="Arrow" title='Search' className={styles.image} />
          </div>
        </div>
        <input type="text" placeholder='Search for IP address' id={styles.inputter} onBlur={(e) => {changeIP(e)}} onKeyDown={(e) => {enterKey(e)}} />
      </form>
      <div id={styles.data}>
        <div id={styles.flexbox}>
          <div className={styles.item}>
            <p> IP ADDRESS  </p>
            <h2> {data1} </h2>
          </div>
          <div className={styles.item}>
            <p> LOCATION  </p>
            <h2> {data2} </h2>
          </div>
          <div className={styles.item}>
            <p> TIMEZONE  </p>
            <h2> {data3} </h2>
          </div>
          <div className={styles.item} id={styles.border}>
            <p> ISP  </p>
            <h2> {data4} </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;