declare namespace Schema.v1 {
    namespace UserImages {
        namespace Create {
            type Params = {
                /** Uploaded file */
                image:          any;
                linked_type:    string;
            };
        }
    }
    interface UserImages {
        /**
         * Create an user image
         * @route POST /api/user_images
         * @need_auth true
         * @scope `comments`
         */
        create<
            UserID extends number = number,
            ImageID extends number = number,
            Extension extends string = 'jpg'
        >(params: Schema.v1.UserImages.Create.Params): Promise<Shikimori.Image.Uploaded<UserID, ImageID, Extension> >;
    }
}