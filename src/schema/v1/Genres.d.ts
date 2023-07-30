import type { Shikimori } from '@@types/Shikimori.d.ts'; 

export interface Genres {
    /**
     * List genres
     * @route GET /api/genres
     */
    index() : Promise< Shikimori.Genre[] >;
}