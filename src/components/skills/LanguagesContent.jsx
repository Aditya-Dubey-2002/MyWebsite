import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import skillsData from './Data';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { Star } from '@mui/icons-material';
import Rating from './Rating';

export default function BasicTable(props) {
    const data = skillsData[(props.index)].skills;
    const tableContainerStyle = {
        color:"white"
    }
    // const rating = (value)=> {
    //   let component = <Star/>
    //   while(value--){
    //     component+=<Star/>;
    //   }
    //   console.log(component);
    //   return (<>
    //     {component}
    //   </>
    //   )
    // }
  return (
    <TableContainer component={Paper} >
      <Table sx={{ }} aria-label="simple table">
        <TableBody style={tableContainerStyle}>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><Rating stars={row.proficiency}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
