declare namespace Schema.v1 {
    namespace Reviews {
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
                review:     Schema.v1.Reviews.Create.Params.Review;
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
                review:     Schema.v1.Reviews.Update.Params.Review;
            };
        }
    }
    interface Reviews {
        /**
         * Create a review
         * @route POST /api/reviews
         * @need_auth true
         * @scope `topics`
         */
        create(params: Schema.v1.Reviews.Create.Params) : Promise< Shikimori.Review >;

        /**
         * Update a review
         * @route PATCH /api/reviews/:id
         * @route PUT /api/reviews/:id
         * @need_auth true
         * @scope `topics`
         */
        update(id: number, params: Schema.v1.Reviews.Update.Params) : Promise< Shikimori.Review >;

        /**
         * Destroy a review
         * @route DELETE /api/reviews/:id
         * @need_auth true
         * @scope `topics`
         */
        destroy(id: number) : Promise< ResponseWithNotice >;

        /**
         * @see Schema.v1.Reviews.destroy
         * @alias destroy
         */
        delete(id: number) : Promise< ResponseWithNotice >;
    }
}