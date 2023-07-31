import type * as Schema from '@@schema/index.d.ts';
import { API_URL } from './constants.ts';

import axios, { type AxiosInstance } from 'axios';

import AuthController from '@@controllers/AuthController.ts';

// controllers/api
import AbuseRequestsController from '@@controllers/api/AbuseRequestsController.ts';
import AchievementsController from '@@controllers/api/AchievementsController.ts';
import AnimesController from '@@controllers/api/AnimesController.ts';
import AppearsController from '@@controllers/api/AppearsController.ts';
import BansController from '@@controllers/api/BansController.ts';
import CalendarController from '@@controllers/api/CalendarController.ts';
import CharactersController from '@@controllers/api/CharactersController.ts';
import ClubsController from '@@controllers/api/ClubsController.ts';
import CommentsController from '@@controllers/api/CommentsController.ts';
import ConstantsController from '@@controllers/api/ConstantsController.ts';
import DialogsController from '@@controllers/api/DialogsController.ts';
import EpisodeNotificationsController from '@@controllers/api/EpisodeNotificationsController.ts';
import FavoritesController from '@@controllers/api/FavoritesController.ts';
import ForumsController from '@@controllers/api/ForumsController.ts';
import FriendsController from '@@controllers/api/FriendsController.ts';
import GenresController from '@@controllers/api/GenresController.ts';
import MangasController from '@@controllers/api/MangasController.ts';
import MessagesController from '@@controllers/api/MessagesController.ts';
import PeopleController from '@@controllers/api/PeopleController.ts';
import PublishersController from '@@controllers/api/PublishersController.ts';
import RanobeController from '@@controllers/api/RanobeController.ts';
import ReviewsController from '@@controllers/api/ReviewsController.ts';
import StatsController from '@@controllers/api/StatsController.ts';
import StudiosController from '@@controllers/api/StudiosController.ts';
import StylesController from '@@controllers/api/StylesController.ts';
import TopicIgnoreController from '@@controllers/api/TopicIgnoreController.ts';
import TopicsController from '@@controllers/api/TopicsController.ts';
import UserIgnoreController from '@@controllers/api/UserIgnoreController.ts';
import UserImagesController from '@@controllers/api/UserImagesController.ts';
import UserRatesController from '@@controllers/api/UserRatesController.ts';
import UsersController from '@@controllers/api/UsersController.ts';
import VideosController from '@@controllers/api/VideosController.ts';

export default class ShikimoriAPI implements Schema.API {
    authorized:             boolean = false;

    // axios instance
    request!:               AxiosInstance;

    // controllers/auth
    auth:                   Schema.Auth;

    // controllers/api/*
    abuseRequests:          Schema.Controllers.HasApi & Schema.v2.AbuseRequests;
    achievements:           Schema.Controllers.HasApi & Schema.v1.Achievements;
    animes:                 Schema.Controllers.HasApi & Schema.v1.Animes;
    appears:                Schema.Controllers.HasApi & Schema.v1.Appears;
    bans:                   Schema.Controllers.HasApi & Schema.v1.Bans;
    calendar:               Schema.Controllers.HasApi & Schema.v1.Calendar;
    characters:             Schema.Controllers.HasApi & Schema.v1.Characters;
    clubs:                  Schema.Controllers.HasApi & Schema.v1.Clubs;
    comments:               Schema.Controllers.HasApi & Schema.v1.Comments;
    constants:              Schema.Controllers.HasApi & Schema.v1.Constants;
    dialogs:                Schema.Controllers.HasApi & Schema.v1.Dialogs;
    episodeNotifications:   Schema.Controllers.HasApi & Schema.v2.EpisodeNotifications;
    favorites:              Schema.Controllers.HasApi & Schema.v1.Favorites;
    forums:                 Schema.Controllers.HasApi & Schema.v1.Forums;
    friends:                Schema.Controllers.HasApi & Schema.v1.Friends;
    genres:                 Schema.Controllers.HasApi & Schema.v1.Genres;
    mangas:                 Schema.Controllers.HasApi & Schema.v1.Mangas;
    messages:               Schema.Controllers.HasApi & Schema.v1.Messages;
    people:                 Schema.Controllers.HasApi & Schema.v1.People;
    publishers:             Schema.Controllers.HasApi & Schema.v1.Publishers;
    ranobe:                 Schema.Controllers.HasApi & Schema.v1.Ranobe;
    reviews:                Schema.Controllers.HasApi & Schema.v1.Reviews;
    stats:                  Schema.Controllers.HasApi & Schema.v1.Stats;
    studios:                Schema.Controllers.HasApi & Schema.v1.Studios;
    styles:                 Schema.Controllers.HasApi & Schema.v1.Styles;
    topicIgnore:            Schema.Controllers.HasApi & Schema.v2.TopicIgnore;
    topics:                 Schema.Controllers.HasApi & Schema.v1.Topics & Schema.v2.Topics;
    userIgnore:             Schema.Controllers.HasApi & Schema.v2.UserIgnore;
    userImages:             Schema.Controllers.HasApi & Schema.v1.UserImages;
    userRates:              Schema.Controllers.HasApi & Schema.v1.UserRates & Schema.v2.UserRates;
    users:                  Schema.Controllers.HasApi & Schema.v1.Users;
    videos:                 Schema.Controllers.HasApi & Schema.v1.Videos;

    constructor(params: Schema.API.Contructor.Params) {
        this.auth                   = new AuthController(params);

        this.abuseRequests          = new AbuseRequestsController(this);
        this.achievements           = new AchievementsController(this);
        this.animes                 = new AnimesController(this);
        this.appears                = new AppearsController(this);
        this.bans                   = new BansController(this);
        this.calendar               = new CalendarController(this);
        this.characters             = new CharactersController(this);
        this.clubs                  = new ClubsController(this);
        this.comments               = new CommentsController(this);
        this.constants              = new ConstantsController(this);
        this.dialogs                = new DialogsController(this);
        this.episodeNotifications   = new EpisodeNotificationsController(this);
        this.favorites              = new FavoritesController(this);
        this.forums                 = new ForumsController(this);
        this.friends                = new FriendsController(this);
        this.genres                 = new GenresController(this);
        this.mangas                 = new MangasController(this);
        this.messages               = new MessagesController(this);
        this.people                 = new PeopleController(this);
        this.publishers             = new PublishersController(this);
        this.ranobe                 = new RanobeController(this);
        this.reviews                = new ReviewsController(this);
        this.stats                  = new StatsController(this);
        this.studios                = new StudiosController(this);
        this.styles                 = new StylesController(this);
        this.topicIgnore            = new TopicIgnoreController(this);
        this.topics                 = new TopicsController(this);
        this.userIgnore             = new UserIgnoreController(this);
        this.userImages             = new UserImagesController(this);
        this.userRates              = new UserRatesController(this);
        this.users                  = new UsersController(this);
        this.videos                 = new VideosController(this);

        if (params.access_token) {
            this.updateRequest();
            this.authorized = true;
        }
    }

    async updateRequest() {
        this.request = this.auth.getApiRequestInstance();
    }
}