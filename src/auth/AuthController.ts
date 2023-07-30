import axios, { AxiosInstance } from 'axios';
import { REDIRECT_URI, AUTH_URL, TOKEN_URL } from '@src/constants.js';



export default class AuthController implements Schema.Auth {
    app_name:       string;
    client_id:      string;
    client_secret:  string;
    access_token!:  string;
    refresh_token!: string;

    request:        AxiosInstance;

    constructor(params: Schema.Auth.Contructor.Params) {
        this.app_name       = params.app_name;
        this.client_id      = params.client_id;
        this.client_secret  = params.client_secret;

        this.request = axios.create({
            headers: {
                'User-Agent':   this.app_name,
            }
        });
    }

    async getAuthLink(scope: string | Scope[]) : Promise< string > {
        const params = new URLSearchParams({
            response_type:  'code',
            scope:          scope instanceof Array ? scope.join(' ') : scope,
            client_id:      this.client_id,
            client_secret:  this.client_secret,
            redirect_uri:   REDIRECT_URI,
        });

        return `${AUTH_URL}?${params.toString()}`;
    }

    async accessToken(authorization_code: string) : Promise< Schema.Auth.Response > {
        const res = await this.request.post<Schema.Auth.Response>(TOKEN_URL, {
            grant_type:     'authorization_code',
            client_id:      this.client_id,
            client_secret:  this.client_secret,
            code:           authorization_code,
            redirect_uri:   REDIRECT_URI,
        });

        this.access_token   = res.data.access_token;
        this.refresh_token  = res.data.refresh_token;

        return res.data;
    }

    async refreshToken(refresh_token?: string) : Promise< Schema.Auth.Response > {
        const res = await this.request.post<Schema.Auth.Response>(TOKEN_URL, {
            grant_type:     'refresh_token',
            client_id:      this.client_id,
            client_secret:  this.client_secret,
            refresh_token:  refresh_token || this.refresh_token,
            redirect_uri:   REDIRECT_URI,
        });

        this.access_token   = res.data.access_token;
        this.refresh_token  = res.data.refresh_token;

        return res.data;
    }
}