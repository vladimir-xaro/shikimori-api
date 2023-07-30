import type { BoolOrNumBool } from '@@types/general.d.ts';

export namespace EpisodeNotifications {
    namespace Index {
        namespace Params {
            type EpisodeNotification = {
                anime_id:       number;
                episode:        number;

                /**
                 * Episode release date
                 * @validation Must be a date in `iso8601` `YYYY-MM-DDThh:mm:ss±hh` format
                 */
                aired_at:       string;

                is_fandub?:     BoolOrNumBool;
                is_raw?:        BoolOrNumBool;
                is_subtitles?:  BoolOrNumBool;
                is_anime365?:   BoolOrNumBool;
            };
        }
        type Params = {
            episode_notification:   EpisodeNotifications.Index.Params.EpisodeNotification;

            /** Private token required to access this api */
            token:                  string;
        };
        type Response = {
            id:             number;
            anime_id:       number;
            episode:        number;
            is_raw:         boolean;
            is_subtitles:   boolean;
            is_fandub:      boolean;
            is_anime365:    boolean;
            topic_id:       number;
        };
    }
}

export interface EpisodeNotifications {
    /**
     * Notify shikimori about anime episode release
     * @route POST /api/v2/episode_notifications
     */
    index(params: EpisodeNotifications.Index.Params) : Promise< EpisodeNotifications.Index.Response >;
}