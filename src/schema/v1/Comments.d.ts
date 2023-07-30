import type { BoolOrNumBool, ResponseWithNotice } from '@@types/general.d.ts';
import type { Shikimori } from '@@types/Shikimori.d.ts';

export namespace Comments {
    namespace Index {
        type Params = {
            commentable_id:     number;
            commentable_type:   'Topic' | 'User';
            page?:              number; // between 1 and 100_000
            limit?:             number; // between 1 and 30
            desc?:              1 | 0;
        };
    }

    namespace Create {
        namespace Params {
            type Comment = {
                body:               string;
                commentable_id:     number;
                commentable_type:   Shikimori.Comment.Type;
                is_offtopic:        BoolOrNumBool;
            };
        }
        type Params = {
            comment:    Comments.Create.Params.Comment;
            frontend:   BoolOrNumBool;
            broadcast:  BoolOrNumBool;
        };
    }

    namespace Update {
        namespace Params {
            type Comments = {
                body: string;
            };
        }
        type Params = {
            comments:   Comments.Update.Params.Comments;
            frontend:   BoolOrNumBool;
        };
    }
}

export interface Comments {
    /**
     * List comments
     * @route GET /api/comments
     */
    index(params: Comments.Index.Params) : Promise< Shikimori.Comment.Extended[] >;

    /**
     * Show a comment
     * @route GET /api/comments/:id
     */
    get(id: number) : Promise< Shikimori.Comment.Extended >;

    /**
     * Create a comment
     * @route POST /api/comments
     * @scope comments
     */
    create(params: Comments.Create.Params) : Promise< Shikimori.Comment.Extended >;

    /**
     * Update a comment
     * @description Use `/api/v2/abuse_requests` to change `is_offtopic` field.
     * @route PATCH /api/comments/:id
     * @route PUT /api/comments/:id
     * @scope comments
     */
    update(id: number, params: Comments.Update.Params): Promise< Shikimori.Comment.Extended >;

    /**
     * Destroy a comment
     * @route DELETE /api/comments/:id
     * @scope comments
     */
    delete(id: number) : Promise< ResponseWithNotice >;
}