import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class Styles extends Controller implements Schema.v1.Styles {

    async get(id: number) : Promise< Shikimori.Style > {
        const res = await this.api.request.get< Shikimori.Style >(`/styles/${id}`);
        return res.data;
    }

    async preview(params: Schema.v1.Styles.Preview.Params) : Promise< Shikimori.Style.Preview > {
        const res = await this.api.request.post< Shikimori.Style.Preview >(`/styles/preview`, params);
        return res.data;
    }

    async create(params: Schema.v1.Styles.Create.Params) : Promise< Shikimori.Style > {
        const res = await this.api.request.post< Shikimori.Style >(`/styles`, params);
        return res.data;
    }

    async update(id: number, params: Schema.v1.Styles.Update.Params) : Promise< Shikimori.Style > {
        const res = await this.api.request.patch< Shikimori.Style >(`/styles/${id}`, params);
        return res.data;
    }

}