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
Performance was also very good, thanks to `create-react-app` that split the bundle chunks and managed infrastructure accordingly.

![Performance metrics](/docs/images/perf.png?raw=true)