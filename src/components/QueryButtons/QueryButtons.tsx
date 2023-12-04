import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

interface QueryButtonsProps {
  onExecuteQ4: () => void;
  onExecuteQ5: () => void;
  onExecuteQ6: () => void;
}

const QueryButtons: React.FC<QueryButtonsProps> = ({ onExecuteQ4, onExecuteQ5, onExecuteQ6 }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Button variant="contained" color="primary" onClick={onExecuteQ4} sx={{ mr: 2 }}>
        Execute Q4 Query
      </Button>
      <Button variant="contained" color="primary" onClick={onExecuteQ5} sx={{ mr: 2 }}>
        Execute Q5 Query
      </Button>
      <Button variant="contained" color="primary" onClick={onExecuteQ6}>
        Execute Q6 Query
      </Button>
    </Box>
  );
};

export default QueryButtons;
