export namespace Topics {
    type Response = {
        topic_id:   `${number}`;
        is_ignored: boolean;
    };

    namespace Ignore {
        type Response = Topics.Response;
    }

    namespace Unignore {
        type Response = Topics.Response;
    }
}

export interface Topics {
    /**
     * Ignore a topic
     * @route POST /api/v2/topics/:topic_id/ignore
     * @scope topics
     */
    ignore(topic_id: number) : Promise< Topics.Ignore.Response >;

    /**
     * Unignore a topic
     * @route DELETE /api/v2/topics/:topic_id/ignore
     * @scope topics
     */
    unignore(topic_id: number) : Promise< Topics.Unignore.Response >;
}