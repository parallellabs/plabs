function parallax() {
    if ($("#js-parallax-window").length > 0) {
        var a = $("#js-parallax-background"),
            o = $("#js-parallax-window"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window1").length > 0) {
        var a = $("#js-parallax-background1"),
            o = $("#js-parallax-window1"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window2").length > 0) {
        var a = $("#js-parallax-background2"),
            o = $("#js-parallax-window2"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window3").length > 0) {
        var a = $("#js-parallax-background3"),
            o = $("#js-parallax-window3"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window4").length > 0) {
        var a = $("#js-parallax-background4"),
            o = $("#js-parallax-window4"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window5").length > 0) {
        var a = $("#js-parallax-background5"),
            o = $("#js-parallax-window5"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
    if ($("#js-parallax-window6").length > 0) {
        var a = $("#js-parallax-background6"),
            o = $("#js-parallax-window6"),
            t = $(o).offset().top,
            e = $(window).scrollTop(),
            l = t - e,
            n = ($(a).offset().top, window.innerHeight, .35);
        a.css("top", -(l * n) + "px")
    }
}
$(document).ready(function() {
        function a() {
            e.height(screen.height)
        }
        $(".sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close").on("click touchstart", function(a) {
            $(".sliding-panel-content,.sliding-panel-fade-screen").toggleClass("is-visible"), a.preventDefault()
        }), $(".open-form").on("click", function() {
            $(".main-form").addClass("openForm-model"), $(this).parents("html").addClass("overflow-H"), $(this).parents("body").addClass("overflow-H")
        }), $(".close-form").on("click", function() {
            $(".main-form").removeClass("openForm-model"), $(this).parents("html").removeClass("overflow-H"), $(this).parents("body").removeClass("overflow-H")
        });
        var o = $("#projectBrief");
        o.keyup(function() {
            var a = o.val().length;
            $("#counter");
            $("#counter").html(""), $("#counter").html(a)
        }), $("#apply_Form .group input, #apply_Form .group textarea").on("change", function() {
            "" != $(this).val().length ? $(this).addClass("not-empty") : $(this).removeClass("not-empty")
        });
        var t = $(window),
            e = $(".height-fix");
        /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera) && (e.css({
            top: "auto",
            bottom: 0
        }), t.resize(a), a()), $(".button-floating").click(function() {
            var a = $("#wrapper");
            a.hasClass("button-floating-clicked") || (a.attr("class", "center available"), a.toggleClass("button-floating-clicked-out")), a.toggleClass("button-floating-clicked ")
        }), $(".btn-overlay").on("click", function() {
            $("#wrapper").removeClass("available"), $("#wrapper").removeClass("button-floating-clicked")
        }), $("#budget").ionRangeSlider({
            type: "double",
            grid: !1,
            min: 5e3,
            max: 5e4,
            from: 1e4,
            to: 15e3,
            grid: !1,
            prefix: "$",
            step: 5e3,
            prettify_separator: ","
        }), $("#scene").parallax({
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 40,
            scalarY: 40,
            frictionX: .01,
            frictionY: .015,
            originX: .2,
            originY: .2
        }), $(".inputfile").each(function() {
            var a = $(this),
                o = a.next("label"),
                t = o.html();
            a.on("change", function(a) {
                var e = "";
                this.files && this.files.length > 1 ? e = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : a.target.value && (e = a.target.value.split("\\").pop()), e ? o.find("span").html(e) : o.html(t)
            }), a.on("focus", function() {
                a.addClass("has-focus")
            }).on("blur", function() {
                a.removeClass("has-focus")
            })
        }), $.jribbble.setToken("957e5172d18eca8e1fc96256a7c1d69a7a0e40e1c8c42babeb8f19d51eeab95c"), $.jribbble.teams("parallellabs").shots({
            per_page: 1,
            sort: "recent"
        }).then(function(a) {
            var o = [];
            a.forEach(function(a) {
                o.push('<a target="_blank" href="' + a.html_url + '">'), o.push('<img src="' + a.images.hidpi + '">'), o.push("</a>"), $(".dribbble .left .content h2").html(a.title), $(".dribbble .discription").html(a.description)
            }), $(".shots").html(o.join(""))
        }), ($("#js-parallax-window").length || $("#js-parallax-window1").length || $("#js-parallax-window2").length || $("#js-parallax-window3").length || $("#js-parallax-window4").length || $("#js-parallax-window5").length || $("#js-parallax-window6").length) && parallax()
    }), $(window).scroll(function(a) {
        ($("#js-parallax-window").length || $("#js-parallax-window1").length || $("#js-parallax-window2").length || $("#js-parallax-window3").length || $("#js-parallax-window4").length || $("#js-parallax-window5").length || $("#js-parallax-window6").length) && parallax()
    }),
    function(a) {
        a.mark = {
            jump: function(o) {
                var t = {
                    selector: ".scroll-on-page-link"
                };
                return "string" == typeof o && (t.selector = o), o = a.extend(t, o), a(o.selector).click(function(o) {
                    var t = a(this),
                        e = t.attr("href"),
                        l = 1e3,
                        n = a(e).offset().top;
                    a("html,body").animate({
                        scrollTop: n
                    }, l, "swing"), o.preventDefault()
                })
            }
        }
    }(jQuery), jQuery(function() {
        jQuery.mark.jump()
    }), $(window).on("resize", function() {
        $(".media-card.small .discription").dotdotdot({
            ellipsis: "... ",
            wrap: "word"
        })
    }).resize(), $(window).scroll(function() {
        var a = $(".section").offset().top;
        $(window).scrollTop() >= a ? $("#wrapper").addClass("available") : $("#wrapper").removeClass("available")
    }),
    function(a) {
        a.fn.visible = function(o, t, e) {
            var l = a(this).eq(0),
                n = l.get(0),
                i = a(window),
                r = i.scrollTop(),
                s = r + i.height(),
                p = i.scrollLeft(),
                c = p + i.width(),
                d = l.offset().top,
                f = d + l.height(),
                w = l.offset().left,
                $ = w + l.width(),
                h = o === !0 ? f : d,
                g = o === !0 ? d : f,
                u = o === !0 ? $ : w,
                v = o === !0 ? w : $,
                m = t === !0 ? n.offsetWidth * n.offsetHeight : !0,
                e = e ? e : "both";
            return "both" === e ? !!m && s >= g && h >= r && c >= v && u >= p : "vertical" === e ? !!m && s >= g && h >= r : "horizontal" === e ? !!m && c >= v && u >= p : void 0
        }
    }(jQuery);
var bLazy = new Blazy({
    selector: "video",
    success: function(a) {
        $(window).on("scroll touchmove", function(a) {
            navigator.userAgent.match(/iPhone|iPad|iPod/i) || $("video").each(function(a, o) {
                $(this).visible(!0) ? $(this)[0].play() : $(this)[0].pause()
            })
        })
    }
});
