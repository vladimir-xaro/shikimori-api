import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class MangasController extends Controller implements Schema.v1.Mangas {

    async index(params?: Schema.v1.Mangas.Index.Params | undefined) : Promise< Shikimori.Manga[] > {
        const res = await this.api.request.get< Shikimori.Manga[] >(`/mangas`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Manga.Extended > {
        const res = await this.api.request.get< Shikimori.Manga.Extended >(`/mangas/${id}`);
        return res.data;
    }

    async roles(id: number) : Promise< Shikimori.Roles[] > {
        const res = await this.api.request.get< Shikimori.Roles[] >(`/mangas/${id}/roles`);
        return res.data;
    }

    async similar(id: number) : Promise< Shikimori.Manga[] > {
        const res = await this.api.request.get< Shikimori.Manga[] >(`/mangas/${id}/similiar`);
        return res.data;
    }

    async related(id: number) : Promise< Shikimori.Related[] > {
        const res = await this.api.request.get< Shikimori.Related[] >(`/mangas/${id}/related`);
        return res.data;
    }

    async franchise(id: number) : Promise< Shikimori.Franchise > {
        const res = await this.api.request.get< Shikimori.Franchise >(`/mangas/${id}/franchise`);
        return res.data;
    }

    async external_links(id: number) : Promise< Shikimori.ExternalLink[] > {
        const res = await this.api.request.get< Shikimori.ExternalLink[] >(`/mangas/${id}/external_links`);
        return res.data;
    }

    async externalLinks(id: number) : Promise< Shikimori.ExternalLink[] > {
        return this.external_links(id);
    }

    async topics(id: number, params: Schema.v1.Mangas.Topics.Params) : Promise< Shikimori.Topic<'Manga'>[] > {
        const res = await this.api.request.get< Shikimori.Topic<'Manga'>[] >(`/mangas/${id}/topics`, { params });
        return res.data;
    }

}