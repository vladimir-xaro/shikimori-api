import type { TupleUnion } from '@@types/utils.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Constants {
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

export interface Constants {
    /**
     * @route GET /api/constants/anime
     */
    anime() : Promise< Constants.Anime.Response >;

    /**
     * @route GET /api/constants/manga
     */
    manga() : Promise< Constants.Manga.Response >;

    /**
     * @route GET /api/constants/user_rate
     */
    user_rate() : Promise< Constants.UserRate.Response >;

    /**
     * @alias userRate
     * @see Schema.v1.Constants.userRate
    */
    userRate() : Promise< Constants.UserRate.Response >;

    /**
     * @route GET /api/constants/club
     */
    club() : Promise< Constants.Club.Response >;

    /**
     * @route GET /api/constants/smileys
     */
    smileys() : Promise< Constants.Smileys.Response >;
}