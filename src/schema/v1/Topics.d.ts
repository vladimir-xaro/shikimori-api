import type { ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Topics {
    namespace Index {
        type Params = {
            page?:          number; // between 1 and 100000
            limit?:         number; // max 30
            forum?:         Shikimori.Forum.Type;
            linked_id?:     number; // use together with linked_type
            linked_type?:   Shikimori.Topic.Linked.Type; // use together with linked_id
            type?:          Shikimori.Topic.Type;
        };
    }

    namespace Updates {
        type Params = {
            page?:  number; // between 1 and 100000
            limit?: number; // max 30
        };
    }

    namespace Hot {
        type Params = {
            limit?: number; // max 30
        };
    }

    namespace Create {
        namespace Params {
            type Topic = {
                body:           string;
                forum_id:       number;
                linked_id?:     number;
                linked_type?:   Shikimori.Topic.Linked.Type;
                title:          string;
                /** Only `Topic` */
                type:           'Topic';
                user_id:        number;
            };
        }

        type Params = {
            topic: Topics.Create.Params.Topic;
        };
    }
}

export interface Topics {
    /**
     * List topics
     * @route GET /api/topics
     */
    index<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Topics.Index.Params) : Promise< Shikimori.Topic<T>[] >;

    /**
     * NewsTopics about database updates
     * @route GET /api/topics/updates
     */
    updates<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Topics.Updates.Params) : Promise< Shikimori.Topic<T>[] >;

    /**
     * Hot topics
     * @route GET /api/topics/hot
     */
    hot<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params?: Topics.Hot.Params) : Promise< Shikimori.Topic<T>[] >;

    /**
     * Show a topic
     * @route GET /api/topics/:id
     */
    get<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number) : Promise< Shikimori.Topic<T> >;

    /**
     * Create a topic
     * @route POST /api/topics
     * @scope topics
     */
    create<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(params: Topics.Create.Params) : Promise< Shikimori.Topic<T> >;

    /**
     * Update a topic
     * @route PATCH /api/topics/:id
     * @route PUT /api/topics/:id
     * @scope topics
     */
    update<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined>(id: number, params: Topics.Updates.Params) : Promise< Shikimori.Topic<T> >;

    /**
     * Destroy a topic
     * @route DELETE /api/topics/:id
     * @scope topics
     */
    destroy(id: number) : Promise< ResponseWithNotice >;
}