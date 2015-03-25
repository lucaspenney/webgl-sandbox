var Sandbox = {
	castles: [],
	width: 1200,
	height: 700,
	el: $('.screen'),
	currentRenderer: null,
	setRenderer: function(renderer) {
		this.destroyCurrentRenderer();
		this.currentRenderer = renderer;
		$(this.el).append(renderer.domElement);
	},
	addCastle: function(name, func) {
		Sandbox.castles.push({
			name: name,
			code: func,
		});
		this.renderCastleList();
	},
	destroyCurrentRenderer: function() {
		$(this.el).html('');
		delete this.currentRenderer;
	},
	selectCastle: function(name) {
		var _this = this;
		_.forEach(Sandbox.castles, function(castle) {
			if (castle.name === name) {
				var renderer = castle.code(_this.width, _this.height);
				Sandbox.setRenderer(renderer);
				return false;
			}
		});
	},
	renderCastleList: function() {
		var _this = this;
		$('.castle-list').html("");
		_.forEach(this.castles, function(castle) {
			$('.castle-list').append("<a href='#" + castle.name + "' data-name='" + castle.name + "'>" + castle.name + "</a> ");
		});
		$('.castle-list a').click(function() {
			window.location.reload();
		});
	},
};

setTimeout(function() {
	var name = window.location.hash.replace("#", "");
	_.forEach(Sandbox.castles, function(castle) {
		if (castle.name === name) {
			Sandbox.selectCastle(castle.name);
		}
	})
}, 150);