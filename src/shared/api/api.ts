import { APIError } from './api-error';

/**
 * base api
 */
export abstract class API {
  abstract baseURL: string;

  async get<T>(path?: string): Promise<T> {
    const url = path ? this.baseURL+path : this.baseURL;
    const res = await fetch(url);
    if (!res.ok) throw new APIError(res.status, res.statusText);
    return res.json() as T;
  }
}
