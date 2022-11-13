import { useLocation } from 'react-router-dom';
import { infoStyles } from './styles';
import { Box } from '@mui/material';
import FlightCard from '../../components/FlightCard/FlightCard';

function Info() {
  const location = useLocation();
  const from: string = location.state.from;
  const to: string = location.state.to;
  const date1: string = location.state.date1;
  const date2: string | undefined = location.state.date2;
    
  return (
    <Box className='info' sx={infoStyles}>
      <FlightCard
        from={from}
        to={to}
        date1={date1}
        date2={date2}
      />
    </Box>
  )
}

export default Info;


















// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import dayjs, { Dayjs } from 'dayjs';
// import { infoStyles } from './styles';
// import { Box } from '@mui/material';
// import FlightCard from '../../components/FlightCard/FlightCard';

// function Info() {
//   const location = useLocation();
//   const from: string = location.state.from;
//   const to: string = location.state.to;
//   const date1 = dayjs(location.state.date1.$d).format('DD.MM.YYYY');
//   const date2 = location.state.date2 ? dayjs(location.state.date2.$d).format('DD.MM.YYYY') : null;

//   const [dates, setDates] = useState<[string, string | null]>([date1, date2]);

//   console.log(from);
//   console.log(to);
//   console.log(dates);
    
//   return (
//     <Box className='info' sx={infoStyles}>
//       <FlightCard
//         from={from}
//         to={to}

//       />
//       {/* {
//         dates.map((item) => {

//           return (
//             <FlightCard/>
//           )
//         })
//       } */}
//     </Box>
//   )
// }

// export default Info;