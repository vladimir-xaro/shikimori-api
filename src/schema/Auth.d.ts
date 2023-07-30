declare namespace Schema {
    namespace Auth {
        namespace Contructor {
            type Params = {
                app_name:       string;
                client_id:      string;
                client_secret:  string;
                access_token?:  string;
                refresh_token?: string;
            };
        }

        type Response = {
            access_token:   string;
            token_type:     'Bearer';
            expires_in:     number; // 86400s = 1440m = 24h = 1d
            refresh_token:  string;
            scope:          string;
            created_at:     number; // timestamp
        };
    }

    interface Auth {
        app_name:           string;
        client_id:          string;
        client_secret:      string;
        access_token?:      string;
        refresh_token?:     string;
        request:            import('axios').AxiosInstance;

        getAuthLink(scope: string | Shikimori.Scope[]) : Promise< string >;
        accessToken(authorization_code: string) : Promise< Schema.Auth.Response >;
        refreshToken(refresh_token?: string) : Promise< Schema.Auth.Response >;
    }
}