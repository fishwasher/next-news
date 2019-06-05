# The Next News Project

Originally created as a *proof-of-concept* project driven by the [**Next.js**](https://nextjs.org/) framework that uses [**React.js**](https://reactjs.org/) library and is designed for [**Node.js**](https://nodejs.org/en/) environment.

The project's goal is a news feed aggregation web site driven by the [**News API**](https://newsapi.org/).

## Project Features

- The project is built upon *Next.js* web framework. It uses *Next*'s standard setup with modern-state *React* library.

- Most of stateful *React* components are class-free, maintaining internal state via [*hooks*](https://reactjs.org/docs/hooks-intro.html), a relatively new addition to *React*.

- Application global state is maintained with a help of *ReactN* module, which extends the concept of *hooks* to the global scope, eliminating the need of separate global state handling libraries, such as *Redux* and friends.

- [**Less**](http://lesscss.org/) CSS pre-processing is used, making sure it works just fine within the *Next* stack.

- Serverless deployment using free [*Now*](https://zeit.co/now) cloud platform, continuously-integrated with this GitHub repository.

- The data comes from the **NewsAPI** via an external proxy that provides caching and some custom presets.
