import Controller from '@@src/Controller.ts';
import ShikimoriAPIError from '@@src/ShikimoriAPIError.js';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class FavoritesController extends Controller implements Schema.v1.Favorites {

    async create(linked_type: Shikimori.LinkedType, linked_id: number, kind?: Shikimori.FavoritesKind) : Promise< Schema.v1.Favorites.Create.Response > {
        if (linked_type === 'Person' && !kind) throw new ShikimoriAPIError({
            code:       'EndpointParameterError',
            message:    '`kind` is required when `linked_type` is "Person"',
        });
        const res = await this.api.request.post< Schema.v1.Favorites.Create.Response >(`/favorites/${linked_type}/${linked_id}${kind ? `/${kind}` : ''}`)
        return res.data;
    }

    async destroy(linked_type: Shikimori.LinkedType, linked_id: number): Promise<Schema.v1.Favorites.Destroy.Response> {
        const res = await this.api.request.delete< Schema.v1.Favorites.Destroy.Response >(`/favorites/${linked_type}/${linked_id}`);
        return res.data;
    }

    async delete(linked_type: Shikimori.LinkedType, linked_id: number): Promise<Schema.v1.Favorites.Destroy.Response> {
        return this.destroy(linked_type, linked_id);
    }

    async reorder(id: number, params: Schema.v1.Favorites.Reorder.Params): Promise<Schema.v1.Favorites.Reorder.Response> {
        const res = await this.api.request.post< Schema.v1.Favorites.Reorder.Response >(`/favorites/${id}`, params);
        return res.data;
    }

}