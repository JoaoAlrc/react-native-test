import {Movie} from '@constants/types';
import React, {createContext, useState, useContext} from 'react';

type UserContextState = {
  myList: Movie[];
  setMovieRating: (id: string, rating: number, type: string) => void;
  getRating: (id: string | undefined) => number;
  setMyListItem: (item: Movie, type: string) => void;
  getMyListItem: (id: string) => boolean;
};

const UserContext = createContext<UserContextState | null>(null);

type UserProviderProps = {
  children?: React.ReactNode;
};

type MovieRatingsType = {
  id: string;
  rating: number;
}[];

export const UserProvider = ({children}: UserProviderProps) => {
  const [movieRatings, setMovieRatings] = useState<MovieRatingsType>([]);
  const [myList, setMyList] = useState<Movie[]>([]);

  const getRating = (id: string | undefined) => {
    return movieRatings.filter(item => item.id === id)[0]?.rating || 0;
  };

  const setMovieRating = (id: string, rating: number, type: string) => {
    let value = [];
    type !== 'ADD'
      ? (value = movieRatings.map(item => {
          if (item.id === id) {
            item.rating = rating;
          }
          return item;
        }))
      : (value = [
          ...movieRatings,
          {
            id,
            rating,
          },
        ]);

    setMovieRatings(value);
  };

  const getMyListItem = (id: string) => {
    return !!myList?.find(item => item.id === id);
  };

  const setMyListItem = (item: Movie, type: string) => {
    let value: Movie[] = [];
    type === 'ADD'
      ? (value = [...myList, item])
      : (value = myList?.filter(list => list.id !== item.id));

    setMyList(value);
  };

  return (
    <UserContext.Provider
      value={{
        myList,
        getRating,
        setMovieRating,
        getMyListItem,
        setMyListItem,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextState => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
