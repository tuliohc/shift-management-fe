import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getShifts, ShiftsResponse, getShiftsOverlap, ShiftsOverlapResponse } from '../../../api/shifts';
import { executeQ4Query, executeQ5Query, executeQ6Query } from '../../../api/queries';
import ShiftOverlapDetails from '../../ShiftOverlapDetails/ShiftOverlapDetails'
import ShiftCard from '../../ShiftCard/ShiftCard'
import QueryButtons from '../../QueryButtons/QueryButtons'

const Home: React.FC = () => {
  const [shifts, setShifts] = useState<ShiftsResponse[]>([]);
  const [shiftsOverlap, setShiftsOverlap] = useState<ShiftsOverlapResponse>();
  const [selectedShifts, setSelectedShifts] = useState<number[]>([]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const fetchedShifts = await getShifts();
        setShifts(fetchedShifts);
      } catch (error) {
        console.error('Error fetching shifts:', error);
      }
    };

    fetchShifts();
  }, []);

  const handleShiftClick = (shiftId: number) => {
    setSelectedShifts((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(shiftId);
      if (isAlreadySelected) {
        return prevSelected.filter(id => id !== shiftId);
      } else {
        return prevSelected.length < 2 ? [...prevSelected, shiftId] : prevSelected;
      }
    });
  };

  const compareShifts = async () => {
    if (selectedShifts.length === 2) {
      try {
        const fetchedShiftsOverlap = await getShiftsOverlap(selectedShifts[0], selectedShifts[1]);
        setShiftsOverlap(fetchedShiftsOverlap);
      } catch (error) {
        console.error('Error comparing shifts:', error);
      }
    }
  };

  const handleQ4Query = async () => {
    try {
      const result = await executeQ4Query();
      console.log('Q4 Query Result:', result);
    } catch (error) {
      console.error('Error executing Q4 query:', error);
    }
  };

  const handleQ5Query = async () => {
    try {
      const result = await executeQ5Query();
      console.log('Q5 Query Result:', result);
    } catch (error) {
      console.error('Error executing Q5 query:', error);
    }
  };

  const handleQ6Query = async () => {
    try {
      const result = await executeQ6Query();
      console.log('Q6 Query Result:', result);
    } catch (error) {
      console.error('Error executing Q6 query:', error);
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#f0f0f0',
              mb: 4
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              {/* Using the nullish coalescing operator to ensure overlapDetails is not undefined */}
              <ShiftOverlapDetails overlapDetails={shiftsOverlap ?? null} />
            </Box>
            <Button
              variant="contained"
              color="primary"
              disabled={selectedShifts.length !== 2}
              onClick={compareShifts}
            >
              Compare Shifts
            </Button>
          </Box>
        </Grid>
        {shifts.map((shift) => (
          <Grid item xs={12} sm={6} md={4} key={shift.shift_id}>
            <ShiftCard
              shift={shift}
              onClick={() => handleShiftClick(shift.shift_id)}
              isSelected={selectedShifts.includes(shift.shift_id)}
            />
          </Grid>
        ))}
        <QueryButtons 
          onExecuteQ4={handleQ4Query} 
          onExecuteQ5={handleQ5Query} 
          onExecuteQ6={handleQ6Query} 
        />
      </Grid>
    </Container>
  );
};

export default Home;
