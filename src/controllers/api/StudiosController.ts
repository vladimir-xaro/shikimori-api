import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class StudiosController extends Controller implements Schema.v1.Studios {

    async index() : Promise< Shikimori.Studio[] > {
        const res = await this.api.request.post< Shikimori.Studio[] >(`/studios`);
        return res.data;
    }

}