import type { ResponseWithNotice, ResponseWithSuccess } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Favorites {
    namespace Create {
        type Response = ResponseWithSuccess & ResponseWithNotice;
    }
    namespace Destroy {
        type Response = ResponseWithSuccess & ResponseWithNotice;
    }
    namespace Reorder {
        type Params = {
            new_index: number;
        };
        type Response = {
            new_index: `${number}`;
        };
    }
}

export interface Favorites {
    /**
     * Create a favorite
     * @route POST /api/favorites/:linked_type/:linked_id(/:kind)
     */
    create(linked_type: Exclude<Shikimori.LinkedType, 'Person'>, linked_id: number, kind?: Shikimori.FavoritesKind) : Promise< Favorites.Create.Response >;
    create(linked_type: 'Person', linked_id: number, kind: Shikimori.FavoritesKind) : Promise< Favorites.Create.Response >;

    /**
     * Destroy a favorite
     * @route DELETE /api/favorites/:linked_type/:linked_id
     */
    destroy(linked_type: Shikimori.LinkedType, linked_id: number) : Promise< Favorites.Destroy.Response >;

    /**
     * @see destroy
     * @alias Schema.v1.Favorites.destroy()
     */
    delete(linked_type: Shikimori.LinkedType, linked_id: number) : Promise< Favorites.Destroy.Response >;

    /**
     * Assign a new position to a favorite
     * @route POST /api/favorites/:id/reorder
     */
    reorder(id: number, params: Favorites.Reorder.Params) : Promise< Favorites.Reorder.Response >;
}