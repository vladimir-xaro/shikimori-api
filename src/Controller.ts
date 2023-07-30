import type * as Schema from '@@schema/index.d.ts';

export default abstract class Controller implements Schema.Controllers.HasApi {
    api: Schema.API;

    constructor(api: Schema.API) {
        this.api = api;
    }
}