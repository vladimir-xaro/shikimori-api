declare namespace Schema.v2 {
    namespace Topics {
        type Response = {
            topic_id:   `${number}`;
            is_ignored: boolean;
        };

        namespace Ignore {
            type Response = Schema.v2.Topics.Response;
        }

        namespace Unignore {
            type Response = Schema.v2.Topics.Response;
        }
    }

    interface Topics {
        /**
         * Ignore a topic
         * @route POST /api/v2/topics/:topic_id/ignore
         * @need_auth true
         * @scope topics
         */
        ignore(topic_id: number) : Promise< Schema.v2.Topics.Ignore.Response >;

        /**
         * Unignore a topic
         * @route DELETE /api/v2/topics/:topic_id/ignore
         * @need_auth true
         * @scope topics
         */
        unignore(topic_id: number) : Promise< Schema.v2.Topics.Unignore.Response >;
    }
}