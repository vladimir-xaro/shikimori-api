import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class AppearsController extends Controller implements Schema.v1.Appears {

    async read(ids: string | Shikimori.AppearId[]) : Promise< void > {
        await this.api.request.post('/appears', { ids: ids instanceof Array ? ids.join(',') : ids });
    }

}