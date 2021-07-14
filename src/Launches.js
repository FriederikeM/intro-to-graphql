import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

export function Launches() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={6} lg={4}>
          <Card>
            <CardMedia
              style={{
                height: 250,
                backgroundColor: "lightgray",
              }}
              image={null}
              title={null}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                "Mission name"
              </Typography>
              <Typography variant="body2">
                "Rocket" launched "launch date" from "launch site"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box py={5}>
        <Button size="medium" variant="contained" onClick={() => {}}>
          {"Load more"}
        </Button>
      </Box>
    </>
  );
}
