declare namespace Schema.v1 {
    namespace Mangas {
        namespace Index {
            type Params = {
                /** @validation between `1` and  `100_000` */
                page?:          number;

                /** @validation max `50` */
                limit?:         number;

                order?:         Shikimori.Manga.Order;
                kind?:          Shikimori.Manga.Kind;
                status?:        Shikimori.Manga.Status;

                /** @example 'summer_2017', '2016', '2014_2016', '199x' */
                season?:        string;

                /** Minimal manga score (only integer value)*/
                score?:         number;

                /** List of genre ids separated by comma OR ids array */
                genre?:         string | NumOrNumStr[];

                /** List of publisher ids separated by comma OR ids array */
                publisher?:     string | NumOrNumStr[];

                /** List of franchises separated by comma OR ids array */
                franchise?:     string | NumOrNumStr[];

                /** Set to `false` to allow hentai, yaoi and yuri */
                censored?:      boolean;

                /** Status of anime in current user list */
                mylist?:        Shikimori.UserList;

                /** List of mangas ids separated by comma OR ids array */
                ids?:           string | NumOrNumStr[];

                /** List of mangas ids separated by comma OR ids array */
                exclude_ids?:   string | NumOrNumStr[];

                /** Search phrase to filter mangas by name */
                search?:        string;

            };
        }
        namespace Topics {
            type Params = {
                /** @validation between `1` and  `100_000` */
                page?:  number;

                /** @validation max `30` */
                limit?: number;
            };
        }
    }
    /**
     * @borrows Mangas#externalLinks as Mangas#external_links
     */
    interface Mangas {
        /**
         * List mangas
         * @route GET /api/mangas
         */
        index(params?: Schema.v1.Mangas.Index.Params) : Promise< Shikimori.Manga[] >;

        /**
         * Show a manga
         * @route GET /api/mangas/:id
         */
        get(id: number) : Promise< Shikimori.Manga.Extended >;

        /**
         * Show a manga's roles
         * @route GET /api/mangas/:id/roles
         */
        roles(id: number) : Promise< Shikimori.Roles[] >;

        /**
         * Show a manga's similar
         * @route GET /api/mangas/:id/similar
         */
        similar(id: number) : Promise< Shikimori.Manga[] >;

        /**
         * Show a manga's related
         * @route GET /api/mangas/:id/related
         */
        related(id: number) : Promise< Shikimori.Related[] >;

        /**
         * Show a manga's franchise
         * @route GET /api/mangas/:id/franchise
         */
        franchise(id: number) : Promise< Shikimori.Franchise >;

        /**
         * Show a manga's external links
         * @route GET /api/mangas/:id/external_links
         */
        external_links(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * @see Schema.v1.Mangas.external_links
         * @alias external_links
         */
        externalLinks(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * Show a manga's topics
         * @route GET /api/mangas/:id/topics
         */
        topics(id: number, params: Schema.v1.Mangas.Topics.Params) : Promise< Shikimori.Topic<'Manga'>[] >;
    }
}