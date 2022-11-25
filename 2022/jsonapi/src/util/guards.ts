export function Just<T>(x: Maybe<T>): x is T {
    return x != null;
}

export function Nothing<T>(x: Maybe<T>): x is null | undefined {
    return x == null;
}
