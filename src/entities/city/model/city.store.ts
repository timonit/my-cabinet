import { defineStore } from 'pinia';
import type { City } from './types';
import { CityAPI } from '../api/city.api';

export interface CityStoreState {
  cities: City[];
  fetching: boolean;
  selectedCityCode: City['code'] | null;
}

export type CityStoreGetters = {
  getCityByCODE(state: CityStoreState): (code: City['code']) => City | undefined;
  selected(state: CityStoreState): City | undefined;
}

export interface CityStoreActions {
  fetch(): Promise<void>;
  select(code: City['code']): void;
}


export const useCityStore = defineStore<'cityStore', CityStoreState, CityStoreGetters, CityStoreActions>('cityStore', {
  state: (): CityStoreState => {
    return {
      cities: [],
      fetching: false,
      selectedCityCode: null
    };
  },

  getters: {
    getCityByCODE(state: CityStoreState) {
      return (code: City['code']): City | undefined => {
        return state.cities.find(city => city.code === code);
      };
    },

    selected(state: CityStoreState): City | undefined {
      return state.cities.find(city => city.code === state.selectedCityCode);
    }
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
    },

    select(code: City['code']) {
      this.$state.selectedCityCode = code;
    },
  }
});
