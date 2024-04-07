import styled from "@emotion/styled";
import { Box, AccordionSummary, Accordion } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

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
`;

export const AccordionSummaryWrapper = styled(AccordionSummary)`
  background-color: #5ACEE8;
  p,
  svg {
    color: #FFFFFF;
  }
  &.Mui-expanded {
    min-height: 48px;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 12px 0;
  }
`;

export const AccordionWrapper = styled(Accordion)`
  box-shadow: none;
  border: 1px solid #5ACEE8;
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #F0F0F0;
  height: 1px;
`;

export const CircleIconWrapper = styled(CircleIcon)`
  width: 8px;
  height: 8px;
  color: #FF453E;
`;
