/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { axiosClient } from '../../infra/http/axios-http-client';
import { toast } from 'react-toastify';

export const TagForm = ({ fetchTags }: any) => {
  const formik = useFormik({
    initialValues: {
      tag: '',
      value: '',
      type: '',
    },
    validationSchema: Yup.object({
      tag: Yup.string().required('Required'),
      value: Yup.number().required('Required'),
      type: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      await axiosClient
        .post('/onboarding', values)
        .then((res) => {
          resetForm();
          fetchTags();
          toast.success('Tag criada com sucesso');
        })
        .catch((err) => toast.error('Falha no servidor'));
    },
  });

  return (
    <>
      <Typography component="h1" variant="h5" data-testid="form-title">
        Onboarding Form
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{
          mt: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="tag"
          label="Tag"
          name="tag"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.tag}
          sx={{ width: { sm: 400 } }}
        />
        {formik.errors.tag ? <p style={{ color: 'red', margin: 'auto' }}>{formik.errors.tag}</p> : null}
        <TextField
          margin="normal"
          required
          fullWidth
          id="value"
          label="Value"
          name="value"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.value}
          sx={{ width: { sm: 400 } }}
        />
        {formik.errors.value ? <p style={{ color: 'red', margin: 'auto' }}>{formik.errors.value}</p> : null}
        <TextField
          margin="normal"
          required
          fullWidth
          id="type"
          label="Type"
          name="type"
          onChange={formik.handleChange}
          value={formik.values.type}
          sx={{ width: { sm: 400 } }}
        />
        {formik.errors.type ? <p style={{ color: 'red', margin: 'auto' }}>{formik.errors.type}</p> : null}
        <Button
          type="submit"
          data-testid="button-submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: { sm: 400 } }}
        >
          CREATE
        </Button>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={{ mt: 1, mb: 2, width: { sm: 400 } }}
          onClick={() => formik.resetForm()}
        >
          RESET
        </Button>
      </Box>
    </>
  );
};
