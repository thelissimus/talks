export class ResponseSuccess<T, E> implements ServerResponse<T, E> {
	public readonly errors: Array<E> = [];

	constructor(
		public readonly meta: ServerResponseMeta,
		public readonly data: Array<T>
	) {}
}
