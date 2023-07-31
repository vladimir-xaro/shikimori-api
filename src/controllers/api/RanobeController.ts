import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class RanobeController extends Controller implements Schema.v1.Ranobe {

    async index(params: Schema.v1.Ranobe.Index.Params) : Promise< Shikimori.Ranobe[] > {
        const res = await this.api.request.get< Shikimori.Ranobe[] >(`/ranobe`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Ranobe.Extended > {
        const res = await this.api.request.get< Shikimori.Ranobe.Extended >(`/ranobe/${id}`);
        return res.data;
    }

    async roles(id: number) : Promise< Shikimori.Roles[] > {
        const res = await this.api.request.get< Shikimori.Roles[] >(`/ranobe/${id}/roles`);
        return res.data;
    }

    async similar(id: number) : Promise< (Shikimori.Manga | Shikimori.Ranobe)[] > {
        const res = await this.api.request.get< (Shikimori.Manga | Shikimori.Ranobe)[] >(`/ranobe/${id}/similiar`);
        return res.data;
    }

    async related(id: number) : Promise< Shikimori.Related[] > {
        const res = await this.api.request.get< Shikimori.Related[] >(`/ranobe/${id}/related`);
        return res.data;
    }

    async franchise(id: number) : Promise< Shikimori.Franchise > {
        const res = await this.api.request.get< Shikimori.Franchise >(`/ranobe/${id}/franchise`);
        return res.data;
    }

    async external_links(id: number) : Promise< Shikimori.ExternalLink[] > {
        const res = await this.api.request.get< Shikimori.ExternalLink[] >(`/ranobe/${id}/external_links`);
        return res.data;
    }

    async externalLinks(id: number) : Promise< Shikimori.ExternalLink[] > {
        return this.external_links(id);
    }

    async topics(id: number, params: Schema.v1.Ranobe.Topics.Params) : Promise< Shikimori.Topic<'Ranobe'>[] > {
        const res = await this.api.request.get< Shikimori.Topic<'Ranobe'>[] >(`/ranobe/${id}/topics`, { params });
        return res.data;
    }

}