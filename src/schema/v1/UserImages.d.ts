import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace UserImages {
    namespace Create {
        type Params = {
            /** Uploaded file */
            image:          any;
            linked_type:    string;
        };
    }
}

export interface UserImages {
    /**
     * Create an user image
     * @route POST /api/user_images
     * @scope `comments`
     */
    create<
        UserID extends number = number,
        ImageID extends number = number,
        Extension extends string = 'jpg'
    >(params: UserImages.Create.Params): Promise<Shikimori.Image.Uploaded<UserID, ImageID, Extension> >;
}