# Full-stack typescript template using shared type declarations

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This repo contains a full-stack mono-repo template using NextJS, React, NestJS and TypeORM. It is designed to share type declarations for endpoints and request/response types through a shared `abstractions` layer. It uses a Postgres DB run in a docker container, but the database can easily be swapped out for any other database supported by TypeORM.

## Table of Contents

- [The Example Repo](#the-example-domain)
- [Project Structure](#project-structure)
  - [Request Flow](#request-flow)
- [Running the Example](#running-the-example)
  - [Running the Postgres DB](#running-the-postgres-db)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)

## The Example Domain

This repo contains a single example domain, aptly named "ExampleDomain", which demonstrates the full-stack control flow, including how types from the `abstractions` layer are shared and consumed between the `backend` and `frontend` applications (see [Project Structure](#project-structure)).

It contains a single `ExampleEntity` with two associated endpoints; one to fetch all such entities, and one to create a new entity.

The frontend exposes a simple UI to fetch and show entities, as well as allowing for the creation of example entities using the above endpoints.

## Project Structure

This template contains the following core elements:

- `/abstractions` contains shared types and interfaces used to define the API between the frontend and the backend applications
  - The `abstractions` layer defines interfaces for the backend controllers to implement, as well as request, response and DTO types used by both backend and frontend
- `/frontend` contains the NextJS frontend application written in React
- `/backend` contains the NestJS API, which uses TypeORM in conjunction with a Postgres DB
  - This includes the TypeORM entities, whose types are not exposed outside the backend

### Request Flow

To get an overview of the end-to-end flow of this repo, an example request can be followed:

- Frontend
  - `CreateExample.ts` in the frontend uses the queries defined in `exampleQueries.ts` to send a request to the backend via `exampleService.ts`.
- Backend
  - The backend receives the request in `example.controller.ts` and uses the `example.service` to create a new `ExampleEntity` and store it in the DB

Both of the above use request and response types defined in `abstractions`.

## Running the Example

To run the example, you will run a Postgres DB using docker, the backend and the frontend. The following steps will guide you through this process.

### Running the Postgres DB

To run the Postgres DB, you can use the following command:

```bash
cd backend
docker-compose up -d
```

Note that for simplicity, credentials are hardcoded in the `docker-compose.yml` file. In a real-world scenario, you would use environment variables to set these.

### Running the Backend

To run the backend, you can use the following command:

```bash
cd backend
npm install # first time only
npm run start:dev
```

### Running the Frontend

To run the frontend, you can use the following command:

```bash
cd frontend
npm install # first time only
npm run dev
```
