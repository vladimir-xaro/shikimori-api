declare namespace Schema.v1 {
    namespace Topics {
        namespace Index {
            type Params = {
                page?:          NumberString; // between 1 and 100000
                limit?:         NumberString; // max 30
                forum?:         Shikimori.Forum.Type;
                linked_id?:     number; // use together with linked_type
                linked_type?:   Shikimori.Topic.Linked.Type; // use together with linked_id
                type?:          Shikimori.Topic.Type;
            };
        }

        namespace Updates {
            type Params = {
                page?:  NumberString; // between 1 and 100000
                limit?: NumberString; // max 30
            };
        }

        namespace Hot {
            type Params = {
                limit?: NumberString; // max 30
            };
        }

        namespace Create {
            namespace Params {
                type Topic = {
                    body:           string;
                    forum_id:       NumberString;
                    linked_id?:     NumberString;
                    linked_type?:   Shikimori.Topic.Linked.Type;
                    title:          string;
                    /** Only `Topic` */
                    type:           'Topic';
                    user_id:        NumberString;
                };
            }

            type Params = {
                topic: Schema.v1.Topics.Create.Params.Topic;
            };
        }
    }

    interface Topics {
        /**
         * List topics
         * @route GET /api/topics
         * @need_auth false
         */
        index<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Schema.v1.Topics.Index.Params) : Promise< Shikimori.Topic<T>[] >;

        /**
         * NewsTopics about database updates
         * @route GET /api/topics/updates
         * @need_auth false
         */
        updates<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Schema.v1.Topics.Updates.Params) : Promise< Shikimori.Topic<T>[] >;

        /**
         * Hot topics
         * @route GET /api/topics/hot
         * @need_auth false
         */
        hot<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Schema.v1.Topics.Hot.Params) : Promise< Shikimori.Topic<T>[] >;

        /**
         * Show a topic
         * @route GET /api/topics/:id
         * @need_auth false
         */
        get<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number) : Promise< Shikimori.Topic<T> >;

        /**
         * Create a topic
         * @route POST /api/topics
         * @need_auth true
         * @scope topics
         */
        create<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params: Schema.v1.Topics.Create.Params) : Promise< Shikimori.Topic<T> >;

        /**
         * Update a topic
         * @route PATCH /api/topics/:id
         * @route PUT /api/topics/:id
         * @need_auth true
         * @scope topics
         */
        update<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number, params: Schema.v1.Topics.Updates.Params) : Promise< Shikimori.Topic<T> >;

        /**
         * Destroy a topic
         * @route DELETE /api/topics/:id
         * @need_auth true
         * @scope topics
         */
        destroy(id: number) : Promise< ResponseWithNotice >;
    }
}