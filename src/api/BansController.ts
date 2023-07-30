import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class BansController extends Controller implements Schema.v1.Bans {

    async index() : Promise< Shikimori.Ban[] > {
        const res = await this.api.request.get< Shikimori.Ban[] >('/bans');
        return res.data;
    }

}