declare namespace Schema {
    namespace v1 {
        interface Achievements {
            /**
             * @route GET /api/achievements
             * @description List user achievements
             * @need_auth false
             */
            get(user_id: number) : Promise< Shikimori.Achievement[] >
        }
    }
}