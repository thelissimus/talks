export class ResponseFail<T, E> implements ServerResponse<T, E> {
	public readonly data: Array<T> = [];

	constructor(
		public readonly meta: ServerResponseMeta,
		public readonly errors: Array<E>
	) {}
}
