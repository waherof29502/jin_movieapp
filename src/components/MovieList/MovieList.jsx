import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
  const styles = useStyles();
  console.log('movie list');
  return (
    <Grid container className={styles.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
