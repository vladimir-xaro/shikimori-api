declare namespace Schema.v1 {
    namespace Dialogs.Search {
        type Params = {
            search: string;
        }
    }
    interface Dialogs {
        /**
         * List dialogs
         * @route GET /api/dialogs
         * @need_auth true
         * @scope messages
         */
        index() : Promise< Shikimori.Dialog[] >;

        /**
         * Show a dialog
         * @route GET /api/dialogs/:id
         * @need_auth true
         * @scope messages
         */
        get(id: number) : Promise< Shikimori.Message.Extended[] >;

        /**
         * Destroy a dialog
         * @route DELETE /api/dialogs/:id
         * @need_auth true
         * @scope messages
         */
        destroy(id: number) : Promise< ResponseWithNotice >;

        /**
         * @see destroy
         * @alias Schema.v1.Dialogs.destroy()
         */
        delete(id: number) : Promise< ResponseWithNotice >;
    }
}