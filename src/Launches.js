import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

import { useQuery, gql } from "./api";
import { apis } from "./const";

export function Launches() {
  const [launchesLimit, setLaunchesLimit] = useState(6);

  const { data, loading } = useQuery(
    gql`
      query ($launchesLimit: Int) {
        launchesPast(limit: $launchesLimit) {
          mission_name
          rocket {
            rocket_name
          }
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            wikipedia
            mission_patch_small
            flickr_images
          }
        }
      }
    `,
    { endpoint: apis.spaceX, variables: { launchesLimit } }
  );

  console.log(data);
  return (
    <>
      <Grid container spacing={3}>
        {data?.launchesPast.map((launch) => {
          const {
            id,
            mission_name,
            launch_date_local,
            launch_site: { site_name_long },
            rocket: { rocket_name },
            links: { flickr_images },
            links: { wikipedia },
            links: { article_link },
          } = launch;

          return (
            <Grid item md={6} lg={4} key={id}>
              <Card>
                <CardMedia
                  style={{
                    height: 250,
                    backgroundColor: "lightgray",
                  }}
                  image={flickr_images?.[0]}
                  title={null}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {mission_name}
                  </Typography>
                  <Typography variant="body2">
                    {rocket_name} launched {launch_date_local} from{" "}
                    {site_name_long}
                  </Typography>
                </CardContent>
                {wikipedia || article_link ? (
                  <CardActions>
                    {wikipedia ? (
                      <Button size="small" href={wikipedia} target="_blank">
                        Wikipedia
                      </Button>
                    ) : null}
                    {article_link ? (
                      <Button size="small" href={article_link} target="_blank">
                        Article
                      </Button>
                    ) : null}
                  </CardActions>
                ) : null}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box py={5}>
        <Button
          size="medium"
          variant="contained"
          disabled={loading}
          onClick={() => {
            setLaunchesLimit(launchesLimit + 6);
          }}
        >
          {loading ? "Loading" : "Load more"}
        </Button>
      </Box>
    </>
  );
}
