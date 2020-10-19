<template>
  <div id="openapi-wrapper"></div>
</template>

<script>
import SwaggerUI from "swagger-ui";
import React from "react";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";
import prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "swagger-ui/dist/swagger-ui.css";

const md = new Remarkable({
  html: true,
  typographer: true,
  breaks: true,
  linkTarget: "_blank",
  highlight: function (str, lang) {
    return prism.highlight(str, prism.languages[lang], lang);
  },
}).use(linkify);

md.core.ruler.disable(["replacements", "smartquotes"]);

class MarkdownComponent extends React.Component {
  render() {
    const { source, className } = this.props;
    if (typeof source !== "string" || !source) {
      return null;
    }
    return React.createElement(
      "div",
      { className: `${className ? `${className} ` : ""}markdown`, dangerouslySetInnerHTML: { __html: md.render(source) } },
      null
    );
  }
}

class PrismJSComponent extends React.Component {
  render() {
    const code = prism.highlight(
      this.props.value,
      prism.languages["json"],
      "json"
    );
    return React.createElement(
      "pre",
      {
        className: this.props.className,
      },
      React.createElement(
        "code",
        { className: "language-json", dangerouslySetInnerHTML: { __html: code } },
        null
      )
    );
  }
}

const codeRegex = /```([a-z]*)\n([\s\S]*?)\n```/g;
const PrismJSPlugin = function (system) {
  return {
    components: {
      highlightCode: PrismJSComponent,
      Markdown: MarkdownComponent,
    },
    // wrapComponents: {
    //   Markdown: (Original) => (props) => {
    //     console.log(md.render(props.source));
    //     let result;
    //     let newSource = props.source;
    //     while ((result = codeRegex.exec(props.source)) !== null) {
    //       const lang = result[1];
    //       if (prism.languages[lang]) {
    //         const code = prism.highlight(
    //           result[2],
    //           prism.languages[lang],
    //           lang
    //         );
    //         newSource = newSource.replace(
    //           result[0],
    //           `<pre class="language-${lang}"><code>${code}</code></pre>`
    //         );
    //       }
    //     }
    //     props.source = newSource;
    //     return Original(props);
    //   },
    // },
  };
};

export default {
  mounted() {
    this.$nextTick(() => {
      const domNode = document.getElementById("openapi-wrapper");
      SwaggerUI({
        url: "/openapi.yaml",
        domNode,
        docExpansion: "list",
        deepLinking: false,
        syntaxHighlight: false,
        presets: [SwaggerUI.presets.apis],
        plugins: [PrismJSPlugin],
        onComplete() {},
      });
    });
  },
};
</script>

<style lang="stylus">
@import "../styles/openapi"
</style>
