declare namespace Schema.v1 {
    namespace Calendar.Index {
        type Params = {
            censored: boolean;
        }
    }
    interface Calendar {
        /**
         * @route GET /api/calendar
         * @description Show a calendar
         */
        index(params: Schema.v1.Calendar.Index.Params): Promise< Shikimori.Calendar[] >;
    }
}