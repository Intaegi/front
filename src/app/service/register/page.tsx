
'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import Step from './component/Step.js';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container direction="row" sx={{ mb: 5 }}>
          <Step />
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} sm={1}>
            <Avatar sx={{ bgcolor: '#FFCD00', width: 40, height: 40 }}>1</Avatar>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography component="h1" variant="h5">プロジェクトの基本情報を入力してください。</Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 5 }}>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>募集区分</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-genre">募集区分</InputLabel>
                  <Select
                    labelId="register-input-genre"
                    id="register-input-genre"
                    value={age}
                    label="募集区分"
                    onChange={handleChange}
                  >
                    <MenuItem value={"スタディ/プロジェクト"}>スタディ/プロジェクト</MenuItem>
                    <MenuItem value={"スタディ"}>スタディ</MenuItem>
                    <MenuItem value={"プロジェクト"}>プロジェクト</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>募集人員</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-person">募集人員</InputLabel>
                  <Select
                    labelId="register-input-person"
                    id="register-input-person"
                    value={age}
                    label="person"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1人</MenuItem>
                    <MenuItem value={2}>2人</MenuItem>
                    <MenuItem value={3}>3人</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>進行方式</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-way">進行方式</InputLabel>
                  <Select
                    labelId="register-input-way"
                    id="register-input-way"
                    value={age}
                    label="way"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>進行方式1</MenuItem>
                    <MenuItem value={2}>進行方式2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>進行期間</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-date">進行期間</InputLabel>
                  <Select
                    labelId="register-input-date"
                    id="register-input-date"
                    value={age}
                    label="date"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>短期</MenuItem>
                    <MenuItem value={2}>長期</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>技術スタック</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-stack">技術スタック</InputLabel>
                  <Select
                    labelId="register-input-stack"
                    id="register-input-stack"
                    value={age}
                    label="stack"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>技術スタック1</MenuItem>
                    <MenuItem value={2}>技術スタック2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>募集締切日</Typography>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </FormControl>
              </Grid>

              
              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>募集ポジション</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-position">募集ポジション</InputLabel>
                  <Select
                    labelId="register-input-position"
                    id="register-input-position"
                    value={age}
                    label="position"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>position1</MenuItem>
                    <MenuItem value={2}>position2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
                <Typography level="title-md" sx={{ mb: 1 }}>連絡方法</Typography>
                <FormControl fullWidth>
                  <InputLabel id="register-input-contact">連絡方法</InputLabel>
                  <Select
                    labelId="register-input-contact"
                    id="register-input-contact"
                    value={age}
                    label="contact"
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  >
                    <MenuItem value={1}>contact1</MenuItem>
                    <MenuItem value={2}>contact2</MenuItem>
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
                    sx={{ bgcolor: '#000000',mt: 3, mb: 2 }}
                  >
                    次に
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Box>
    </Container>
  );
}