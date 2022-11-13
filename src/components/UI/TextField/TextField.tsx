import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import { textFieldStyles } from './styles';

function TextField(props: TextFieldProps) {
  let styles = {};
  if (props.sx) styles = {...textFieldStyles, ...props.sx};
  else styles = textFieldStyles;
  
  return (
    <MUITextField
      type='text'
      variant='filled'
      InputLabelProps={{ shrink: true }}
      InputProps={{ 
        disableUnderline: true,
      }}
      {...props}
      sx={styles}
    />
  )
}

export default TextField;