DB_PATH = data/main.sqlite3
SQL_DIR = data/sql

DEPS_DIR = node_modules
DIST_DIR = dist

default:
	@echo "Usage: make [OPTIONS]"
	@echo
	@echo "OPTIONS:"
	@echo "    build   - Build the project"
	@echo "    clean   - Cleanup the project"
	@echo "    db_up   - Initialize database and populate it with data"
	@echo "    db_down - De-initialize database"

build:
	-@[ -d $(DIST_DIR) ] && rm -rf $(DIST_DIR)
	npm run build

clean:
	rm -rf $(DEPS_DIR) $(DIST_DIR)

$(DB_PATH):
	touch $(DB_PATH)

db_up: $(DB_PATH)
	cat $(SQL_DIR)/up.sql   | sqlite3 $(DB_PATH)
	cat $(SQL_DIR)/seed.sql | sqlite3 $(DB_PATH)

db_down:
	cat $(SQL_DIR)/down.sql | sqlite3 $(DB_PATH)

db_reload: db_down db_up

.PHONY: default build clean db_up db_down db_reload
