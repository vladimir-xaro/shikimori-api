/** Utils */

/**
 * Tuple union type as array
 * @example TupleUnion<'a' | 'b'> => ['a', 'b'] | ['b', 'a'];
 */
type TupleUnion<U extends string, R extends any[] = []> = {
    [S in U]: Exclude<U, S> extends never ? [...R, S] : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

/**
 * Join string union type
 * @example Join<['a', 'b'], ', '> => 'a, b';
 * @example Join<['a', 'b'] | ['b', 'a'], ', '> => 'a, a' | 'a, b' | 'b, a' | 'b ,b';
 */
type Join<T extends string[], Separator extends string> =
    Join.Tail<T> extends string[]
        ? Join.Recursive<T[0], Join.Tail<T>, Separator>
        : T[0];
declare namespace Join {
    type Tail<T extends string[]> = T extends [T[0], ...infer TailType] ? TailType : never;
    type Recursive<H extends string, T extends string[], Separator extends string> =
        Tail<T> extends [string, ...string[]]
            ? `${H}${Separator}${Recursive<T[0], Tail<T>, Separator>}`
            : `${H}${Separator}${T[0]}`
}


/** General */

type ParamsWithPage     = {
    page?: number; // between 1 and 100_000
};

type ResponseWithSuccess = {
    success: boolean;
}
type ResponseWithNotice = {
    notice: string;
};

type BooleanString  = `${boolean}` | boolean;
type NumberString   = `${number}` | number;

type DateString         = string;
type DateStringWithUTC  = string;

declare namespace Shikimori {

    /** General Unions */

    type Scope              = 'user_rates' | 'messages' | 'comments' | 'topics' | 'content' | 'clubs' | 'friends' | 'ignores';


    type Rating             = 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
    type UserList           = 'planned' | 'watching' | 'rewatching' | 'completed' | 'on_hold' | 'dropped';

    type LinkedType         = 'Anime' | 'Manga' | 'Ranobe' | 'Person' | 'Character';
    type FavoritesKind      = 'common' | 'seyu' | 'mangaka' | 'producer' | 'person';

    type UserRateType       = 'Anime' | 'Manga';

    type AppearId           = `comment-${number}` | `topic-${number}`;


    /** Base */

    type Genre = {
        id:         8;
        name:       string;
        russian:    string;
        kind:       'genre';
        entry_type: 'Anime' | 'Manga' | 'Ranobe';
    };

    type Studio = {
        id:             1993;
        name:           string;
        filtered_name:  string;
        real:           boolean;
        image:          string;
    };

    type Video = {
        id:         number;
        url:        string;
        image_url:  string;
        player_url: string;
        name:       string,
        kind:       string; // pv, ...
        hosting:    string; // youtube, ...
    };

    type UserRate = {
        id:         number;
        score:      number;
        status:     UserList;
        rewatches:  number;
        episodes:   number | null;
        chapters:   number | null;
        volumes:    number | null;
        text:       string | null;
        text_html:  string;
        created_at: DateString;
        updated_at: DateString;
    };
    namespace UserRate {
        type Extended = UserRate & {
            user_id:        number;
            target_id:      number;
            target_type:    UserRateType;
        };
    }

    type Person = {
        id:         number;
        name:       string;
        russian:    string;
        image:      Image;
        url:        string;
    };

    type Character = Person;
    namespace Character {
        type Extended = Character & {
            altname:            string | null;
            japanese:           string;
            description:        string | null;
            description_html:   string;
            description_source: string | null;
            favoured:           boolean;
            thread_id:          number;
            topic_id:           number;
            updated_at:         DateString;
            seyu:               Person[];
            animes:             Anime.Character[];
            mangas:             Manga.Character[];
        };
    }

    namespace Franchise {
        type Link = {
            id:         number;
            source_id:  number;
            target_id:  number;
            source:     number;
            target:     number;
            weight:     number;
            relation:   string; // prequel
        };
        
        type Node = {
            id:         number;
            date:       number;
            name:       string;
            image_url:  string; // full url
            url:        string; // path without domain
            year:       number;
            kind:       string; // TV Сериал
            weight:     number;
        };
    }

    type Image = {
        original:   string; // path without domain (/assets/globals/picture.jpg)
        preview:    string; // path without domain (/assets/globals/picture.jpg)
        x96:        string; // path without domain (/assets/globals/picture.jpg)
        x48:        string; // path without domain (/assets/globals/picture.jpg)
    };
    namespace Image {
        namespace Club {
            type Logo = {
                original:   string; // path without domain
                main:       string; // path without domain
                x96:        string; // path without domain
                x73:        string; // path without domain
                x48:        string; // path without domain
            }
        }

        type Club = {
            id:             number;
            original_url:   string; // full url
            main_url:       string; // full url
            preview_url:    string; // full url
            can_destroy:    boolean;
            user_id:        number;
        };

        type Screenshot = {
            original:   string;
            preview:    string;
        };

        type User = {
            x160:   string; // full url
            x148:   string; // full url
            x80:    string; // full url
            x64:    string; // full url
            x48:    string; // full url
            x32:    string; // full url
            x16:    string; // full url
        };
    }

    type Club = {
        id:             number;
        name:           string;
        logo:           Image.Club.Logo;
        is_censored:    boolean;
        join_policy:    string; // free
        comment_policy: string; // free
    };
    namespace Club {
        type Extended = Club & {
            description:        string;
            description_html:   string;
            mangas:             Manga[];
            characters:         Character[];
            thread_id:          number;
            topic_id:           number;
            user_role:          string | null;  // admin
            style_id:           number;
            members:            User[];
            animes:             Anime[];
            images:             Image.Club[];
        }
    }

    type Article = {};
    type ClubPage = {};
    type Critique = {};
    type Review = {};
    type Contest = {};
    type CosplayGallery = {};

    type Forum = {
        id:         number,
        position:   number,
        name:       string; // Аниме и манга
        permalink:  Forum.Type;
        url:        string; // path without domain
    };
    namespace Forum {
        type Type = 'all' | 'animanga' | 'site' | 'games' | 'vn' | 'contests' | 'offtopic' | 'clubs' | 'my_clubs' | 'critiques' | 'news' | 'collections' | 'articles' | 'cosplay';
    }

    type User = {
        id:             number;
        nickname:       string;
        avatar:         string; // full url
        image:          Image.User;
        last_online_at: DateString;
        url:            string; // full url
    };
    type Ban = {
        id:                 number;
        user_id:            number;
        comment:            Comment;
        moderator_id:       number;
        reason:             string; // moderator comment
        created_at:         DateString;
        duration_minutes:   number;
        user:               User;
        moderator:          User;
    }

    type Message = {
        id:             number;
        kind:           string; // Private
        read:           boolean;
        body:           string;
        html_body:      string;
        created_at:     DateString;
        linked_id:      number; // 0
        linked_type:    null;   // number or string ?
        linked:         null;   // number or string ?
    };
    namespace Message {
        type Extended = Message & {
            from:   User;
            to:     User;
        }
    }

    type Anime = {
        id:             number;
        name:           string;
        russian:        string;
        image:          Image;
        url:            string;         // path without domain
        kind:           Anime.Kind;
        score:          string;         // string number (8.3)
        status:         Anime.Status;
        episodes:       number;
        episodes_aired: number;
        aired_on:       DateString | null;
        released_on:    DateString | null;
    };
    namespace Anime {
        namespace Kind {
            type Extended = Anime.Kind | 'tv_13' | 'tv_24' | 'tv_48';
        }

        type Kind       = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music';
        
        type Duration   = 'S' | 'D' | 'F';
        
        type Status     = 'anons' | 'ongoing' | 'released';

        type TopicKind  = Anime.Status | 'episode';

        type Order      = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' | 'episodes' | 'status' | 'random' | 'created_at' | 'created_at_desc';

        type Extended = Anime & {
            rating:                 Rating;
            english:                (string | null)[];
            japanese:               (string | null)[];
            synonyms:               string[];
            license_name_ru:        string | null;
            duration:               number;
            description:            string | null;
            description_html:       string;
            description_source:     string | null;
            franchise:              string | null;
            favoured:               boolean;
            anons:                  boolean;
            ongoing:                boolean;
            thread_id:              number;
            topic_id:               number;
            myanimelist_id:         number;
            rates_scores_stats:     { name: number; value: number }[];
            rates_statuses_stats:   { name: number; value: number }[];
            updated_at:             DateString | null;
            next_episode_at:        DateString | null;
            fansubbers:             string[];
            fandubbers:             string[];
            licensors:              string[];
            genres:                 Genre[];
            studios:                Studio[];
            videos:                 Video[];
            screenshots:            Image.Screenshot[];
            user_rate:              UserRate | null;
        };

        type Character = Anime & {
            roles:  string[];
            role:   string;
        };

        type Roles = {
            roles:          string[];
            roles_russian:  string[];
            character:      Character | null;
            person:         Person | null;
        };

        type Related = {
            relation:           string; // Adaptation
            relation_russian:   string; // Адаптация
            anime:              Anime | null;
            manga:              Manga | null;
        };


        type Franchise = {
            links:      Franchise.Link[];
            nodes:      Franchise.Node[];
            current_id: number; // Anime id
        };
        type ExternalLink = {
            id:             number,
            kind:           string;         // official_site
            url:            string;         // full url
            source:         string;
            entry_id:       number;         // Anime id
            entry_type:     string;         // Anime
            created_at:     DateString | null;
            updated_at:     DateString | null;
            imported_at:    DateString | null;
        };
    }

    type Topic<T extends keyof Topic.Linked.Map | undefined = undefined> = {
        id:                     number;
        topic_title:            string;
        body:                   string;
        html_body:              string;
        html_footer:            string;
        created_at:             DateString;
        comments_count:         number;
        forum:                  Forum;
        user:                   User;
        type:                   Topic.Type;
        linked_id:              number | null;
        /** default: `Anime` */
        linked_type:            T extends keyof Topic.Linked.Map ? T : 'Anime';
        linked:                 T extends keyof Topic.Linked.Map ? Topic.Linked.Map[T] : null;
        viewed:                 boolean;
        last_comment_viewed:    true | null;    // null
        event:                  string | null;  // episode, anons, event, ...
        episode:                number | null;
    };
    namespace Topic {
        namespace Linked {
            type Type = 'Anime' | 'Manga' | 'Ranobe' | 'Character' | 'Person' | 'Club' | 'ClubPage' | 'Critique' | 'Review' |
                        'Contest' | 'CosplayGallery' | 'Collection' | 'Article';

            type Map = {
                'Anime':            Anime;
                'Manga':            Manga;
                'Ranobe':           Ranobe;
                'Character':        Character;
                'Person':           Person;
                'Club':             Club;
                'ClubPage':         ClubPage;
                'Critique':         Critique;
                'Review':           Review;
                'Contest':          Contest;
                'CosplayGallery':   CosplayGallery;
                'Collection':       Collection;
                'Article':          Article;
            };
        }

        type Linked = Anime | Manga | Ranobe | Character | Person | Club | ClubPage | Critique | Review | Contest | CosplayGallery | Collection | Article;

        type Type = 'Topic' | 'Topics::ClubUserTopic' | 'Topics::EntryTopic' | 'Topics::EntryTopics::AnimeTopic' |
                    'Topics::EntryTopics::ArticleTopic' | 'Topics::EntryTopics::CharacterTopic' | 'Topics::EntryTopics::ClubPageTopic' |
                    'Topics::EntryTopics::ClubTopic' | 'Topics::EntryTopics::CollectionTopic' | 'Topics::EntryTopics::ContestTopic' |
                    'Topics::EntryTopics::CosplayGalleryTopic' | 'Topics::EntryTopics::MangaTopic' | 'Topics::EntryTopics::PersonTopic' |
                    'Topics::EntryTopics::RanobeTopic' | 'Topics::EntryTopics::CritiqueTopic' | 'Topics::EntryTopics::ReviewTopic' |
                    'Topics::NewsTopic' | 'Topics::NewsTopics::ContestStatusTopic';
    }

    type Manga = {
        id:             number;
        name:           string;
        russian:        string;
        image:          Image;
        url:            string;         // path without domain
        kind:           Manga.Kind;
        score:          string;         // string number (8.3)
        status:         Manga.Status;
        volumes:        number;
        chapters:       number;
        aired_on:       DateString | null;
        released_on:    DateString | null;
    };
    namespace Manga {
        type Kind          = 'manga' | 'manhwa' | 'manhua' | 'light_novel' | 'novel' | 'one_shot' | 'doujin';
        
        type Status        = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
        
        type Order         = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' | 'volumes' | 'chapters' | 'status' | 'random' | 'ranked_random' | 'ranked_shiki' | 'created_at' | 'created_at_desc';

        type Character = Manga & {
            roles:  string[];
            role:   string;
        };
    }

    type Ranobe = {};

    type Collection = {};

    type Comment = {
        id:                 number;
        user_id:            number;
        commentable_id:     number;
        commentable_type:   string; // Topic
        body:               string;
        created_at:         DateString;
        updated_at:         DateString;
        is_offtopic:        boolean;
    };
    namespace Comment {
        type Type = 'Topic' | 'User' | 'Anime' | 'Manga' | 'Character' | 'Person' | 'Article' | 'Club' | 'ClubPage' | 'Collection' | 'Critique' | 'Review';

        type Extended = Comment & {
            html_body:          string;
            is_summary:         boolean;
            can_be_edited:      boolean;
            user:               User;
        };
    }

    type Calendar = {
        next_episode:       number;
        next_episode_at:    DateString;
        duration:           number | null;
        anime:              Anime;
    }

    type Smiley = {
        bb_code:    string;
        path:       string; // url path to .gif without domain
    };

    type Dialog = {
        target_user:    User;
        message:        Message;
    }

    type Achievement = {
        id:         number;
        neko_id:    string;
        level:      number;
        progress:   number;
        user_id:    number;
        created_at: DateString;
        updated_at: DateString;
    };
}

declare namespace API_V1 {

    /** Forums */

    // GET /api/forums
    type GET_Forums_Item = {
        id:         number,
        position:   number,
        name:       string; // Аниме и манга
        permalink:  string; // animanga
        url:        string; // path without domain
    };
    type GET_Forums_Response = GET_Forums_Item[];


    /** Friends */

    // POST /api/friends/:id
    type POST_Friends_Response = {
        notice: string;
    };

    // DELETE /api/friends/:id
    type DELETE_Friends_Response = POST_Friends_Response;


    /** Genres */

    // GET /api/genres
    type GET_Genres_Response = Shikimori.Genre[];


    /** Mangas */

    // GET /api/mangas
    type GET_Mangas_Params = {
        page?:          number;     // between 1 and 100_000
        limit?:         number;     // between 1 and 50
        order?:         Shikimori.Manga.Order;
        kind?:          Shikimori.Manga.Kind;
        status?:        Shikimori.Manga.Status;
        season?:        string;     // 'summer_2017', '2016', '2014_2016', '199x'
        score?:         number;     // min manga score
        genre?:         string;     // List of genre ids separated by comma
        publisher?:     string;     // List of publisher ids separated by comma
        franchise?:     string;     // List of franchises separated by comma
        censored?:      BooleanString; // Set to false to allow hentai, yaoi and yuri
        mylist?:        Shikimori.UserList;
        ids?:           string;     // List of mangas ids separated by comma
        exclude_ids?:   string;     // List of mangas ids separated by comma
        search?:        string;     // Search phrase to filter mangas by name
    };
    type GET_Mangas_Response = Shikimori.Manga[];


}