import { Paper, CardMedia, Typography } from "@mui/material";
import { convertDateToWeekDay } from "../../helpers/helpers";

interface Props {
  date: string;
  temp_c: number;
  icon: string;
  isSelected: boolean;
  handleClick: () => void;
}

export default function ForecastCard(props: Props) {
  return (
    <Paper
      sx={{
        minWidth: "18%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",

        borderTop: "3px solid transparent",
        borderTopColor: props.isSelected ? "primary.main" : "transparent",
        transition: "0.2s ease",
      }}
      onClick={props.handleClick}
    >
      <Typography sx={{ p: "5px" }} variant="subtitle2" component="h6">
        {convertDateToWeekDay(props.date)}
      </Typography>
      <CardMedia
        sx={{ height: 35, width: 40 }}
        image={props.icon}
        title={`Icon illustrating ${convertDateToWeekDay(props.date)} weather`}
      />
      <Typography sx={{ py: "5px" }} variant="body2">
        {Math.round(props.temp_c)}
        {"\u00B0"}C
      </Typography>
    </Paper>
  );
}
