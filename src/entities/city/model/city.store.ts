import { defineStore } from 'pinia';
import type { City } from './types';
import { CityAPI } from '../api/city.api';

export interface CityStoreState {
  cities: City[];
  fetching: boolean;
}

export type CityStoreGetters = {
  getCityByCODE(state: CityStoreState): (code: City['code']) => City | undefined;
}

export interface CityStoreActions {
  fetch(): Promise<void>;
}


export const useCityStore = defineStore<'cityStore', CityStoreState, CityStoreGetters, CityStoreActions>('cityStore', {
  state: (): CityStoreState => {
    return {
      cities: [],
      fetching: false,
    };
  },

  getters: {
    getCityByCODE(state: CityStoreState) {
      return (code: City['code']): City | undefined => {
        return state.cities.find(city => city.code === code);
      };
    },
  },

  actions: {
    async fetch() {
      this.$state.fetching = true;

      const api = new CityAPI();
      const data = await api.get<{cities: City[]}>();

      this.$patch({
        cities: data.cities,
        fetching: false,
      })
    }
  }
});
