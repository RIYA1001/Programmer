import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ScoreContext = createContext(null);

const ScoreContextProvider = (props) => {
  const { children } = props; // Destructure children from props
  const [guessingEnabled, setGuessingEnabled] = useState(false);

  return (
    <ScoreContext.Provider value={{ guessingEnabled, setGuessingEnabled }}>
      {children} {/* Render the nested components */}
    </ScoreContext.Provider>
  );
};

ScoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node and is required
};

export default ScoreContextProvider;
