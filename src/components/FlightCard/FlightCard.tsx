import { Box } from '@mui/material';
import { flightCardStyles } from './styles';
import FlightCardItem from './FlightCardItem';
import { formatCurrency } from '../../helpers';

interface FlightCardProps {
  from: string
  to: string
  date1: string
  date2?: string
}

function FlightCard({from, to, date1, date2}: FlightCardProps) {
  return (
    <Box className={`flight-card ${date2 ? 'lean': ''}`} sx={flightCardStyles}>

      <Box className='flight-card__items'>
        {
          [date1, date2].map((date, index) => {
            if (!date) return null;
            if (index === 1) return (
              <FlightCardItem
                key={index}
                from={to}
                to={from}
                date1={date1}
                date2={date2}
              />
            )
            return (
              <FlightCardItem
                key={index}
                from={from}
                to={to}
                date1={date1}
                date2={date2}
              />
            )
          })
        }
      </Box>

      <Box className='flight-card__totla-price'>
        <span>{`${date2 ? formatCurrency(9300) : formatCurrency(4150)}`}</span>
      </Box>
    </Box>
  )
}

export default FlightCard;