import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';
import type { } from '@@types/general.d.ts';

export default class AbuseRequestsController extends Controller implements Schema.v2.AbuseRequests {

    async offtopic(params: Schema.v2.AbuseRequests.Offtopic.Params) : Promise< Schema.v2.AbuseRequests.Offtopic.Response > {
        const res = await this.api.request.post< Schema.v2.AbuseRequests.Offtopic.Response >(`/v2/abuse_requests/offtopic`, params);
        return res.data;
    }

    async convert_review(params: Schema.v2.AbuseRequests.ConvertReview.Params) : Promise< void > {
        await this.api.request.post(`/v2/abuse_requests/convert_review`, params);
    }

    async convertReview(params: Schema.v2.AbuseRequests.ConvertReview.Params) : Promise< void > {
        this.convert_review(params);
    }

    async abuse(params: Schema.v2.AbuseRequests.Abuse.Params) : Promise< void > {
        await this.api.request.post(`/v2/abuse_requests/abuse`, params);
    }

    async spoiler(params: Schema.v2.AbuseRequests.Spoiler.Params) : Promise< void > {
        await this.api.request.post(`/v2/abuse_requests/spoiler`, params);
    }

}