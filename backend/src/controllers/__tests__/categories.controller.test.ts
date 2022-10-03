import { test, expect, assert } from "vitest";
import request from "supertest";
import { app } from '../../app';
import { categories } from '../../data/test_data.json';

test("Get all categories", async () => {

    // endpoint returns successful json response
    const { body } = await request(app)
        .get('/categories')
        .expect("Content-Type", /json/)
        .expect(200);

    // is array
    expect(Array.isArray(body)).to.be.true;

    // is array of strings
    expect(body.reduce((ok, value) => ok && typeof value === 'string', true)).to.be.true;

    // array has values
    expect(body).to.have.length.greaterThan(0);

    // contains all given values
    assert.deepEqual(body, categories, 'Body did not contain categories');
    
})