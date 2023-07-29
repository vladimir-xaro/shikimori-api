declare namespace Schema.v1 {
    interface Genres {
        /**
         * List genres
         * @route GET /api/genres
         */
        index() : Promise< Shikimori.Genre[] >;
    }
}