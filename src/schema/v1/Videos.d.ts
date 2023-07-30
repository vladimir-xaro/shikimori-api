import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Videos {
    namespace Create {
        namespace Params {
            type Video = {
                kind:       Shikimori.Video.Kind;
                name:       string;

                /**
                 * Supported hostings: `youtube`, `vk`, `ok`, `coub`, `rutube`, `vimeo`,
                 * `sibnet`, `yandex`, `streamable`, `smotret_anime`, `myvi`, `youmite`,
                 * `viuly`, `stormo`, `mediafile`
                 */
                url:        string;
            };
        }
        type Params = {
            video:  Videos.Create.Params.Video;
        };
    }
}

export interface Videos {
    /**
     * List videos
     * @route GET /api/animes/:anime_id/videos
     */
    get(anime_id: number) : Promise< Shikimori.Video[] >;

    /**
     * Create a video
     * @route POST /api/animes/:anime_id/videos
     * @scope `content`
     */
    create(anime_id: number, params: Videos.Create.Params) : Promise< Shikimori.Video >;

    /**
     * Destroy a video
     * @route DELETE /api/animes/:anime_id/videos/:id
     * @scope `content`
     */
    destroy(anime_id: number, video_id: number) : Promise< void >;

    /**
     * @see Videos.destroy
     * @alias destroy
     */
    delete(anime_id: number, video_id: number) : Promise< void >;
}