# Matt Woodruff - Grain Technical Assessment

See below for instructions to run this app in development mode, as well as considerations taken when building this app! I thoroughly enjoyed coding this up, and hope you enjoy the finished product! I look forward to meeting with Grain in further interviews to continue discussing my skills and culture fit.

## Run Application

First, clone this project to your local machine.

Second, `cd` into the root of the project, and run `npm install`.

Third, run `npm start` to spin up the app in development mode.

Fourth, navigate to http://localhost:3000 in the browser, and enjoy playing Tic-Tac-Toe!

## Considerations and Notes

1. The following items are everything acomplished within this app, as asked for by Grain:

-   Required: Build a Tic-Tac-Toe game
-   Extra: Use TypeScript
-   Extra: Make it look nice
-   Extra: Add modern tooling of your choice (I implemented Prettier for formatting)
-   Extra: Save game data to LocalStorage

2. Global State: Normally with a more complex app I would consider using something more suited for state management like React Context, Redux, MobX, etc., and utilize those patterns for each component needing to access game state. However, to get this project to Grain in a timely manner I opted to pass along everything needed down through the component tree. As such, you will see decisions like the `handleTurnFn` which is passed from `App.tsx` to `GamePlay.tsx` to `Space.tsx`. This is not necessarily my preferred way, but it seemed adequate given the scale and ask for this project.
