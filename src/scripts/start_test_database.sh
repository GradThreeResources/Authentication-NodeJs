#!/usr/bin/bash
docker run -d -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=mdiaa -e POSTGRES_DB=dubi-test --net="host" -v $(pwd)../database-test:/var/lib/postgresql/data postgres
