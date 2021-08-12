import React from 'react';
import styles from './input.module.css';

export const Input = () => {
  return (
    <div className={styles.container}>
      <input type='number' defaultValue={2} min={0} max={5} onChange={}/>
    </div>
  );
};
