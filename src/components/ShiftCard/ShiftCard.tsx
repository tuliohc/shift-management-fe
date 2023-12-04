import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { ShiftsResponse } from "../../api/shifts"

interface ShiftCardProps {
  shift: ShiftsResponse;
  onClick: () => void;
  isSelected: boolean;
}

const ShiftCard: React.FC<ShiftCardProps> = ({ shift, onClick, isSelected }) => {
  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 2,
        border: '1px solid #ccc',
        backgroundColor: isSelected ? '#cfe8fc' : '#fff',
        ':hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {shift.facility_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {new Date(shift.shift_date).toLocaleDateString()} |{' '}
          {formatTime(shift.start_time)} - {formatTime(shift.end_time)}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default ShiftCard;