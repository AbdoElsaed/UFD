import { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const YT = () => {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("sd");

  const handleClick = async () => {
    const regex =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(regex)) {
      return (window.location.href = `/api/yt?url=${url}&q=${quality}`);
    }
    console.log("invalid url");
  };

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
      <TextField
        id="standard-basic"
        label="Youtube Link"
        variant="standard"
        onChange={(e) => setUrl(e.target.value)}
      />

      <RadioGroup
        row
        aria-label="quality"
        defaultValue={quality}
        name="radio-buttons-group"
        sx={{ mt: 3 }}
        onChange={(e) => setQuality(e.target.value)}
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
        onClick={handleClick}
      >
        Download
      </Button>
    </Stack>
  );
};

export default YT;
