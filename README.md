# Appcues test

![Lint, build and test](https://github.com/jonatassales/appcues/workflows/Lint,%20build%20and%20test/badge.svg)

## Demo
[Bookcues](https://appcues.vercel.app/)

## Architecture
O focused more on organization, architecture and cleaning up the code. The aplications is an experimental project built on top of `create-react-app` using `Redux`, `Typescript` and the `Layered Architecture` approach. The main reason for this is to test Redux with Typescript with end up being a really good surprise for me, they worked very wwll together. The purpose regarding the architecture approach is to make the applcation scallable as it uses modules. Redux has a very particular way to transit state generating a lot of boilerplating. That'swhy the modularity is a good alternative in my opinion.

### Redux
Redux is prediclable and easy to test ans scale when done right. It's been a while since I don't touch any Redux code so I had to reserve a few minutes to take a look at the documentation. Nowadays Redux as 2 approaches: `hooks` and `HOCs`. I opt for the `connect` HOC component because hooks has some downsides regarding performance if you dont't use strategies like memoization. The isolation that redux brings gives you more flexibility to test and document.

### Typescript
Typescript is known as a "bug safe" language as it gets a lot buugs in build time instead of runtime. Generally runtime bugs are annoying and `prop-types` adds more weight to the final bundles as it handles bugs in runtime. Also, Typescript helped me a lot while defining the domain logic of the application, attaching everything in the right way.

### Layred Architecture
Is an architectural approach the separate concerns into 4 types (in terms of frontend): Application, which is responsible for application implementationn logic like actions, types, reducers and so on. Domain is responsible for defining the domain business data and logic, it's easy to read and identify what the application/bounded context does. Infrastructure is everything that is not directly related to the business, like third-party libs. Interface are all the visual stuff like components, templates and pages.

![Layered Architecture](/docs/images/layered.png?raw=true)

## Improvments

### Features
I skipped some features like creating a book to have more time to do new ones. I've created a pagination with a infinit loader button that keeps loading books by the offset. Also, added a theme structure and attached to the styled components making them follow a contract. I've also added loaders for better feedback experience.

### Lightouse
I've got really good scores on SEO, Best Practices and Accessibility (100/100) all of them

![Lighthouse scores](/docs/images/scores.png?raw=true)

### Performance
Performance was also very good, thanks to `create-react-app` that split the bundle chunks and managed infrastructure accordingly. Having a first paint of `0.7s`.

![Performance metrics](/docs/images/perf.png?raw=true)

## Design
I used a design doc approach with `storybook`. I separated visual components in two types: `ui` and `patterns`. UI components are de base components, while patterns are a combination of them. UI components can be used accross all bounded contexts, not only `books`. Patterns turns to be more complex and sometimes connect with the store.

### Styled-components
I prefer to apply the single responsability `SOLID` principle in front-end as well, so every component or styled-component has its own file. It's easier to maintai. Some of the styles I did't touch, just moved around, mostly because of the time, some I had to re-implement.

## Tests
I've used `jest` with `testing-library` in order to right tests. Even though knowing that TDD is a grat strategy because shows you a better way to re-implement a piece of code in a better I prefer to write tests after implementation. I also get the benefit of going back to the implementation looking closely to the test a made and than getting into the TDD cycle. I think integration tests gives you more confidence about the application, so I like to write them more. unit tests are also important for business logic, but for integrated layers like `actions`, `reducers` and compoents, gives you the false confidence that they work well together which sometimes might not be the case. Regarding code coverage I only look at it as a metric to see where my code is not covered and not to guide my development. For those to arguments I based my opinion [here](https://kentcdodds.com/blog/write-tests/) and [here](https://martinfowler.com/bliki/TestCoverage.html).

# CI and Automation

## Pipeline
I've used `github actions` to build the pipeline to test, lint and build basically. No PR is allowed to merge or rebase if those don't pass.

## Tooling
I've used `prettier` ans `eslint` to standardize the code quality, and husky to automate the commits, allowing only the commit to be made after those have passed. I've also used `conventional commits` in case we evolve for a more structed release automation.

## Problems with the fist application
I'm not familiar with `Redux` since it's been almost 4 years I don't work with it, so I might have made some mistakes on best practices like caching in the local storage or maybe not using `redux toolkit` for example, but I could see some `React` problems like `prop-drilling` and top level components consuming from the store, generating unecessary re-renders. I tried to apply some perf techniques like `memoization` of values and callbacks, connection only final level node components to the store to no cause re-reders across the application. Organizations was also a big issue. It was difficulta to identify what was what.

## Edge cases
The mais edge case was the books IDs. The NYT api didn't have a `getBookByID` end point. Actually the books didn't have IDs at all, so I decided to give them one by using a UUID lib. The problem with this was that even it's ok to manipulate books with the ID, I only get them whem fetching the books, which is not the case when you are in the `BookDetails` page. If I refresh the page I don't have the books in memory to compare anymore, and I decided not to maintain them in local storage because of the size limit and it's not best practice at all. The perfect situation would be if the books have a native id and the api have a way to get them by it. I even thought about transit them through jwt tokens via query paramenters but it was also not a good idea thinking about SEO. I end up doing a workround just to not let the app crashes.
## What I could've done better
I would work more on the design system implementations and separation of concerns. I'd also apply `windowing` to the grid and list. I was about to do that but vitualize grid are more complex than lists, so I gave up on this.

## Deploy
I've deployed the app on `Vercel` which already have a good integration with github envirnments.
## Running the application

### DEV
