import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Publishers {
    /**
     * List publishers
     * @route GET /api/publishers
     */
    index() : Promise< Shikimori.Publisher[] >;
}