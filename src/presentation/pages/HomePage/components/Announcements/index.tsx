import {
  Typography,
  Box,
  AccordionDetails,
  useTheme,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import { AnnouncementsProps } from "@/types";
import * as Styled from "./styled";

function Announcements({list}: AnnouncementsProps) {
  const theme = useTheme();

  return (
    <Box p='40px'>
      <Box display='flex' gap='16px' alignItems='center' mb='16px'>
        <Typography fontSize='18px' sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>Announcements from Tipaw</Typography>
        <Styled.CircleIconWrapper fontSize='small' />
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' gap='16px'>
        {list?.map(({id, title, date, content}) => (
          <Styled.AccordionWrapper key={id} defaultExpanded>
            <Styled.AccordionSummaryWrapper
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id={id}
            >
              <Typography>{title}</Typography>
            </Styled.AccordionSummaryWrapper>
            <AccordionDetails>
              <Box display='flex' gap='8px' alignItems='center' mb='16px'>
                <CalendarMonthOutlinedIcon fontSize='small' sx={{ color: theme.palette.primary.main }}/>
                <Typography sx={{ color: theme.palette.primary.main }}>{date}</Typography>
              </Box>
              <Typography>
                {content}
              </Typography>
            </AccordionDetails>
          </Styled.AccordionWrapper>
        ))}
      </Box>
    </Box>
  );
}
export default Announcements;
