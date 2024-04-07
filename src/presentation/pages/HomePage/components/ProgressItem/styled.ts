import styled from "@emotion/styled";
import { Box } from '@mui/material';

export const ProgressItemContainer = styled(Box)`
  flex-grow: 1;
  background-color: #FFFFFF;
  box-shadow: -1px 3px 16px 0px #959DA530;
  border: 1px solid #F0F0F0;
  border-radius: 2px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #F0F0F0;
  height: 1px;
`;
