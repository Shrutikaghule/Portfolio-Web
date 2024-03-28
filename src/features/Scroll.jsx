// Create a context object
import React, { useState } from 'react';


const AnimationContext = React.createContext({
  animation: {
    x: 0,
    y: 0,
    scale: 1,
  },
});



// Create a provider component that provides the context object
export function AnimationProvider ({ children })  {
  const [animation, setAnimation] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });

  return (
    <AnimationContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

