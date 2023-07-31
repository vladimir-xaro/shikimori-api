import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class UsersController extends Controller implements Schema.v1.Users {

    async index(params?: Schema.v1.Users.Index.Params) : Promise< Shikimori.User[] > {
        const res = await this.api.request.get< Shikimori.User[] >(`/users`, { params });
        return res.data;
    }

    async get(id: number | string, params?: Schema.v1.Users.Get.Params) : Promise< Shikimori.User.Extended > {
        const res = await this.api.request.get< Shikimori.User.Extended >(`/users/${id}`, { params });
        return res.data;
    }

    async info(id: number | string) : Promise< Shikimori.User.Info > {
        const res = await this.api.request.get< Shikimori.User.Info >(`/users/${id}/info`);
        return res.data;
    }

    async whoami() : Promise< Shikimori.User.Info > {
        const res = await this.api.request.get< Shikimori.User.Info >(`/users/whoami`);
        return res.data;
    }

    async whoAmI() : Promise< Shikimori.User.Info > {
        const res = await this.api.request.get< Shikimori.User.Info >(`/users`);
        return res.data;
    }

    async sign_out() : Promise< 'signed out' > {
        const res = await this.api.request.get< 'signed out' >(`/users/sign_out`);
        return res.data;
    }

    async signOut() : Promise< 'signed out' > {
        return this.sign_out();
    }

    async friends(id: number | string) : Promise< Shikimori.User[] > {
        const res = await this.api.request.get< Shikimori.User[] >(`/users/${id}/friends`);
        return res.data;
    }

    async clubs(id: number | string) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.get< Shikimori.Club[] >(`/users/${id}/clubs`);
        return res.data;
    }

    async anime_rates(id: number | string, params?: Schema.v1.Users.AnimeRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'anime'>[] > {
        const res = await this.api.request.get< Shikimori.UserRate.WithUserAndTitle<'anime'>[] >(`/users/${id}/anime_rates`, { params });
        return res.data;
    }

    async animeRates(id: number | string, params?: Schema.v1.Users.AnimeRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'anime'>[] > {
        return this.anime_rates(id, params);
    }

    async manga_rates(id: number | string, params?: Schema.v1.Users.MangaRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'manga'>[] > {
        const res = await this.api.request.get< Shikimori.UserRate.WithUserAndTitle<'manga'>[] >(`/users/${id}/manga_rates`, { params });
        return res.data;
    }

    async mangaRates(id: number | string, params?: Schema.v1.Users.MangaRates.Params) : Promise< Shikimori.UserRate.WithUserAndTitle<'manga'>[] > {
        return this.manga_rates(id, params);
    }

    async favourites(id: number | string) : Promise< Shikimori.User.Favourites > {
        const res = await this.api.request.get< Shikimori.User.Favourites >(`/users/${id}/favourites`);
        return res.data;
    }

    // TODO: check this type variant
    async messages(id: number | string, params: Schema.v1.Users.Messages.Params2) : Promise< Schema.v1.Users.Messages.Response<typeof params.type> > {
        const res = await this.api.request.get< Schema.v1.Users.Messages.Response<typeof params.type> >(`/users/${id}/messages`, { params });
        return res.data;
    }

    async unread_messages(id: number | string) : Promise< Schema.v1.Users.UnreadMessages.Response > {
        const res = await this.api.request.get< Schema.v1.Users.UnreadMessages.Response >(`/users/${id}/unread_messages`);
        return res.data;
    }

    async unreadMessages(id: number | string) : Promise< Schema.v1.Users.UnreadMessages.Response > {
        return this.unread_messages(id);
    }

    async history(id: number | string, params?: Schema.v1.Users.History.Params) : Promise< Shikimori.User.History[] > {
        const res = await this.api.request.get< Shikimori.User.History[] >(`/users/${id}/history`, { params });
        return res.data;
    }

    async bans(id: number | string) : Promise< Shikimori.Ban[] > {
        const res = await this.api.request.get< Shikimori.Ban[] >(`/users/${id}/bans`);
        return res.data;
    }

}