﻿define(function(require) {
    'use strict';

    var Page = require('model/page');
    var Route = require('enum/route');
    var DonatePageView = require('view/page/donate/donatePageView');

    var DonatePageRegion = Marionette.Region.extend({
        initialize: function() {
            this.listenTo(Streamus.channels.body.vent, 'rendered', this._onBodyRendered);
        },

        _onBodyRendered: function() {
            var donatePageView = new DonatePageView({
                model: new Page({
                    route: Route.Donate
                })
            });
            donatePageView.render();
        }
    });

    return DonatePageRegion;
});