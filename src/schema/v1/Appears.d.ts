import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Appears {
    /**
     * @route POST /api/appears
     * @description Mark comments or topics as read
     * @scope comments
     */
    read(ids: string | Shikimori.AppearId[]) : Promise< void >;
}