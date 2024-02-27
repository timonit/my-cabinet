import { describe, expect, test, beforeEach } from 'vitest';
import fetchMock from 'fetch-mock';
import { API } from './api';
import { APIError } from './api-error';

describe('API', () => {
  const url = 'http://localhost/test';
  class TestAPI extends API {
    baseURL = url;
  }

  let instance: TestAPI;

  beforeEach(() => {
    instance = new TestAPI();
    fetchMock.restore();
  });

  test('Success requesting data with additional path', async () => {
    const additionalPath = '/additional';
    const body = { prop: 'data' };
    const status = 200;
    fetchMock.get(url + additionalPath, { status, body });

    const data = await instance.get(additionalPath);

    expect(data).toEqual(body);
  });

  test('Success requesting data without additional path', async () => {
    const body = { prop: 'data' };
    const status = 200;
    fetchMock.get(url, { status, body });

    const data = await instance.get();

    expect(data).toEqual(body);
  });

  test('Fail requesting data', async () => {
    const body = { prop: 'data' };
    const status = 400;
    fetchMock.get(url, { status, body});
    
    try {
      await instance.get();

    } catch(err: any) {
      expect(err).instanceOf(APIError);
      expect(err.status).toEqual(status);
    }
  });
});
