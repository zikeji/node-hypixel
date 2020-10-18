<template>
  <div id="openapi-wrapper"></div>
</template>

<script>
import SwaggerUI from "swagger-ui";
import React from "react";
import prism from "prismjs";
import "prismjs/components/prism-json";
import "swagger-ui/dist/swagger-ui.css";

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
        className: `${this.props.className} language-json`,
      },
      React.createElement(
        "code",
        { dangerouslySetInnerHTML: { __html: code } },
        null
      )
    );
  }
}

const PrismJSPlugin = function (system) {
  return {
    components: {
      highlightCode: PrismJSComponent,
    },
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
        onComplete() {
          const examples = document.querySelectorAll(
            "#openapi-wrapper pre.example.microlight"
          );
          // console.log(examples);
        },
      });
    });
  },
};
</script>

<style lang="stylus">
@import "../styles/openapi"
</style>
