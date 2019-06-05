# The Next News Project

Originally created as a _proof-of-concept_ project driven by the *Next.js* framework that uses *React.js* library and is designed for *Node.js* environment.

The project's goal is a news feed aggregation web site driven by the *Newsfeed API*.

## Project Features

- The project is built upon *Next.js* web framework. It uses *Next*'s standard filesystem-based routing with modern-state _React_ library.

- All stateful _React_ components are class-free, maintaining internal state via _hooks_, a relatively new addition to _React_.

- Application global state is maintained with a help of _ReactN_ module, which extends the concept of _hooks_ to the global scope, eliminating the need of separate global state handling libraries, such as _Redux_ and friends.

- *Less* CSS pre-processing is used, making sure it works just fine within the _Next_ stack.

- Serverless deployment using the free *Now* cloud platform, continuously-integrated with this GitHub repository.

- The data comes from *NewsAPI* via an external proxy that provide caching and some custom presets.