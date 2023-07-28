declare namespace Schema {
    namespace API {
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

    interface API {
        request:    import('axios').AxiosInstance;

        achievements:   HasApi & Schema.v1.Achievements;
        animes:         HasApi & Schema.v1.Animes;
        appears:        HasApi & Schema.v1.Appears;
        bans:           HasApi & Schema.v1.Bans;
        characters:     HasApi & Schema.v1.Characters;
        clubs:          HasApi & Schema.v1.Clubs;
        comments:       HasApi & Schema.v1.Comments;
        constants:      HasApi & Schema.v1.Constants;
        dialogs:        HasApi & Schema.v1.Dialogs;
        favorites:      HasApi & Schema.v1.Favorites;
        
        topics:         HasApi & Schema.v1.Topics;
        userRates:      HasApi & Schema.v1.UserRates;
        // ...
    }
}