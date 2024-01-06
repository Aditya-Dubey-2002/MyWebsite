import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import msgs from "../msgs.js";


const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const msg = {
      Name : e.target.Name.value,
      Email : e.target.Email.value,
      Number :e.target.Number.value,
      Message : e.target.Message.value
    }
    msgs.push(msg);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px' /* Remove backgroundColor property */ }}>
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit} target='_blank' action="https://formsubmit.co/dubey02.adity@gmail.com" method="POST">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  name='Name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  name='Email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Number (Optional)"
                  variant="outlined"
                  fullWidth
                  type="tel"
                  name='Number'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  name='Message'
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
