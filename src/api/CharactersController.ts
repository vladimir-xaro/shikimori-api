import Controller from '@src/Controller.js';

export default class CharactersController extends Controller implements Schema.v1.Characters {

    async get(id: number) : Promise< Shikimori.Character.Extended > {
        const res = await this.api.request.get< Shikimori.Character.Extended >(`/characters/${id}`);
        return res.data;
    }

    async search(params: Schema.v1.Characters.Search.Params) : Promise< Shikimori.Character[] > {
        const res = await this.api.request.get< Shikimori.Character[] >(`/characters/search`, { params });
        return res.data;
    }

}