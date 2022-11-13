import { Button as MUIButton, ButtonProps } from '@mui/material';
import { buttonStyles } from './styles';

function Button(props: ButtonProps) {
  let styles = {};
  if (props.sx) styles = {...buttonStyles, ...props.sx};
  else styles = buttonStyles;

  return (
    <MUIButton 
      disableRipple={true}
      {...props}
      sx={styles}
    />
  )
}

export default Button;