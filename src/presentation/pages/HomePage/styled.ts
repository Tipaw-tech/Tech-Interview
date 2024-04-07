import styled from "@emotion/styled";
import { Container, Box } from '@mui/material';

export const PageWrapper = styled(Container)`
  max-width: none !important;
  background-color: #F8F9F9;
  height: 100vh;
  font-family: 'Open Sans', 'Helvetica', sans-serif;
  .MuiContainer-root{
    padding: 0!important;
  }
`;

export const PageItemWrapper = styled(Box)`
  background-color: #FFFFFF;
  border: 1px solid #F0F0F0;
  margin: 16px 0;
  border-radius: 2px;
`;
