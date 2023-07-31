import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ParamsWithPage } from '@@types/general.d.ts';

export default class ClubsController extends Controller implements Schema.v1.Clubs {

    async index(params: Schema.v1.Clubs.Index.Params) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.get(`/clubs`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Club.Extended > {
        const res = await this.api.request.get(`/clubs/${id}`);
        return res.data;
    }

    async update(id: number, params?: Schema.v1.Clubs.Update.Params) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.patch(`/clubs/${id}`, params);
        return res.data;
    }

    async animes(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.get(`/clubs/${id}/animes`, { params });
        return res.data;
    }

    async mangas(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.get(`/clubs/${id}/mangas`, { params });
        return res.data;
    }

    async ranobe(id: number, params?: ParamsWithPage) : Promise< Shikimori.Ranobe[] > {
        const res = await this.api.request.get(`/clubs/${id}/ranobe`, { params });
        return res.data;
    }

    async ranobes(id: number, params?: ParamsWithPage) : Promise< Shikimori.Ranobe[] > {
        return this.ranobe(id, params);
    }

    async characters(id: number, params?: ParamsWithPage) : Promise< Shikimori.Person[] > {
        const res = await this.api.request.get(`/clubs/${id}/character`, { params });
        return res.data;
    }

    async collections(id: number, params?: ParamsWithPage) : Promise< Shikimori.Collection[] > {
        const res = await this.api.request.get(`/clubs/${id}/collections`, { params });
        return res.data;
    }

    async clubs(id: number, params?: ParamsWithPage) : Promise< Shikimori.Club[] > {
        const res = await this.api.request.get(`/clubs/${id}/clubs`, { params });
        return res.data;
    }

    async members(id: number): Promise<Shikimori.User[]> {
        const res = await this.api.request.get(`/clubs/${id}/members`);
        return res.data;
    }

    async images(id: number): Promise<Shikimori.Image[]> {
        const res = await this.api.request.get(`/clubs/${id}/images`);
        return res.data;
    }

    async join(id: number): Promise<void> {
        const res = await this.api.request.post(`/clubs/${id}`);
        return res.data;
    }

    async leave(id: number): Promise<void> {
        const res = await this.api.request.post(`/clubs/${id}`);
        return res.data;
    }

}