import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ResponseWithNotice } from '@@types/general.d.ts';

export default class CommentsController extends Controller implements Schema.v1.Comments {

    async index(params: Schema.v1.Comments.Index.Params) : Promise< Shikimori.Comment.Extended[] > {
        const res = await this.api.request.get< Shikimori.Comment.Extended[] >(`/comments`, { params });
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Comment.Extended > {
        const res = await this.api.request.get< Shikimori.Comment.Extended >(`/comments/${id}`);
        return res.data;
    }

    async create(params: Schema.v1.Comments.Create.Params) : Promise< Shikimori.Comment.Extended > {
        const res = await this.api.request.post< Shikimori.Comment.Extended >(`/comments`);
        return res.data;
    }

    async update(id: number, params: Schema.v1.Comments.Update.Params) : Promise< Shikimori.Comment.Extended > {
        const res = await this.api.request.patch< Shikimori.Comment.Extended >(`/comments/${id}`);
        return res.data;
    }

    async delete(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.post< ResponseWithNotice >(`/comments/${id}`);
        return res.data;
    }

}