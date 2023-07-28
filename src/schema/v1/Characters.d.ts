declare namespace Schema.v1 {
    namespace Characters.Search {
        type Params = {
            search: string;
        }
    }
    interface Characters {
        /**
         * Show a character
         * @route GET /api/characters/:id
         * @need_auth false
         */
        get(id: number) : Promise< Shikimori.Character.Extended >;
        
        /**
         * Search characters
         * @route GET /api/characters/search
         * @need_auth false
         */
        search(params: Schema.v1.Characters.Search.Params) : Promise< Shikimori.Character[] >;
    }
}