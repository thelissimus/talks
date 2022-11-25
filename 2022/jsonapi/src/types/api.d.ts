type ServerResponseMessage = {
	title: string;
	details: string[];
	params: Record<string, unknown>;
};

type ServerResponseMeta = {
	status: number;
	code: string;
	type: string;
	message: ServerResponseMessage;
};

type ServerResponse<T, E> = {
	meta: ServerResponseMeta;
	data: Array<T>;
	errors: Array<E>;
};
