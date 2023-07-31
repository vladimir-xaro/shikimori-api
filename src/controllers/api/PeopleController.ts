import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class PeopleController extends Controller implements Schema.v1.People {

    async get(id: number) : Promise< Shikimori.Person.Extended > {
        const res = await this.api.request.get< Shikimori.Person.Extended >(`/people/${id}`);
        return res.data;
    }

    async search(params?: Schema.v1.People.Search.Params | undefined) : Promise< Shikimori.Person[] > {
        const res = await this.api.request.get< Shikimori.Person[] >(`/people/search`, { params });
        return res.data;
    }

}