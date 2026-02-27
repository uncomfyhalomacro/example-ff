run-backend:
	cd backend && npm run serve
run-frontend:
	cd frontend && npm run dev

[arg('flag', pattern='--write|--help')]
format-backend flag='--help':
	cd backend && biome format {{flag}}

[arg('flag', pattern='--write|--help')]
format-frontend flag='--help':
	cd frontend && biome format {{flag}}

[arg('flag', pattern='--write|--help')]
format flag='--help':
	#!/bin/bash

	[[ "--help" == "{{flag}}" ]] && biome --help && exit 0
	just format-frontend {{flag}}
	just format-backend {{flag}}
