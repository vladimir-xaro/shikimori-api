declare namespace Schema.v1 {
    namespace People {
        namespace Search {
            type Params = {
                search: string;
                kind:   'seyu' | 'mangaka' | 'producer';
            };
        }
    }
    interface People {
        /**
         * Show a person
         * @route GET /api/people/:id
         */
        get(id: number) : Promise< Shikimori.Person.Extended >;
        
        /**
         * Search people
         * @route GET /api/people/search
         */
        search(params?: Schema.v1.People.Search.Params) : Promise< Shikimori.Person[] >;
    }
}