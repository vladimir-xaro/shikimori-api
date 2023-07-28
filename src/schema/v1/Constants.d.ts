declare namespace Schema.v1 {
    namespace Constants {
        namespace Anime {
            type Response = {
                kind:   TupleUnion< Shikimori.Anime.Kind >;
                status: TupleUnion< Shikimori.Anime.Status >;
            };
        }
        namespace Manga {
            type Response = {
                kind:   TupleUnion< Shikimori.Manga.Kind >;
                status: TupleUnion< Shikimori.Manga.Status >;
            };
        }
        namespace UserRate {
            type Response = {
                status: TupleUnion< Shikimori.UserList >;
            };
        }
        namespace Club {
            type Response = {
                join_policy:            TupleUnion< 'free' | 'member_invite' | 'admin_invite' | 'owner_invite' >;
                comment_policy:         TupleUnion< 'free' | 'members' | 'admins' >;
                image_upload_policy:    TupleUnion< 'members' | 'admins' >;
            };
        }
        namespace Smileys {
            type Response = Shikimori.Smiley[];
        }
    }
    interface Constants {
        /**
         * @route GET /api/constants/anime
         * @need_auth false
         */
        anime() : Promise< Schema.v1.Constants.Anime.Response >;

        /**
         * @route GET /api/constants/manga
         * @need_auth false
         */
        manga() : Promise< Schema.v1.Constants.Manga.Response >;

        /**
         * @route GET /api/constants/user_rate
         * @need_auth false
         */
        user_rate() : Promise< Schema.v1.Constants.UserRate.Response >;

        /**
         * @alias userRate
         * @see Schema.v1.Constants.userRate
        */
        userRate() : Promise< Schema.v1.Constants.UserRate.Response >;

        /**
         * @route GET /api/constants/club
         * @need_auth false
         */
        club() : Promise< Schema.v1.Constants.Club.Response >;

        /**
         * @route GET /api/constants/smileys
         * @need_auth false
         */
        smileys() : Promise< Schema.v1.Constants.Smileys.Response >;
    }
}