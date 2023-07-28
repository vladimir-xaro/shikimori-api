import Controller from '@src/Controller.js';

export default class UserRatesController extends Controller implements Schema.v1.UserRates, Schema.v2.UserRates {

    // v1
    async cleanup(type: Shikimori.UserRateType) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/user_rates/${type}/cleanup`);
        return res.data;
    }
    async reset(type: Shikimori.UserRateType) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/user_rates/${type}/reset`);
        return res.data;
    }

    // v2
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
        const res = await this.api.request.delete< ResponseWithNotice >(`/v2/user_rates/${id}`);
    }

    async delete(id: number) : Promise< void > {
        this.destroy(id);
    }

}