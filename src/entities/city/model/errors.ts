export class CityIsNotExistError extends Error {
  constructor(code: string) {
    super(`City with code ${code} is not exist`);
  }
}
