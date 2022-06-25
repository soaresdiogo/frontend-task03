import React from 'react';
import { API } from '../../api';
import { MovieInfo } from '../../types';

interface UseMovieHelperProps {
  text: string;
  currentTableData: MovieInfo[];
  totalMovies: number;
  currentPage: number;
  pageSize: number;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSetCurrentPage: (page: number) => void;
}

const PAGE_SIZE = 10;

export const useMovieHelper = (): UseMovieHelperProps => {
  const [baseMovies, setBaseListMovies] = React.useState<Array<MovieInfo>>([]);
  const [listMovies, setListMovie] = React.useState<Array<MovieInfo>>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [text, setText] = React.useState('');

  const handleCurrentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return listMovies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listMovies]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (e.target.value === '') {
      setListMovie(baseMovies);
      setCurrentPage(1);
    }
  };

  const handleOnClick = () => {
    setCurrentPage(1);
    const filteredMovies = baseMovies.filter((movie: MovieInfo) => {
      if (text === '') {
        return movie;
      } else if (
        movie.title.toLowerCase().includes(text.toLowerCase()) ||
        movie.director.toLowerCase().includes(text.toLowerCase())
      ) {
        return movie;
      }
    });
    setListMovie(filteredMovies);
  };

  const handleOnSetCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const request = await API.get('movies');
      setListMovie(request.data);
      setBaseListMovies(request.data);
      return request;
    };
    fetchData();
  }, []);

  return {
    text: text,
    currentTableData: handleCurrentTableData,
    totalMovies: listMovies.length,
    currentPage: currentPage,
    pageSize: PAGE_SIZE,
    onClick: handleOnClick,
    onChange: handleOnChange,
    onSetCurrentPage: handleOnSetCurrentPage
  };
};
