import React, { useEffect } from 'react';
import { userSelector } from '../../features/auth';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
// import { useGetListQuery } from '../../services/TMDB';
import { useSelector } from 'react-redux';
import { RatedCards } from '..';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];
  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };
  return (
    <Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='h4' gutterBottom>
          My Profile
        </Typography>
        <Button color='inherit' onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant='h5'>
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favorite movie</Box>
      )}
    </Box>
  );
};

export default Profile;
