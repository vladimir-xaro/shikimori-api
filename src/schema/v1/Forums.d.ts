declare namespace Schema.v1 {
    interface Forums {
        /**
         * List of forums
         * @route `GET /api/forums`
         */
        index(): Promise< Shikimori.Forum[] >;
    }
}