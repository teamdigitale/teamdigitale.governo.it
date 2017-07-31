$(function() {
	// MENU
	

	// --- menu end

	var teamdigitale_data = {
		forumUrl : 'https://forum.italia.it/',
		forumTag : '.forumIntegration',
	};
    
	function consumeForum($el) {
		var category = $el.data('category') ? $el.data('category')  : ' ';
		var resultlimit = $el.data('limit') ? $el.data('limit') : 5;
		$.ajax({
		   type: 'GET', 
		   url: teamdigitale_data.forumUrl + '/c/' + category + '.json',
		   data: {
		      format: 'json',
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
				$elbody.append('<div class="forumIntegration__title">'+appTitle+'<span class="forumIntegration__count badge">'+item.posts_count+'</span></div>');
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
