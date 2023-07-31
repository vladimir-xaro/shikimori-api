import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class MessagesController extends Controller implements Schema.v1.Messages {

    async get(id: number) : Promise< Shikimori.Message > {
        const res = await this.api.request.get< Shikimori.Message >(`/messages/${id}`);
        return res.data;
    }

    async create(params: Schema.v1.Messages.Create.Params) : Promise< Shikimori.Message > {
        const res = await this.api.request.post< Shikimori.Message >(`/messages`, params);
        return res.data;
    }

    async update(id: number, params: Schema.v1.Messages.Update.Params) : Promise< Shikimori.Message > {
        const res = await this.api.request.patch< Shikimori.Message >(`/messages/${id}`, params);
        return res.data;
    }

    async destroy(id: number) : Promise< void > {
        await this.api.request.delete(`/messages/${id}`);
    }

    async delete(id: number) : Promise< void > {
        return this.delete(id);
    }

    async mark_read(params: Schema.v1.Messages.MarkRead.Params) : Promise< void > {
        await this.api.request.post(`/messages/mark_read`, params);
    }

    async markRead(params: Schema.v1.Messages.MarkRead.Params) : Promise< void > {
        await this.mark_read(params);
    }

    async read_all(params: Schema.v1.Messages.Read.Params) : Promise< void > {
        await this.api.request.post(`/messages/mark_read`, params);
    }

    async readAll(params: Schema.v1.Messages.Read.Params) : Promise< void > {
        await this.read_all(params);
    }

    async delete_all(params: Schema.v1.Messages.DeleteAll.Params) : Promise< void > {
        await this.api.request.post(`/messages/delete_all`, params);
    }

    async deleteAll(params: Schema.v1.Messages.DeleteAll.Params) : Promise< void > {
        await this.delete_all(params);
    }

}