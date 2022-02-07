#!/bin/sh

mongosh -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin \
  --eval "rs.initiate({
  _id: 'dbrs',
  version: 1,
  writeConcernMajorityJournalDefault: false,
  members: [
    {
      _id: 1,
      host: 'database:27017',
      priority: 1
    }
  ]
});"
