import {Dimensions, StatusBar} from 'react-native';
import {Movie} from './types';

const {height, width} = Dimensions.get('screen');

const designWidth = 324;
const designHeight = 650;

export const StatusHeight = StatusBar.currentHeight;

export const getWidth = (size: number) => {
  return (width * size) / designWidth;
};
export const getHeight = (size: number) => {
  return (height * size) / designHeight;
};
export const HeaderHeight = getHeight(16) * 3.5 + (StatusHeight || 0);

export default {
  getWidth,
  getHeight,
};

export const getFilters = (movies: Movie[] | undefined) => {
  const allGenres: string[] = [];
  const allDirectors: string[] = [];
  const allCasts: string[] = [];
  const allClassifications: string[] = [];

  let genresToPush: string[] | string = '';
  let directorToPush: string[] | string = '';
  let castsToPush: string[] | string = '';

  movies?.forEach(movie => {
    genresToPush =
      typeof movie.genres === 'string' ? [movie.genres] : movie.genres;
    directorToPush =
      typeof movie.director === 'string' ? [movie.director] : movie.director;
    castsToPush = typeof movie.cast === 'string' ? [movie.cast] : movie.cast;

    allGenres.push(...genresToPush);
    allDirectors.push(...directorToPush);
    allCasts.push(...castsToPush);
    allClassifications.push(movie.classification);
  });

  const genres = [...new Set(allGenres)];
  const directors = [...new Set(allDirectors)];
  const casts = [...new Set(allCasts)];
  const classifications = [...new Set(allClassifications)];

  const response = {
    genres,
    directors,
    casts,
    classifications,
  };

  return response;
};
