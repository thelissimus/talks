export class ResponseMessage implements ServerResponseMessage {
	public readonly params: Record<string, unknown> = {};
	public readonly details: string[] = [];

	constructor(
		public readonly title: string,
		details?: string[],
		params?: Record<string, unknown>
	) {
		this.details = details ?? [];
		this.params = params ?? {};
	}
}
