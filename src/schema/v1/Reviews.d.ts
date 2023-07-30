import type { BoolOrNumBool, ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Reviews {
    namespace Create {
        namespace Params {
            type Review = {
                anime_id:   number;
                body:       string;
                opinion:    Shikimori.Review.Opinion;
            };
        }
        type Params = {
            frontend?:  BoolOrNumBool;
            review:     Reviews.Create.Params.Review;
        };
    }

    namespace Update {
        namespace Params {
            type Review = {
                body?:       string;
                opinion?:    Shikimori.Review.Opinion;
            };
        }
        type Params = {
            frontend?:  BoolOrNumBool;
            review:     Reviews.Update.Params.Review;
        };
    }
}

export interface Reviews {
    /**
     * Create a review
     * @route POST /api/reviews
     * @scope `topics`
     */
    create(params: Reviews.Create.Params) : Promise< Shikimori.Review >;

    /**
     * Update a review
     * @route PATCH /api/reviews/:id
     * @route PUT /api/reviews/:id
     * @scope `topics`
     */
    update(id: number, params: Reviews.Update.Params) : Promise< Shikimori.Review >;

    /**
     * Destroy a review
     * @route DELETE /api/reviews/:id
     * @scope `topics`
     */
    destroy(id: number) : Promise< ResponseWithNotice >;

    /**
     * @see Reviews.destroy
     * @alias destroy
     */
    delete(id: number) : Promise< ResponseWithNotice >;
}