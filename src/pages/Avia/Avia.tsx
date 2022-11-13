import { useState, FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { TextField, Button, DatePicker } from '../../components/UI';
import { aviaPage, formStyles, textFieldLocalStyles } from './styles';
import dayjs, { Dayjs } from 'dayjs';

function Avia() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date1, setDate1] = useState<Dayjs | null>(null);
  const [date2, setDate2] = useState<Dayjs | null>(null);
  const navigate = useNavigate();

  const date1ChangeHandler = useCallback(
    function(date: null | Dayjs) {
      setDate1(date);
    },
    []
  )

  const date2ChangeHandler = useCallback(
    function(date: null | Dayjs) {
      setDate2(date);
    },
    []
  )
  
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(
      'info', 
      {
        state: {
          from, 
          to, 
          date1: dayjs(date1).format('DD.MM.YYYY'), 
          date2: date2 ? dayjs(date2).format('DD.MM.YYYY') : null,
        }
      }
    )
  }

  return (
    <Box sx={aviaPage}>
      <Box 
        component='form'
        autoComplete="off"
        sx={formStyles}
        onSubmit={submitHandler}
      >
        <Box className='top'>
          <TextField 
            type='text'
            required
            label='Откуда'
            placeholder='Город вылета'
            sx={{...textFieldLocalStyles, marginRight: '25px'}}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <TextField 
            type='text'
            required
            label='Куда'
            placeholder='Город прилёта'
            sx={{...textFieldLocalStyles, marginRight: '24px'}}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <DatePicker label='Туда' onChange={date1ChangeHandler} value={date1}/>
          <DatePicker label='Обратно' onChange={date2ChangeHandler} value={date2}/>
        </Box>

        <Box className='bottom'>        
          <Button 
            type='submit'
            className='submit-btn'
            disabled={(!from || !to || !date1) ? true : false}
          >Найти билеты</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Avia;