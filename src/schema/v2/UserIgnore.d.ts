export namespace UserIgnore {
    type Response<T extends boolean> = {
        user_id:    `${number}`;
        is_ignored: T;
    };

    namespace Ignore {
        type Response = UserIgnore.Response< true >;
    }

    namespace Unignore {
        type Response = UserIgnore.Response< false >;
    }
}

export interface UserIgnore {
    /**
     * Ignore a user
     * @route POST /api/v2/users/:user_id/ignore
     */
    ignore(user_id: number) : Promise< UserIgnore.Ignore.Response >;

    /**
     * Unignore a user
     * @route DELETE /api/v2/users/:user_id/ignore
     */
    unignore(user_id: number) : Promise< UserIgnore.Unignore.Response >;
}