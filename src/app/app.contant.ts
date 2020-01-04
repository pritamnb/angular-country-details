import { environment } from '../environments/environment';

export class HttpConstants {
  /* Http.Service Constants */
  static CONTENT_TYPE = 'Content-Type';
  static CONTENT_TYPE_VALUE = 'application/json';
  static API_KEY = 'api-key';
}
export class ApiEndPoints {
  static COUNTRY = {
    ALL_DETAILS: '/rest/v2/all',
    LANGUAGE_LIST: '/rest/v2/alpha/%s',
    CURRENCY_LIST: '/rest/v2/alpha/%s' // based on particular country
  };
}
