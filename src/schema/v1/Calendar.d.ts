declare namespace Schema.v1 {
    namespace Calendar.Index {
        type Params = {
            censored: BooleanString;
        }
    }
    interface Calendar {
        /**
         * @route GET /api/calendar
         * @description Show a calendar
         * @need_auth false
         */
        index(params: Schema.v1.Calendar.Index.Params): Promise< Shikimori.Calendar[] >;
    }
}