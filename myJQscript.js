$(document).ready(function() {
  var search = "";
     
  $("#searchInput").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#search").click();
    }
  });
  
  $("#clear").click(function() {
    $("#results").empty();
    $("#searchInput").val("");
	$(".top").css("marginTop","20%");
	$(".top").css("max-width", "600px");
	$("#random").css("float", "right");
	$("footer").css("marginTop", "100px");
  });
  
  $("#search").click(function() {
    $("#results").empty();
    search = $("#searchInput").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" +
      search +
      "&limit=10&origin=*";
    $.getJSON(url, viewWiki);
  });
});

function viewWiki(data) {
    var l = data[1].length, i;
    var $results = $("#results");
    if (l === 0 ) {
        $results.append("<h2>No Results Found</h2>");
    }
	else {
		$(".top").css("marginTop","0");
		$(".top").css("max-width", "900px");
		$("footer").css("marginTop", "20px");
		$("#random").css("float", "none");
	}
  
    for (i = 0; i < l; i++) {
    var item =
      "<h2><a href='" +
      data[3][i] +
      "' target='_blank'>" +
      data[1][i] +
      "</a></h2><p>" +
      data[2][i] +
      "</p>";
    $("#results").append(item);
  }
}