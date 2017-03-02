import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },

  /* globals $ */
  actions: {
    submitPassword: function(password) {
      $.getJSON("/api/summaries?password=" + password, function(summary) {
        $("#summaryGroup").removeClass("has-error");

        var responses = summary.data.attributes['responses'];

        var summaryHtml = "<b>Responses:</b><br><table border=1 padding=2><tr><th>Code</th><th>Attending</th>" +
          "<th>Entree 1</th><th>Entree 2</th><th>Side</th><th>Hotel</th><th>Shuttle To</th>" +
          "<th>Shuttle From</th></tr>";

        for (var i = 0; i < responses.length; i++) {
          var response = responses[i];

          summaryHtml += "<tr><td>"+response["invitee"]+"</td><td>"+response["guest_names"]+
            "</td><td>"+response["entree1"]+"</td><td>"+response["entree2"]+"</td><td>"+
            response["side"]+"</td><td>"+response["hotel"]+"</td><td>"+response["shuttle_to_time"]+
            "</td><td>"+response["shuttle_from_time"]+"</td></tr>";
        }

        summaryHtml += "</table><br><b>No Response:</b><br>";

        var noResponse = summary.data.attributes['no-response'];

        for (i = 0; i < noResponse.length; i++) {
          summaryHtml += noResponse[i]['invitee'] + "<br>";
        }

        $("#summaryGroup").html(summaryHtml);
      }, function(reason){
        if (reason.errors[0].status === "401") {
          $("#summaryGroup").addClass("has-error");
          $("#helpBlock").show();
        }
      });
    }
  }
});
