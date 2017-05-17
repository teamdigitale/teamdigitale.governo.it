$(function() {
	var teamdigitale_data = {
		forumUrl : 'https://forum.developers.italia.it/',
		forumTag : '.forumIntegration',
		forumEndpoints : {
			'latest': 'latest.json',
			'top': 'top.json',
			'default' : 'latest.json'
		}
	};
    
	function consumeForum($el) {
		var endpoint = $el.data('endpoint') ? teamdigitale_data.forumEndpoints[$el.data('endpoint')] : teamdigitale_data.forumEndpoints['default'];
		var category = $el.data('category') ? $el.data('category')  : ' ';
		var resultlimit = $el.data('limit') ? $el.data('limit') : 5;
		$.ajax({
		   type: 'GET', 
		   url: teamdigitale_data.forumUrl + '/' + endpoint,
		   data: {
		      format: 'json',
		      category : category
		   },
		   success: function(data) {
		      var $elbody = $el.find('.forumIntegration__body');
		      var $elrow = $el.find('.forumIntegration__row');
		      var list = data.topic_list.topics;
		      if (list.length>0) {
		      	list = list.slice(0,resultlimit);
		      }
		      $.each( list, function( index, item ){
		      	var appTitle = '<a href="'+teamdigitale_data.forumUrl+'/t/'+item.slug+'">'+item.title+'</a>';
		      	var appDate = new Date(item.last_posted_at);
				$elbody.append('<div class="forumIntegration__title">'+appTitle+'</div>');
				$elbody.append('<div class="forumIntegration__count">'+item.posts_count+'</div>');
				$elbody.append('<div class="forumIntegration__lastpost">'+appDate.toLocaleDateString()+'</div>');
			  });

		   },
		   error: function() {
		      console.log('unable to call the forum');
		      $el.remove();

		   }   
		});
	}

	// Forum anchor
	$(teamdigitale_data.forumTag).each(function( i ) {
  		consumeForum($(this));
	});

});