import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.module.css';

function Buttons({
  isDisabledPrev = true,
  isDisabledNext = false,
  currentPosition,
  updateSteps,
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        id='prev'
        disabled={isDisabledPrev}
        onClick={() => updateSteps(currentPosition - 1)}
      >
        Prev
      </button>
      <button
        className={styles.btn}
        id='next'
        disabled={isDisabledNext}
        onClick={() => updateSteps(currentPosition + 1)}
      >
        Next
      </button>
    </div>
  );
}

Buttons.propTypes = {
  currentPosition: PropTypes.number.isRequired,
  updateSteps: PropTypes.func.isRequired
};

export default Buttons;
