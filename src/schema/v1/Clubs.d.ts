declare namespace Schema.v1 {
    namespace Clubs {
        namespace Index {
            type Params     = {
                page?:      number; // between 1 and 100_000
                limit?:     number; // between 1 and 30
                search?:    string;
            };
        }

        namespace Update {
            namespace Params {
                type Club = {
                    name?:                  string;
                    description?:           string;
                    display_images?:        BooleanString | 1 | 0;
                    comment_policy?:        'free' | 'members' | 'admins';
                    topic_policy?:          'members' | 'admins';
                    image_upload_policy?:   'members' | 'admins';
                };
            }
            type Params = {
                club?: Schema.v1.Clubs.Update.Params.Club;
            };
        }
    }
    interface Clubs {
        /**
         * @route GET /api/clubs
         * @description List clubs
         * @need_auth false
         */
        index(params: Schema.v1.Clubs.Index.Params) : Promise< Shikimori.Club[] >;

        /**
         * @route GET /api/clubs/:id
         * @description Show a club
         * @need_auth false
         */
        get(id: number) : Promise< Shikimori.Club.Extended >;

        /**
         * @route PATCH /api/clubs/:id
         * @route PUT /api/clubs/:id
         * @description Update a club
         * @need_auth true
         * @scope clubs
         */
        update(id: number, params?: Schema.v1.Clubs.Update.Params) : Promise< Shikimori.Club[] >;

        /**
         * @route GET /api/clubs/:id/animes
         * @description List clubs
         * @need_auth false
         */
        animes(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] >;

        /**
         * @route GET /api/clubs/:id/mangas
         * @description Show club's mangas
         * @need_auth false
         */
        mangas(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] >;

        /**
         * @route GET /api/clubs/:id/ranobe
         * @description Show club's ranobe
         * @need_auth false
         */
        ranobe(id: number, params?: ParamsWithPage) : Promise< Shikimori.Ranobe[] >;
        
        /**
         * @see Schema.v1.Clubs.ranobe
         * @alias Schema.v1.Clubs.ranobe
         */
        ranobes(id: number, params?: ParamsWithPage) : Promise< Shikimori.Ranobe[] >;

        /**
         * @route GET /api/clubs/:id/characters
         * @description Show club's characters
         * @need_auth false
         */
        characters(id: number, params?: ParamsWithPage) : Promise< Shikimori.Character[] >;

        /**
         * @route GET /api/clubs/:id/collections
         * @description Show club's collections
         * @need_auth false
         */
        collections(id: number, params?: ParamsWithPage) : Promise< Shikimori.Collection[] >;

        /**
         * @route GET /api/clubs/:id/clubs
         * @description Show club's clubs
         * @need_auth false
         */
        clubs(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] >;

        /**
         * @route GET /api/clubs/:id/members
         * @description Show club's members
         * @need_auth false
         */
        members(id: number) : Promise< Shikimori.User[] >;

        /**
         * @route GET /api/clubs/:id/images
         * @description Show club's images
         * @need_auth false
         */
        images(id: number) : Promise< Shikimori.Image[] >;

        /**
         * @route POST /api/clubs/:id/join
         * @description Join a club
         * @need_auth true
         * @scope clubs
         */
        join(id: number) : Promise< void >;

        /**
         * @route POST /api/clubs/:id/leave
         * @description Leave a club
         * @need_auth true
         * @scope clubs
         */
        leave(id: number) : Promise< void >;
    }
}