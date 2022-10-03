import { test, expect, assert } from "vitest";
import request from "supertest";
import { app } from '../../app';
import { accounts, transactions } from '../../data/test_data.json';

function isValidAccount(account) {
    return Object.entries(accounts[0])
        .reduce(
            (ok, [key, value]) => ok && account[key] && typeof account[key] === typeof value,
            true
        );
}

test("Get all accounts", async () => {

    // endpoint returns successful json response
    const { body } = await request(app)
        .get('/accounts')
        .expect("Content-Type", /json/)
        .expect(200);

    // is array
    expect(Array.isArray(body)).to.be.true;

    // is array of accounts
    expect(body.reduce((ok, account) => ok && isValidAccount(account), true)).to.be.true;

    // array has values
    expect(body).to.have.length.greaterThan(0);

    // contains all given values
    assert.deepEqual(body, accounts, 'Body did not contain accounts');
    
})

test("Get account by id", async () => {

    const [account] = accounts;

    // endpoint returns successful json response
    const { body } = await request(app)
        .get(`/accounts/${account.id}`)
        .expect("Content-Type", /json/)
        .expect(200);

    // response is valid account
    assert.equal(isValidAccount(body), true, 'Body is a valid account')

    // endpoint returns 404 when account not found
    await request(app)
        .get(`/accounts/INVALID_ACCOUNT_ID`)
        .expect("Content-Type", /json/)
        .expect(404);
})

test("Get account transactions", async () => {

    const [account] = accounts;
    const accountTransactions = transactions.filter(transaction => transaction.accountId === account.id);

    // endopint return successful json response
    const { body } = await request(app)
        .get(`/accounts/${account.id}/transactions`)
        .expect("Content-Type", /json/)
        .expect(200);
    
    // response contains array of transactions
    assert.deepEqual(body, accountTransactions, 'Body did not return expected transactions')

})