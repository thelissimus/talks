let { Logger } = require("./Logger");

function main()
{
	let logger = new Logger("main", { format: "YYYY-MM-DD HH:mm:ss.SSS ZZ" });
	logger.info("hello");
	logger.error("goodbye");
}

main();
