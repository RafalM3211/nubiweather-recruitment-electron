import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  text?: string;
}

export default function Loader(props: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle2" color="grey" sx={{ mb: "10px" }}>
        {props.text || "Loading..."}
      </Typography>
      <CircularProgress />
    </Box>
  );
}
