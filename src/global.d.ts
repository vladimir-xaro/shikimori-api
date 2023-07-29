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

type NumOrNumStr   = `${number}` | number;
type BoolOrNumBool = true | false | 1 | 0;

type DateString         = string;
type DateStringWithUTC  = string;

declare namespace Shikimori {

    /** General Unions */

    type Scope = 'user_rates' | 'messages' | 'comments' | 'topics' | 'content' | 'clubs' |
        'friends' | 'ignores';


    type Rating     = 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
    type UserList   = 'planned' | 'watching' | 'rewatching' | 'completed' | 'on_hold' | 'dropped';

    type LinkedType     = 'Anime' | 'Manga' | 'Ranobe' | 'Person' | 'Character';
    type FavoritesKind  = 'common' | 'seyu' | 'mangaka' | 'producer' | 'person';
    type ExternalType   = 'Anime' | 'Manga' | 'Ranobe';

    type UserRateType = 'Anime' | 'Manga';

    type AppearId = `comment-${number}` | `topic-${number}`;

    type Locale = 'ru' | 'en';

    type Date = {
        day?:   number;
        year?:  number;
        month?: number;
    };

    type Sex = 'male' | 'female' | '' | null


    /** Base */
    type Style = {
        id:             number;
        owner_id:       number;
        owner_type:     Shikimori.Style.OwnerType;
        name:           string;
        css:            string;
        compiled_css:   string | null;
        created_at:     DateStringWithUTC;
        updated_at:     DateStringWithUTC;
    };

    namespace Style {
        type OwnerType = 'User' | 'Club';

        type Preview = {
            id:             null;
            owner_id:       null;
            owner_type:     null;
            name:           string;
            css:            string;
            compiled_css:   string | null;
            created_at:     null;
            updated_at:     null;
        };
    }

    namespace RateStat {
        type Score = {
            name:   number;
            value:  number;
        };
        
        type Status = {
            name:   string;
            value:  number;
        };
    }

    type Publisher = {
        id:     number;
        name:   string;
    };

    type Genre = {
        id:         number;
        name:       string;
        russian:    string;
        kind:       'genre';
        entry_type: 'Anime' | 'Manga' | 'Ranobe';
    };

    type Studio = {
        id:             number;
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
        status:     Shikimori.UserList;
        text:       string | null;
        episodes:   number | null;
        chapters:   number | null;
        volumes:    number | null;
        text_html:  string;
        rewatches:  number;
        created_at: DateString;
        updated_at: DateString;
    };
    namespace UserRate {
        type Extended = Shikimori.UserRate & {
            user_id:        number;
            target_id:      number;
            target_type:    Shikimori.UserRateType;
        };
        type WithUserAndTitle<T extends Lowercase<Shikimori.UserRateType>> = UserRate & {
            user:   User;
            anime:  T extends 'anime' ? Shikimori.Anime : null;
            manga:  T extends 'manga' ? Shikimori.Manga : null;
        };
    }

    type Person = {
        id:         number;
        name:       string;
        russian:    string;
        image:      Shikimori.Image;
        url:        string;
    };
    namespace Person {
        type GrouppedRole = [ string, number ];
        type Role = {
            characters: Shikimori.Character[];
            animes:     Shikimori.Anime[];
        };
        type Work = {
            anime:  Shikimori.Anime | null;
            manga:  Shikimori.Anime | null;
            role:   string;
        };
        type Extended = {
            japanese:           string;
            job_title:          string;
            birth_on:           Shikimori.Date;
            deceased_on:        Shikimori.Date;
            website:            string;
            groupped_roles:     Shikimori.Person.GrouppedRole[];
            roles:              Shikimori.Person.Role[];
            works:              Shikimori.Person.Work[];
            topic_id:           number | null;
            person_favoured:    boolean;
            producer:           boolean;
            producer_favoured:  boolean;
            mangaka:            boolean;
            mangaka_favoured:   boolean;
            seyu:               boolean;
            seyu_favoured:      boolean;
            updated_at:         DateString;
            thread_id:          null;
            birthday:           Shikimori.Date;
        };
    }

    type Character = Shikimori.Person;
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
            seyu:               Shikimori.Person[];
            animes:             Shikimori.Anime.Character[];
            mangas:             Shikimori.Manga.Character[];
        };
    }

    type Franchise = {
        links:      Shikimori.Franchise.Link[];
        nodes:      Shikimori.Franchise.Node[];
        current_id: number; // Anime/Manga/Ranobe id
    };
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

    type ExternalLink = {
        id:             number,
        kind:           string;                 // official_site
        url:            string;                 // full url
        source:         string;
        entry_id:       number;                 // Anime/Manga/Ranobe id
        entry_type:     Shikimori.ExternalType;
        created_at:     DateString | null;
        updated_at:     DateString | null;
        imported_at:    DateString | null;
    };

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

        type Uploaded<UserID extends number = number, ImageID extends number = number, Extension extends string = 'jpg'> = {
            id:         number;
            preview:    `/system/user_images/preview/${UserID}/${ImageID}.${Extension}`; // /system/user_images/preview/23456789/1.jpg
            url:        `/system/user_images/original/${UserID}/${ImageID}.${Extension}`; // /system/user_images/original/23456789/1.jpg
            bbcode:     `[image=${ImageID}]`;
        };
    }

    type Club = {
        id:             number;
        name:           string;
        logo:           Shikimori.Image.Club.Logo;
        is_censored:    boolean;
        join_policy:    string; // free
        comment_policy: string; // free
    };
    namespace Club {
        type Extended = Shikimori.Club & {
            description:        string;
            description_html:   string;
            mangas:             Shikimori.Manga[];
            characters:         Shikimori.Character[];
            thread_id:          number;
            topic_id:           number;
            user_role:          string | null;  // admin
            style_id:           number;
            members:            Shikimori.User[];
            animes:             Shikimori.Anime[];
            images:             Shikimori.Image.Club[];
        }
    }

    type Article = {};
    type ClubPage = {};
    type Critique = {};
    type Contest = {};
    type CosplayGallery = {};
    
    type Review = {
        id:                        number;
        user_id:                   number;
        anime_id:                  number | null;
        manga_id:                  number | null;
        body:                      string;
        opinion:                   Shikimori.Review.Opinion;
        is_written_before_release: boolean;
        created_at:                DateStringWithUTC;
        updated_at:                DateStringWithUTC;
        comments_count:            number;
        cached_votes_up:           number;
        cached_votes_down:         number;
        changed_at:                DateStringWithUTC;
    };
    namespace Review {
        type Opinion = 'positive' | 'neutral' | 'negative';
    }

    type Forum = {
        id:         number,
        position:   number,
        name:       string; // Аниме и манга
        permalink:  Shikimori.Forum.Type;
        url:        string; // path without domain
    };
    namespace Forum {
        type Type = 'all' | 'animanga' | 'site' | 'games' | 'vn' | 'contests' | 'offtopic' |
            'clubs' | 'my_clubs' | 'critiques' | 'news' | 'collections' | 'articles' | 'cosplay';
    }

    type User = {
        id:             number;
        nickname:       string;
        avatar:         string; // full url
        image:          Shikimori.Image.User;
        last_online_at: DateString;
        url:            string; // full url
    };
    namespace User {
        type Extended = {
            name:           string | null;
            sex:            Shikimori.Sex;
            full_years:     number | null;
            last_online:    string;
            website:        '';
            location:       null;
            banned:         boolean;
            about:          string;
            about_html:     string;
            common_info:    [ string, string ];
            show_comments:  boolean;
            in_friends:     boolean;
            is_ignored:     boolean;
            stats:          Shikimori.User.Extended.Stats;
            style_id:       number;
        };
        namespace Extended {
            type Stats = {
                statuses:       Shikimori.User.Extended.Stats.Statuses;
                full_statuses:  Shikimori.User.Extended.Stats.FullStatuses;
                scores:         Shikimori.User.Extended.Stats.Scores;
                types:          Shikimori.User.Extended.Stats.Types;
                ratings:        Shikimori.User.Extended.Stats.Ratings;
                'has_anime?':   boolean;
                'has_manga?':   boolean;
                genres:         []; // alway empty
                studios:        []; // alway empty
                publishers:     []; // alway empty
                
                /** length <= 26 */
                activity:       Shikimori.User.Extended.Stats.Activity.Item[];
            };

            namespace Stats {
                namespace Statuses {
                    type Item = {
                        id:         number;
                        grouped_id: string;
                        name:       string;
                        size:       number;
                        type:       'Anime' | 'Manga';
                    };
                }
                type Statuses = {
                    anime:  Shikimori.User.Extended.Stats.Statuses.Item[];
                    manga:  Shikimori.User.Extended.Stats.Statuses.Item[];
                };
                type FullStatuses = {
                    anime:  Shikimori.User.Extended.Stats.Statuses.Item[];
                    manga:  Shikimori.User.Extended.Stats.Statuses.Item[];
                };
                type Scores = {
                    anime:  Shikimori.RateStat.Status[];
                    manga:  Shikimori.RateStat.Status[];
                }
                type Types = {
                    anime:  Shikimori.RateStat.Status[];    // { name: 'Сериал'; value: number }[]
                    manga:  Shikimori.RateStat.Status[];    // { name: 'Манга' | 'Ранобэ'; value: number }[]
                };
                type Ratings = {
                    anime:  Shikimori.RateStat.Status[];    // { name: 'PG-13'; value: number }[]
                };
                namespace Activity {
                    type Item = {
                        name:   [ number, number ];
                        value:  number;
                    };
                }
            }
        }

        type Info = User & {
            name:       string | null,
            sex:        Shikimori.Sex,
            website:    string | null,
            birth_on:   Shikimori.Date | null,
            full_years: number | null,
            locale:     Shikimori.Locale;
        };

        namespace Favourites {
            type Item = {
                id:         number;
                name:       string;
                russian:    string;
                image:      string; // url without origin
                url:        null;   // always null ?
            };
        }
        type Favourites = {
            animes:     Shikimori.User.Favourites.Item[];
            mangas:     Shikimori.User.Favourites.Item[];
            ranobe:     Shikimori.User.Favourites.Item[];
            characters: Shikimori.User.Favourites.Item[];
            people:     Shikimori.User.Favourites.Item[];
            mangakas:   Shikimori.User.Favourites.Item[];
            seyu:       Shikimori.User.Favourites.Item[];
            producers:  Shikimori.User.Favourites.Item[];
        };

        type History = {
            id:             number;
            created_at:     DateStringWithUTC;
            description:    string;
            target:         Anime | Manga | null;
        };
    }

    type Ban = {
        id:                 number;
        user_id:            number;
        comment:            Shikimori.Comment;
        moderator_id:       number;
        
        /** moderator comment */
        reason:             string;
        
        created_at:         DateString;
        duration_minutes:   number;
        user:               Shikimori.User;
        moderator:          Shikimori.User;
    }

    type Message<T extends keyof Shikimori.Message.Linked.Map | null = null> = {
        id:             number;
        kind:           string; // Private
        read:           boolean;
        body:           string;
        html_body:      string;
        created_at:     DateString;
        linked_id:      T extends keyof Shikimori.Message.Linked.Map ? number : 0;
        linked_type:    T extends keyof Shikimori.Message.Linked.Map ? T : null;
        linked:         T extends keyof Shikimori.Message.Linked.Map ? Shikimori.Message.Linked.Map[T] : null;
    };
    namespace Message {
        namespace Linked {
            type Map = Shikimori.Topic.Linked.Map & {
                'Comment': Shikimori.Message.Linked.Entity.Comment;
                'Version': Shikimori.Message.Linked.Entity.Version;
            };

            namespace Entity {
                type Comment = {
                    id:         number;
                    type:       'Comment'
                    topic_url:  string; // full url
                    thread_id:  number;
                    topic_id:   number;
                };
                type Version = {
                    id:     number;
                    type:   'Version';
                }
            }

            type Type = Shikimori.Topic.Linked.Type | 'Comment' | 'Version';
        }
        type Extended<T extends keyof Shikimori.Message.Linked.Map | null = null> = Shikimori.Message<T> & {
            from:   Shikimori.User;
            to:     Shikimori.User;
        }

        type Type = 'inbox' | 'private' | 'sent' | 'news' | 'notifications';

    }

    type Roles = {
        roles:          string[];
        roles_russian:  string[];
        character:      Shikimori.Character | null;
        person:         Shikimori.Person | null;
    };

    type Related = {
        relation:           string;
        relation_russian:   string;
        anime:              Shikimori.Anime | null;
        manga:              Shikimori.Manga | null;
    };

    type Topic<T extends keyof Shikimori.Topic.Linked.Map | undefined = undefined> = {
        id:                     number;
        topic_title:            string;
        body:                   string;
        html_body:              string;
        html_footer:            string;
        created_at:             DateString;
        comments_count:         number;
        forum:                  Shikimori.Forum;
        user:                   Shikimori.User;
        type:                   Shikimori.Topic.Type;
        linked_id:              T extends keyof Shikimori.Topic.Linked.Map ? number : null;
        
        /** default: `Anime` */
        linked_type:            T extends keyof Shikimori.Topic.Linked.Map ? T : 'Anime';
        linked:                 T extends keyof Shikimori.Topic.Linked.Map ? Shikimori.Topic.Linked.Map[T] : null;
        viewed:                 boolean;
        last_comment_viewed:    true | null;    // null
        event:                  string | null;  // episode, anons, event, ...
        episode:                number | null;
    };
    namespace Topic {
        namespace Linked {
            type Type = 'Anime' | 'Manga' | 'Ranobe' | 'Character' | 'Person' | 'Club' |
                'ClubPage' | 'Critique' | 'Review' | 'Contest' | 'CosplayGallery' | 'Collection' |
                'Article';

            type Map = {
                'Anime':            Shikimori.Anime;
                'Manga':            Shikimori.Manga;
                'Ranobe':           Shikimori.Ranobe;
                'Character':        Shikimori.Character;
                'Person':           Shikimori.Person;
                'Club':             Shikimori.Club;
                'ClubPage':         Shikimori.ClubPage;
                'Critique':         Shikimori.Critique;
                'Review':           Shikimori.Review;
                'Contest':          Shikimori.Contest;
                'CosplayGallery':   Shikimori.CosplayGallery;
                'Collection':       Shikimori.Collection;
                'Article':          Shikimori.Article;
            };
        }

        type Linked = Shikimori.Anime | Shikimori.Manga | Shikimori.Ranobe | Shikimori.Character |
            Shikimori.Person | Shikimori.Club | Shikimori.ClubPage | Shikimori.Critique |
            Shikimori.Review | Shikimori.Contest | Shikimori.CosplayGallery | Shikimori.Collection |
            Shikimori.Article;

        type Type = 'Topic' | 'Topics::ClubUserTopic' | 'Topics::EntryTopic' |
            'Topics::EntryTopics::AnimeTopic' | 'Topics::EntryTopics::ArticleTopic' |
            'Topics::EntryTopics::CharacterTopic' | 'Topics::EntryTopics::ClubPageTopic' |
            'Topics::EntryTopics::ClubTopic' | 'Topics::EntryTopics::CollectionTopic' |
            'Topics::EntryTopics::ContestTopic' | 'Topics::EntryTopics::CosplayGalleryTopic' |
            'Topics::EntryTopics::MangaTopic' | 'Topics::EntryTopics::PersonTopic' |
            'Topics::EntryTopics::RanobeTopic' | 'Topics::EntryTopics::CritiqueTopic' |
            'Topics::EntryTopics::ReviewTopic' | 'Topics::NewsTopic' |
            'Topics::NewsTopics::ContestStatusTopic';
    }

    type Anime = {
        id:             number;
        name:           string;
        russian:        string;
        image:          Shikimori.Image;
        url:            string;         // path without domain
        kind:           Shikimori.Anime.Kind;
        score:          string;         // string number (8.3)
        status:         Shikimori.Anime.Status;
        episodes:       number;
        episodes_aired: number;
        aired_on:       DateString | null;
        released_on:    DateString | null;
    };
    namespace Anime {
        namespace Kind {
            type Extended = Shikimori.Anime.Kind | 'tv_13' | 'tv_24' | 'tv_48';
        }

        type Kind = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music';
        
        /**
         * `S` – less than 10 minutes
         * 
         * `D` – less than 30 minutes
         * 
         * `F` – more than 30 minutes
         */
        type Duration = 'S' | 'D' | 'F';
        
        type Status = 'anons' | 'ongoing' | 'released';

        type TopicKind = Shikimori.Anime.Status | 'episode';

        type Order = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' |
            'episodes' | 'status' | 'random' | 'created_at' | 'created_at_desc';

        type Extended = Shikimori.Anime & {
            rating:                 Shikimori.Rating;
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
            rates_scores_stats:     Shikimori.RateStat.Score[];
            rates_statuses_stats:   Shikimori.RateStat.Status[];
            updated_at:             DateString | null;
            next_episode_at:        DateString | null;
            fansubbers:             string[];
            fandubbers:             string[];
            licensors:              string[];
            genres:                 Shikimori.Genre[];
            studios:                Shikimori.Studio[];
            videos:                 Shikimori.Video[];
            screenshots:            Shikimori.Image.Screenshot[];
            user_rate:              Shikimori.UserRate | null;
        };

        type Character = Shikimori.Anime & {
            roles:  string[];
            role:   string;
        };
    }

    type Manga = {
        id:             number;
        name:           string;
        russian:        string;
        image:          Shikimori.Image;
        url:            string;         // path without domain
        kind:           Shikimori.Manga.Kind;
        score:          `${number}`;    // string number (8.3)
        status:         Shikimori.Manga.Status;
        volumes:        number;
        chapters:       number;
        aired_on:       DateString | null;
        released_on:    DateString | null;
    };
    namespace Manga {
        type Kind = 'manga' | 'manhwa' | 'manhua' | 'light_novel' | 'novel' | 'one_shot' | 'doujin';
        
        type Status = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
        
        type Order = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' |
            'volumes' | 'chapters' | 'status' | 'random' | 'created_at' | 'created_at_desc';

        type Character = Shikimori.Manga & {
            roles:  string[];
            role:   string;
        };

        type Extended = Shikimori.Manga & {
            english:                string[] | [ null ];
            japanese:               string[] | [ null ];
            synonyms:               string[];
            license_name_ru:        string | null;
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
            rates_scores_stats:     Shikimori.RateStat.Score[];
            rates_statuses_stats:   Shikimori.RateStat.Status[];
            licensors:              string[];
            genres:                 Shikimori.Genre[];
            publishers:             Shikimori.Publisher[];
            user_rate:              Shikimori.UserRate | null;
        };
    }

    type Ranobe = Manga & {
        kind: 'light_novel';
    };
    // type Ranobe = Manga &{
    //     id:             number;
    //     name:           string;
    //     russian:        string;
    //     image:          Shikimori.Image;
    //     url:            string;         // path without domain
    //     kind:           'light_novel';
    //     score:          `${number}`;    // string number (8.3)
    //     status:         Shikimori.Ranobe.Status;
    //     volumes:        number;
    //     chapters:       number;
    //     aired_on:       DateString | null;
    //     released_on:    DateString | null;
    // };
    namespace Ranobe {
        type Status = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';

        type Order  = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' |
            'volumes' | 'chapters' | 'status' | 'random' | 'created_at' | 'created_at_desc';

        type Extended = Shikimori.Ranobe & {
            english:                string[] | [ null ];
            japanese:               string[] | [ null ];
            synonyms:               string[];
            license_name_ru:        string | null;
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
            rates_scores_stats:     Shikimori.RateStat.Score[];
            rates_statuses_stats:   Shikimori.RateStat.Status[];
            licensors:              string[];
            genres:                 Shikimori.Genre[];
            publishers:             Shikimori.Publisher[];
            user_rate:              Shikimori.UserRate | null;
        };
    }

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
        type Type = 'Topic' | 'User' | 'Anime' | 'Manga' | 'Character' | 'Person' | 'Article' |
            'Club' | 'ClubPage' | 'Collection' | 'Critique' | 'Review';

        type Extended = Shikimori.Comment & {
            html_body:          string;
            is_summary:         boolean;
            can_be_edited:      boolean;
            user:               Shikimori.User;
        };
    }

    type Calendar = {
        next_episode:       number;
        next_episode_at:    DateString;
        duration:           number | null;
        anime:              Shikimori.Anime;
    }

    type Smiley = {
        bb_code:    string;
        /** url path to .gif without domain */
        path:       string;
    };

    type Dialog = {
        target_user:    Shikimori.User;
        message:        Shikimori.Message;
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