declare namespace Schema.v1 {
    interface Studios {
        /**
         * List studios
         * @route GET /api/studios
         */
        index() : Promise< Shikimori.Studio[] >;
    }
}