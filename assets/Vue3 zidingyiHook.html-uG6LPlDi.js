import{_ as s,c as a,d as p,o as e}from"./app-CsErcU0n.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<p>Vue 3 中的 Hook 主要就是解决使用 mixin 带来的问题，在 Vue3 建议使用 Hook 替代 mixin</p><p>使用 lodash-es，自定义一个通用的防抖节流 Hook</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> debounce<span class="token punctuation">,</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash-es&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">type <span class="token function-variable function">CallbackFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 防抖，在短时间内连续触发的事件，确保只有最后一次操作被执行</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">callback</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">delay</span> 间隔</span>
<span class="line"> * <span class="token keyword">@returns</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter"><span class="token literal-property property">callback</span><span class="token operator">:</span> CallbackFunction<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">delay</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1000</span></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> CallbackFunction <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> debouncedCallback <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 组件卸载时取消防抖回调</span></span>
<span class="line">  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    debouncedCallback<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> debouncedCallback<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 节流，在指定时间内，事件处理函数最多只执行一次</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">callback</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">delay</span> 间隔</span>
<span class="line"> * <span class="token keyword">@returns</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useThrottle</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter"><span class="token literal-property property">callback</span><span class="token operator">:</span> CallbackFunction<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">delay</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1000</span></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> CallbackFunction <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> throttleCallback <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 最后不执行</span></span>
<span class="line">    <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 组件卸载时取消节流回调</span></span>
<span class="line">  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    throttleCallback<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> throttleCallback<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottle<span class="token punctuation">,</span> useDebounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/hooks/useDebounceThrottle&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 防抖</span></span>
<span class="line"><span class="token keyword">const</span> goDebounce <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;goDebounce===&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 节流</span></span>
<span class="line"><span class="token keyword">const</span> goThrottle <span class="token operator">=</span> <span class="token function">useThrottle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;goThrottle===&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const i=s(t,[["render",l]]),u=JSON.parse('{"path":"/blogs/Vue/Vue3 zidingyiHook.html","title":"Vue3 Hook示例","lang":"zh-CN","frontmatter":{"title":"Vue3 Hook示例","date":"2024-03-03T00:00:00.000Z","categories":["Vue"],"tags":["Vue"]},"headers":[],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/Vue/Vue3 自定义Hook.md"}');export{i as comp,u as data};
