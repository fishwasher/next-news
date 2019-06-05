# The Next News Project

Originally created as a *proof-of-concept* project driven by the **Next.js** framework that uses **React.js** library and is designed for **Node.js** environment.

The project's goal is a news feed aggregation web site driven by the **Newsfeed API**.

## Project Features

- The project is built upon *Next.js* web framework. It uses *Next*'s standard filesystem-based routing with modern-state *React* library.

- All stateful *React* components are class-free, maintaining internal state via *hooks*, a relatively new addition to *React*.

- Application global state is maintained with a help of *ReactN* module, which extends the concept of *hooks* to the global scope, eliminating the need of separate global state handling libraries, such as *Redux* and friends.

- **Less** CSS pre-processing is used, making sure it works just fine within the *Next* stack.

- Serverless deployment using the free *Now* cloud platform, continuously-integrated with this GitHub repository.

- The data comes from the **NewsAPI** via an external proxy that provides caching and some custom presets.