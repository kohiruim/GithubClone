# task #1

## Table of Contents

- [Getting Started](#getting-started)
- [Testing](#testing)
- [DevTools](#devtools)
- [Installed Packages](#installed-packages)

## Getting Started

Installing dependencies

```
npm install
```

And running the setup script (initializes git repository and husky and installs playwright)

```
npm run setup
```

## Testing

Unit testing is handled by React Testing Library and Vitest while End-to-End (E2E) Testing is conducted by Playwright.

If you'd like to run all tests, Unit and E2E alike, execute the following command:

```
npm run test
```

### Unit Testing

When running unit test scripts, it is assumed that unit tests will be colocated with the source files. Take a look at the placeholder README file in `src/components` for [an example](src/components/README.md).

If you'd like to execute unit tests specifically, the below command will execute vitest:

```
npm run test:unit
```

If instead you are interested in coverage reporting, run:

```
npm run test:unit:coverage
```

### End-to-End (E2E) Testing

Running E2E tests use a similar syntax to running unit tests:

```
npm run test:e2e
```

If you wish to see the reports, run:

```
npm run test:e2e:report
```

## Devtools

This project includes a set of Devtools. Some are additional package dependencies whereas others come built-in to the packages themselves.

### Devtool dependencies:

- [@tanstack/react-query-devtools](https://tanstack.com/query/v4/docs/react/devtools) - Dedicated dev tools to help visualize the inner workings of React Query
- [@tanstack/router-devtools](https://tanstack.com/router/v1/docs/devtools) - Dedicated dev tools to help visualize the inner workings of TanStack Router
- [@tanstack/react-table-devtools](https://www.npmjs.com/package/@tanstack/react-table-devtools) - Dedicated dev tools to help visualize the inner workings of TanStack Table
- [@hookform/DevTools](https://react-hook-form.com/dev-tools) - React Hook Form Devtools to help debug forms with validation

A set of utility components are provided in `src/components/utils/development-tools/`. These [wrapper components](https://tanstack.com/router/v1/docs/devtools#only-importing-and-using-devtools-in-developmentgit) check whether the application is running in development or production mode and render the component or null respectively. In other words, you can confidently use them during development without having to worry about them showing up for end users in production.

**TanStack Query Devtools** are ready to go out of the box. The development vs. production rendering mechanism is built into the devtools. If you do wish to [render the devtools in production](https://tanstack.com/query/latest/docs/react/devtools) you can freely do so by following the TanStack Query Devtools documentation. The devtools component can be found in `src/App.tsx`.

When running the application in development mode you can find the TanStack Query Devtools icon in the bottom left corner of the page sporting the [React Query Logo](https://img.stackshare.io/service/25599/default_c6db7125f2c663e452ba211df91b2ced3bb7f0ff.png).

**TanStack Router Devtools**, however, utilizes its respective utility component in this project. The initial setup has been taken care of but if you wish to modify or remove the component, have a look in `src/App.tsx`.

The TanStack Router Devtools icon can be found in the bottom right corner of the page denoted by the vertically stacked "TANSTACK ROUTER" logo.

The above components, along with their imports, are commented out to start.

**TanStack Table Devtools** Documentation is, at the time of writing this, non-existent. Having said that, usage is similar to the other TanStack devtools. A utility component restricting the devtools to development builds has been provided. The difference in comparison to the other TanStack devtools is the lack of floating mode. Instead, the Devtools are rendered as a component within the actual TanStack Table you define. An additional caveat being that the DevTools component (built-in and provided utility alike) require a table prop from the `useReactTable()` hook. In other words, if you have multiple tables, each table must have its own Devtools component. Check the simplified code below.

```
function Table(): FunctionComponent {
  /* some code */

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {/* table code */}
      <TanStackTableDevelopmentTools table={table} />
    </>
  )
}
```

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)

### Routing

- [TanStack Router](https://tanstack.com/router/v1)

### Linting & Formatting

- [ESLint](https://eslint.org)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [Prettier](https://prettier.io)

### State Management

- [TanStack Query (React Query)](https://tanstack.com/query/latest)

### Testing

- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev)

### Development Tools

- [TanStack Query Devtools](https://tanstack.com/query/latest/docs/react/devtools?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Fdevtools)
- [TanStack Router Devtools](https://tanstack.com/router/v1/docs/devtools)
- [React Hook Form Devtools](https://react-hook-form.com/dev-tools)

### Git

- [Husky](https://github.com/typicode/husky#readme)
