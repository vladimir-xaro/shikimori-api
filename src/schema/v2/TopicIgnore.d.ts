export namespace TopicIgnore {
    type Response<T extends boolean> = {
        topic_id:   `${number}`;
        is_ignored: T;
    };

    namespace Ignore {
        type Response = TopicIgnore.Response< true >;
    }

    namespace Unignore {
        type Response = TopicIgnore.Response< false >;
    }
}

export interface TopicIgnore {
    /**
     * Ignore a topic
     * @route POST /api/v2/topics/:topic_id/ignore
     */
    ignore(topic_id: number) : Promise< TopicIgnore.Ignore.Response >;

    /**
     * Unignore a topic
     * @route DELETE /api/v2/topics/:topic_id/ignore
     */
    unignore(topic_id: number) : Promise< TopicIgnore.Unignore.Response >;
}