import { defineStore } from 'pinia';
import type { Company, CompanyStatus } from './types';
import { CompanyAPI } from '../api/company.api';

export interface CompanyStoreState {
  company: Company | null;
  fetching: boolean;
}

export interface CompanyStoreActions {
  fetch(): Promise<void>;
}

export type CompantStoreGetters = {
  getStatusProp(state: CompanyStoreState): <P extends keyof CompanyStatus>(prop: P) => CompanyStatus[P];
  today:(state: CompanyStoreState) => Date;
};

export const useCompanyStore = defineStore<
  'companyStore',
  CompanyStoreState,
  CompantStoreGetters,
  CompanyStoreActions
>('companyStore', {
  state: (): CompanyStoreState => {
    return {
      company: null,
      fetching: false,
    };
  },

  getters: {
    getStatusProp(state: CompanyStoreState): <P extends keyof CompanyStatus>(prop: P) => CompanyStatus[P] {
      if (!state.company) throw new Error('Company not installed');
      const company = state.company;

      return <P extends keyof CompanyStatus>(prop: P): CompanyStatus[P] => {
        return company.status[prop];
      }
    },

    today: (state: CompanyStoreState): Date => {
      if (!state.company) throw new Error('Company not installed');
      return new Date(state.company.status.today);
    },
  },

  actions: {
    async fetch() {
      this.$state.fetching = true;
      
      const api = new CompanyAPI();
      const data = await api.get<Company>();
      
      this.$patch({
        company: data,
        fetching: false,
      });
    }
  }
});
