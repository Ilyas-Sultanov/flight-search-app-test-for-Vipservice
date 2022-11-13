import { SxProps } from '@mui/material';

export const aviaPage: SxProps = {
  height: '100vh',
  paddingTop: '68px',
  display: 'flex',
  justifyContent: 'center',
}

export const textFieldLocalStyles: SxProps = { 
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
  }
}

export const formStyles: SxProps = {
  maxWidth: '963px',
  '& .top': {
    display: 'flex',
    backgroundColor: '#5C87DB',
    padding: '10px 30px 27px 30px',
    borderRadius: '15px 15px 0px 0px',
  },
  '& .bottom': {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '23px 29px',
    boxShadow: '0px 0px 14px rgba(112, 121, 153, 0.3)',
    borderRadius: '0px 0px 15px 15px',
  },
  '& .submit-btn': {
    width: '158px',
    letterSpacing: '0px',
    paddingTop: '9px',
    paddingBottom: '6px',
  }
}