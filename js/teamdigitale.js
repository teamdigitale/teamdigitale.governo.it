$(function() {
	// obtain "the monday" of a Date
	function getMonday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
	  var monday = new Date(d.setDate(diff));
	  var options = {year: 'numeric', month: '2-digit', day: '2-digit'};
	  return monday.toLocaleDateString("it", options);
	}

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

	// monday for project-page
	$('#getmonday').text( getMonday(new Date()) );

});

// anchor fix
(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 50,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      /*return this.OFFSET_HEIGHT_PX;*/
	   return document.getElementsByClassName("example").offsetHeight + document.getElementById("page_top").offsetHeight;

    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);
