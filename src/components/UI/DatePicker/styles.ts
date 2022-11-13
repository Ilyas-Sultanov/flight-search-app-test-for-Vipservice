import { textFieldStyles } from '../TextField/styles';

export const wrapperStyles = {
  position: 'relative',
  paddingTop: '2px',
  '&:not(:last-of-type)': {
    marginRight: '22px',
  }
}

export const textFieldLocalStyles = { 
  ...textFieldStyles,
  width: '208px',
  '& .MuiInputLabel-root': {
    position: 'relative', 
    left: '-12px!important', 
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'initial',
    paddingBottom: '3px',
    '&.Mui-focused': {color: '#FFFFFF'},
  },
  '& .MuiInputBase-input': {
    padding: '9px 30px 9px 33px',
    color: '#5C5C5C',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0px',
  },
  '& .MuiInputAdornment-root': {
    position: 'absolute',
    left: '-5px',
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '1px solid #B7BAC1',
    paddingRight: '0px',
    '&.Mui-focused': {
      border: '1px solid #5C87DB',
      backgroundColor: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
    }
  },
}

export const clearBtnStyles = {
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  position: 'absolute',
  top: '33px',
  right: '6px',
}