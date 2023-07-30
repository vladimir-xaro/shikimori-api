import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Bans {
    /**
     * @route GET /api/bans
     * @description List bans
     */
    index() : Promise< Shikimori.Ban[] >;
}