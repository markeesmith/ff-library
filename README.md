# ff-library

A cross-platform fantasy football library that provides an easy-to-use interface for interacting with fantasy football data.

## Support

In Development:
   - Sleeper

Planned Devleopment:
   - ESPN
   - MFL
   - Yahoo

## Motivation

The fantasy football data provided by fantasy platforms is lackluster, especially when it comes to dynasty leagues. As an avid fantasy football fan, this drives me crazy. The goal of the `ff-library` is to provide a simple, user-friendly API to query various fantasy data available through major fantasy football platforms.

## Installation

```sh
$ npm install ff-library
```

## Setup

```ts
import { User } from "ff-library";
```

## Usage

### Fetch User Data

Build the `User` object to access information on provided `username`:
```ts
import { User } from "ff-library";

const exampleUsername = "DaddyKee";
const user = new User(exampleUsername);
await user.build();

console.log(user);
```

Output from example:
```sh
User {
  username: 'DaddyKee',
  requestUrl: 'https://api.sleeper.app/v1/user/DaddyKee',
  id: '325092146891735040',
  email: null,
  phone: null,
  avatar: '9af57bf732c655bed5049dc29a117d64'
}
```
