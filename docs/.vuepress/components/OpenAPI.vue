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
import spec from "../../../openapi.yaml";

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
  };
};

export default {
  mounted() {
    this.$nextTick(() => {
      const domNode = document.getElementById("openapi-wrapper");
      SwaggerUI({
        spec,
        domNode,
        docExpansion: "list",
        deepLinking: true,
        syntaxHighlight: false,
        persistAuthorization: true,
        defaultModelsExpandDepth: 3,
        defaultModelExpandDepth: 3,
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
