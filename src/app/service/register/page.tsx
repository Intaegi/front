
'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Step from './component/Step.js';

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Step />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={1}>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography component="h1" variant="h5">
              <h5>プロジェクトの基本情報を入力してください。</h5>
            </Typography>
          </Grid>
        </Grid>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <h5>募集区分</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-genre">スタディ/プロジェクト</InputLabel> */}
                <Select
                  labelId="register-input-genre"
                  id="register-input-genre"
                  value={"genre"}
                  label="genre"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>スタディ/プロジェクト</MenuItem>
                  <MenuItem value={"スタディ"}>スタディ</MenuItem>
                  <MenuItem value={"プロジェクト"}>プロジェクト</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>

              <h5>募集人員</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-person"
                  id="register-input-person"
                  value={"person"}
                  label="person"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1人</MenuItem>
                  <MenuItem value={2}>2人</MenuItem>
                  <MenuItem value={3}>3人</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>

              <h5>募集区分</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-genre">スタディ/プロジェクト</InputLabel> */}
                <Select
                  labelId="register-input-recruit-stack"
                  id="register-input-recruit-stack"
                  value={"recruit-stack"}
                  label="recruit-stack"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>バックエンド/フロントエンド</MenuItem>
                  <MenuItem value={"バックエンド"}>バックエンド</MenuItem>
                  <MenuItem value={"フロントエンド"}>フロントエンド</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h5>進行方式</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-way"
                  id="register-input-way"
                  value={"way"}
                  label="way"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>短期</MenuItem>
                  <MenuItem value={2}>長期</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h5>技術スタック</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-way"
                  id="register-input-way"
                  value={"way"}
                  label="way"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>短期</MenuItem>
                  <MenuItem value={2}>長期</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h5>募集ポジション</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-way"
                  id="register-input-way"
                  value={"way"}
                  label="way"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>短期</MenuItem>
                  <MenuItem value={2}>長期</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h5>連絡方法</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-way"
                  id="register-input-way"
                  value={"way"}
                  label="way"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>短期</MenuItem>
                  <MenuItem value={2}>長期</MenuItem>
                </Select>

                
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h5>連絡方法</h5>
              <FormControl fullWidth>
                {/* <InputLabel id="register-input-person">募集人員</InputLabel> */}
                <Select
                  labelId="register-input-way"
                  id="register-input-way"
                  value={"way"}
                  label="way"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>短期</MenuItem>
                  <MenuItem value={2}>長期</MenuItem>
                </Select>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </FormControl>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item xs={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  次に
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}