(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(t,o,e){"use strict";e(44),e(33),e(39),e(20),e(62),e(34),e(63);var n=e(25),r=e(40);function l(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var c={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(r.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},_=c,v=e(32),component=Object(v.a)(_,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"site_header__header_two_wrap"},[t._m(0),t._v(" "),o("header",{staticClass:"main-nav__header_two clearfix"},[o("nav",{class:"header-navigation stricky clearfix ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[o("div",{staticClass:"container"},[o("div",{staticClass:"main-nav__header_two_content"},[o("div",{staticClass:"mobile_menu_icon_two"},[o("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-bars",on:{click:function(o){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),o("div",{staticClass:"main-nav__main-navigation two float-left"},[o("ul",{staticClass:"main-nav__navigation-box"},[o("li",{staticClass:"dropdown current"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[o("nuxt-link",{attrs:{to:"/plantas"}},[t._v("Plantas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/productos"}},[t._v("Productos")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/nosotros"}},[t._v("Nosotros")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contactanos"}},[t._v("Contactanos")])],1)])]),t._v(" "),o("div",{staticClass:"main_nav_right_two float-right"},[o("div",{staticClass:"icon_cart_box"},[o("nuxt-link",{attrs:{to:"/georeferencia"}},[o("i",{staticClass:"fas fa-globe"}),t._v(" "),o("span",{staticClass:"icon-earth"})])],1)])])])]),t._v(" "),o("nav",{staticClass:"mobile-nav__container",style:"display: ".concat(t.mobileToggle?"block":"none")},[o("ul",{staticClass:"main-nav__navigation-box"},[o("li",{staticClass:"dropdown current"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[o("nuxt-link",{attrs:{to:"/plantas"}},[t._v("Plantas")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[t._m(1),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Productores")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"#"}},[t._v("Plantas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"#"}},[t._v("Acopiadores")])],1)])]),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/productos"}},[t._v("Productos")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/nosotros"}},[t._v("Nosotros")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contactanos"}},[t._v("Contactanos")])],1)])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"topbar-two"},[o("div",{staticClass:"container"},[o("div",{staticClass:"topbar_two_content clearfix"},[o("div",{staticClass:"logo-box-two float-left"},[o("a",{staticClass:"main-nag__logo py-3",attrs:{href:"/index2"}},[o("img",{attrs:{src:"/assets/images/resources/logo.svg",alt:""}})])]),t._v(" "),o("div",{staticClass:"header_address_two float-left"},[o("ul",{staticClass:"clearfix list-unstyled"},[o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-placeholder"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Address")]),t._v(" "),o("p",[t._v("66 Broklyn St. New York")])])]),t._v(" "),o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-phone-call"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Phone")]),t._v(" "),o("p",[o("a",{attrs:{href:"tel:123456789"}},[t._v("66 Broklyn St. New York")])])])]),t._v(" "),o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-clock"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Timings")]),t._v(" "),o("p",[t._v("Mon - Fri 09:00am - 07:00pm")])])])])]),t._v(" "),o("div",{staticClass:"header_btn_two float-right"},[o("a",{staticClass:"thm-btn",attrs:{href:"#"}},[t._v("Get a Free Quote")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n                        Georeferencia\n                        "),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,"756ce34e",null);o.a=component.exports},351:function(t,o,e){"use strict";e.r(o);var n=e(307),r=e(292),l=e(308),c=e(309),_=e(310),v=e(311),d=e(312),f=e(313),w=e(298),h=e(314),C=e(315),m=e(295),k=e(316),x={components:{ServiceTwo:e(300).a,GalleryOne:k.a,GMap:m.a,GetQuote:C.a,BrandTwo:h.a,VideoOne:w.a,TestimonialTwo:f.a,RecentProject:d.a,ProductTwo:v.a,CallToActionTwo:_.a,NeedAll:c.a,SliderTwo:l.a,Header:r.a,FooterTwo:n.a},head:function(){return{title:"Agrikol  | Home 2"}}},y=e(32),component=Object(y.a)(x,(function(){var t=this,o=t._self._c;return o("div",[o("Header"),t._v(" "),o("SliderTwo"),t._v(" "),o("NeedAll"),t._v(" "),o("ServiceTwo"),t._v(" "),o("CallToActionTwo"),t._v(" "),o("ProductTwo"),t._v(" "),o("RecentProject"),t._v(" "),o("TestimonialTwo"),t._v(" "),o("VideoOne"),t._v(" "),o("BrandTwo"),t._v(" "),o("GetQuote"),t._v(" "),o("GMap"),t._v(" "),o("GalleryOne"),t._v(" "),o("FooterTwo")],1)}),[],!1,null,null,null);o.default=component.exports}}]);