import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Calendar.Index {
    type Params = {
        censored: boolean;
    }
}

export interface Calendar {
    /**
     * @route GET /api/calendar
     * @description Show a calendar
     */
    index(params: Calendar.Index.Params): Promise< Shikimori.Calendar[] >;
}