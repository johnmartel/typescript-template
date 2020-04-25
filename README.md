# typescript-template

[![](https://github.com/johnmartel/typescript-template/workflows/Build%20and%20test/badge.svg)](https://github.com/johnmartel/typescript-template/actions?query=workflow%3A%22Build+and+test%22)
[![codecov](https://codecov.io/gh/johnmartel/typescript-template/branch/master/graph/badge.svg)](https://codecov.io/gh/johnmartel/typescript-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![](https://api.dependabot.com/badges/status?host=github&repo=johnmartel/typescript-template)](https://dependabot.com)

This is a (slightly) opinionated Github template for creating Typescript projects. 


## Usage

Simply use this repository as a template for any new repository.

See: [Creating a repository from a template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) from the Github doc.

Once this is done, you may want to get rid of the explanation comments.

### TL;DR

- Select this repository as the template fo your new repository;
- You won't get the history from this repository, only the files (*all* of them) as an `Initial commit`;
- Modify the stuff you need to: README, repo settings, any tsc/eslint/jest/etc. configurations
- Please get rid of the explanation comments to clean up your new repo.


## Features

Projects created from this template will get the following for free:

- Sensible defaults for your Github repository settings ;
- Sensible defaults for:
  - `tsc` configuration;
  - `eslint` configuration;
  - `prettier` configuration;
  - `jest` configuration with `ts-jest`;
- Default tests location;
- Common npm scripts
- Basic CI workflow using Github actions
- Automatic dependency upgrade PRs by [Dependabot](https://dependabot.com)


## Building your new repo

```shell script
npm install
npm run lint
npm test
npm run compile:clean
```

Your typescript code will then compile nicely into `./lib`, conveniently ignored by git.
