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