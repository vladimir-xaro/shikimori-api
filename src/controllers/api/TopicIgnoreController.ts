import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class TopicIgnoreController extends Controller implements Schema.v2.TopicIgnore {

    async ignore(topic_id: number) : Promise< Schema.v2.TopicIgnore.Ignore.Response > {
        const res = await this.api.request.post< Schema.v2.TopicIgnore.Ignore.Response >(`/v2/topics/${topic_id}/ignore`);
        return res.data;
    }

    async unignore(topic_id: number) : Promise< Schema.v2.TopicIgnore.Unignore.Response > {
        const res = await this.api.request.delete< Schema.v2.TopicIgnore.Unignore.Response >(`/v2/topics/${topic_id}/ignore`);
        return res.data;
    }

}