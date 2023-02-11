import {Movie} from '@constants/types';
import {getFilters} from '@constants/utils';
import {useMoviesList} from '@services/app/movies';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';

type MovieContextState = {
  movie: Movie | undefined;
  setMovie: React.Dispatch<React.SetStateAction<Movie | undefined>>;
  movies: Movie[] | undefined;
  genres: string[] | undefined;
  classifications: string[] | undefined;
  casts: string[] | undefined;
  directors: string[] | undefined;
  genresFilters: string[] | undefined;
  classificationsFilters: string[] | undefined;
  castsFilters: string[] | undefined;
  directorsFilters: string[] | undefined;
  search: string;
  isLoadingMovies: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  updateFilters: (item: string, filter: string, type: string) => void;
  getActiveFilters: (item: string, filter: string) => number;
};

const MovieContext = createContext<MovieContextState | null>(null);

type MovieProviderProps = {
  children?: React.ReactNode;
};

export const MovieProvider = ({children}: MovieProviderProps) => {
  const [movieData, setMovieData] = useState<Movie | undefined>(undefined);
  const [moviesData, setMoviesData] = useState<Movie[] | undefined>([]);
  const [defaultMoviesData, setDefaultMoviesData] = useState<
    Movie[] | undefined
  >([]);
  const [genresData, setGenresData] = useState<string[] | undefined>([]);
  const [directorsData, setDirectorsData] = useState<string[] | undefined>([]);
  const [castsData, setCastsData] = useState<string[] | undefined>([]);
  const [classificationsData, setClassificationsData] = useState<
    string[] | undefined
  >([]);
  const [genresFilters, setGenresFilters] = useState<string[] | undefined>([]);
  const [directorsFilters, setDirectorsFilters] = useState<
    string[] | undefined
  >([]);
  const [castsFilters, setCastsFilters] = useState<string[] | undefined>([]);
  const [classificationsFilters, setClassificationsFilters] = useState<
    string[] | undefined
  >([]);
  const [search, setSearch] = useState<string>('');
  const {refetch, isLoading: isLoadingMovies} = useMoviesList(search);

  useEffect(() => {
    const handleTyping = (text: string) => {
      if (text.length % 2 === 0) {
        setTimeout(() => {
          refetch().then(
            (value: {
              data:
                | {
                    movies: Movie[] | undefined;
                    genres: string[];
                    directors: string[];
                    casts: string[];
                    classifications: string[];
                  }
                | undefined;
            }) => {
              setGenresFilters([]);
              setClassificationsFilters([]);
              setCastsFilters([]);
              setDirectorsFilters([]);
              setMoviesData(value.data?.movies);
              setDefaultMoviesData(value.data?.movies);
              setGenresData(value.data?.genres);
              setClassificationsData(value.data?.classifications);
              setDirectorsData(value.data?.directors);
              setCastsData(value.data?.casts);
            },
          );
        }, 1000);
      }
    };

    handleTyping(search);
  }, [search, refetch]);

  const filterSettings = useMemo(
    () => [
      {
        filter: 'genres',
        callback: setGenresFilters,
        currentData: genresFilters,
      },
      {
        filter: 'cast',
        callback: setCastsFilters,
        currentData: castsFilters,
      },
      {
        filter: 'director',
        callback: setDirectorsFilters,
        currentData: directorsFilters,
      },
      {
        filter: 'classification',
        callback: setClassificationsFilters,
        currentData: classificationsFilters,
      },
    ],
    [genresFilters, castsFilters, directorsFilters, classificationsFilters],
  );

  const getActiveFilters = (item: string, filter: string) => {
    return filterSettings.filter(element => {
      if (filter === element.filter) {
        return element.currentData?.find(filterItem => filterItem === item);
      }
    }).length;
  };

  const updateFilters = (item: string, filter: string, type: string) => {
    filterSettings.forEach(element => {
      if (filter === element.filter) {
        type === 'ADD'
          ? element.callback(element.currentData?.concat(item))
          : element.callback(
              element.currentData?.filter(filterItem => filterItem !== item),
            );
      }
    });
  };

  useEffect(() => {
    const setFilters = () => {
      const filteredData = defaultMoviesData?.filter((item: Movie) => {
        let shouldFilter = filterSettings.filter(
          settings => settings.currentData?.length,
        ).length;

        if (shouldFilter) {
          return filterSettings.filter(settings =>
            settings.currentData?.find((current: string) => {
              const arrayItem =
                typeof item[settings.filter] === 'string'
                  ? [item[settings.filter]]
                  : item[settings.filter];
              return arrayItem.find((findItem: string) => findItem === current);
            }),
          ).length;
        } else {
          return item;
        }
      });
      const filters = getFilters(filteredData);

      setMoviesData(filteredData);
      setGenresData(filters.genres);
      setClassificationsData(filters.classifications);
      setDirectorsData(filters.directors);
      setCastsData(filters.casts);
    };
    setFilters();
  }, [
    genresFilters,
    castsFilters,
    directorsFilters,
    classificationsFilters,
    defaultMoviesData,
    filterSettings,
  ]);

  return (
    <MovieContext.Provider
      value={{
        movie: movieData,
        setMovie: setMovieData,
        movies: moviesData,
        genres: genresData,
        classifications: classificationsData,
        directors: directorsData,
        casts: castsData,
        search,
        setSearch,
        genresFilters,
        directorsFilters,
        castsFilters,
        classificationsFilters,
        updateFilters,
        getActiveFilters,
        isLoadingMovies,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = (): MovieContextState => {
  const context = useContext(MovieContext);

  if (context === null) {
    throw new Error('useMovie must be used within a MovieProvider');
  }

  return context;
};
