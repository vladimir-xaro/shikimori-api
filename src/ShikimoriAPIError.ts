declare namespace ShikimoriAPIError {
    namespace Constructor {
        type Params = {
            message?:   string;
            code:       string | number;
            cause?:     Error;
            request?:   import('axios').AxiosRequestConfig;
            response?:  import('axios').AxiosResponse;
        };
    }
}

export default class ShikimoriAPIError extends Error {
    name:       string = 'ShikimoriAPIError';

    code:       string | number;
    stack!:     string;
    cause?:     Error;
    request?:   import('axios').AxiosRequestConfig;
    response?:  import('axios').AxiosResponse;

    constructor(
        { message, code, request, response }: ShikimoriAPIError.Constructor.Params,
        options?: ErrorOptions
    ) {
        super(message, options);
        
        this.code       = code;
        this.request    = request;
        this.response   = response;
    }

    toJSON() {
        const data = {} as Pick<this, keyof this>;

        for (const prop of Object.getOwnPropertyNames(this)) {
            data[prop as keyof this] = this[prop as keyof this];
        }

        return data;
    }
}