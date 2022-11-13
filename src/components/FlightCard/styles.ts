import { SxProps } from "@mui/material";

export const flightCardStyles: SxProps = {
  boxShadow: '0px 0px 14px rgba(112, 121, 153, 0.3)',
  borderRadius: '15px',
  display: 'flex',

  '& .flight-card__item': {
    padding: '37px 20px 26px 23px',
    position: 'relative',
    display: 'flex',
        
    '&:last-of-type:not(:first-of-type)': {
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '0',
        right: '0',
        height: '0px',
        width: '90%',
        borderTop: '1px dashed #5C87DB',
      }
    },
    '& .status': {
      position: 'absolute',
      top: '0',
      left: '0',
      fontSize: '12px',
      color: '#FFFFFF',
      padding: '6px 24px 6px 23px',
      backgroundColor: '#8BA5D8',
      borderTopLeftRadius: '15px',
      borderBottomRightRadius: '15px',
    },
    '& .logo': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '8px',
      paddingTop: '17px',
      '& .text': {
        fontSize: '18px',
      },
    },
    '& .actions-box': {
      margin: '0 33px 0 48px',
    },
    '& .bags-images__inner': {
      display: 'flex',
      columnGap: '10px',
      alignItems: 'flex-end',
    },
    '& .timing': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '18px',
    },
    '& .info': {
      display: 'flex',
      width: '531px',
      justifyContent: 'space-between',
      position: 'relative',
      marginBottom: '19px',
      '& .timeline': {
        // margin: '0 29px 0 28px',
        position: 'absolute',
        left: '105px',
        '& .svg': {marginTop: '-7px'},
        '& .duration': {
          color: '#B7BAC1',
          fontSize: '14px',
          fontWeight: '400',
          textAlign: 'center',
        },
      },
      '& .time': {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '1.6',
      },
      '& .sity': {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.5',
      },
      '& .date': {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.6',
        marginTop: '-4px',
      },
    },
    '& .time-btn': {
      border: '1px solid #B7BAC1',
      borderRadius: '10px',
      backgroundColor: '#FFFFFF',
      padding: '3px 7px 3px 3px',
      cursor: 'pointer',
      '& span': {fontWeight: '500',},
      '& span:first-of-type': {fontSize: '18px'},
      '& span:last-of-type': {fontSize: '14px'},
      '&.active': {
        backgroundColor: '#DDE3EE',
        border: '1px solid #DDE3EE',
        padding: '6px 17px 5px 14px',
      },
    },
  },

  '& .flight-card__totla-price': {
    borderLeft: '1px solid #DDE3EE',
    display: 'flex',
    alignItems: 'center',
    padding: '0 31px 0 47px',
    '& span': {
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '38px',
      textAlign: 'center',
      color: '#232323',
    }
  }, 


  '&.lean': {
    '& .flight-card__totla-price': {
      '& span': {
        paddingBottom: '9px',
        paddingRight: '2px',
      }
    },

    '& .flight-card__item': {
      padding: '37px 20px 32px 23px',
      '& .status': {
        padding: '6px 24px 6px 26px',
      },
      '& .logo': {
        paddingTop: '20px',
        position: 'relative',
        left: '10px',
      },
    },

  }
  
}
