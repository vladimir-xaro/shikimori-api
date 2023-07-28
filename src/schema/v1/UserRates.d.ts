declare namespace Schema {
    namespace v1 {
        interface UserRates {
            /**
             * Delete entire user rates and history
             * @route DELETE /api/user_rates/:type/cleanup
             * @need_auth true
             * @scope `user_rates`
             */
            cleanup(type: Shikimori.UserRateType) : Promise< ResponseWithNotice >;
            
            /**
             * Reset all user scores to 0
             * @route DELETE /api/user_rates/:type/reset
             * @need_auth true
             * @scope `user_rates`
             */
            reset(type: Shikimori.UserRateType) : Promise< ResponseWithNotice >;
        }
    }
}