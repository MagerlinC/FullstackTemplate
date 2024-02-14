# Full-stack typescript template using shared type declarations

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This repo contains a full-stack mono-repo template using NextJS, React, NestJS and TypeORM. It is designed to share type declarations for endpoints and request/response types through a shared `abstractions` layer. It uses a Postgres DB run in a docker container, but the database can easily be swapped out for any other database supported by TypeORM.

The repo contains a single example domain, aptly named "ExampleDomain", containing a single entity type and two associated endpoints; one to fetch all entities and one to create a new entity.

The frontend exposes a simple UI to fetch and create example entities by name.

## Project Structure

This template contains the following core elements:

- `/frontend` contains the NextJS fronten written in React
- `/backend` contains the NestJS backend, which uses TypeORM over a Postgres DB
  - The backend also contains the TypeORM entities and migrations, which are not exposed
- `/abstractions` contains shared types and interfaces used in both the frontend and backend
  - The abstractions layer defines interfaces for backend controllers, as well as the DTOs used between frontend and backend

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
