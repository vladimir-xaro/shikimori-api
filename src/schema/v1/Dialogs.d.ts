import type { ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Dialogs.Search {
    type Params = {
        search: string;
    }
}

export interface Dialogs {
    /**
     * List dialogs
     * @route GET /api/dialogs
     * @scope messages
     */
    index() : Promise< Shikimori.Dialog[] >;

    /**
     * Show a dialog
     * @route GET /api/dialogs/:id
     * @scope messages
     */
    get(id: number) : Promise< Shikimori.Message.Extended[] >;

    /**
     * Destroy a dialog
     * @route DELETE /api/dialogs/:id
     * @scope messages
     */
    destroy(id: number) : Promise< ResponseWithNotice >;

    /**
     * @see destroy
     * @alias Schema.v1.Dialogs.destroy()
     */
    delete(id: number) : Promise< ResponseWithNotice >;
}