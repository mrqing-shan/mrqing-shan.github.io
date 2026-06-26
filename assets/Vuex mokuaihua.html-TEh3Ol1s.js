import{_ as l,c as i,a as n,d as p,e,b as t,r as o,o as c}from"./app-CsErcU0n.js";const r={},u={class:"custom-container tip"},d={href:"https://vuex.vuejs.org/zh/guide/structure.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuex.vuejs.org/zh/api/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vuex.vuejs.org/zh/guide/modules.html",target:"_blank",rel:"noopener noreferrer"};function m(b,s){const a=o("ExternalLinkIcon");return c(),i("div",null,[n("div",u,[s[3]||(s[3]=p('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">如果不能确定项目后期是否会迭代等，最好把</p>',2)),n("p",null,[n("a",d,[s[0]||(s[0]=e("Vuex 项目结构",-1)),t(a)]),n("a",k,[s[1]||(s[1]=e("Vuex Api 参考",-1)),t(a)]),n("a",v,[s[2]||(s[2]=e("Vuex 模块化",-1)),t(a)])])]),s[4]||(s[4]=p(`<h2 id="vuex-模块化例子" tabindex="-1"><a class="header-anchor" href="#vuex-模块化例子"><span>Vuex 模块化例子</span></a></h2><ul><li>创建 store</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// store/index.js</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">&#39;./module/user&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		user</span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	getters</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>getters</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// store/getters.js</span></span>
<span class="line"><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">token</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> getters</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// store/module/user.js</span></span>
<span class="line"><span class="token keyword">const</span> Token <span class="token operator">=</span> <span class="token string">&#39;token&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 设置为带命名空间的模块</span></span>
<span class="line">	<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">token</span><span class="token operator">:</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>Token<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">setToken</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			state<span class="token punctuation">.</span>token <span class="token operator">=</span> token</span>
<span class="line">      sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>Token<span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span></span>
<span class="line">			commit<span class="token punctuation">,</span></span>
<span class="line">			rootState</span>
<span class="line">		<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 因为设置为带命名空间的模块，所以引用需要带着命名空间名</span></span>
<span class="line">      <span class="token comment">// 自行选择是否配置 Promise</span></span>
<span class="line">			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>rootState<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">{</span> </span>
<span class="line">				<span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setToken&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;模拟Token&#39;</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在main.js内引入</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$store <span class="token operator">=</span> store</span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  store<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>store 使用</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// Vue 页面内使用</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/login&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// router 内使用</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store/index.js&#39;</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/login&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue 页面内引用 store 内的参数</li></ul><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue" data-title="Vue"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">	&lt;div&gt;</span>
<span class="line">    	{{token}}</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import {</span>
<span class="line">	mapState</span>
<span class="line">} from &#39;vuex&#39;</span>
<span class="line">export default {</span>
<span class="line">	computed: mapState(&#39;user&#39;, [&#39;token&#39;])</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12))])}const h=l(r,[["render",m]]),y=JSON.parse('{"path":"/blogs/Vue/Vuex mokuaihua.html","title":"Vuex 模块化","lang":"zh-CN","frontmatter":{"title":"Vuex 模块化","date":"2021-01-07T00:00:00.000Z","categories":["Vue"],"tags":["Vue"]},"headers":[{"level":2,"title":"Vuex 模块化例子","slug":"vuex-模块化例子","link":"#vuex-模块化例子","children":[]}],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/Vue/Vuex 模块化.md"}');export{h as comp,y as data};
