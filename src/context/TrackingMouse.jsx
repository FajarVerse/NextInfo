import { createContext, useState } from "react";

const TrackingMouseContext = createContext();

const TrackingMouseContextProvider = ({ children }) => {
  const [isTracking, setIsTracking] = useState(true);

  return (
    <>
      <TrackingMouseContext.Provider value={{ isTracking, setIsTracking }}>
        {children}
      </TrackingMouseContext.Provider>
    </>
  );
};

export const TrackingMosue = TrackingMouseContext;
export default TrackingMouseContextProvider;
