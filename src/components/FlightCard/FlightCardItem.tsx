import { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Logo from "./Logo";
import { BagIcon, SuitcaseIcon, TimeLine } from '../svg';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

interface FlightCardItemProps {
  from: string
  to: string
  date1: string
  date2?: string
}

function FlightCardItem({from, to, date1, date2}: FlightCardItemProps) {
  const status = useRef('Невозвратный');
  const times = useRef([
    ['09:20', '11:05'],
    ['10:20', '12:05'],
    ['11:20', '13:05'],
  ]);
  const [selectedTimeIdx, setSelectedTimeIdx] = useState<number>(0);

  function getDiff() {
    const time1 = dayjs(times.current[selectedTimeIdx][0], 'hh:mm');
    const time2 = dayjs(times.current[selectedTimeIdx][1], 'hh:mm');
    const hour = time2.diff(time1, 'hour');
    const min = time2.diff(time1, 'minute') % 60;
    return `В пути ${hour} ч ${min} мин`;
  }

  return (
    <Box className='flight-card__item'>
      <Box className='status'>{status.current}</Box>
      <Logo/>
      <Box className='actions-box'>

        <Box className='info'>
          <Box className='start'>
            <Typography component='p' className='time'>{times.current[selectedTimeIdx][0]}</Typography>
            <Typography component='p' className='sity'>{from}</Typography>
            <Typography component='p' className='date'>{date1}</Typography>
          </Box>
          <Box className='timeline'>
            <TimeLine className='svg'/>
            <Typography component='p' className='duration'>{getDiff()}</Typography>
          </Box>
          <Box className='end'>
          <Typography component='p' className='time'>{times.current[selectedTimeIdx][1]}</Typography>
            <Typography component='p' className='sity'>{to}</Typography>
            <Typography component='p' className='date'>{date2}</Typography>
          </Box>
        </Box>

        <Box className='timing'>
          {
            !date2 ?
            times.current.map((time, index) => {
              return (
                <Box 
                  key={index}
                  component='button'
                  type='button'
                  className={`time-btn ${selectedTimeIdx === index ? 'active' : ''}`}
                  onClick={() => setSelectedTimeIdx(index)}
                >
                  <Typography component='span' className='start-time'>{time[0]}</Typography>
                  <Typography component='span' className=''> - </Typography>
                  <Typography component='span' className='end-time'>{time[1]}</Typography>
                </Box>
              )
            }) :
            null
          }
        </Box>

      </Box>

      <Box className='bags-images'>
        <Box className='bags-images__inner'>
          <BagIcon/>
          <SuitcaseIcon/>
        </Box>
      </Box>
    </Box>
  )
}

export default FlightCardItem;