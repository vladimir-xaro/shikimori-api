import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';

export default class ConstantsController extends Controller implements Schema.v1.Constants {

    async anime() : Promise< Schema.v1.Constants.Anime.Response > {
        const res = await this.api.request.get(`/constants/anime`);
        return res.data;
    }

    async manga() : Promise< Schema.v1.Constants.Manga.Response > {
        const res = await this.api.request.get(`/constants/manga`);
        return res.data;
    }

    async user_rate() : Promise< Schema.v1.Constants.UserRate.Response > {
        const res = await this.api.request.get(`/constants/user_rate`);
        return res.data;
    }

    async userRate() : Promise< Schema.v1.Constants.UserRate.Response > {
        return this.user_rate();
    }

    async club() : Promise< Schema.v1.Constants.Club.Response > {
        const res = await this.api.request.get(`/constants/club`);
        return res.data;
    }

    async smileys() : Promise< Schema.v1.Constants.Smileys.Response > {
        const res = await this.api.request.get(`/constants/smileys`);
        return res.data;
    }

}