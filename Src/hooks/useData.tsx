import React, { useCallback, useContext, useEffect, useState } from 'react';
export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const writeReview = async ({Review,Movie}) => {
    console.log(Movie);
    try {
      // const value = await AsyncStorage.getItem('Token');
      alert(Movie.Title);
    } catch (error) {
      alert("error");
    }
  };
  const contextValue = {
    writeReview
  };
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
