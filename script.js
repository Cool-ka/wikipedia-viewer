$(document).ready(function() {

  $('.button').click(function() {
    var val = $('input').val();
    var url = 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + val;

    $.getJSON(url, function(json) {

      var search_term = json[0];
      $('.search_term').html(search_term);
      var terms = json[1];
      var explanation = json[2];
      var link = json[3];
      var html = ''
      
      for (var i=0; i<terms.length; i++) {
        
        html += '<a href='+link[i]+' target=_blank><li class="list-group-item"><span class="term">'+terms[i]+'</span><br><p>'+explanation[i]+'</p></li></a><br>'
        
      }
      
      $('.looping').html(html);
      
    });

  })

});