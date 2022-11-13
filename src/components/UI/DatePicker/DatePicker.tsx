import { memo } from 'react';
import { TextField } from '../';
import { wrapperStyles, textFieldLocalStyles, clearBtnStyles } from './styles';
import { CalendarIcon, CalendarIconBlue, XIcon } from '../../svg';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { Box } from '@mui/material';

interface DatePickerMyProps {
  label: string
  value: Dayjs | null
  onChange: (date: Dayjs | null) => void
}

function DatePicker({ label, value, onChange }: DatePickerMyProps) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <MUIDatePicker
        inputFormat='DD.MM.YY'
        InputProps={{ 
          disableUnderline: true,
          placeholder: 'дд.мм.гг'
        }}
        label={label}
        value={value}
        onChange={onChange}
        components={{
          OpenPickerIcon: value ? CalendarIconBlue : CalendarIcon,
        }}
        renderInput={(params) => {
          return (
            <Box sx={wrapperStyles}>  
              <TextField 
                {...params}
                InputProps={{
                  ...params.InputProps,
                  placeholder: 'дд.мм.гг'
                }}
                sx={textFieldLocalStyles}
              />
              {
                value ? 
                <Box component='button'
                  sx={clearBtnStyles}
                  type='button'
                  className='clear-btn'
                  onClick={() => onChange(null)}
                ><XIcon/></Box> :
                null
              }
            </Box>
          )}
        }
      />
    </LocalizationProvider>
  );
}

export default memo(DatePicker);