import {
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { ProgressItemProps } from "@/types";
import * as Styled from "./styled";

function ProgressItem({config, globalProgress}: ProgressItemProps) {
  const theme = useTheme();

  return (
    <Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' gap='16px' p='40px' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box overflow='hidden' flex='1' display='flex' flexDirection='column' justifyContent='space-between' gap='16px'>
          <Typography noWrap fontSize='18px' sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>You successfully complete your profile at Tipaw</Typography>
          <Typography noWrap fontSize='12px' sx={{ fontWidth: 300 }}>Now you can use Tipaw for 100%</Typography>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='space-between' gap='16px'>
          <Box display='flex' alignItems='center' justifyContent='space-between' gap='16px'>
            <Typography fontSize='18px' sx={{ color: '#33384F' }}>Profile completed</Typography>
            <Typography sx={{ color: theme.palette.success.main }}>{globalProgress}%</Typography>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' gap='2px'>
            {config?.map(({value}) => (
              <Box height='4px' flex='1' sx={{ background: value ? theme.palette.success.main : theme.palette.text.primary }} />
            ))}
          </Box>
        </Box>
      </Box>
      <Styled.Divider />
      <Box sx={{ flexDirection: { xs: 'column', sm: 'row' } }} display='flex' alignItems='center' justifyContent='space-between' gap='16px' p='40px'>
        {config?.map(({label, text, value}) => (
          <Styled.ProgressItemContainer sx={{ flexBasis: { xs: '50%', sm: '1' }, width: { xs: '100%', sm: 'auto' } }}>
            <CheckCircleIcon fontSize='small' sx={{ color: value ? theme.palette.success.main : theme.palette.text.primary }} />
            <Typography noWrap sx={{ color: '#33384F', fontWeight: 700 }}>{label}</Typography>
            <Typography noWrap fontSize='12px' sx={{ fontWidth: 300 }}>{text}</Typography>
          </Styled.ProgressItemContainer>
        ))}
      </Box>
    </Box>
  );
}
export default ProgressItem;
