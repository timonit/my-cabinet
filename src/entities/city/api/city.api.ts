import { API } from '@/shared/api';
import { CITIES_URL } from './constants';

export class CityAPI extends API {
  baseURL = CITIES_URL;
}
