import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, test } from 'vitest';
import { useCityStore } from './city.store';
import fetchMock from 'fetch-mock';
import { CITIES_URL } from '../api/constants';
import { CityIsNotExistError } from './errors';

describe('When select city', () => {
  const body = {
    cities: [
      {
        name: 'testCity',
        code: '123123'
      }
    ]
  };

  beforeEach(() => {
    fetchMock.restore();
    fetchMock.get(CITIES_URL, { status: 200, body });
    setActivePinia(createPinia());
  });

  test('if city is exist, it should be selected', async () => {
    const cityStore = useCityStore();
    await cityStore.fetch();

    cityStore.select(body.cities[0].code);

    expect(cityStore.selected).toEqual(body.cities[0]);
  });

  test('if city is not exist, throw error "city is not exist"', async () => {
    const cityStore = useCityStore();
    await cityStore.fetch();

    try {
      cityStore.select(body.cities[0].code);
    } catch (err: any) {
      expect(err).instanceOf(CityIsNotExistError);
    }
  });
});
