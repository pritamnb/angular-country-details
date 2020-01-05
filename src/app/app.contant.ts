import { environment } from '../environments/environment';

export class HttpConstants {
  /* Http.Service Constants */
  static CONTENT_TYPE = 'Content-Type';
  static CONTENT_TYPE_VALUE = 'application/json';
  static API_KEY = 'api-key';
}
export class ApiEndPoints {
  static COUNTRY = {
    ALL_DETAILS: environment.API_URL + '/rest/v2/all',
    LANGUAGE_LIST: environment.API_URL + '/rest/v2/alpha/%s',
    CURRENCY_LIST: environment.API_URL + '/rest/v2/alpha/%s'
  };
}
