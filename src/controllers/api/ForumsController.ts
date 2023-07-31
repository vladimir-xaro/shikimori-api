import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type {  } from '@@types/general.d.ts';

export default class ForumsController extends Controller implements Schema.v1.Forums {

    async index() : Promise< Shikimori.Forum[] > {
        const res = await this.api.request.get< Shikimori.Forum[] >(`/forums`);
        return res.data;
    }

}