export default class BansController implements HasApi, Schema.v1.Bans {
    api: Schema.API;

    constructor(api: Schema.API) {
        this.api = api;
    }

    async index() : Promise< Shikimori.Ban[] > {
        const res = await this.api.request.get< Shikimori.Ban[] >('/bans');
        return res.data;
    }
}