import { API } from '@/shared/api';
import { COMPANY_URL } from './constants';

export class CompanyAPI extends API {
  baseURL = COMPANY_URL;
}
