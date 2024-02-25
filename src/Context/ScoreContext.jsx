import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ScoreContext = createContext({
  guessingEnabled: false,
  updateGuessingEnabled: () => {}
});

const ScoreContextProvider = (props) => {
  const [guessingEnabled, setGuessingEnabled] = useState(false);

  const updateGuessingEnabled = (enabled) => {
    setGuessingEnabled(enabled);
  };

  return (
    <ScoreContext.Provider value={{ guessingEnabled, updateGuessingEnabled }}>
      {props.children}
    </ScoreContext.Provider>
  );
};

ScoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node and is required
};

export default ScoreContextProvider;
