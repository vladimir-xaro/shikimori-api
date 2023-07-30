import type { ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface UserRates {
    /**
     * Delete entire user rates and history
     * @route DELETE /api/user_rates/:type/cleanup
     * @scope `user_rates`
     */
    cleanup(type: Shikimori.UserRateType) : Promise< ResponseWithNotice >;

    /**
     * Reset all user scores to 0
     * @route DELETE /api/user_rates/:type/reset
     * @scope `user_rates`
     */
    reset(type: Shikimori.UserRateType) : Promise< ResponseWithNotice >;
}