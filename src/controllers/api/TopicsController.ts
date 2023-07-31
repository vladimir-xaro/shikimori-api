import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ResponseWithNotice } from '@@types/general.d.ts';

export default class TopicsController extends Controller implements Schema.v1.Topics, Schema.v2.Topics {

    async index<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params: Schema.v1.Topics.Index.Params = {}) : Promise< Shikimori.Topic<T>[] > {
        const res = await this.api.request.get< Shikimori.Topic<T>[] >(`/topics`, { params });
        return res.data;
    }

    async updates<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Schema.v1.Topics.Updates.Params) : Promise< Shikimori.Topic<T>[] > {
        const res = await this.api.request.get< Shikimori.Topic<T>[] >(`/topics`, { params });
        return res.data;
    }

    async hot<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Schema.v1.Topics.Hot.Params) : Promise< Shikimori.Topic<T>[] > {
        const res = await this.api.request.get< Shikimori.Topic<T>[] >(`/topics`, { params });
        return res.data;
    }

    async get<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number) : Promise< Shikimori.Topic<T> > {
        const res = await this.api.request.get< Shikimori.Topic<T> >(`/topics/${id}`);
        return res.data;
    }

    async create<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params: Schema.v1.Topics.Create.Params) : Promise< Shikimori.Topic<T> > {
        const res = await this.api.request.post< Shikimori.Topic<T> >(`/topics`, params);
        return res.data;
    }

    async update<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number, params: Schema.v1.Topics.Updates.Params) : Promise< Shikimori.Topic<T> > {
        const res = await this.api.request.patch< Shikimori.Topic<T> >(`/topics/${id}`, params);
        return res.data;
    }

    async destroy(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/topics/${id}`);
        return res.data;
    }

    async ignore(topic_id: number) : Promise< Schema.v2.Topics.Ignore.Response > {
        const res = await this.api.request.post< Schema.v2.Topics.Ignore.Response >(`/v2/topics/${topic_id}/ignore`);
        return res.data;
    }

    async unignore(topic_id: number) : Promise< Schema.v2.Topics.Unignore.Response > {
        const res = await this.api.request.delete< Schema.v2.Topics.Unignore.Response >(`/v2/topics/${topic_id}/unignore`);
        return res.data;
    }

}