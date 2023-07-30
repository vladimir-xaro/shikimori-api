import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class GenresController extends Controller implements Schema.v1.Genres {

    async index() : Promise< Shikimori.Genre[] > {
        const res = await this.api.request.get< Shikimori.Genre[] >(`/genres`);
        return res.data;
    }

}

