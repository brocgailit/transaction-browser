import { test, expect, assert } from "vitest";
import request from "supertest";
import { app } from '../../app';

test("Example", async () => {

    const { body } = await request(app)
        .get('/')
        .expect("Content-Type", /json/)
        .expect(200);

    assert.equal(body.success, true, 'Body did not return success');
    
})