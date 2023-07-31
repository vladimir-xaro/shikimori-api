import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class UserIgnoreController extends Controller implements Schema.v2.UserIgnore {

    async ignore(user_id: number) : Promise< Schema.v2.UserIgnore.Ignore.Response > {
        const res = await this.api.request.post< Schema.v2.UserIgnore.Ignore.Response >(`/v2/users/${user_id}/ignore`);
        return res.data;
    }

    async unignore(user_id: number) : Promise< Schema.v2.UserIgnore.Unignore.Response > {
        const res = await this.api.request.delete< Schema.v2.UserIgnore.Unignore.Response >(`/v2/users/${user_id}/ignore`);
        return res.data;
    }

}