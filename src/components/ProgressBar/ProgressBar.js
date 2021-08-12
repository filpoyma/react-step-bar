import React from 'react';
import PropTypes from 'prop-types';
import styles from './progressBar.module.css';

function ProgressBar({ currentPosition = 1, stepsNames = [] }) {
  const steps = stepsNames.length > 5
    ? stepsNames.slice(0, 5)
    : stepsNames;
  // current will be from 1 to length of array
  const current =
    currentPosition > steps.length - 1
      ? steps.length - 1
      : currentPosition <= 0
      ? 1
      : currentPosition;
  return (
    <div className={styles.container}>
      <div className={styles.msgContainer}>
        {steps.map((name, i) => (
          <div key={name} className={i <= current ? styles.active : ''}>
            {name}
          </div>
        ))}
      </div>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
          id='progress'
        >
          {''}
        </div>
        {steps.map((name, i) => (
          <div
            key={name}
            className={`${styles.circle} ${i <= current ? styles.active : ''}`}
          >
            {''}
          </div>
        ))}
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  currentPosition: PropTypes.number.isRequired,
  stepsNames: PropTypes.array.isRequired,
};

export default ProgressBar;
