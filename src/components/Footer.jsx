import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 2,
        background: 'linear-gradient(90deg, #fff)',
        color: 'rgb(14, 13, 13)',
        fontSize: 16,
        fontFamily: `'Segoe UI', sans-serif`,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ display: 'inline' }}>
        &copy; 2025{' '}
        <Link
          href="https://www.inetztech.com/"
          underline="none"
          sx={{
            color: 'rgb(251, 136, 4)',
            fontWeight: 600,
            '&:active': {
              color: 'rgb(251, 136, 4)',
            },
          }}
        >
          INETZ Technology.
        </Link>{' '}
        All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;