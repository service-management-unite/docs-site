(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"creating-zlux-application-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-zlux-application-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating zLUX application plug-ins")]),e._v(" "),a("p",[e._v("A zLUX application plug-in is an installable set of files that present resources in a web-based user interface, as a set of RESTful services, or in a web-based user interface and as a set of RESTful services.")]),e._v(" "),a("p",[e._v("Before you build a zLUX application plug-in, you must set the UNIX environment variables that support the plug-in environment.")]),e._v(" "),a("p",[a("code",[e._v("sample-app")]),e._v(" is a sample application plug-in with which you can experiment.")]),e._v(" "),a("h2",{attrs:{id:"setting-the-environment-variables-for-plug-in-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-environment-variables-for-plug-in-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting the environment variables for plug-in development")]),e._v(" "),a("p",[e._v("To set up the environment, the node must be accessible on the PATH. To determine if the node is already on the PATH, issue the following command from the command line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node --version\n")])])]),a("p",[e._v("If the version is returned, the node is already on the PATH.")]),e._v(" "),a("p",[e._v("If nothing is returned from the command, you can set the PATH using the "),a("em",[e._v("NODE_HOME")]),e._v(" variable. The "),a("em",[e._v("NODE_HOME")]),e._v(" variable must be set to the directory of the node install. You can use the export command to set the directory. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export NODE_HOME=node_installation_directory\n")])])]),a("p",[e._v("Using this directory, the node will be included on the PATH in "),a("code",[e._v("nodeServer.sh")]),e._v(". ("),a("code",[e._v("nodeServer.sh")]),e._v(" is located in "),a("code",[e._v("zlux-example-server/bin")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"using-the-zlux-sample-application-plug-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-zlux-sample-application-plug-in","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the zLUX sample application plug-in")]),e._v(" "),a("p",[e._v("Your zLUX installation provides a sample application plug-in with which you can experiment.")]),e._v(" "),a("p",[e._v("To build the sample application plug-in, node and npm must be included in the PATH. You can use the "),a("code",[e._v("npm run build")]),e._v(" or "),a("code",[e._v("npm start")]),e._v(" command to build the sample application plug-in. These commands are configured in "),a("code",[e._v("package.json")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you change the source code for the sample application, you must rebuild it.")])]),e._v(" "),a("li",[a("p",[e._v("If you want to modify "),a("code",[e._v("sample-app")]),e._v(", you must run "),a("code",[e._v("_npm install_")]),e._v(" in the virtual desktop and the "),a("code",[e._v("sample-app/webClient")]),e._v(". Then, you can run "),a("code",[e._v("_npm run build_")]),e._v(" in "),a("code",[e._v("sample-app/webClient")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Ensure that you set the "),a("code",[e._v("MVD_DESKTOP_DIR")]),e._v(" system variable to the virtual desktop plug-in location. For example: "),a("code",[e._v("<ZLUX_CAP>/zlux-app-manager/virtual-desktop")]),e._v(".")])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add an item to "),a("code",[e._v("sample-app")]),e._v(". The following figure shows an excerpt from "),a("code",[e._v("app.component.ts")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  export class AppComponent {\n    items = ['a', 'b', 'c', 'd']\n    title = 'app';\n    helloText: string;\n    serverResponseMessage: string;\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Save the changes to "),a("code",[e._v("app.component.ts")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Issue one of the following commands:")]),e._v(" "),a("ul",[a("li",[e._v("To rebuild the application plug-in, issue the following command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   npm run build\n")])])]),a("ul",[a("li",[e._v("To rebuild the application plug-in and wait for additional changes to "),a("code",[e._v("app.component.ts")]),e._v(", issue the following command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Reload the web page.")])]),e._v(" "),a("li",[a("p",[e._v("If you make changes to the sample application source code, follow these steps to rebuild the application:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Navigate to the "),a("code",[e._v("sample-app")]),e._v(" subdirectory where you made the source code changes.")])]),e._v(" "),a("li",[a("p",[e._v("Issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" npm run build\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Reload the web page.")])])])])])])}],!1,null,null,null);i.options.__file="mvd-plugincreateappplugin.md";t.default=i.exports}}]);