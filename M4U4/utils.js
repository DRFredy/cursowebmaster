exports.nameExists = (sessionVar, key) =>
   Boolean(sessionVar.find(function(item) { return item.name == key }));

exports.getItemByName = (sessionVar, key) =>
  sessionVar.find(function(item) { return item.name == key }) || undefined;