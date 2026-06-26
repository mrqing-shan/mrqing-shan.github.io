import{_ as n,c as a,d as t,o as e}from"./app-CsErcU0n.js";const p={};function l(i,s){return e(),a("div",null,[...s[0]||(s[0]=[t(`<p>此文档主要说明在项目 <code>.vscode</code>文件夹下，新建不同配置文件</p><h2 id="项目推荐插件提醒" tabindex="-1"><a class="header-anchor" href="#项目推荐插件提醒"><span>项目推荐插件提醒</span></a></h2><p>新建<code>extensions.json</code> 文件，示例内容如下，插件具体<code>value</code>取自插件详细信息内的标识符，配置了此文件后，会在 vscode 插件安装的推荐栏内显示</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token comment">// .vscode/extensions.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;recommendations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;editorconfig.editorconfig&quot;</span><span class="token punctuation">,</span> <span class="token comment">// editorconfig</span></span>
<span class="line">    <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span><span class="token punctuation">,</span> <span class="token comment">// eslint</span></span>
<span class="line">    <span class="token string">&quot;vue.volar&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vue语言插件</span></span>
<span class="line">    <span class="token string">&quot;ms-vscode.vscode-typescript-next&quot;</span><span class="token punctuation">,</span> <span class="token comment">// ts语言插件</span></span>
<span class="line">    <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span> <span class="token comment">// prettier代码格式化</span></span>
<span class="line">    <span class="token string">&quot;mhutchie.git-graph&quot;</span><span class="token punctuation">,</span> <span class="token comment">// git记录图</span></span>
<span class="line">    <span class="token string">&quot;donjayamanne.githistory&quot;</span><span class="token punctuation">,</span> <span class="token comment">// git历史</span></span>
<span class="line">    <span class="token string">&quot;eamodio.gitlens&quot;</span><span class="token punctuation">,</span> <span class="token comment">// git插件</span></span>
<span class="line">    <span class="token string">&quot;waderyan.gitblame&quot;</span><span class="token punctuation">,</span> <span class="token comment">// git注释</span></span>
<span class="line">    <span class="token string">&quot;syler.sass-indented&quot;</span><span class="token punctuation">,</span> <span class="token comment">// sass</span></span>
<span class="line">    <span class="token string">&quot;michelemelluso.code-beautifier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// css</span></span>
<span class="line">    <span class="token string">&quot;antfu.unocss&quot;</span><span class="token punctuation">,</span> <span class="token comment">// unocss</span></span>
<span class="line">    <span class="token string">&quot;bradlc.vscode-tailwindcss&quot;</span><span class="token punctuation">,</span> <span class="token comment">// tailwindcss</span></span>
<span class="line">    <span class="token string">&quot;zignd.html-css-class-completion&quot;</span><span class="token punctuation">,</span> <span class="token comment">// css提示</span></span>
<span class="line">    <span class="token string">&quot;naumovs.color-highlight&quot;</span><span class="token punctuation">,</span> <span class="token comment">// css颜色</span></span>
<span class="line">    <span class="token string">&quot;pucelle.vscode-css-navigation&quot;</span><span class="token punctuation">,</span> <span class="token comment">// css导航</span></span>
<span class="line">    <span class="token string">&quot;pranaygp.vscode-css-peek&quot;</span> <span class="token comment">// css查看</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目开发通用配置" tabindex="-1"><a class="header-anchor" href="#项目开发通用配置"><span>项目开发通用配置</span></a></h2><p>新建<code>settings.json</code> 文件，示例内容如下</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token comment">// .vscode/settings.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// vscode默认启用了根据文件类型自动设置tabsize的选项</span></span>
<span class="line">  <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 重新设定tabsize</span></span>
<span class="line">  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 每次保存的时候自动格式化</span></span>
<span class="line">  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;explicit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token string">&quot;explicit&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 把prettier设置为vscode默认的代码格式化工具</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// vue文件的默认格式化工具选择prettier</span></span>
<span class="line">  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;vetur.validation.script&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷代码块" tabindex="-1"><a class="header-anchor" href="#快捷代码块"><span>快捷代码块</span></a></h2><p>新建<code>vue.code-snippets</code> 文件，示例内容如下，在文件内可使用对应快捷命令生成对应代码块-</p><ul><li><code>prefix</code> 字段为快捷命令</li><li><code>body</code> 为生成的代码块</li><li><code>[key]</code> 为自定义命名</li></ul><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;Vue ts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vt&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  &lt;div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;defineOptions({&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  name: &#39;$1&#39;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;})&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Vue ts component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vtc&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  &lt;div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;const props = withDefaults(&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;defineProps&lt;{&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  name: string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;}&gt;(),&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;  name: &#39;11&#39;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)])])}const c=n(p,[["render",l]]),u=JSON.parse('{"path":"/blogs/guifan/vscodexiangmupeizhi.html","title":"vscode项目配置","lang":"zh-CN","frontmatter":{"title":"vscode项目配置","date":"2024-05-26T00:00:00.000Z","categories":["规范"],"tags":["规范"],"home":false},"headers":[{"level":2,"title":"项目推荐插件提醒","slug":"项目推荐插件提醒","link":"#项目推荐插件提醒","children":[]},{"level":2,"title":"项目开发通用配置","slug":"项目开发通用配置","link":"#项目开发通用配置","children":[]},{"level":2,"title":"快捷代码块","slug":"快捷代码块","link":"#快捷代码块","children":[]}],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/规范/vscode项目配置.md"}');export{c as comp,u as data};
