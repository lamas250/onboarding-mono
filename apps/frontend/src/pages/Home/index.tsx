import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { TagTable } from '../../components/TagTable';
import { TagForm } from '../../components/TagForm';
import { TagContextType, useTag } from '../../context/tag';
import { ToastContainer } from 'react-toastify';

export function Home() {
  const { tags, fetchTags } = useTag() as TagContextType;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <Container component="main">
        <Grid container spacing={2} columns={16}>
          <Grid
            item
            xs={8}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRight: '1px solid #999',
            }}
          >
            <TagForm fetchTags={fetchTags} id="tag-form" />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TagTable tags={tags} fetchTags={fetchTags} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
