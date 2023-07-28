declare namespace Schema.v1 {
    namespace Animes {
        namespace Index {
            type Params = {
                page?:          number; // between 1 and 100_000
                limit?:         number; // between 1 and 50
                order?:         Shikimori.Anime.Order;
                kind?:          Shikimori.Anime.Kind.Extended;
                status?:        Shikimori.Anime.Status;
                season?:        string; // 'summer_2017', '2016', '2014_2016', '199x'
                score?:         number; // min anime score
                duration?:      Shikimori.Anime.Duration;
                rating?:        Shikimori.Rating;
                genre?:         string; // List of genre ids separated by comma
                studio?:        string; // List of studio ids separated by comma
                franchise?:     string; // List of franchises separated by comma
                censored?:      BooleanString;
                mylist?:        Shikimori.UserList;
                ids?:           string; // List of anime ids separated by comma
                exclude_ids?:   string; // List of anime ids separated by comma
                search?:        string; // Search phrase to filter animes by name
            };
        }

        namespace Topics {
            type Params = {
                page?:      number; // between 1 and 100_000
                limit?:     number; // between 1 and 30
                kind?:      Shikimori.Anime.TopicKind;
                episode?:   number;
            };
        }
    }

    interface Animes {
        api: Schema.API;

        /**
         * @route GET /api/animes
         * @description List animes
         * @need_auth false
         */
        index(params: Schema.v1.Animes.Index.Params) : Promise< Shikimori.Anime[] >;

        /**
         * @route GET /api/animes/:id
         * @description Show an anime
         * @need_auth false
         */
        get(id: number) : Promise< Shikimori.Anime.Extended >;

        /**
         * @route GET /api/animes/:id/roles
         * @description
         * @need_auth false
         */
        roles(id: number) : Promise< Shikimori.Anime.Roles[] >;

        /**
         * @route GET /api/animes/:id/similar
         * @description
         * @need_auth false
         */
        similiar(id: number) : Promise< Shikimori.Anime[] >;

        /**
         * @route GET /api/animes/:id/related
         * @description
         * @need_auth false
         */
        related(id: number) : Promise< Shikimori.Anime.Related[] >;

        /**
         * @route GET /api/animes/:id/screenshots
         * @description
         * @need_auth false
         */
        screenshots(id: number) : Promise< Shikimori.Image.Screenshot[] >;

        /**
         * @route GET /api/animes/:id/franchise
         * @description
         * @need_auth false
         */
        franchise(id: number) : Promise< Shikimori.Anime.Franchise >;

        /**
         * @route GET /api/animes/:id/external_links
         * @description
         * @need_auth false
         */
        externalLinks(id: number) : Promise< Shikimori.Anime.ExternalLink[] >;

        /**
         * @route GET /api/animes/:id/topics
         * @description
         * @need_auth false
         */
        topics(id: number, params: Schema.v1.Animes.Topics.Params) : Promise< Shikimori.Topic<'Anime'>[] >;
    }
}