export default class AppearsController implements HasApi, Schema.v1.Appears {
    api: Schema.API;

    constructor(api: Schema.API) {
        this.api = api;
    }

    async read(ids: string | Shikimori.AppearId[]) : Promise< void > {
        await this.api.request.post('/appears', { ids: ids instanceof Array ? ids.join(',') : ids });
    }
}