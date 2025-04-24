set positional-arguments

default:
	@just --list

pc:
	@pre-commit run --all-files

lint *args='':
	@pnpm lint

lint-fix:
	@pnpm lint-fix

docs-build:
	@pnpm docs-build

install:
	@pnpm install

change:
	@pnpm changeset

workspace *args='':
	@pnpm workspace $@

workspace-install:
	@pnpm workspace install

ts-standard *args='':
	@pnpm ts-standard $@

ts-standard-install:
	@just ts-standard install

ts-standard-type-check:
	@just ts-standard type-check

ts-standard-test:
	@just ts-standard test

ts-standard-test-cov:
	@just ts-standard test-cov

ts-standard-build:
	@just ts-standard build

sign-release:
	git fetch
	git switch changeset-release/main
	git reset --hard origin/changeset-release/main
	git reset --soft origin/main
	git commit -am "release"
	git push -f
	git switch -
	git branch -D changeset-release/main
