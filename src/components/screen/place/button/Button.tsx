import { FC } from 'react';
import styles from './Button.module.scss';

const Button: FC = () => {
  const handleClick = () => {
    console.log('Ok');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <p className={styles.text}>Book a trip</p>
      <div className={styles.icon}>
        <span className='material-icons'>arrow_forward</span>
      </div>
    </button>
  );
};

export default Button;
