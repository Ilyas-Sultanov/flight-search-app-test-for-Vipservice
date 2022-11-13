export const textFieldStyles = {  
  '& .MuiTextField-root': {
    backgroundColor: 'initial',
  },
  '& .MuiInputLabel-root': {
    position: 'relative', 
    left: '-12px!important', 
    color: '#5C5C5C',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'initial',
    paddingBottom: '3px',
    '&.Mui-focused': {color: '#5C87DB'},
  },
  '& .MuiInputLabel-asterisk': {
    display: 'none'
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '1px solid #B7BAC1',
    '&.Mui-focused': {
      border: '1px solid #5C87DB',
      backgroundColor: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
    }
  },
  '& .MuiInputBase-input': {
    padding: '9px 12px',
    color: '#5C5C5C',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0px',
  },
}