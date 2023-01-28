import React from 'react';
import {
   Avatar,
   Button,
   CssBaseline,
   TextField,
   Link,
   Grid,
   Box,
   Typography,
   Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useInputState from '../hooks/newInputState';

export default function LogIn() {

   const [ email, handleEmailChange, resetEmail ] = useInputState("");
   const [ password, handlePasswordChange, resetPassword ] = useInputState("");

   const handleSubmit = async (event) => {
      event.preventDefault();

      console.log({email, password});

      resetEmail();
      resetPassword();
   };

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
               <TextField
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email} 
                  onChange={handleEmailChange}
               />
               <TextField
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
               />
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color='secondary'
               >
                  Sign In
               </Button>
               <Grid container>
                  <Grid item>
                     <Link href="/signup" variant="body2" >
                        Don't have an account? Sign Up
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   );
}