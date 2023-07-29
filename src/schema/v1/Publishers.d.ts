declare namespace Schema.v1 {
    interface Publishers {
        /**
         * List publishers
         * @route GET /api/publishers
         */
        index() : Promise< Shikimori.Publisher[] >;
    }
}