import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class CalendarController extends Controller implements Schema.v1.Calendar {
    async index(params: Schema.v1.Calendar.Index.Params) : Promise< Shikimori.Calendar[] > {
        const res = await this.api.request.get< Shikimori.Calendar[] >(`/api/calendar`, { params });
        return res.data;
    }
}