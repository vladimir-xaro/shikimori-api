import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Characters.Search {
    type Params = {
        search: string;
    }
}

export interface Characters {
    /**
     * Show a character
     * @route GET /api/characters/:id
     */
    get(id: number) : Promise< Shikimori.Character.Extended >;

    /**
     * Search characters
     * @route GET /api/characters/search
     */
    search(params: Characters.Search.Params) : Promise< Shikimori.Character[] >;
}