import React, { useCallback, useContext, useEffect, useState } from 'react';
export const DataContext = React.createContext({});
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const writeReview = async ({ Review, Movie }) => {
    // console.log(Movie);
    try {
      // AsyncStorage.clear();
      const value = await AsyncStorage.getItem('Review');
      if (value == null) {
        await AsyncStorage.setItem('Review', JSON.stringify({ Movie: Movie, Review: Review },));
      } else {
        const oldValues = await AsyncStorage.setItem('Review', value+ ','+ JSON.stringify({ Movie: Movie, Review: Review },));
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  const getReview = async () => {
    // console.log(Movie);
    try {
      // AsyncStorage.clear();
      const value = await AsyncStorage.getItem('Review');
      console.log('====================================');
      console.log(value); 
      console.log('====================================');

      return value != null ? JSON.parse('['+value+']') : {};
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  const contextValue = {
    writeReview,
    getReview
  };
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
