declare namespace Schema.v1 {
    interface Bans {
        /**
         * @route GET /api/bans
         * @description List bans
         * @need_auth false
         */
        index() : Promise< Shikimori.Ban[] >;
    }
}