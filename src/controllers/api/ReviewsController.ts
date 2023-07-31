import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ResponseWithNotice } from '@@types/general.d.ts';

export default class ReviewsController extends Controller implements Schema.v1.Reviews {

    async create(params: Schema.v1.Reviews.Create.Params) : Promise< Shikimori.Review > {
        const res = await this.api.request.post< Shikimori.Review >(`/reviews`, params);
        return res.data;
    }

    async update(id: number, params: Schema.v1.Reviews.Update.Params) : Promise< Shikimori.Review > {
        const res = await this.api.request.patch< Shikimori.Review >(`/reviews/${id}`, params);
        return res.data;
    }

    async destroy(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/reviews/${id}`);
        return res.data;
    }

    async delete(id: number) : Promise< ResponseWithNotice > {
        return this.destroy(id);
    }

}