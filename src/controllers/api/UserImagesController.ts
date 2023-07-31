import Controller from '@@controllers/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class UserImagesController extends Controller implements Schema.v1.UserImages {
    async create<
        UserID extends number = number,
        ImageID extends number = number,
        Extension extends string = 'jpg'
    >(params: Schema.v1.UserImages.Create.Params) : Promise< Shikimori.Image.Uploaded<UserID, ImageID, Extension> > {
        const res = await this.api.request.post< Shikimori.Image.Uploaded<UserID, ImageID, Extension> >(`/user_images`, params);
        return res.data;
    }
}