export const ORIGIN_URL:    string = 'https://shikimori.me';

export const API_URL:       string = ORIGIN_URL + '/api';
export const API_V1_PATH:   string = '';
export const API_V2_PATH:   string = '/v2';
export const API_V1_URL:    string = API_URL + API_V1_PATH;
export const API_V2_URL:    string = API_URL + API_V2_PATH;

export const OAUTH_URL:     string = ORIGIN_URL + '/oauth';
export const AUTH_URL:      string = OAUTH_URL + '/authorize';
export const TOKEN_URL:     string = OAUTH_URL + '/token';

export const REDIRECT_URI:  string = 'urn:ietf:wg:oauth:2.0:oob';