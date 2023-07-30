import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Forums {
    /**
     * List of forums
     * @route `GET /api/forums`
     */
    index(): Promise< Shikimori.Forum[] >;
}