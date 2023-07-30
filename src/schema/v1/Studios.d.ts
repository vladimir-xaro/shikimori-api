import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Studios {
    /**
     * List studios
     * @route GET /api/studios
     */
    index() : Promise< Shikimori.Studio[] >;
}