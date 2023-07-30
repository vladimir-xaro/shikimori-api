import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ResponseWithNotice } from '@@types/general.d.ts';

export default class UserRatesController extends Controller implements Schema.v1.UserRates, Schema.v2.UserRates {

    async cleanup(type: Shikimori.UserRateType) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/user_rates/${type}/cleanup`);
        return res.data;
    }
    async reset(type: Shikimori.UserRateType) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/user_rates/${type}/reset`);
        return res.data;
    }

    async index(params: Schema.v2.UserRates.Index.Params) : Promise< Shikimori.UserRate.Extended[] > {
        const res = await this.api.request.get< Shikimori.UserRate.Extended[] >(`/v2/user_rates`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.UserRate.Extended > {
        const res = await this.api.request.get< Shikimori.UserRate.Extended >(`/v2/user_rates/${id}`);
        return res.data;
    }

    async create(params: Schema.v2.UserRates.Create.Params) : Promise< Shikimori.UserRate.Extended > {
        const res = await this.api.request.post< Shikimori.UserRate.Extended >(`/v2/user_rates`, params);
        return res.data;
    }

    async update(id: number, params: Schema.v2.UserRates.Update.Params) : Promise< Shikimori.UserRate.Extended > {
        const res = await this.api.request.patch< Shikimori.UserRate.Extended >(`/v2/user_rates/${id}`);
        return res.data;
    }

    async increment(id: number) : Promise< Shikimori.UserRate.Extended > {
        const res = await this.api.request.get< Shikimori.UserRate.Extended >(`/v2/user_rates/${id}/increment`);
        return res.data;
    }

    async destroy(id: number) : Promise< void > {
        await this.api.request.delete< ResponseWithNotice >(`/v2/user_rates/${id}`);
    }

    async delete(id: number) : Promise< void > {
        this.destroy(id);
    }

}