declare namespace Schema.v1 {
    interface Appears {
        /**
         * @route POST /api/appears
         * @description Mark comments or topics as read
         * @need_auth true
         * @scope comments
         */
        read(ids: string | Shikimori.AppearId[]) : Promise< void >;
    }
}