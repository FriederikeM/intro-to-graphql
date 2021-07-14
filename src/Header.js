import { Box, Grid, Typography } from "@material-ui/core";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Box py={5} component="header">
      <Grid container alignItems="baseline" spacing={2}>
        <Grid item>
          <Logo width={210} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            <strong>LAUNCH EXPLORER</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
