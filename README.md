# react-redux-ddd

![Lint, build and test](https://github.com/jonatassales/react-redux-ddd/workflows/Lint,%20build%20and%20test/badge.svg)

## Demo
[NYTBooks](https://nyt-books.vercel.app/)

## Architecture
I focused more on organization, architecture and cleaning up the code. The applications is an experimental project built on top of `create-react-app` using `Redux`, `Typescript` and the `Layered Architecture` approach. The main reason for this is to test Redux with Typescript which end up being a really good surprise for me, they worked very well together. The purpose regarding the architecture approach is to make the application scalable as it uses modules. Redux has a very particular way to transit state generating a lot of boilerplating, that's why the modularity is a good alternative in my opinion.

### Redux
Redux is predictable and easy to test and scale when done right. It's been a while since I don't touch any Redux code so I had to reserve a few minutes to take a look at the documentation. Nowadays Redux as 2 approaches: `hooks` and `HOCs`. I opt for the `connect` HOC component because hooks has some downsides regarding performance if you don't use strategies like memoization. The isolation that redux brings gives you more flexibility to test and document.

### Typescript
Typescript is known as a "bug safe" language as it gets a lot bugs in build time instead of runtime. Generally runtime bugs are annoying and `prop-types` adds more weight to the final bundles as it handles bugs in runtime. Also, Typescript helped me a lot while defining the domain logic of the application, attaching everything in the right way.

### Layered Architecture
Layered Architecture is an architectural approach the separate concerns into 4 types (in terms of frontend): Application, which is responsible for application implementation logic like actions, types, reducers and so on. Domain is responsible for defining the domain business data and logic, it's easy to read and identify what the application/bounded context does. Infrastructure is everything that is not directly related to the business, like third-party libs. Interface are all the visual stuff like components, templates and pages.

![Layered Architecture](/docs/images/layered.png?raw=true)

### Lighthouse
I've got really good scores on SEO, Best Practices and Accessibility (100/100) in almost all of them

![Lighthouse scores](/docs/images/scores.png?raw=true)

### Performance
Performance was also very good, thanks to `create-react-app` that split the bundle chunks and managed infrastructure accordingly. Having a first paint around `0.7s`.

![Performance metrics](/docs/images/perf.png?raw=true)

## Design
I've used a design doc approach with `storybook`. I separated visual components in two types: `ui` and `patterns`. UI components are the base components, while patterns are a combination of them. UI components can be used across all bounded contexts, not only `books`. Patterns turns to be more complex and sometimes connect with the store.

### Styled-components
I prefer to apply the single responsibility `SOLID` principle in front-end as well, so every component or styled-component has its own file. It's easier to maintain.

## Tests
I've used `jest` with `testing-library` in order to write tests. I think integration tests gives you more confidence about the application, so I like to write them more. unit tests are also important for business logic and finding bugs which is more difficult with integration and E2E tests. Isolated layers like `actions`, `reducers` and components, gives you the false confidence that they work well together which sometimes might not be the case. Regarding code coverage I only look at it as a metric to see where my code is not covered and not to guide my development. This is totally opinative perspective based on stuff I read [here](https://kentcdodds.com/blog/write-tests/) and [here](https://martinfowler.com/bliki/TestCoverage.html). I'm open to new ideas though. I'm also learning about the Redux community and the cool stuff we already have like libs for mocking and the right ways to do it.

## CI and Automation

### Pipeline
I've used `github actions` to build the pipeline to test, lint and build basically. No PR is allowed to merge or rebase if those don't pass.

### Deploy
I've deployed the app on `Vercel` which already have a good integration with github environments.

### Tooling
I've used `prettier` and `eslint` to standardize the code quality, and husky to automate the commits, allowing only the commit to be made after those have passed. I've also used `conventional commits` in case we evolve for a more structured release automation.

## Running the application

### Requirements
 - Node
 - Yarn
 - [Serve](https://www.npmjs.com/package/serve) (For production build only)

### Development
Firstly install the dependencies by running:
```bash
yarn
```

I restrict to use only `yarn` so `package-lock.json` won't be generated.

To make sure everything is working fine run:
```bash
yarn lint && yarn build && yarn test
```

#### Env file
In root you'll find a `.env.example` file with all env keys but not filled. You should get values following the NYT books API docs and create an `.env` file in root.

Finally, run:
```bash
yarn start
```

The application will be available at `http://localhost:3000/`.

### Storybook
To see the components on Storybook run:
```bash
yarn storybook
```

### Production build
I recommend using [serve](https://www.npmjs.com/package/serve) by Vercel, so you can run in you terminal:
```bash
yarn global add serve
```

and then:
```bash
yarn build && serve -s build
```

The application will be available at `http://localhost:5000/`.

I hope you like it!
