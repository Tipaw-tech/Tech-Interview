import styled from "@emotion/styled";
import { AppBar, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

export const HeaderWrapper = styled(AppBar)`
  box-shadow: none;
  background-color: #FFFFFF;
  border-bottom: 1px solid #F0F0F0;
  height: 72px;
  & > div,
  .MuiToolbar-root{
    height: 100%;
  }
`;

export const TypographyLogo = styled(Typography)`
  color: #20253F;
  font-weight: 500;
  font-size: 18px;
  cursor: default;
`;

export const CircleIconWrapper = styled(CircleIcon)`
  width: 4px;
  height: 4px;
  color: #5ACEE8;
`;
