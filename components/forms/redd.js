import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const redd = () => {
  return (
    <Stack
      component="form"
      sx={{
        width: 600,
        maxWidth: "100%",
      }}
      noValidate
      autoComplete="off"
      // spacing={4}
    >
      <TextField id="standard-basic" label="Link" variant="standard" />

      <RadioGroup
        row
        aria-label="quality"
        defaultValue="sd"
        name="radio-buttons-group"
        sx={{ mt: 3 }}
      >
        <FormControlLabel value="sd" control={<Radio />} label="SD" />
        <FormControlLabel value="hd" control={<Radio />} label="HD" />
      </RadioGroup>
      <Button
        variant="outlined"
        endIcon={<DownloadIcon />}
        size="medium"
        sx={{ mt: 3 }}
        style={{ width: "150px" }}
      >
        Download
      </Button>
    </Stack>
  );
};

export default redd;
