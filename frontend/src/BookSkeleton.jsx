import { Skeleton } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import Grid from "@mui/material/Grid2";
const BookSkeleton = () => {
  const textFontSize = 2;
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: `${textFontSize}rem` }} />
      <Skeleton variant="text" sx={{ fontSize: `${textFontSize}rem` }} />
      <Skeleton variant="text" sx={{ fontSize: `${textFontSize}rem` }} />
      <Skeleton variant="text" sx={{ fontSize: `${textFontSize}rem` }} />
      <Skeleton variant="rectangular" width={200} height={200} />
    </Grid>
  );
};
export default BookSkeleton;
