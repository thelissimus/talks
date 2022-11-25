export class ResponseMeta implements ServerResponseMeta {
	constructor(
		public readonly status: number,
		public readonly code: string,
		public readonly type: string,
		public readonly message: ServerResponseMessage
	) {}
}
