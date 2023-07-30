declare namespace Schema.v1 {
    namespace Animes {
        namespace Index {
            type Params = {
                /** @validation between `1` and  `100_000` */
                page?:          number;

                /** @validation max `50` */
                limit?:         number;

                order?:         Shikimori.Anime.Order;
                kind?:          Shikimori.Anime.Kind.Extended;
                status?:        Shikimori.Anime.Status;

                /** @example 'summer_2017', '2016', '2014_2016', '199x', 'spring_2016,fall_2017' */
                season?:        string;

                /** Minimal anime score (only integer value) */
                score?:         number;

                duration?:      Shikimori.Anime.Duration;
                rating?:        Shikimori.Rating;

                /** List of genre ids separated by comma OR ids array */
                genre?:         string | NumOrNumStr[];

                /** List of studio ids separated by comm OR ids arraya */
                studio?:        string | NumOrNumStr[];

                /** List of franchises separated by comm OR ids arraya */
                franchise?:     string | NumOrNumStr[];

                /** Set to `false` to allow hentai, yaoi and yuri */
                censored?:      boolean;

                /** Status of anime in current user list */
                mylist?:        Shikimori.UserList;

                /** List of anime ids separated by comma OR ids array */
                ids?:           string | NumOrNumStr[];

                /** List of anime ids separated by comma OR ids array */
                exclude_ids?:   string | NumOrNumStr[];

                /** Search phrase to filter animes by name */
                search?:        string;
            };
        }

        namespace Topics {
            type Params = {
                /** @validation between `1` and  `100_000` */
                page?:      number;

                /** @validation max `30` */
                limit?:     number;

                kind?:      Shikimori.Anime.TopicKind;
                episode?:   number;
            };
        }
    }

    /**
     * @borrows Schema.v1.Animes#externalLinks as Schema.v1.Animes#external_links
     */
    interface Animes {
        api: Schema.API;

        /**
         * @route GET /api/animes
         * @description List animes
         */
        index(params: Schema.v1.Animes.Index.Params) : Promise< Shikimori.Anime[] >;

        /**
         * @route GET /api/animes/:id
         * @description Show an anime
         */
        get(id: number) : Promise< Shikimori.Anime.Extended >;

        /**
         * @route GET /api/animes/:id/roles
         * @description
         */
        roles(id: number) : Promise< Shikimori.Roles[] >;

        /**
         * @route GET /api/animes/:id/similar
         * @description
         */
        similar(id: number) : Promise< Shikimori.Anime[] >;

        /**
         * @route GET /api/animes/:id/related
         * @description
         */
        related(id: number) : Promise< Shikimori.Related[] >;

        /**
         * @route GET /api/animes/:id/screenshots
         * @description
         */
        screenshots(id: number) : Promise< Shikimori.Image.Screenshot[] >;

        /**
         * @route GET /api/animes/:id/franchise
         * @description
         */
        franchise(id: number) : Promise< Shikimori.Franchise >;

        /**
         * @route GET /api/animes/:id/external_links
         * @description
         */
        external_links(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * @see Schema.v1.Animes.external_links
         * @alias external_links
         */
        externalLinks(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * @route GET /api/animes/:id/topics
         * @description
         */
        topics(id: number, params: Schema.v1.Animes.Topics.Params) : Promise< Shikimori.Topic<'Anime'>[] >;
    }
}