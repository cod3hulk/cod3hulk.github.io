---
layout: post
title:  "How-To: Create postgres dump and import into local docker"
date:   2018-05-22 
categories: postgres docker dump
---
Every now and then I want to test some database migration on my local machine, before rolling out my changes to the staging environment. Create a dump and use it with a local docker postgres is a neat, simple solution.

# Create the dump
```bash
pg_dump --host $HOST --port 5432 --username $USERNAME --format plain --file "$PATH_TO_FILE" --table $TABLE $DB_NAME
```

# Spin up a local docker postgres instance
```bash
docker run -p 5432:5432 --name my-local-postgres -e POSTGRES_PASSWORD=test -d postgres
```

# Import dump into local docker postgres intance
```bash
cat $PATH_TO_FILE | docker exec -i my-local-postgres psql -U postgres -d postgres
```

