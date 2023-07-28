import Controller from '@src/Controller.js';

export default class FriendsController extends Controller implements Schema.v1.Friends {

    async create(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.post< ResponseWithNotice >(`/friends/${id}`);
        return res.data;
    }
    
    async add(id: number) : Promise< ResponseWithNotice > {
        return this.create(id);
    }
    
    async destroy(id: number) : Promise< ResponseWithNotice > {
        const res = await this.api.request.delete< ResponseWithNotice >(`/friends/${id}`);
        return res.data;
    }

    async delete(id: number) : Promise< ResponseWithNotice > {
        return this.destroy(id);
    }

}