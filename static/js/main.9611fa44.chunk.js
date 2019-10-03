(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n,r=t(0),o=t.n(r),l=t(5),i=t.n(l),c=(t(15),t(6)),s=t(8),m=t(7),u=t(2),h=t(3),d=t(9),f=t(1),b=t.n(f),v=(t(16),function(e){function a(){var e;Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).currentId=null,e.currentTab=null,e.tabContainerHeight=70;var t=Object(u.a)(e);return b()(".nav-bar-tab").click((function(e){t.onTabClick(e,b()(this))})),b()(window).scroll((function(){e.onScroll()})),b()(window).resize((function(){e.onResize()})),e}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("React-fragment",null,o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),o.a.createElement("section",{className:"nav-bar-tabs",id:"home"},o.a.createElement("h1",null,"Dakota McCombs"),o.a.createElement("h2",null,"-Purpose Driven Web Developer-"),o.a.createElement("div",{className:"nav-bar-tabs-container"},o.a.createElement("span",{className:"nav-bar-tab-slider"}),o.a.createElement("a",{onClick:function(){return e.setSliderCss()},className:"nav-bar-tab",href:"#tab-Contact"},"Contact"),o.a.createElement("a",{onClick:function(){return e.setSliderCss()},className:"nav-bar-tab",href:"#tab-Resume"},"Resume"),o.a.createElement("a",{onClick:function(){return e.setSliderCss()},className:"nav-bar-tab",href:"#tab-Projects"},"Projects"),o.a.createElement("a",{onClick:function(){return e.setSliderCss()},className:"nav-bar-tab",href:"#tab-Music"},"Music"),o.a.createElement("a",{onClick:function(){return e.setSliderCss()},className:"nav-bar-tab",href:"#tab-Other"},"Other"))),o.a.createElement("main",{className:"nav-main"},o.a.createElement("section",{className:"nav-slide",id:"tab-Contact"},o.a.createElement("h1",null,"Contact"),o.a.createElement("h2",null,"Here are all my contact links. Gmail is preferred. Hit me up, yo."),o.a.createElement("div",{className:"link-container"},o.a.createElement("a",{href:"https://www.facebook.com/dakota.mccombs.7",className:"fa fa-facebook"}," "),o.a.createElement("a",{href:"https://www.linkedin.com/in/dakota-mccombs-97a27210b",className:"fa fa-linkedin"}," "),o.a.createElement("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=d82mccombs@gmail.com",className:"fa fa-google-plus"}," "),o.a.createElement("a",{href:"https://www.snapchat.com/add/koty_theshizz",className:"fa fa-snapchat"}," ")),o.a.createElement("br",null),o.a.createElement("a",{onClick:function(){return e.hideSlider()},className:"home_link",href:"#home"},"Home")),o.a.createElement("section",{className:"nav-slide",id:"tab-Resume"},o.a.createElement("h1",null,"Resume"),o.a.createElement("h2",null,"I've worked a lot in my young life. Feel free to reach out with job inquiries."),o.a.createElement("a",{href:"https://drive.google.com/uc?authuser=0&id=19SeVV3DgLVxhzuPIYnUJD4MZPm9pZJEo&export=download",className:"resumelink"},"Download my resume"),o.a.createElement("br",null),o.a.createElement("a",{onClick:function(){return e.hideSlider()},className:"home_link",href:"#home"},"Home")),o.a.createElement("section",{className:"nav-slide",id:"tab-Projects"},o.a.createElement("h1",null,"Projects"),o.a.createElement("h2",null,"I'm working on getting every project added to my GitHub.",o.a.createElement("ul",null,o.a.createElement("li",null,"HotMouse - Program that automates clicking on screen positions with keystrokes instead. Up to 9,223,372,036,854,775,807 clicks per key, baby!"),o.a.createElement("li",null,"Demigod - 2d platformer and RPG game. Gain the powers of every Greek god and learn about mythology."),o.a.createElement("li",null,"EduDB - Compilation of free educational materials that I've used, in a postgreSQL database."),o.a.createElement("li",null,"PartFind - Web utility for manufacturers to sell their parts that didn't meet spec. Other companies with lower specs save, and manufacturers profit."))),o.a.createElement("div",{className:"link-container"},o.a.createElement("a",{href:"https://github.com/d82mc",className:"fa fa-github"}," ")),o.a.createElement("br",null),o.a.createElement("a",{onClick:function(){return e.homeLink()},className:"home_link",href:"#home"},"Home")),o.a.createElement("section",{className:"nav-slide",id:"tab-Music"},o.a.createElement("h1",null,"Music"),o.a.createElement("h2",null,"I'm a pianist, guitarist, drummer, DJ, and rapper, among other things. My favorite music is organized into playlists on my Youtube channel. There's not much of my work on Soundcloud, but feel free to check it out. "),o.a.createElement("div",{className:"mlink-container"},o.a.createElement("a",{href:"https://www.youtube.com/channel/UCRYocrolIhi7DD8ZFcnD9TQ",className:"fa fa-youtube"}," "),o.a.createElement("a",{href:"https://soundcloud.com/690152496",className:"fa fa-soundcloud"}," ")),o.a.createElement("br",null),o.a.createElement("a",{onClick:function(){return e.hideSlider()},className:"home_link",href:"#home"},"Home")),o.a.createElement("section",{className:"nav-slide",id:"tab-Other"},o.a.createElement("h1",null,"Other"),o.a.createElement("h2",null,"I haven't put anything here yet."),o.a.createElement("a",{onClick:function(){return e.hideSlider()},className:"home_link",href:"#home"},"Home"))))}}]),Object(h.a)(a,[{key:"onTabClick",value:function(e,a){e.preventDefault();var t=b()(a.attr("href")).offset().top-this.tabContainerHeight+1;b()("html, body").animate({scrollTop:t},600)}},{key:"onScroll",value:function(){this.checkTabContainerPosition()}},{key:"onResize",value:function(){n&&(window.location.href=n,this.setSliderCss())}},{key:"checkTabContainerPosition",value:function(){n=window.location.href;var e=b()(".nav-bar-tabs").offset().top+b()(".nav-bar-tabs").height()-this.tabContainerHeight;b()(window).scrollTop()>e?b()(".nav-bar-tabs-container").addClass("nav-bar-tabs-container--top"):b()(".nav-bar-tabs-container").removeClass("nav-bar-tabs-container--top")}},{key:"findCurrentTabSelector",value:function(e){n=this.currentId;var a=this.currentId,t=this.currentTab,r=this;b()(".nav-bar-tab").each((function(){var e=b()(this).attr("href"),n=b()(e).offset().top-r.tabContainerHeight,o=b()(e).offset().top+b()(e).height()-r.tabContainerHeight;b()(window).scrollTop()>n&&b()(window).scrollTop()<o&&(a=e,t=b()(this))})),this.currentId===a&&null!==this.currentId||(this.currentId=a,this.currentTab=t,this.currentId!==window.location.href&&this.setSliderCss())}},{key:"setSliderCss",value:function(){var e=0,a=0;this.currentTab&&(e=this.currentTab.css("width"),a=this.currentTab.offset().left),b()(".nav-bar-tab-slider").css("width",e),b()(".nav-bar-tab-slider").css("left",a)}},{key:"homeLink",value:function(){this.hideSlider(),n="#home"}},{key:"hideSlider",value:function(){b()(".nav-bar-tab-slider").css("width",0)}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.9611fa44.chunk.js.map