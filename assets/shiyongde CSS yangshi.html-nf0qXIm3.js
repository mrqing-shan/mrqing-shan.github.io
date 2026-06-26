import{_ as s,c as a,d as e,o as p}from"./app-CsErcU0n.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="极端数据换行" tabindex="-1"><a class="header-anchor" href="#极端数据换行"><span>极端数据换行</span></a></h2><p>例如：全是 1111、全是连体的英文字符、全是单个汉字等</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text-wrap</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> pre-wrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本省略号限制" tabindex="-1"><a class="header-anchor" href="#文本省略号限制"><span>文本省略号限制</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.line-1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line-2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line-3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line-4</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line-5</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line-2,</span>
<span class="line">.line-3,</span>
<span class="line">.line-4,</span>
<span class="line">.line-5</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> // 弹性伸缩盒</span>
<span class="line">  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> // 设置伸缩盒子元素排列方式</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式动态计算" tabindex="-1"><a class="header-anchor" href="#样式动态计算"><span>样式动态计算</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.demo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iphonex-底部安全区定义" tabindex="-1"><a class="header-anchor" href="#iphonex-底部安全区定义"><span>iPhoneX 底部安全区定义</span></a></h2><p>[底部安全区](/blogs/web/shiyongde CSS yangshi.html#安全区域)</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.safe-area-inset-bottom</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">constant</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去除-webkit-的默认样式" tabindex="-1"><a class="header-anchor" href="#去除-webkit-的默认样式"><span>去除 webkit 的默认样式</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.fix-ios-appearance</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪类边框" tabindex="-1"><a class="header-anchor" href="#伪类边框"><span>伪类边框</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.border,</span>
<span class="line">.border-bottom,</span>
<span class="line">.border-left,</span>
<span class="line">.border-right,</span>
<span class="line">.border-top,</span>
<span class="line">.border-top-bottom</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-bottom:after,</span>
<span class="line">.border-left:after,</span>
<span class="line">.border-right:after,</span>
<span class="line">.border-top-bottom:after,</span>
<span class="line">.border-top:after,</span>
<span class="line">.border:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span></span>
<span class="line">  // 多加0.1%，能解决有时候边框缺失的问题</span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 199.8%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 199.7%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 0 solid #eeeeee<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-top:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-top-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-left:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-left-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-right:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-right-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-bottom:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border-top-bottom:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动端去除-input-框获取焦点高亮问题" tabindex="-1"><a class="header-anchor" href="#移动端去除-input-框获取焦点高亮问题"><span>移动端去除 input 框获取焦点高亮问题</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">input</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>...不定时更新</p>`,17)])])}const o=s(l,[["render",i]]),r=JSON.parse('{"path":"/blogs/web/shiyongde CSS yangshi.html","title":"实用的 CSS 样式","lang":"zh-CN","frontmatter":{"title":"实用的 CSS 样式","date":"2022-03-07T00:00:00.000Z","categories":["web"]},"headers":[{"level":2,"title":"极端数据换行","slug":"极端数据换行","link":"#极端数据换行","children":[]},{"level":2,"title":"文本省略号限制","slug":"文本省略号限制","link":"#文本省略号限制","children":[]},{"level":2,"title":"样式动态计算","slug":"样式动态计算","link":"#样式动态计算","children":[]},{"level":2,"title":"iPhoneX 底部安全区定义","slug":"iphonex-底部安全区定义","link":"#iphonex-底部安全区定义","children":[]},{"level":2,"title":"去除 webkit 的默认样式","slug":"去除-webkit-的默认样式","link":"#去除-webkit-的默认样式","children":[]},{"level":2,"title":"伪类边框","slug":"伪类边框","link":"#伪类边框","children":[]},{"level":2,"title":"移动端去除 input 框获取焦点高亮问题","slug":"移动端去除-input-框获取焦点高亮问题","link":"#移动端去除-input-框获取焦点高亮问题","children":[]}],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/web/实用的 CSS 样式.md"}');export{o as comp,r as data};
