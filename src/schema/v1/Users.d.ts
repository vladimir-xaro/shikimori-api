import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Users {
    namespace Index {
        type Params = {
            /** @validation between `1` and  `100_000` */
            page?:  number;

            /** @validation max `100` */
            limit?: number;
        };
    }

    namespace Get {
        type Params = {
            /**
             * Ignored by Shikimori API (always `1`)
             * 
             * `1` if you want to get user by its nickname
             */
            is_nickname: '1';
        };
    }

    namespace SignOut {
        type Response = 'signed out';
    }

    namespace AnimeRates {
        type Params = {
            /** @validation between `1` and  `100_000` */
            page?:      number;

            /** @validation max `5_000` */
            limit?:     number;

            status?:    Shikimori.UserList;

            /** Set to `true` to discard hentai, yaoi and yuri */
            censored?:  boolean;
        };
    }

    namespace MangaRates {
        type Params = {
            /** @validation between `1` and  `100_000` */
            page?:      number;

            /** @validation max `5_000` */
            limit?:     number;

            /** Set to `true` to discard hentai, yaoi and yuri */
            censored?:  boolean;
        };
    }

    namespace Messages {
        type Params<T extends Shikimori.Message.Type> = {
            /** @validation between `1` and  `100_000` */
            page?:  number;

            /** @validation max `100` */
            limit?: number;

            // type:   Shikimori.Message.Type;
            type:   T;
        };

        type Params2 = {
            /** @validation between `1` and  `100_000` */
            page?:  number;

            /** @validation max `100` */
            limit?: number;

            // type:   Shikimori.Message.Type;
            type:   Shikimori.Message.Type;
        }

        namespace Response {
            type Map = {
                'inbox':        Shikimori.Message.Extended< null >;
                'sent':         Shikimori.Message.Extended< null >;
                'private':      Shikimori.Message.Extended< null >;
                'news':         Shikimori.Message.Extended< Shikimori.Message.Linked.Type >;
                'notification': Shikimori.Message.Extended< Shikimori.Message.Linked.Type >;
            };
        }
        type Response<T extends Shikimori.Message.Type> = Shikimori.Message.Extended<null>;
    }

    namespace UnreadMessages {
        type Response = {
            messages:       number;
            news:           number;
            notifications:  number;
        };
    }

    namespace History {
        type Params = {
            /** @validation between `1` and  `100_000` */
            page?:          number;

            /** @validation max `100` */
            limit?:         number;

            target_id?:     number;
            target_type?:   'Anime' | 'Manga';
        };
    }
}

export interface Users {
    /**
     * List users
     * @route GET /api/users
     */
    index(params?: Users.Index.Params) : Promise< Shikimori.User[] >;

    /**
     * Show an user
     * @route GET /api/users/:id
     * @param id user's id or nickname
     */
    get(id: number | string, params?: Users.Get.Params) : Promise< Shikimori.User.Extended >;

    /**
     * Show user's brief info
     * @route GET /api/users/:id/info
     * @param id user's `id` or `nickname`
     */
    info(id: number | string) : Promise< Shikimori.User.Info >;

    /**
     * Show current user's brief info
     * @route GET /api/users/whoami
     */
    whoami() : Promise< Shikimori.User.Info >;

    /**
     * @see Users#whoami
     * @alias whoami
     */
    whoAmI() : Promise< Shikimori.User.Info >;

    /**
     * Sign out the user
     * @route GET /api/users/sign_out
     */
    sign_out() : Promise< Users.SignOut.Response >;

    /**
     * @see Users.sign_out
     * @alias sign_out
     */
    signOut() : Promise< Users.SignOut.Response >;

    /**
     * Show user's friends
     * @route GET /api/users/:id/friends
     */
    friends(id: number | string) : Promise< Shikimori.User[] >;

    /**
     * Show user's clubs
     * @route GET /api/users/:id/clubs
    */
    clubs(id: number | string) : Promise< Shikimori.Club[] >;

    /**
     * Show user's anime list
     * @route GET /api/users/:id/anime_rates
     */
    anime_rates(id: number | string, params?: Users.AnimeRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'anime'>[] >;

    /**
     * @see Users.anime_rates
     * @alias anime_rates
     */
    animeRates(id: number | string, params?: Users.AnimeRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'anime'>[] >;

    /**
     * Show user's manga list
     * @route GET /api/users/:id/manga_rates
     */
    manga_rates(id: number | string, params?: Users.MangaRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'manga'>[] >;

    /**
     * @see Users.manga_rates
     * @alias manga_rates
     */
    mangaRates(id: number | string, params?: Users.MangaRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'manga'>[] >;

    /**
     * Show user's favourites
     * @route GET /api/users/:id/favourites
     */
    favourites(id: number | string) : Promise< Shikimori.User.Favourites >;

    /**
     * Show current user's messages
     * @route GET /api/users/:id/messages
     * @scope `messages`
     */
    // messages<T extends Shikimori.Message.Type = 'inbox'>(params: Users.Messages.Params<T>) : Promise< Shikimori.Message.Extended<null> >;
    // messages<T extends Shikimori.Message.Type = 'sent'>(params: Users.Messages.Params<T>) : Promise< Shikimori.Message.Extended<null> >;
    // messages<T extends Shikimori.Message.Type = 'private'>(params: Users.Messages.Params<T>) : Promise< Shikimori.Message.Extended<null> >;
    // messages<T extends Shikimori.Message.Type = 'news'>(params: Users.Messages.Params<T>) : Promise< Shikimori.Message.Extended<Shikimori.Message.Linked.Type> >;
    // messages<T extends Shikimori.Message.Type = 'notifications'>(params: Users.Messages.Params<T>) : Promise< Shikimori.Message.Extended<Shikimori.Message.Linked.Type> >;
    // TODO: check this variant
    messages(id: number | string, params: Users.Messages.Params2) : Promise< Users.Messages.Response<typeof params.type> >;

    /**
     * Show current user's unread messages counts
     * @route GET /api/users/:id/unread_messages
     * @scope `messages`
     */
    unread_messages(id: number | string) : Promise< Users.UnreadMessages.Response >;

    /**
     * @see Users.unread_messages
     * @alias unread_messages
    */
    unreadMessages(id: number | string) : Promise< Users.UnreadMessages.Response >;

    /**
     * Show user history
     * @route GET /api/users/:id/history
     */
    history(id: number | string, params?: Users.History.Params) : Promise< Shikimori.User.History[] >;

    /**
     * Show user's bans
     * @route GET /api/users/:id/bans
     */
    bans(id: number | string) : Promise< Shikimori.Ban[] >;
}