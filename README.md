
<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# NodeJS-React-MarkDown &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Additional information or tag line

A brief description of your project, what it is used for.

## 🎋 Github branch naming 규칙

### 1) main branch, develop branch

main - 제품으로 출시될 수 있는 브랜치
사용자에게 배포 가능한 상태만을 관리한다. 여기서는 배포(release) 이력을 관리하기 위해 사용한다.
develop - 다음 출시 버전을 개발하는 브랜치
기능 개발을 위해 브랜치들을 병합하기 위해 사용, 즉 모든 기능이 추가되고 버그가 수정되어 배포 가능한 안정적인 상태라면 develop 을 main 으로 병합한다. 평소에는 이 브랜치 기반으로 개발을 진행한다.

### 2) feature branch

feature - 새로운 기능 개발 및 버그 수정이 필요할 때마다 develop 브랜치로부터 분기한다.

개발이 완료되면 develop 브랜치로 merge 하여 다른 사람들과 공유한다.
feature/front/기능요약 ex) feature/front/login, feature/back/login-api

feature/front/{issue-number}-기능요약 ex) feature/front/#77-login, feature/back/#77-login-api

### 3) release branch

release - 이번 출시 버전을 준비하는 브랜치
ex) release-1.2

### 4) hotfix branch

hotfix - 출시 버전에서 발생한 버그를 수정하는 브랜치
ex) hotfix-1.2.1
참고사이트 : https://velog.io/@kim-jaemin420/Git-branch-naming

feature/기능요약 에서 기능요약 부분을 작성할때 띄어쓰기는 - 를 이용하여 작성
ex) loginApi (X) login-api (O)


## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

## Developing

### Built With
List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 

## Licensing

State what the license is and how to find the text version of the license.

