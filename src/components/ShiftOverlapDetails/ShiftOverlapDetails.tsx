import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ShiftsOverlapResponse } from "../../api/shifts"

interface ShiftOverlapDetailsProps {
  overlapDetails: ShiftsOverlapResponse | null;
}

const ShiftOverlapDetails: React.FC<ShiftOverlapDetailsProps> = ({ overlapDetails }) => {
  if (!overlapDetails) return null;

  return (
    <Box>
      <Typography variant="h6">Shifts Overlap Details</Typography>
      <Typography>Overlapping Minutes: {overlapDetails.totalOverlapMinutes}</Typography>
      <Typography>Max Overlap Threshold: {overlapDetails.maxOverlapThreshold}</Typography>
      <Typography>Exceeds Overlap Threshold: {overlapDetails.exceedsThreshold ? 'Yes' : 'No'}</Typography>
    </Box>
  );
};

export default ShiftOverlapDetails;
