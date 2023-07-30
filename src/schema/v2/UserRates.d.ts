import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace UserRates {
    namespace Index {
        type Params = {
            /**
             * When this field is set `page` and `limit` ignored
             */
            user_id?:       number;

            target_id?:     number;
            target_type?:   Shikimori.UserRateType;
            status?:        Shikimori.UserList;

            /**
             * This field is ignored when `user_id` is set
             * @validation max 100_000
             */
            page?:          number;

            /**
             * @ignore This field is ignored when `user_id` is set
             * @validation max 1_000
             */
            limit?:         number;
        };
    }

    namespace Create {
        namespace Params {
            type UserRate = {
                user_id:        number;
                target_id:      number;
                target_type:    Shikimori.UserRateType;
                status?:        Shikimori.UserList;
                score?:         number;
                chapters?:      number;
                episodes?:      number;
                volumes?:       number;
                rewatches?:     number;
                text?:          string;
            };
        }
        type Params = {
            user_rate: UserRates.Create.Params.UserRate;
        };
    }

    namespace Update {
        namespace Params {
            type UserRate = {
                status?:        Shikimori.UserList;
                score?:         number;
                chapters?:      number;
                episodes?:      number;
                volumes?:       number;
                rewatches?:     number;
                text?:          string;
            };
        }
        type Params = {
            user_rate: UserRates.Update.Params.UserRate;
        };
    }
}

export interface UserRates {
    /**
     * List user rates
     * @route GET /api/v2/user_rates
     */
    index(params: UserRates.Index.Params) : Promise< Shikimori.UserRate.Extended[] >;

    /**
     * Show an user rate
     * @route GET /api/v2/user_rates/:id
     * @param id UserRate id
     */
    get(id: number) : Promise< Shikimori.UserRate.Extended >;

    /**
     * Create an user rate
     * @route POST /api/v2/user_rates
     * @scope `user_rates`
     */
    create(params: UserRates.Create.Params) : Promise< Shikimori.UserRate.Extended >;

    /**
     * Update an user rate
     * @route PATCH /api/v2/user_rates/:id
     * @route PUT /api/v2/user_rates/:id
     * @scope `user_rates`
     * @param id UserRate id
     */
    update(id: number, params: UserRates.Update.Params) : Promise< Shikimori.UserRate.Extended >;

    /**
     * Increment episodes/chapters by 1
     * @route POST /api/v2/user_rates/:id/increment
     * @scope `user_rates`
     * @param id UserRate id
     */
    increment(id: number) : Promise< Shikimori.UserRate.Extended >;

    /**
     * Destroy an user rate
     * @route DELETE /api/v2/user_rates/:id
     * @scope `user_rates`
     */
    destroy(id: number) : Promise< void >;

    /**
     * @see destroy
     * @alias UserRates.destroy()
     */
    delete(id: number) : Promise< void >;
}