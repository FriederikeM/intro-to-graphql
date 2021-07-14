# GraphQL Introduction: SpaceX Launches

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Launch Sequence 🚀

1. Use the `useQuery` hook (from `./api`) to retrieve SpaceX' CEO and log the result to console. Set the endpoint property to `apis.spaceX` imported from `./const`;
2. Now retrieve a list of last 6 launches and log their mission names to console.
3. Map over the launches array to repeat the `<Grid item>` element for each launch.

   - What can you use as a react key?

4. Output the mission name, rocket name, launch date and name of the launch site in the cards content.

   - How can you format the launch date?

5. If a launch has flickr-images show the first one in the `<CardMedia>` element.

   - Can you use the mission patch image as a fallback?
   - Can you prevent the mission patch from being cut off?

6. Import `CardActions` and `Button` from `@material-ui/core`.
7. If a launch has a wikipedia entry and/or an article link render a `<Button href={linkUrl}>` for each link and wrap them into a single `<CardActions>` element. Render the actions conditionally.
8. Update the query to use `launchesLimit` as an `Int` variable.
9. Create a react state to keep track of the current `launchesLimit` and pass it into the variables property of `useQuery`.
10. Wire up the load more button to increment the `launchesLimit` state by a fixed amount.
11. While the query is loading, make the button disabled and change the button text to "Loading…".


## Available Scripts

In the project directory, you can run:

### `yarn start` / `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<details>
  <summary>Other Scripts</summary>

### `yarn test` / `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` / `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` / `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

</details>
