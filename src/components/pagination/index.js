import MuiPagination from '@mui/material/Pagination';
import { func, number } from 'prop-types';
import React from 'react';

export default function Pagination({ page = 1, count = 10, onChange = () => {} }) {
  return (
    <MuiPagination
      page={page}
      color='primary'
      variant='text'
      size='large'
      siblingCount={2}
      boundaryCount={1}
      onChange={onChange}
      count={count}
      shape='rounded'
    />
  );
}

Pagination.propTypes = { page: number, count: number, onChange: func };
