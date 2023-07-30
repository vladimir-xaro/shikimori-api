import type { ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export interface Friends {
    /**
     * Create a friend
     * @route POST /api/friends/:id
     * @scope friends
     */
    create(id: number) : Promise< ResponseWithNotice >;

    /**
     * @see create
     * @alias Schema.v1.Friends.create()
     */
    add(id: number) : Promise< ResponseWithNotice >;

    /**
     * Destroy a friend
     * @route DELETE /api/friends/:id
     * @scope friends
     */
    destroy(id: number) : Promise< ResponseWithNotice >;

    /**
     * @see destroy
     * @alias Schema.v1.Friends.destroy()
     */
    delete(id: number) : Promise< ResponseWithNotice >;
}