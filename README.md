# Vue3/Node.js Transaction Browser

## Overview

### Single page application where user can:
1. select an account
2. see all transactions and their total amount in selected account
3. filter the transactions by category
4. sort transactions by date

#### Backend (NodeJS)
1. `test_data.json` as the data source
2. API to:
    - get all categories
    - get all accounts
    - get transactions
        - filter by account and category
3. Unit tests

#### Frontend (Vue3)
1. Use API to fetch necessary data
2. Custom CSS for styling
3. Unit tests

## Prerequisites
Node.js with npm version > v7. This project uses npm workspaces

## Instructions for Demo
1. From project root directory, run `npm install` to install all workspace dependencies.
2. Run `npm run dev` to start backend and frontend workspaces in *Development* mode
3. Open in your browser! URL is provided in terminal output, however should point to [http://localhost:5173](http://localhost:5173)

## Additional features
### Unit tests
- From project root directory, run:
    - For both frontend *and* backend: `npm run test:unit`
    - Only frontend: `npm run test:unit --workspace frontend`
    - Only backend: `npm run test:unit --workspace backend`

### Building
- From project root directory, run `npm run build`