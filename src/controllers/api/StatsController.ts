import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';

export default class StatsController extends Controller implements Schema.v1.Stats {

    async index() : Promise< number[] > {
        const res = await this.api.request.post< number[] >(`/stats/active_users`);
        return res.data;
    }

}