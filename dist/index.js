"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),__jsx$k=React__default.default.createElement;function Breadcrumbs(e){var t=e.children,s=e.maxCrumbs,a=e.dark,r=e.className,c=e.style,l="pier-breadcrumbs",e=l,s=Math.floor(s);a&&(e+=" ".concat(l,"--dark")),""!==r&&(e+=" ".concat(r));return __jsx$k("div",{className:e,style:c},isNaN(s)||s<2||s>t.length?t:__jsx$k(React.Fragment,null,t[0],__jsx$k("span",{className:"pier-breadcrumbs__ellipsis"}),function(){for(var e=[],a=0;a<t.length;a++)a+s-1>=t.length&&e.push(t[a]);return e.map(function(e){return e})}()))}Breadcrumbs.defaultProps={className:"",dark:!1};var __jsx$j=React__default.default.createElement;function BreadcrumbsLink(e){var a=e.children,t=e.disabled,s=e.className,r=e.style,c="pier-breadcrumbs__crumb",e="pier-link";return t&&(e+=" pier-link--disabled"),""!==s&&(c+=" ".concat(s)),__jsx$j("div",{className:c,style:r},__jsx$j("span",{className:e},a))}BreadcrumbsLink.defaultProps={disabled:!1,className:""};var __jsx$i=React__default.default.createElement;function Button(e){var a=e.children,t=e.type,s=e.icon,r=e.size,c=e.disabled,l=e.cap,n=e.pill,i=e.error,d=e.dark,o=e.className,_=e.style,m="pier-button-standard",u=m;switch(t){case"default":case"hero":u=m="pier-button-hero";break;case"primary":u=m="pier-button-standard";break;case"secondary":u=(m="pier-button-standard")+" ".concat(m,"--secondary")}switch(r){case"sm":u+=" ".concat(m,"--sm");break;case"md":u+="";break;case"lg":u+=" ".concat(m,"--lg")}switch(l){case"cap-right":u+=" ".concat(m,"--cap-right");break;case"cap":u+=" ".concat(m,"--cap");break;case"cap-left":u+=" ".concat(m,"--cap-left")}return n&&(u+=" ".concat(m,"--pill")),i&&(u+=" ".concat(m,"--error")),d&&(u+=" ".concat(m,"--dark")),c&&(u+=" ".concat(m,"--disabled")),u+=" ".concat(o),"pier-button-hero"==m?__jsx$i("button",{className:u,style:_},__jsx$i("span",{className:"pier-button-hero__content"},s&&__jsx$i("i",{className:"pier-button-hero__icon ".concat(s)}),a)):"pier-button-standard"==m?__jsx$i("button",{className:u,style:_},s&&__jsx$i("i",{className:"pier-button-standard__icon ".concat(s)}),a):void 0}Button.defaultProps={type:"hero",size:"md",disabled:!1,cap:"",pill:!1,error:!1,dark:!1,className:""};var __jsx$h=React__default.default.createElement;function IconButton(e){var a=e.children,t=e.icon,s=e.size,r=e.disabled,c=e.cap,l=e.pill,n=e.error,i=e.dark,d=e.className,e=e.style,o="pier-button-icon",_=o;switch(s){case"sm":_+=" ".concat(o,"--sm");break;case"md":_+="";break;case"lg":_+=" ".concat(o,"--lg")}switch(c){case"cap-right":_+=" ".concat(o,"--cap-right");break;case"cap":_+=" ".concat(o,"--cap");break;case"cap-left":_+=" ".concat(o,"--cap-left")}return l&&(_+=" ".concat(o,"--pill")),n&&(_+=" ".concat(o,"--error")),i&&(_+=" ".concat(o,"--dark")),r&&(_+=" ".concat(o,"--disabled")),_+=" ".concat(d),__jsx$h("button",{className:_,style:e},t&&__jsx$h("i",{className:"pier-button-icon__icon ".concat(t)}),a)}IconButton.defaultProps={size:"md",disabled:!1,cap:"",pill:!1,error:!1,dark:!1,className:""};var __jsx$g=React__default.default.createElement;function Card(e){var a=e.children,t=e.size,s=e.dark,r=e.className,e=e.style,c="pier-card";switch(t){case"lg":c+="";break;case"md":c+=" pier-card--md";break;case"sm":c+=" pier-card--sm"}return s&&(c+=" pier-card--dark"),c+=" ".concat(r),__jsx$g("div",{className:c,style:e},a)}Card.defaultProps={size:"lg",className:"",dark:!1};var __jsx$f=React__default.default.createElement;function Section(e){var a=e.children,t=e.padding,s=e.className,e=e.style,r="pier-section";switch(t){case"xl":r+=" pier-section--xl";break;case"lg":r+=" pier-section--lg";break;case"md":r+="";break;case"sm":r+=" pier-section--sm";break;case"xs":r+=" pier-section--xs"}return r+=" ".concat(s),__jsx$f("div",{className:r,style:e},a)}Section.defaultProps={padding:"md",className:""};var __jsx$e=React__default.default.createElement;function Well(e){var a=e.children,t=e.size,s=e.className,e=e.style,r="pier-well";switch(t){case"lg":r+="";break;case"md":r+=" pier-well--md";break;case"sm":r+=" pier-well--sm"}return r+=" ".concat(s),__jsx$e("div",{className:r,style:e},a)}Well.defaultProps={size:"lg",className:""};var __jsx$d=React__default.default.createElement;function HR(e){var a=e.size,t=e.color,s=e.className,e=e.style,r="pier-hr";switch(a){case"lg":r+=" pier-hr--lg";break;case"md":r+=" pier-hr--md";break;case"sm":r+=""}switch(t){case"hero":r+=" pier-hr--hero";break;case"light":r+="";break;case"dark":r+=" pier-hr--dark";break;case"gray":r+=" pier-hr--gray"}return r+=" ".concat(s),__jsx$d("hr",{className:r,style:e})}HR.defaultProps={size:"sm",color:"light",className:""};var __jsx$c=React__default.default.createElement;function BodyText$1(e){var a=e.children,t=e.size,s=e.dark,r=e.disabled,c=e.className,e=e.style,l="pier-link",n=l;switch(t){case"md":n+="";break;case"sm":n+=" ".concat(l,"--sm");break;case"xs":n+=" ".concat(l,"--xs")}return s&&(n+=" ".concat(l,"--dark")),r&&(n+=" ".concat(l,"--disabled")),""!==c&&(n+=" ".concat(c)),__jsx$c("span",{className:n,style:e},a)}BodyText$1.defaultProps={size:"md",dark:!1,disabled:!1,className:""};var __jsx$b=React__default.default.createElement;function List$1(e){var a=e.children,t=e.ordered,s=e.size,r=e.dark,c=e.className,e=e.style,l="pier-list",n=l;switch(t&&(n+=" ".concat(l,"--ordered")),s){case"lg":n+="";break;case"md":n+=" ".concat(l,"--md");break;case"sm":n+=" ".concat(l,"--sm")}return r&&(n+=" ".concat(l,"--dark")),""!==c&&(n+=" ".concat(c)),__jsx$b(React.Fragment,null,__jsx$b(t?"ol":"ul",{className:n,style:e},a))}List$1.defaultProps={ordered:!1,size:"lg",className:"",dark:!1};var __jsx$a=React__default.default.createElement;function List(e){var a=e.children,t=e.className,s=e.style,e="pier-list__item";return e+=" ".concat(t),__jsx$a("li",{className:e,style:s},__jsx$a("div",{className:"pier-list__content"},a))}List.defaultProps={className:""};var __jsx$9=React__default.default.createElement;function Nav(e){e=e.children;return __jsx$9("div",{className:"pier-nav"},e)}Nav.defaultProps={};var __jsx$8=React__default.default.createElement;function NavItem(e){var a=e.children,e=e.icon;return __jsx$8("div",{className:"pier-nav__item"},""!==e&&__jsx$8("span",{className:"pier-nav__item-icon "+e}),a)}NavItem.defaultProps={icon:""};var __jsx$7=React__default.default.createElement;function NavItemContainer(e){var a=e.children,e=e.startToggled,e=React.useState(e),t=e[0],s=e[1];return __jsx$7("div",{className:"pier-nav__item-container"},__jsx$7("span",{className:t?"pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--toggled":"pier-nav__item-dropdown-toggle",onClick:function(){return s(!t)}}),a)}NavItemContainer.defaultProps={startToggled:!1};var __jsx$6=React__default.default.createElement;function NavItemDropdown(e){e=e.children;return __jsx$6("div",{className:"pier-nav__item-dropdown"},e)}var __jsx$5=React__default.default.createElement;function NavSubItem(e){e=e.children;return __jsx$5("div",{className:"pier-nav__sub-item"},__jsx$5("div",{className:"pier-nav__sub-item-line"}),e)}var __jsx$4=React__default.default.createElement;function NavSubLabel(e){e=e.children;return __jsx$4("div",{className:"pier-nav__sub-label"},e)}var __jsx$3=React__default.default.createElement;function BodyText(e){var a=e.children,t=e.size,s=e.color,r=e.dark,c=e.className,e=e.style,l="pier-body-text";switch(t){case"md":l+="";break;case"sm":l+=" pier-body-text--sm";break;case"xs":l+=" pier-body-text--xs"}switch(s){case"default":l+="";break;case"light-gray":l+=" pier-body-text--light-gray"}return r&&(l+=" pier-body-text--dark"),l+=" ".concat(c),__jsx$3("p",{className:l,style:e},a)}BodyText.defaultProps={size:"md",color:"default",dark:!1,className:""};var __jsx$2=React__default.default.createElement;function CodeBlock(e){var a=e.children,t=e.size,s=e.dark,r=e.className,e=e.style,c="pier-codeblock";switch(t){case"md":c+="";break;case"sm":c+=" pier-codeblock--sm";break;case"xs":c+=" pier-codeblock--xs"}return s&&(c+=" pier-codeblock--dark"),c+=" ".concat(r),__jsx$2("code",{className:c,style:e},a)}CodeBlock.defaultProps={size:"md",dark:!1,className:""};var __jsx$1=React__default.default.createElement;function Heading(e){var a=e.children,t=e.size,s=e.dark,r=e.className,c=e.style,l="pier-heading";switch(t){case"lg":l+=" pier-heading--lg";break;case"md":l+="";break;case"sm":l+=" pier-heading--sm";break;case"xs":l+=" pier-heading--xs"}switch(s&&(l+=" pier-heading--dark"),l+=" ".concat(r),t){case"lg":return __jsx$1("h1",{className:l,style:c},a);case"md":return __jsx$1("h2",{className:l,style:c},a);case"sm":return __jsx$1("h3",{className:l,style:c},a);case"xs":return __jsx$1("h4",{className:l,style:c},a)}}Heading.defaultProps={size:"md",dark:!1,className:""};var __jsx=React__default.default.createElement;function Label(e){var a=e.children,t=e.forInput,s=e.size,r=e.dark,c=e.className,e=e.style,l="pier-label";switch(s){case"md":l.push("");break;case"sm":l.push(" pier-label--sm")}return r&&l.push(" pier-label--dark"),l.push(" ".concat(c)),__jsx("p",{htmlFor:t,className:l,style:e},a)}Label.defaultProps={size:"md",dark:!1},exports.BodyText=BodyText,exports.Breadcrumbs=Breadcrumbs,exports.BreadcrumbsLink=BreadcrumbsLink,exports.Button=Button,exports.Card=Card,exports.CodeBlock=CodeBlock,exports.HR=HR,exports.Heading=Heading,exports.IconButton=IconButton,exports.Label=Label,exports.Link=BodyText$1,exports.List=List$1,exports.ListItem=List,exports.Nav=Nav,exports.NavItem=NavItem,exports.NavItemContainer=NavItemContainer,exports.NavItemDropdown=NavItemDropdown,exports.NavSubItem=NavSubItem,exports.NavSubLabel=NavSubLabel,exports.Section=Section,exports.Well=Well;
