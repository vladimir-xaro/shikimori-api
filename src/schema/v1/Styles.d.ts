import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Styles {
    namespace Preview {
        namespace Params {
            type Style = {
                css: string;
            };
        }
        type Params = {
            style: Styles.Preview.Params.Style;
        };
    }
    namespace Create {
        namespace Params {
            type Style = {
                css:        string;
                name:       string;
                owner_id:   `${number}` | number;
                owner_type: Shikimori.Style.OwnerType;
            };
        }
        type Params = {
            style: Styles.Create.Params.Style;
        };
    }
    namespace Update {
        namespace Params {
            type Style = {
                css:        string;
                name:       string;
            };
        }
        type Params = {
            style: Styles.Update.Params.Style;
        };
    }
}

export interface Styles {
    /**
     * Show a style
     * @route GET /api/styles/:id
     */
    get(id: number) : Promise< Shikimori.Style >;

    /**
     * Preview a style
     * @route POST /api/styles/preview
     */
    preview(params: Styles.Preview.Params) : Promise< Shikimori.Style.Preview >;

    /**
     * Create a style
     * @route POST /api/styles
     */
    create(params: Styles.Create.Params) : Promise< Shikimori.Style >;

    /**
     * Update a style
     * @route PATCH /api/styles/:id
     * @route PUT /api/styles/:id
     */
    update(id: number, params: Styles.Update.Params) : Promise< Shikimori.Style >;
}