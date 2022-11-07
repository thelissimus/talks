let dayjs = require("dayjs");

class Logger {
	#name;
	#format;
	#output;

	constructor(name, options = {}) {
		this.#name = name;
		this.#format = options.format ?? "YYYY-MM-DD HH:mm:ss.SSS ZZ";
		this.#output = options.output ?? process.stdout;
	}

	#fmt(level, s) {
		return `${dayjs().format(this.#format)} [${this.#name}] [${level.toUpperCase()}]: ${s}\n`;
	}

	trace(s) {
		this.#output.write(this.#fmt("trace", s));
	}

	debug(s) {
		this.#output.write(this.#fmt("debug", s));
	}

	info(s) {
		this.#output.write(this.#fmt("info", s));
	}

	warn(s) {
		this.#output.write(this.#fmt("warn", s));
	}

	error(s) {
		this.#output.write(this.#fmt("error", s));
	}
}

module.exports = { Logger };
