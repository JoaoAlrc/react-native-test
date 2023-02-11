import {useQuery} from 'react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {axiosMovies} from '@services/api';
import {Movie} from '@constants/types';
import {getFilters} from '@constants/utils';

// key
export const MOVIES_KEY = 'movies';

/* --------------------------------------- MOVIES LIST --------------------------------------- */
export type MoviesListResponse = {
  movies: Movie[] | undefined;
  genres: string[] | undefined;
  directors: string[] | undefined;
  casts: string[] | undefined;
  classifications: string[] | undefined;
};

export const useMoviesList = (search: string) => {
  let URL = `${search ? 'movies?q=' + search : 'movies'}`;

  const queryResult = useQuery(MOVIES_KEY, async () => {
    const apiResponse = await axiosMovies().then(instance =>
      instance.get<any, AxiosResponse<MoviesListResponse, AxiosError>>(URL),
    );

    const movies = apiResponse.data.movies;

    const response = {
      movies,
      ...getFilters(movies),
    };

    return response;
  });

  return queryResult;
};
