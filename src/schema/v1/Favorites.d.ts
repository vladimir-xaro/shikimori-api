declare namespace Schema.v1 {
    namespace Favorites {
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
    interface Favorites {
        /**
         * Create a favorite
         * @route POST /api/favorites/:linked_type/:linked_id(/:kind)
         * @need_auth true
         */
        create(linked_type: Exclude<Shikimori.LinkedType, 'Person'>, linked_id: number, kind?: Shikimori.FavoritesKind) : Promise< Schema.v1.Favorites.Create.Response >;
        create(linked_type: 'Person', linked_id: number, kind: Shikimori.FavoritesKind) : Promise< Schema.v1.Favorites.Create.Response >;

        /**
         * Destroy a favorite
         * @route DELETE /api/favorites/:linked_type/:linked_id
         * @need_auth true
         */
        destroy(linked_type: Shikimori.LinkedType, linked_id: number) : Promise< Schema.v1.Favorites.Destroy.Response >;

        /**
         * @see destroy
         * @alias Schema.v1.Favorites.destroy()
         */
        delete(linked_type: Shikimori.LinkedType, linked_id: number) : Promise< Schema.v1.Favorites.Destroy.Response >;

        /**
         * Assign a new position to a favorite
         * @route POST /api/favorites/:id/reorder
         * @need_auth true
         */
        reorder(id: number, params: Schema.v1.Favorites.Reorder.Params) : Promise< Schema.v1.Favorites.Reorder.Response >;
    }
}