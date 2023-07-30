declare namespace Schema.v2 {
    namespace TopicIgnore {
        type Response<T extends boolean> = {
            topic_id:    `${number}`;
            is_ignored: T;
        };

        namespace Ignore {
            type Response = Schema.v2.TopicIgnore.Response< true >;
        }

        namespace Unignore {
            type Response = Schema.v2.TopicIgnore.Response< false >;
        }
    }
    interface TopicIgnore {
        /**
         * Ignore a topic
         * @route POST /api/v2/topics/:topic_id/ignore
         */
        ignore(topic_id: number) : Promise< Schema.v2.TopicIgnore.Ignore.Response >;

        /**
         * Unignore a topic
         * @route DELETE /api/v2/topics/:topic_id/ignore
         */
        unignore(topic_id: number) : Promise< Schema.v2.TopicIgnore.Unignore.Response >;
    }
}