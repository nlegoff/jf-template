var entries = Joshfire.factory.getDataSource("main");
entries.find(
  {
    limit: 10
  },
  function (err, data) {
    var html = "";
    _.map(data.entries, function (entry, idx) {
      html += "&lt;li&gt;&lt;span class='title'>" + entry.name + "&lt;/span>"
        + "&lt;br/&gt;" + entry.description
        + "&lt;br/&gt;" + entry.datePublished;
      if (entry.image) {
        html += "&lt;span class='thumbnail'&gt;&lt;img src='"
          + entry.image.contentURL
          + "' alt='" + entry.image.name + "' /&gt;"
          + "&lt;/span&gt;";
      }
    });
    document.getElementById('entries').innerHTML = html;
  }
);



