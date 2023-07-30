export namespace AbuseRequests {
    namespace Offtopic {
        type Params = {
            comment_id: number;
        };
        type Response = {
            kind:           'offtopic',
            value:          boolean;
            affected_ids:   number[];
        };
    }

    namespace ConvertReview {
        type Params = {
            comment_id:     number;
        } | {
            topic_id:       number;
        };
    }

    namespace Abuse {
        type Params = (
            {
                comment_id: number;
            } | {
                topic_id: number;
            }
        ) & {
            reason?: string;
        };
    }

    namespace Spoiler {
        type Params = (
            {
                comment_id: number;
            } | {
                topic_id: number;
            }
        ) & {
            reason?: string;
        };
    }
}

export interface AbuseRequests {
    /**
     * Mark comment as offtopic
     * @description Request will be sent to moderators.
     * @route POST /api/v2/abuse_requests/offtopic
     */
    // offtopic(params: Schema.v2.AbuseRequests.Offtopic.Params) : Promise< Schema.v2.AbuseRequests.Offtopic.Response >;
    offtopic(params: AbuseRequests.Offtopic.Params) : Promise< AbuseRequests.Offtopic.Response >;

    /**
     * Convert comment to review
     * @description Request will be sent to moderators.
     * @route POST /api/v2/abuse_requests/convert_review
     */
    // convert_review(params: Schema.v2.AbuseRequests.ConvertReview.Params) : Promise< void >;
    convert_review(params: AbuseRequests.ConvertReview.Params) : Promise< void >;

    /**
     * @see Schema.v2.AbuseRequests#convert_review
     * @alias convert_review
     */
    // convertReview(params: Schema.v2.AbuseRequests.ConvertReview.Params) : Promise< void >;
    convertReview(params: AbuseRequests.ConvertReview.Params) : Promise< void >;

    /**
     * Create abuse about violation of site rules
     * @description Request will be sent to moderators.
     * @route POST /api/v2/abuse_requests/abuse
     */
    // abuse(params: Schema.v2.AbuseRequests.Abuse.Params) : Promise< void >;
    abuse(params: AbuseRequests.Abuse.Params) : Promise< void >;

    /**
     * Create abuse about spoiler in content
     * @description Request will be sent to moderators.
     * @route POST /api/v2/abuse_requests/spoiler
     */
    // spoiler(params: Schema.v2.AbuseRequests.Spoiler.Params) : Promise< void >;
    spoiler(params: AbuseRequests.Spoiler.Params) : Promise< void >;
}