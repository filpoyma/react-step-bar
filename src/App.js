import React from 'react';
import ProgressBar from './components/ProgressBar';
import Buttons from './components/Buttons';

// step position start from 1
// max steps is 5


  export const stepsNames = [
    'Step-1',
    'Step-2',
    'Step-3',
    'Step-4',
    // 'Step-5',
    // 'Step-6',
  ];
function App() {
  const [currentPosition, setPosition] = React.useState(1);

  const updateSteps = (stage) => {
    setPosition(stage);
  };

  return (
    <>
      <ProgressBar currentPosition={currentPosition} stepsNames={stepsNames}  />
      <Buttons
        isDisabledNext={currentPosition === stepsNames.length - 1}
        isDisabledPrev={currentPosition === 1}
        currentPosition={currentPosition}
        updateSteps={updateSteps}
      />
    </>
  );
}

export default App;
