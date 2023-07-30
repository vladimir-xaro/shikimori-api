/**
 * Tuple union type as array
 * @example TupleUnion<'a' | 'b'> => ['a', 'b'] | ['b', 'a'];
 */
export type TupleUnion<U extends string, R extends any[] = []> = {
    [S in U]: Exclude<U, S> extends never ? [...R, S] : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

/**
 * Join string union type
 * @example Join<['a', 'b'], ', '> => 'a, b';
 * @example Join<['a', 'b'] | ['b', 'a'], ', '> => 'a, a' | 'a, b' | 'b, a' | 'b ,b';
 */
export type Join<T extends string[], Separator extends string> =
    Join.Tail<T> extends string[]
        ? Join.Recursive<T[0], Join.Tail<T>, Separator>
        : T[0];
declare namespace Join {
    type Tail<T extends string[]> = T extends [T[0], ...infer TailType] ? TailType : never;
    type Recursive<H extends string, T extends string[], Separator extends string> =
        Tail<T> extends [string, ...string[]]
            ? `${H}${Separator}${Recursive<T[0], Tail<T>, Separator>}`
            : `${H}${Separator}${T[0]}`
}