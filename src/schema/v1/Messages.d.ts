declare namespace Schema.v1 {
    namespace Messages {
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
                message:    Schema.v1.Messages.Create.Params.Message;
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
                message:    Schema.v1.Messages.Update.Params.Message;
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

    interface Messages {
        /**
         * Show a message
         * @route GET /api/messages/:id
         * @need_auth true
         * @scope `messages`
         */
        get(id: number) : Promise< Shikimori.Message >;

        /**
         * Create a message
         * @route POST /api/messages
         * @need_auth true
         * @scope `messages`
         */
        create(params: Schema.v1.Messages.Create.Params) : Promise< Shikimori.Message >;

        /**
         * Update a message
         * @route PATCH /api/messages/:id
         * @route PUT /api/messages/:id
         * @need_auth true
         * @scope `messages`
         */
        update(id: number, params: Schema.v1.Messages.Update.Params) : Promise< Shikimori.Message >;

        /**
         * Destroy a message
         * @route DELETE /api/messages/:id
         * @need_auth true
         * @scope `messages`
         */
        destroy(id: number) : Promise< Shikimori.Message >;
        
        /**
         * @see Schema.v1.Messages.destroy
         * @alias destroy
         */
        delete(id: number) : Promise< void >;

        /**
         * Mark messages as read or unread
         * @route POST /api/messages/mark_read
         * @need_auth true
         * @scope `messages`
         */
        mark_read(params: Schema.v1.Messages.MarkRead.Params) : Promise< void >;
        
        /**
         * @see Schema.v1.Messages.mark_read
         * @alias mark_read
        */
        markRead(params: Schema.v1.Messages.MarkRead.Params) : Promise< void >;

        /**
         * Mark all messages as read
         * @route POST /api/messages/read_all
         * @need_auth true
         * @scope `messages`
         */
        read(params: Schema.v1.Messages.Read.Params) : Promise< void >;

        /**
         * Delete all messages
         * @route POST /api/messages/delete_all
         * @need_auth true
         * @scope `messages`
         */
        delete_all(params: Schema.v1.Messages.DeleteAll.Params) : Promise< void >;
        
        /**
         * @see Schema.v1.Messages.delete_all
         * @alias delete_all
         */
        deleteAll(params: Schema.v1.Messages.DeleteAll.Params) : Promise< void >;
    }
}