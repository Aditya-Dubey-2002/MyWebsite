import React from 'react';
import { Grid, Paper, IconButton, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub'; // Add this import
import SmallIntro from './small-intro';

const Footer = () => {
    return (
        <div elevation={1} style={{ padding: '20px', }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {/* <SmallIntro /> */}
                <Grid item>
                    <IconButton href="mailto:dubey02.adity@gmail.com" target="_blank" rel="noopener noreferrer" disableRipple>
                        <EmailIcon />
                        <Typography variant="body2">dubey02.adity@gmail.com</Typography>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton href="https://www.linkedin.com/in/aditya-dubey-7263b7200/" target="_blank" rel="noopener noreferrer" disableRipple>
                        <LinkedInIcon />
                        <Typography variant="body2">aditya-dubey-7263b7200</Typography>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton href="https://github.com/Aditya-Dubey-2002" target="_blank" rel="noopener noreferrer" disableRipple>
                        <GitHubIcon />
                        <Typography variant="body2">Aditya-Dubey-2002</Typography>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton href="https://www.instagram.com/_aditya.dubey/" target="_blank" rel="noopener noreferrer" disableRipple>
                        <InstagramIcon />
                        <Typography variant="body2">_aditya.dubey</Typography>
                    </IconButton>
                </Grid>
                {/* <Grid item>
                    <IconButton href="https://www.facebook.com/aditya.dubey.758399/" target="_blank" rel="noopener noreferrer" disableRipple>
                        <FacebookIcon />
                        <Typography variant="body2">Facebook</Typography>
                    </IconButton>
                </Grid> */}
                <Grid item>
                    <IconButton href="https://twitter.com/_adityadubey02" target="_blank" rel="noopener noreferrer" disableRipple>
                        <TwitterIcon />
                        <Typography variant="body2">_adityadubey02</Typography>
                    </IconButton>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default Footer;
