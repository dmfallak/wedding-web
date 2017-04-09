import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  /* globals $ */
  actions: {
    submitPassword: function(password) {
      $.getJSON("/api/shuttles?password=" + password, function(summary) {
        $("#shuttlesGroup").removeClass("has-error");

        var shuttle_tos = summary['shuttle_tos'];
        var shuttle_froms = summary['shuttle_froms'];

        var shuttleHtml = "<b>Shuttles to Ceremony:</b><br><table border=1 padding=2><tr><th>1:30</th><th>1:54</th>" +
          "<th>2:18</th><th>2:42</th></tr>";

        var maxLen = Math.max(shuttle_tos[0].length,shuttle_tos[1].length,shuttle_tos[2].length,shuttle_tos[3].length);

        var i;
        var j;
        var rowHtml;

        for (i = 0; i < maxLen; i++) {
          rowHtml = "<tr>";
          for (j = 0; j < shuttle_tos.length; j++) {
          	if (shuttle_tos[j].length > i) {
		        rowHtml += "<td>" + shuttle_tos[j][i].data.attributes["guest-names"] + "</td>";
		    } else {
		    	rowHtml += "<td></td>";
		    }
          }
          rowHtml += "</tr>";
          shuttleHtml += rowHtml;
        }

        shuttleHtml += "</table><br><b>Shuttles from Ceremony:</b><br><table border=1 padding=2><tr><th>4:00</th><th>4:24</th>" +
          "<th>4:48</th><th>5:12</th></tr>";

        maxLen = Math.max(shuttle_froms[0].length,shuttle_froms[1].length,shuttle_froms[2].length,shuttle_froms[3].length);
        for (i = 0; i < maxLen; i++) {
          rowHtml = "<tr>";
          for (j = 0; j < shuttle_froms.length; j++) {
          	if (shuttle_froms[j].length > i) {
		        rowHtml += "<td>" + shuttle_froms[j][i].data.attributes["guest-names"] + "</td>";
		    } else {
		    	rowHtml += "<td></td>";
		    }
          }
          rowHtml += "</tr>";
          shuttleHtml += rowHtml;
        }

        shuttleHtml += "</table><br>";

        $("#shuttlesGroup").html(shuttleHtml);
      }, function(reason){
        if (reason.errors[0].status === "401") {
          $("#shuttlesGroup").addClass("has-error");
          $("#helpBlock").show();
        }
      });
    }
  }
});
