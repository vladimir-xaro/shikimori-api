import axios, { type AxiosInstance } from 'axios';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

import { REDIRECT_URI, AUTH_URL, TOKEN_URL, API_URL } from '@@src/constants.ts';


export default class AuthController implements Schema.Auth {
    authorized:     boolean = false;

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

        if (params.access_token) {
            this.access_token = params.access_token;
            this.authorized = true;
        }

        this.request = axios.create({
            headers: {
                'User-Agent': this.app_name,
            }
        });
    }

    async getAuthLink(scope: string | Shikimori.Scope[]) : Promise< string > {
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

    getApiRequestInstance() : AxiosInstance {
        const request = axios.create({
            headers: {
                'User-Agent':       this.app_name,
                'Authorization':    `Bearer ${this.access_token}`,
            },
            baseURL: API_URL,
        });

        // request.interceptors.request.use((config) => {
        //     if (! this.auth.access_token) {
        //         throw new Error('access_token is missing');
        //     }
        //     return config;
        // });

        return request;
    }
}