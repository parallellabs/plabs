/* -- Filter Plugin -- */
(function ($) {
    'use strict';
    $.fn.masonryFilter = function (options) {
        //reload masonry
        var reload = function ($container) {
            setTimeout(function () {
                $container.masonry("layout");
            }, 100);
        };

        var hasValue = function (obj, key, value)
        {
          var comparedValue = obj.filter;

          if(value === "*")
          {
            return true;
          }
          else if(comparedValue.indexOf(value) >= 0)
          {
            return true;
          }
          else{
            return false;
          }
            //return obj.hasOwnProperty(key) && obj[key] === value;
        }

        var process = function ($container) {
            var items = $container.masonry("getAllItems"),
                revealItems = [],
                hideItems = [];


            $.each(items, function(i) {
                var item = items[i];
                var elm = $(item.element);
                  //  shouldShow = options.filter && options.filter.call(elm);

                var shouldShow = hasValue(elm.data(),'filter',options.filter());
                // console.log(options.filter());

                if (shouldShow) {
                    if (item.isHidden) {
                        // -- Have to set this property so masonry does
                        //    not include hidden items when calling "layout"
                        item.isIgnored = false;
                        revealItems.push(item);
                    }
                } else {
                    if (!item.isHidden) {
                        // -- Easier to set this property directy rather than
                        //    using the "ignore" method, as it takes in a DOM
                        //    element rather than the masonry item object.
                        item.isIgnored = true;
                        hideItems.push(item);
                    }
                }
            });

            $container.masonry('hide', hideItems);
            $container.masonry('reveal', revealItems);

            reload($container);
        };

        return this.each(function () {
            var self = $(this);
            process(self);
        });
    };
}(window.jQuery));
