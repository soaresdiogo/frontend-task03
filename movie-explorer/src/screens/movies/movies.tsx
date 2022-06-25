import React from 'react';
import {
  InputSearch,
  Card,
  Pagination
} from 'shared-components-movie-explorer';
import { MovieInfo } from '../../types';
import { useMovieHelper } from './movieHelper.hook';
import { Block, CardContainer, Container } from './movies.style';

export const Movies = () => {
  const {
    text,
    currentTableData,
    totalMovies,
    currentPage,
    pageSize,
    onClick,
    onChange,
    onSetCurrentPage
  } = useMovieHelper();

  return (
    <Container>
      <Block>
        <InputSearch
          value={text}
          placeHolder="Type the name of movie ..."
          onChange={(e) => onChange(e)}
          onClick={onClick}
        />
      </Block>
      <CardContainer>
        {currentTableData.map((movie: MovieInfo) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </CardContainer>
      <Block>
        <Pagination
          totalCount={totalMovies}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={(page: string | number) =>
            onSetCurrentPage(parseInt(page.toString()))
          }
        />
      </Block>
    </Container>
  );
};
