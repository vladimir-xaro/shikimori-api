export default class AnimesController implements HasApi, Schema.v1.Animes {
    api: Schema.API;

    constructor(api: Schema.API) {
        this.api = api;
    }

    async index(params: Schema.v1.Animes.Index.Params) : Promise< Shikimori.Anime[] > {
        const res = await this.api.request.get< Shikimori.Anime[] >(`/animes`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Anime.Extended > {
        const res = await this.api.request.get< Shikimori.Anime.Extended >(`/animes/${id}`);
        return res.data;
    }

    async roles(id: number) : Promise< Shikimori.Anime.Roles[] > {
        const res = await this.api.request.get< Shikimori.Anime.Roles[] >(`/animes/${id}/roles`);
        return res.data;
    }

    async similiar(id: number) : Promise< Shikimori.Anime[] > {
        const res = await this.api.request.get< Shikimori.Anime[] >(`/animes/${id}/similiar`);
        return res.data;
    }

    async related(id: number) : Promise< Shikimori.Anime.Related[] > {
        const res = await this.api.request.get< Shikimori.Anime.Related[] >(`/animes/${id}/related`);
        return res.data;
    }

    async screenshots(id: number) : Promise< Shikimori.Image.Screenshot[] > {
        const res = await this.api.request.get< Shikimori.Image.Screenshot[] >(`/animes/${id}/screenshots`);
        return res.data;
    }

    async franchise(id: number) : Promise< Shikimori.Anime.Franchise > {
        const res = await this.api.request.get< Shikimori.Anime.Franchise >(`/animes/${id}/franchise`);
        return res.data;
    }

    async externalLinks(id: number) : Promise< Shikimori.Anime.ExternalLink[] > {
        const res = await this.api.request.get< Shikimori.Anime.ExternalLink[] >(`/animes/${id}/external_links`);
        return res.data;
    }

    async topics(id: number, params: Schema.v1.Animes.Topics.Params) : Promise< Shikimori.Topic<'Anime'>[] > {
        const res = await this.api.request.get< Shikimori.Topic<'Anime'>[] >(`/animes/${id}/topics`, { params });
        return res.data;
    }
}