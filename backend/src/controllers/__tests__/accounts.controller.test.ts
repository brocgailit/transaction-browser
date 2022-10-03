import { test, expect, assert } from "vitest";
import request from "supertest";
import { app } from '../../app';
import { accounts } from '../../data/test_data.json';

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