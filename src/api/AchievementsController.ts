import Controller from '@@src/Controller.ts';
import type * as Schema from '@@schema/index.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export default class AchievementsController extends Controller implements Schema.v1.Achievements {
    async get(user_id: number) : Promise< Shikimori.Achievement[] > {
        const res = await this.api.request.get<Shikimori.Achievement[]>(`/achievements`, { params: { user_id } });
        return res.data;
    }
}