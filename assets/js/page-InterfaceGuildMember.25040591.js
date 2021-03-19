(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{528:function(t,e,a){"use strict";a.r(e);var r=a(1),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"interface-guildmember"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-guildmember"}},[t._v("#")]),t._v(" Interface: GuildMember")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ts-api/modules/components.html"}},[t._v("Components")]),t._v("."),a("RouterLink",{attrs:{to:"/ts-api/modules/components.schemas.html"}},[t._v("Schemas")]),t._v(".GuildMember")],1),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"exphistory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exphistory"}},[t._v("#")]),t._v(" expHistory")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("expHistory")]),t._v(": "),a("em",[t._v("object")])]),t._v(" "),a("p",[t._v("Property keys are the date in the format YYYY-MM-DD, and the value is how much guild exp they earned on that date.")]),t._v(" "),a("p",[t._v("Stores the last 7 days, so you can expect at maximum 7 properties on this exp history object.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expHistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-11-17'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("163214")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"type-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-declaration"}},[t._v("#")]),t._v(" Type declaration:")]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L281",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:281"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"joined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joined"}},[t._v("#")]),t._v(" joined")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("joined")]),t._v(": "),a("em",[t._v("number")])]),t._v(" "),a("p",[t._v("Timestamp of when this guild member joined the guild.")]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L287",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:287"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"mutedtill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutedtill"}},[t._v("#")]),t._v(" mutedTill")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("Optional")]),t._v(" "),a("strong",[t._v("mutedTill")]),t._v(": "),a("em",[t._v("number")])]),t._v(" "),a("p",[t._v("If they have been muted in guild chat, this is the timestamp of when they're unmuted.")]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L291",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:291"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("Optional")]),t._v(" "),a("strong",[t._v("name")]),t._v(": "),a("em",[t._v("string")])]),t._v(" "),a("p",[t._v("Old value describing the member's username. This is not used anymore and rarely shows up as a valid property.")]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L295",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:295"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"questparticipation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questparticipation"}},[t._v("#")]),t._v(" questParticipation")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("Optional")]),t._v(" "),a("strong",[t._v("questParticipation")]),t._v(": "),a("em",[t._v("number")])]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L296",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:296"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"rank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rank"}},[t._v("#")]),t._v(" rank")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("rank")]),t._v(": "),a("em",[t._v("string")])]),t._v(" "),a("p",[t._v('The name of their rank, it may match the name of a rank in the rank object - otherwise they may be unranked / the GM (GM ranks are usually "GUILDMASTER" or "Guild Master")')]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L300",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:300"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid"}},[t._v("#")]),t._v(" uuid")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("uuid")]),t._v(": "),a("em",[t._v("string")])]),t._v(" "),a("p",[t._v("Minecraft UUID of the guild memeber.")]),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/cc59b8f/src/types/api.ts#L304",target:"_blank",rel:"noopener noreferrer"}},[t._v("types/api.ts:304"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);