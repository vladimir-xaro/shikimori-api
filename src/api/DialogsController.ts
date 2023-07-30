import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { ResponseWithNotice } from '@@types/general.d.ts';

export default class DialogsController extends Controller implements Schema.v1.Dialogs {

    async index() : Promise< Shikimori.Dialog[] > {
        const res = await this.api.request.get< Shikimori.Dialog[] >(`/dialogs`);
        return res.data;
    }

    async get(id: number) : Promise< Shikimori.Message.Extended[] > {
        const res = await this.api.request.get< Shikimori.Message.Extended[] >(`/dialogs/${id}`);
        return res.data;
    }

    async destroy(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/dialogs/${id}`);
        return res.data;
    }

    async delete(id: number) : Promise< ResponseWithNotice > {
        return this.destroy(id);
    }

}