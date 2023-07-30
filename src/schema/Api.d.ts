import type * as v1 from '@@schema/v1/index.d.ts';
import type * as v2 from '@@schema/v2/index.d.ts';
import type { HasApi } from '@@schema/Controllers.d.ts';
import type { AxiosInstance } from 'axios';

export namespace API {
    namespace Contructor {
        type Params = {
            app_name:       string;
            client_id:      string;
            client_secret:  string;
            access_token?:  string;
            refresh_token?: string;
        };
    }
}

export interface API {
    request:                AxiosInstance;

    abuseRequests:          HasApi & v2.AbuseRequests;
    achievements:           HasApi & v1.Achievements;
    animes:                 HasApi & v1.Animes;
    appears:                HasApi & v1.Appears;
    bans:                   HasApi & v1.Bans;
    calendar:               HasApi & v1.Calendar;
    characters:             HasApi & v1.Characters;
    clubs:                  HasApi & v1.Clubs;
    comments:               HasApi & v1.Comments;
    constants:              HasApi & v1.Constants;
    dialogs:                HasApi & v1.Dialogs;
    episodeNotifications:   HasApi & v2.EpisodeNotifications;
    favorites:              HasApi & v1.Favorites;
    forums:                 HasApi & v1.Forums;
    friends:                HasApi & v1.Friends;
    genres:                 HasApi & v1.Genres;
    mangas:                 HasApi & v1.Mangas;
    messages:               HasApi & v1.Messages;
    people:                 HasApi & v1.People;
    publishers:             HasApi & v1.Publishers;
    ranobe:                 HasApi & v1.Ranobe;
    reviews:                HasApi & v1.Reviews;
    stats:                  HasApi & v1.Stats;
    studios:                HasApi & v1.Studios;
    styles:                 HasApi & v1.Styles;
    topicIgnore:            HasApi & v2.TopicIgnore;
    topics:                 HasApi & v1.Topics & v2.Topics;
    userIgnore:             HasApi & v2.UserIgnore;
    userImages:             HasApi & v1.UserImages;
    userRates:              HasApi & v1.UserRates & v2.UserRates;
    users:                  HasApi & v1.Users;
    videos:                 HasApi & v1.Videos;
}