import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class AnimesController extends Controller implements Schema.v1.Animes {

    async index(params: Schema.v1.Animes.Index.Params) : Promise< Shikimori.Anime[] > {
        const res = await this.api.request.get< Shikimori.Anime[] >(`/animes`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Anime.Extended > {
        const res = await this.api.request.get< Shikimori.Anime.Extended >(`/animes/${id}`);
        return res.data;
    }

    async roles(id: number) : Promise< Shikimori.Roles[] > {
        const res = await this.api.request.get< Shikimori.Roles[] >(`/animes/${id}/roles`);
        return res.data;
    }

    async similar(id: number) : Promise< Shikimori.Anime[] > {
        const res = await this.api.request.get< Shikimori.Anime[] >(`/animes/${id}/similiar`);
        return res.data;
    }

    async related(id: number) : Promise< Shikimori.Related[] > {
        const res = await this.api.request.get< Shikimori.Related[] >(`/animes/${id}/related`);
        return res.data;
    }

    async screenshots(id: number) : Promise< Shikimori.Image.Screenshot[] > {
        const res = await this.api.request.get< Shikimori.Image.Screenshot[] >(`/animes/${id}/screenshots`);
        return res.data;
    }

    async franchise(id: number) : Promise< Shikimori.Franchise > {
        const res = await this.api.request.get< Shikimori.Franchise >(`/animes/${id}/franchise`);
        return res.data;
    }

    async external_links(id: number) : Promise< Shikimori.ExternalLink[] > {
        const res = await this.api.request.get< Shikimori.ExternalLink[] >(`/animes/${id}/external_links`);
        return res.data;
    }

    async externalLinks(id: number) : Promise< Shikimori.ExternalLink[] > {
        return this.external_links(id);
    }

    async topics(id: number, params: Schema.v1.Animes.Topics.Params) : Promise< Shikimori.Topic<'Anime'>[] > {
        const res = await this.api.request.get< Shikimori.Topic<'Anime'>[] >(`/animes/${id}/topics`, { params });
        return res.data;
    }

}