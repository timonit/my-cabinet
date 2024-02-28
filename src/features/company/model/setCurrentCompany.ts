import type { City } from '@/entities/city/model';
import { useCompanyStore } from '@/entities/company/model';

export const setCurrentCompany = (code: City['code']) => {
  const companyStore = useCompanyStore();
  companyStore.setCompanyFromCity(code);
};
