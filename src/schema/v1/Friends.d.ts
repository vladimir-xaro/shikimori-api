declare namespace Schema.v1 {
    interface Friends {
        /**
         * Create a friend
         * @route POST /api/friends/:id
         * @need_auth true
         * @scope friends
         */
        create(id: number) : Promise< ResponseWithNotice >;

        /**
         * @see create
         * @alias Schema.v1.Friends.create()
         */
        add(id: number) : Promise< ResponseWithNotice >;

        /**
         * Destroy a friend
         * @route DELETE /api/friends/:id
         * @need_auth true
         * @scope friends
         */
        destroy(id: number) : Promise< ResponseWithNotice >;

        /**
         * @see destroy
         * @alias Schema.v1.Friends.destroy()
         */
        delete(id: number) : Promise< ResponseWithNotice >;
    }
}