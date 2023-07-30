import type { BoolOrNumBool } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Messages {
    namespace Create {
        namespace Params {
            type Message = {
                body:       string;
                from_id:    number;
                kind:       'Private';
                to_id:      number;
            };
        }
        type Params = {
            /** Used by shikimori frontend code. Ignore it */
            frontend?:  BoolOrNumBool;
            message:    Messages.Create.Params.Message;
        };
    }

    namespace Update {
        namespace Params {
            type Message = {
                body: string;
            };
        }
        type Params = {
            /** Used by shikimori frontend code. Ignore it */
            frontend?:  BoolOrNumBool;
            message:    Messages.Update.Params.Message;
        };
    }

    namespace MarkRead {
        type Params = {
            /** String with ids separated by commas */
            ids?:       string; // 14,15,987654,
            is_read?:   1 | 0;
        };
    }

    namespace Read {
        type Params = {
            /** Used by shikimori frontend code. Ignore it */
            frontend?:  BoolOrNumBool;
            type:       'news' | 'notifications';
        };
    }

    namespace DeleteAll {
        type Params = {
            /** Used by shikimori frontend code. Ignore it */
            frontend?:  BoolOrNumBool;
            type:       'news' | 'notifications';
        };
    }
}

export interface Messages {
    /**
     * Show a message
     * @route GET /api/messages/:id
     * @scope `messages`
     */
    get(id: number) : Promise< Shikimori.Message >;

    /**
     * Create a message
     * @route POST /api/messages
     * @scope `messages`
     */
    create(params: Messages.Create.Params) : Promise< Shikimori.Message >;

    /**
     * Update a message
     * @route PATCH /api/messages/:id
     * @route PUT /api/messages/:id
     * @scope `messages`
     */
    update(id: number, params: Messages.Update.Params) : Promise< Shikimori.Message >;

    /**
     * Destroy a message
     * @route DELETE /api/messages/:id
     * @scope `messages`
     */
    destroy(id: number) : Promise< void >;

    /**
     * @see Messages.destroy
     * @alias destroy
     */
    delete(id: number) : Promise< void >;

    /**
     * Mark messages as read or unread
     * @route POST /api/messages/mark_read
     * @scope `messages`
     */
    mark_read(params: Messages.MarkRead.Params) : Promise< void >;

    /**
     * @see Messages.mark_read
     * @alias mark_read
    */
    markRead(params: Messages.MarkRead.Params) : Promise< void >;

    /**
     * Mark all messages as read
     * @route POST /api/messages/read_all
     * @scope `messages`
     */
    read_all(params: Messages.Read.Params) : Promise< void >;

    /**
     * @see Messages.read_all
     * @alias read_all
     */
    readAll(params: Messages.Read.Params) : Promise< void >;

    /**
     * Delete all messages
     * @route POST /api/messages/delete_all
     * @scope `messages`
     */
    delete_all(params: Messages.DeleteAll.Params) : Promise< void >;

    /**
     * @see Messages.delete_all
     * @alias delete_all
     */
    deleteAll(params: Messages.DeleteAll.Params) : Promise< void >;
}