declare namespace Schema.v1 {
    namespace Styles {
        namespace Preview {
            namespace Params {
                type Style = {
                    css: string;
                };
            }
            type Params = {
                style: Schema.v1.Styles.Preview.Params.Style;
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
                style: Schema.v1.Styles.Create.Params.Style;
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
                style: Schema.v1.Styles.Update.Params.Style;
            };
        }
    }
    interface Styles {
        /**
         * Show a style
         * @route GET /api/styles/:id
         * @need_auth true
         */
        get(id: number) : Promise< Shikimori.Style >;

        /**
         * Preview a style
         * @route POST /api/styles/preview
         * @need_auth true
         */
        preview(params: Schema.v1.Styles.Preview.Params) : Promise< Shikimori.Style.Preview >;

        /**
         * Create a style
         * @route POST /api/styles
         * @need_auth true
         */
        create(params: Schema.v1.Styles.Create.Params) : Promise< Shikimori.Style >;

        /**
         * Update a style
         * @route PATCH /api/styles/:id
         * @route PUT /api/styles/:id
         * @need_auth true
         */
        update(id: number, params: Schema.v1.Styles.Update.Params) : Promise< Shikimori.Style >;
    }

}