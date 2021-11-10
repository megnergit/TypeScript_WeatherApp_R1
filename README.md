# TypeScript WeatherApp
## Task

We will create a weather app, following the textbook ["The First React
App with TypeScript"](https://react-typescript-book-weather-app.netlify.app/links) (Japanese). What the weather app does:

- accepts a name of a city
- hits the API at the website [weatherapi](https://www.weatherapi.com)
- returns
   + temperature
   + weather (sunny/cloudy/rainy, etc.)
   + weather icon

We will see how React works in a TypeScript code. This repository is
cloned from the [textbook
repo](https://github.com/mod728/react-typescript-book-weather-app).
The tech stack we will learn on the way are

1. Node.js (and npm within)
2. TypeScript
3. React
4. Netlify (to deploy the app)

## Quick Summary

1. Download [`node.js`](https://nodejs.org/en/download/).
   - choose 'LTS'
   - `npm` comes together with `node.js`

2. Get React template files.
   `npx create-react-app react-typescript-weather-app --template typescript`

   The command creates a copy of `create-react-app` to the local
   machine with the name `react-typescript-weather-app` Typescript
   template is used when making a copy.

3. `cd react-typescript-weather-app`

```
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
└── tsconfig.json
```

    We will clone the textbook repo to `src` directory, where we work.

4. `npm start`

    `node.js` is started. `node.js` is an 'environment' that provides
    us an App development platform. As we edit the source codes, we
    can see the updated output at `http://localhost:3000`.

    `Ctrl + C` to stop `node.js`

5.  Edit the source codes.

```
./src
├── App.css
├── App.scss
├── App.tsx
├── components
│   ├── Form.tsx
│   ├── Loading.tsx
│   ├── Results.tsx
│   └── Title.tsx
├── index.tsx
├── react-app-env.d.ts
└── reportWebVitals.ts
```


6.  Sign up [netlify](http://www.netlify.com).
    - one can sign up with GitHub ID.
    - we have to give netlify an access to the repo at our GitHub.
    - we do not need to build the app ourselves. netlify does that.
    - when a build is successful, netlify returns an URL of the app.

   ![Weather app on netlify](./images/netlify.png)

## To-Do
1. Full annotation in source codes.
2. Brush up.
3. Gatsby/Next.js

