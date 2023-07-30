declare namespace Schema.v2 {
    namespace UserIgnore {
        type Response<T extends boolean> = {
            user_id:    `${number}`;
            is_ignored: T;
        };

        namespace Ignore {
            type Response = Schema.v2.UserIgnore.Response< true >;
        }

        namespace Unignore {
            type Response = Schema.v2.UserIgnore.Response< false >;
        }
    }
    interface UserIgnore {
        /**
         * Ignore a user
         * @route POST /api/v2/users/:user_id/ignore
         */
        ignore(user_id: number) : Promise< Schema.v2.UserIgnore.Ignore.Response >;

        /**
         * Unignore a user
         * @route DELETE /api/v2/users/:user_id/ignore
         */
        unignore(user_id: number) : Promise< Schema.v2.UserIgnore.Unignore.Response >;
    }
}