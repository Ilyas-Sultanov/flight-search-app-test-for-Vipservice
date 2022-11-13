import { Box } from "@mui/material";
import { LogoIcon } from '../../components/svg';

function Logo() {
  return (
    <Box className="logo">
      <LogoIcon className='image'/>
      <span className='text'>S7 Airlines</span>
    </Box>
  )
}

export default Logo;