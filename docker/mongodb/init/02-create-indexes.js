db.plugins.createIndex({
  'name': 1
}, {
  name: 'idxName',
  unique: true
});

db.pipelines.createIndex({
  'name': 1
}, {
  name: 'idxName',
  unique: true
});
