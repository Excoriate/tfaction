"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[5773],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:500},s="Set Terraform CLI options with the environment variable",l={unversionedId:"config/terraform-cli-options",id:"config/terraform-cli-options",title:"Set Terraform CLI options with the environment variable",description:"#311",source:"@site/docs/config/terraform-cli-options.md",sourceDirName:"config",slug:"/config/terraform-cli-options",permalink:"/tfaction/docs/config/terraform-cli-options",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/config/terraform-cli-options.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"gsutil authentication",permalink:"/tfaction/docs/config/gcp"},next:{title:"Actions",permalink:"/tfaction/docs/actions/"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-terraform-cli-options-with-the-environment-variable"},"Set Terraform CLI options with the environment variable"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/issues/311"},"#311")),(0,i.kt)("p",null,"Some actions don't provide inputs to set Terraform CLI options, but you can set them with Terraform's environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TF_CLI_ARGS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TF_CLI_ARGS_name"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli/config/environment-variables#tf_cli_args-and-tf_cli_args_name"},"https://www.terraform.io/cli/config/environment-variables#tf_cli_args-and-tf_cli_args_name")),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- uses: suzuki-shunsuke/tfaction/terraform-plan@main\n  with:\n    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}\n  env:\n    TF_CLI_ARGS_plan: "-parallelism=30"\n')))}f.isMDXComponent=!0}}]);