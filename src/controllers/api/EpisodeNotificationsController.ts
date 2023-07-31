import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class EpisodeNotificationsController extends Controller implements Schema.v2.EpisodeNotifications {

    async index(params: Schema.v2.EpisodeNotifications.Index.Params) : Promise< Schema.v2.EpisodeNotifications.Index.Response > {
        const res = await this.api.request.post< Schema.v2.EpisodeNotifications.Index.Response >(`/v2/episode_notifications`, params);
        return res.data;
    }

}