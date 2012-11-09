

var entries = Joshfire.factory.getDataSource("main");
entries.find(
  {
    limit: 10
  },
  function (err, data) {
    var html = "";
    _.map(data.entries, function (feed, idx) {
         html += "<span class='title'>" + feed.name + "</span><div>"
        _.map(feed.entries, function (entry, idx) {
            html += "<span class='title'>" + entry.name + "</span>"
            + "<br/>" + entry.description

            if (entry.thumbnail) {
                _.map(entry.thumbnail, function (thumb, idx) {
                    html += "<span class='thumbnail'>" + thumb.name + " <br /><img src='"
                    + thumb.contentURL
                    + "' alt='" + thumb.name + "' />"
                    + "</span><br />";
                });
            }
        });
        html += "</div>";
    });
    document.getElementById('entries').innerHTML = html;
  }
);
