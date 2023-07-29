declare namespace Schema.v1 {
    namespace Ranobe {
        namespace Index {
            type Params = {
                /** @validation between `1` and  `100_000` */
                page?:          number;
                
                /** @validation max `50` */
                limit?:         number;
                
                order?:         Shikimori.Ranobe.Order;
                status?:        Shikimori.Ranobe.Status;
                
                /** @example 'summer_2017', '2016', '2014_2016', '199x', 'spring_2016,fall_2017' */
                season?:        string;
                
                /** Minimal ranobe score (only integer value) */
                score?:         number;
                
                /** List of genre ids separated by comma OR ids array */
                genre?:         string | NumOrNumStr[];
                
                /** List of publisher ids separated by comma OR ids array */
                publisher?:     string | NumOrNumStr[];
                
                /** List of franchises separated by comma OR ids array */
                franchise?:     string | NumOrNumStr[];
                
                /** Set to `false` to allow hentai, yaoi and yuri */
                censored?:      boolean;

                /** Status of ranobe in current user list */
                mylist?:        Shikimori.UserList;
                
                /** List of ranobes ids separated by comma OR ids array */
                ids?:           string | NumOrNumStr[];

                /** List of ranobes ids separated by comma OR ids array */
                exclude_ids?:   string | NumOrNumStr[];

                /** Search phrase to filter ranobes by name */
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
    interface Ranobe {
        /**
         * List ranobe
         * @route GET /api/ranobe
         */
        index(params: Schema.v1.Ranobe.Index.Params) : Promise< Shikimori.Ranobe[] >;

        /**
         * Show a ranobe
         * @route GET /api/ranobe/:id
         */
        get(id: number) : Promise< Shikimori.Ranobe.Extended >;

        /**
         * Show a ranobe's roles
         * @route GET /api/ranobe/:id/roles
         */
        roles(id: number) : Promise< Shikimori.Roles[] >;

        /**
         * Show a ranobe's similar
         * @route GET /api/ranobe/:id/similar
         */
        similar(id: number) : Promise< (Shikimori.Ranobe | Shikimori.Manga)[] >;

        /**
         * Show a ranobe's related
         * @route GET /api/ranobe/:id/related
         */
        related(id: number) : Promise< Shikimori.Related[] >;

        /**
         * Show a ranobe's franchise
         * @route GET /api/ranobe/:id/franchise
         */
        franchise(id: number) : Promise< Shikimori.Franchise >;

        /**
         * Show a ranobe's external links
         * @route GET /api/ranobe/:id/external_links
         */
        external_links(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * @see Schema.v1.Mangas.external_links
         * @alias external_links
         */
        externalLinks(id: number) : Promise< Shikimori.ExternalLink[] >;

        /**
         * Show a ranobe's topics
         * @route GET /api/ranobe/:id/topics
         */
        topics(id: number, params: Schema.v1.Ranobe.Topics.Params) : Promise< Shikimori.Topic<'Ranobe'>[] >;
    }
}