import axios from 'axios';

import { API_URL } from './constants.js';

import AuthController from '@@auth/AuthController.js';

import AchievementsController from './api/AchievementsController.js';
import AnimesController from 'api/AnimesController.js';
import AppearsController from './api/AppearsController.js';
import BansController from './api/BansController.js';
import CharactersController from './api/CharactersController.js';
import ClubsController from './api/ClubsController.js';
import CommentsController from './api/CommentsController.js';
import ConstantsController from './api/ConstantsController.js';
import DialogsController from './api/DialogsController.js';
import TopicsController from './api/TopicsController.js';
import UserRatesController from './api/UserRatesController.js';
import FavoritesController from './api/FavoritesController.js';


export default class ShikimoriAPI implements Schema.API {
    authorized:     boolean = false;

    // request
    request!:       import('axios').AxiosInstance;

    // auth
    auth:           Schema.Auth;

    // controllers
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

    constructor(params: Schema.API.Contructor.Params) {
        this.auth           = new AuthController(params);

        this.achievements   = new AchievementsController(this);
        this.animes         = new AnimesController(this);
        this.appears        = new AppearsController(this);
        this.bans           = new BansController(this);
        this.characters     = new CharactersController(this);
        this.clubs          = new ClubsController(this);
        this.comments       = new CommentsController(this);
        this.constants      = new ConstantsController(this);
        this.dialogs        = new DialogsController(this);
        this.favorites      = new FavoritesController(this);

        this.topics         = new TopicsController(this);
        this.userRates      = new UserRatesController(this);

        if (params.access_token) {
            this.updateRequest(params.access_token);
            this.authorized = true;
        }
    }

    async updateRequest(access_token: string) {
        this.request = axios.create({
            headers: {
                'User-Agent':       this.auth.app_name,
                'Authorization':    `Bearer ${this.auth.access_token}`,
            },
            baseURL: API_URL,
        });
        // this.request.interceptors.request.use((config) => {
        //     if (! this.auth.access_token) {
        //         throw new Error('access_token is missing');
        //     }
        //     return config;
        // });
    }
}