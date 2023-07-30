export interface Stats {
    /**
     * Users having at least 1 completed animes and active during last month
     * @route GET /api/stats/active_users
     */
    index() : Promise< number[] >;
}