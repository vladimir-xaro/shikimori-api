import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Achievements {
    /**
     * @route GET /api/achievements
     * @description List user achievements
     */
    get(user_id: number) : Promise< Shikimori.Achievement[] >
}