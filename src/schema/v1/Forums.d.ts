declare namespace Schema.v1 {
    interface Forums {
        /**
         * List of forums
         * @route `GET /api/forums`
         * @need_auth false
         */
        index(): Promise< Shikimori.Forum[] >;
    }
}