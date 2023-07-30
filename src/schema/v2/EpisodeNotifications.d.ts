declare namespace Schema.v2 {
    namespace EpisodeNotifications {
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
                episode_notification:   Schema.v2.EpisodeNotifications.Index.Params.EpisodeNotification;

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
    interface EpisodeNotifications {
        /**
         * Notify shikimori about anime episode release
         * @route POST /api/v2/episode_notifications
         */
        index(params: Schema.v2.EpisodeNotifications.Index.Params) : Promise< Schema.v2.EpisodeNotifications.Index.Response >;
    }
}