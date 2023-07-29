declare namespace Schema.v1 {
    interface Bans {
        /**
         * @route GET /api/bans
         * @description List bans
         */
        index() : Promise< Shikimori.Ban[] >;
    }
}