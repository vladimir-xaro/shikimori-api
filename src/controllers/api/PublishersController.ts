import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class PublishersController extends Controller implements Schema.v1.Publishers {

    async index() : Promise< Shikimori.Publisher[] > {
        const res = await this.api.request.get< Shikimori.Publisher[] >(`/publishers`);
        return res.data;
    }

}