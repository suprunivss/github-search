import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={ styles.wrapper }>
      <form className={ styles.form }>
        <input className={styles.input} placeholder='Search GitHub repository'>

        </input>
        <button className={styles.button}>
          <img src="" alt=""/>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Input;