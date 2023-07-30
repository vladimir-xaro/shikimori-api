import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace People {
    namespace Search {
        type Params = {
            search: string;
            kind:   'seyu' | 'mangaka' | 'producer';
        };
    }
}

export interface People {
    /**
     * Show a person
     * @route GET /api/people/:id
     */
    get(id: number) : Promise< Shikimori.Person.Extended >;

    /**
     * Search people
     * @route GET /api/people/search
     */
    search(params?: People.Search.Params) : Promise< Shikimori.Person[] >;
}