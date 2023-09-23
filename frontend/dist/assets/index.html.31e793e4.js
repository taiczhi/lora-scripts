import{_ as d,r,o as l,c as o,a as e,b as a,d as c,e as h}from"./app.57d1bedc.js";const t={},n=e("h1",{id:"sd-trainer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sd-trainer","aria-hidden":"true"},"#"),a(" SD-Trainer")],-1),s={href:"https://space.bilibili.com/12566101",target:"_blank",rel:"noopener noreferrer"},u=h('<h3 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a> \u66F4\u65B0\u65E5\u5FD7</h3><h4 id="v1-5-0" tabindex="-1"><a class="header-anchor" href="#v1-5-0" aria-hidden="true">#</a> v1.5.0</h4><ul><li>\u652F\u6301 SDXL \u8BAD\u7EC3</li><li>\u65B0\u589E\uFF1A\u5916\u6302 VAE \u6587\u4EF6\u8986\u76D6</li><li>\u65B0\u589E\uFF1A<code>full_bf16</code>\u3001<code>full_fp16</code>\u3001<code>cache_text_encoder_outputs</code>\u3001<code>bucket_reso_steps</code> \u53C2\u6570</li></ul><h4 id="v1-4-2" tabindex="-1"><a class="header-anchor" href="#v1-4-2" aria-hidden="true">#</a> v1.4.2</h4><ul><li>\u65B0\u589E\uFF1A\u4F18\u5316\u5668 <code>Lion8bit</code>\u3001<code>PagedLion8bit</code>\u3001<code>PagedAdamW8bit</code> \u53C2\u6570\uFF0C\u4F7F\u7528\u65F6\u9700\u81EA\u884C\u5B89\u88C5 <code>bitsandbytes</code> 0.39.0 \u4EE5\u4E0A\u7684\u7248\u672C\u3002</li><li>\u65B0\u589E\uFF1A<code>scale_weight_norms</code> \u53C2\u6570</li><li>\u66F4\u6539\u4E86 <code>lr_warmup</code> \u53C2\u6570\u7684\u53EF\u8BBE\u7F6E\u65F6\u673A</li><li>\u4FEE\u6539\u90E8\u5206\u53C2\u6570\u7684\u63CF\u8FF0</li></ul><h4 id="v1-4-1" tabindex="-1"><a class="header-anchor" href="#v1-4-1" aria-hidden="true">#</a> v1.4.1</h4><ul><li>\u65B0\u589E\uFF1A\u795E\u7AE5\u4F18\u5316\u5668\u76F8\u5173\u53C2\u6570</li></ul><h4 id="v1-4-0" tabindex="-1"><a class="header-anchor" href="#v1-4-0" aria-hidden="true">#</a> v1.4.0</h4><ul><li>\u65B0\u589E\uFF1A\u81EA\u52A8\u4FDD\u5B58 &amp; \u8BFB\u53D6\u5386\u53F2\u53C2\u6570</li><li>\u65B0\u589E\uFF1ALoRA \u76F8\u5173\u5DE5\u5177 SVD \u811A\u672C &amp; dyLoRA \u811A\u672C</li><li>\u4FDD\u5B58\u53C2\u6570\u65F6\u5C06\u4F1A\u81EA\u52A8\u7528\u8F93\u51FA\u7684\u6A21\u578B\u540D\u79F0\u4F5C\u4E3A\u4FDD\u5B58\u540D\u79F0</li><li>\u4F18\u5316\u53C2\u6570</li></ul><h4 id="v1-3-2" tabindex="-1"><a class="header-anchor" href="#v1-3-2" aria-hidden="true">#</a> v1.3.2</h4><ul><li>\u6837\u5F0F\u4F18\u5316</li><li>\u6DFB\u52A0\u5FD8\u8BB0\u7684 lycoris.kohya \u7684 dylora \u9009\u9879</li></ul><h4 id="v1-3-1" tabindex="-1"><a class="header-anchor" href="#v1-3-1" aria-hidden="true">#</a> v1.3.1</h4><ul><li>\u4FEE\u590D\u4E86 \u7531\u4E8E \u201C\u4FEE\u590D\u4E86 <code>dropout</code> \u53C2\u6570\u7684 bug\u201D \u4EA7\u751F\u7684 bug</li><li>\u5176\u4ED6\u7EC6\u5FAE\u8C03\u6574</li></ul><h4 id="v1-3-0" tabindex="-1"><a class="header-anchor" href="#v1-3-0" aria-hidden="true">#</a> v1.3.0</h4><ul><li>\u66F4\u65B0\u5E76\u4FEE\u590D\u4E86 <code>dropout</code> \u53C2\u6570\u7684 bug</li><li>\u65B0\u589E\u529F\u80FD\uFF1A\u4E13\u5BB6\u6A21\u5F0F\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>network_args</code> \u4E0E <code>optimizer_args</code> \u53C2\u6570\u3002\u65E0\u9700\u7B49\u5F85 UI \u52A0\u5165\u65B0\u53C2\u6570\uFF0C\u81EA\u5B9A\u4E49\u7684\u6743\u9650\u662F\u4F60\u7684\uFF01</li></ul><h4 id="v1-2-1" tabindex="-1"><a class="header-anchor" href="#v1-2-1" aria-hidden="true">#</a> v1.2.1</h4><ul><li>\u66F4\u6539\u5E76\u4E14\u4FEE\u590D\u4E86 DAdaptation \u7684\u4E00\u4E9B\u53C2\u6570</li></ul><h4 id="v1-2-0" tabindex="-1"><a class="header-anchor" href="#v1-2-0" aria-hidden="true">#</a> v1.2.0</h4><ul><li>\u6DFB\u52A0\u4E86 UI \u8BBE\u7F6E\u3002\u73B0\u5728\u6253\u5F00 Tensorboard \u7684 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E86</li><li>\u4FEE\u6539\u4E00\u4E9B\u65B0\u624B\u6A21\u5F0F\u4E2D\u65E0\u7528\u7684\u53C2\u6570\u663E\u793A</li><li>\u4F18\u5316\u4E86\u4E00\u4E9B\u4E13\u5BB6\u8BBE\u7F6E\u4E2D\u53C2\u6570\u7684\u6446\u653E</li></ul><h4 id="v1-1-0" tabindex="-1"><a class="header-anchor" href="#v1-1-0" aria-hidden="true">#</a> v1.1.0</h4><ul><li>\u65B0\u624B\u6A21\u5F0F\u652F\u6301\u8BAD\u7EC3\u9884\u89C8\u56FE</li><li>\u6DFB\u52A0\u4E00\u5768 DAdaptation \u7CFB\u5217\u7684\u4F18\u5316\u5668</li><li>\u4E3A Tagger \u6DFB\u52A0\u4E86\u66F4\u591A\u6A21\u578B\u9009\u9879</li></ul>',21);function v(_,b){const i=r("ExternalLinkIcon");return l(),o("div",null,[n,e("p",null,[a("Stable Diffusion \u8BAD\u7EC3 UI v1.5.0 by "),e("a",s,[a("\u79CB\u8449aaaki"),c(i)])]),u])}var p=d(t,[["render",v],["__file","index.html.vue"]]);export{p as default};
