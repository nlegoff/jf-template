

var entries = Joshfire.factory.getDataSource("main");
entries.find(
  {
    limit: 10
  },
  function (err, data) {
    var html = "";
        _.map(data.entries, function (entry, idx) {
            console.log()
            html += "<div><h2>" + entry.name + "</h2>"
            html += "<i>" + entry.description + "</i><div>"

            if (entry.thumbnail) {
                html += "<ul>";
                _.map(entry.thumbnail, function (thumb, idx) {
                    html += "<li><table><tr><td><img src='"
                    + thumb.contentURL
                    + "' alt='" + thumb.name + "' /></td>"
                    + "<td><h4>" + thumb.name + "</h4></td></tr></table><li>";
                });
                html += "</ul>";
            }
            html += "</div></div>";
        });

        document.getElementById('entries').innerHTML = html;
  }
);
