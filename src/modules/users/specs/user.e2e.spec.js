import chai from 'chai'
import mongoUnit from '../../../../tests/prepare-e2e-db';
import * as userMock from '../../../../tests/helper/user-sample.json';

const expect = chai.expect;

describe('service', () => {
    const userTestData = userMock;

    beforeEach(() => mongoUnit.initDb(testMongoUrl, testData));
    afterAll(() => mongoUnit.drop());
})