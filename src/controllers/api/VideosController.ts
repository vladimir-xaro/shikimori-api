import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class VideosController extends Controller implements Schema.v1.Videos {

    async get(anime_id: number) : Promise< Shikimori.Video[] > {
        const res = await this.api.request.get< Shikimori.Video[] >(`/animes/${anime_id}/videos`);
        return res.data;
    }

    async create(anime_id: number, params: Schema.v1.Videos.Create.Params) : Promise< Shikimori.Video > {
        const res = await this.api.request.post< Shikimori.Video >(`/animes/${anime_id}/videos`, params);
        return res.data;
    }

    async destroy(anime_id: number, video_id: number) : Promise< void > {
        await this.api.request.delete< Shikimori.User[] >(`/animes/${anime_id}/videos/${video_id}`);
    }

    async delete(anime_id: number, video_id: number) : Promise< void > {
        this.destroy(anime_id, video_id);
    }

}