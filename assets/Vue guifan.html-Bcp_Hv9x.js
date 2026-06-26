import{_ as n,c as a,d as e,o as t}from"./app-CsErcU0n.js";const l={};function p(i,s){return t(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="vue-规范" tabindex="-1"><a class="header-anchor" href="#vue-规范"><span>Vue 规范</span></a></h2><p><strong>目录</strong> 目录统一使用<code>kebab-case</code>风格</p><p><strong>views 下的文件</strong></p><ul><li><p>js 类文件使用<code>PascalCase</code>，如<code>UserInfo.js</code></p></li><li><p>其他资源文件统一使用<code>kebab-cas</code>e 风格，如<code>user-detail.js</code>, <code>user-detail.css</code>, <code>user-avatar.png</code></p></li></ul><p>** <strong>组件文件</strong></p><ul><li>命名遵循<code>PascalCase</code>约定。 组件文件名除<code>index.vue</code>之外，一律采用<code>PascalCase</code>(大驼峰)写法。原因是引入组件时，组件的变量通常用<code>PascalCase</code>格式，以区别于一般变量。组件文件名与变量名一致，方便对应。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> UserBook <span class="token keyword">from</span> <span class="token string">&quot;./user/UserBook&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>组件名应该始终是多个单词的，根组件 App 除外 html 元素都是单个单词的（如<code>&lt;article&gt;</code>,<code>&lt;header&gt;</code>)，为了区分组件和一般<code>html</code>元素，组件由多个单词组成，如<code>BookItem.vue</code>，单独的<code>Book.vue</code>不推荐。</p></li><li><p>组件使用遵循<code>kebab-case</code> 约定 在页面中使用组件需要前后闭合，并以短线分隔，如：</p></li></ul><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-book</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-book</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-book</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范"><span>开发规范</span></a></h3><h4 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构"><span>文件结构</span></a></h4><ul><li><strong>基本结构</strong></li></ul><p>顺序：<code>template</code> -&gt; <code>script</code> -&gt; <code>style</code>。一个组件尽量不要超过<strong>200</strong>行，页面包含独立部分时尽量分离成子组件。<strong>页面应该由各个小组件组成</strong></p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-a</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-b</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-c</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- 声明语言，并且添加scoped --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">...</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>组件/实例的选项顺序</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">- name          (全局引用)</span>
<span class="line">- components    (模板依赖)</span>
<span class="line">- directives    ...</span>
<span class="line">- filters       ...</span>
<span class="line">- mixins        (组合)</span>
<span class="line">- props         (接口)</span>
<span class="line">- data          (本地状态属性)</span>
<span class="line">- computed      ...</span>
<span class="line">- watch         (响应回调)</span>
<span class="line">- created       (生命周期函数)</span>
<span class="line">- mounted       ...</span>
<span class="line">- methods       (实例属性)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-router-规范" tabindex="-1"><a class="header-anchor" href="#vue-router-规范"><span>Vue Router 规范</span></a></h4><ul><li><strong>router path</strong>采用<code>kebab-case</code>格式。</li></ul><blockquote><p>用下划线（如：<code>/user_info</code>）或<code>camelCase</code>（如：<code>/userInfo</code>)的单词被当成一个单词，搜索引擎无法区分语义。</p></blockquote><ul><li><strong>router name</strong>采用<code>kebabCase</code>格式。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user_info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// user_info当成一个单词</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UserInfo&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> UserInfo<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39; - 用户&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 能解析成user info</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UserInfo&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> UserInfo<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39; - 用户&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件开发规范" tabindex="-1"><a class="header-anchor" href="#组件开发规范"><span>组件开发规范</span></a></h3><h4 id="_1-注册组件" tabindex="-1"><a class="header-anchor" href="#_1-注册组件"><span>1. 注册组件</span></a></h4><p>注册组件的时候，全部使用 <code>PascalCase</code> 格式。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import UserBook from &#39;./user/UserBook&#39;</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-props-命名规范" tabindex="-1"><a class="header-anchor" href="#_2-props-命名规范"><span>2. props 命名规范</span></a></h4><ul><li>在声明<code>prop</code>的时候，其命名应该始终使用<code>camelCase</code>，而在模板中应该始终使用<code>kebab-case</code></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;welcome-message greeting-text=&quot;hi&quot;&gt;&lt;/welcome-message&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  props: {</span>
<span class="line">    greetingText: String;</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>prop 定义应该尽量详细</strong><strong>1.申明类型 type（必填）</strong><strong>2.提供默认值（必填</strong><strong>3.校验类型(可选)</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// bad 这样做只有开发原型系统时可以接受</span>
<span class="line">props: [&#39;status&#39;]</span>
<span class="line">// good</span>
<span class="line">props: {</span>
<span class="line"> status: {</span>
<span class="line">   type: String,</span>
<span class="line">   required: true,</span>
<span class="line">   default: &#39;&#39;</span>
<span class="line">   }</span>
<span class="line"> }</span>
<span class="line">}</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="methods-命名规范" tabindex="-1"><a class="header-anchor" href="#methods-命名规范"><span>methods 命名规范</span></a></h3><ul><li><strong>驼峰式命名<code>camelCase</code>，操作性函数统一使用动词或者动词+名词形式</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">jumpPage() {</span>
<span class="line">}</span>
<span class="line">openCarInfoDialog () {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>请求数据方法，以 data 结尾</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">getListData () {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">postFormData () {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>注:</strong> 尽量使用常用单词开头（set、get、go、can、has、is）</li></ul><p>** <strong>附：</strong> 函数方法常用的动词:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">get 获取/set 设置,</span>
<span class="line">add 增加/remove 删除</span>
<span class="line">create 创建/destory 移除</span>
<span class="line">start 启动/stop 停止</span>
<span class="line">open 打开/close 关闭,</span>
<span class="line">read 读取/write 写入</span>
<span class="line">load 载入/save 保存,</span>
<span class="line">create 创建/destroy 销毁</span>
<span class="line">begin 开始/end 结束,</span>
<span class="line">backup 备份/restore 恢复</span>
<span class="line">import 导入/export 导出,</span>
<span class="line">split 分割/merge 合并</span>
<span class="line">inject 注入/extract 提取,</span>
<span class="line">attach 附着/detach 脱离</span>
<span class="line">bind 绑定/separate 分离,</span>
<span class="line">view 查看/browse 浏览</span>
<span class="line">edit 编辑/modify 修改,</span>
<span class="line">select 选取/mark 标记</span>
<span class="line">copy 复制/paste 粘贴,</span>
<span class="line">undo 撤销/redo 重做</span>
<span class="line">insert 插入/delete 移除,</span>
<span class="line">add 加入/append 添加</span>
<span class="line">clean 清理/clear 清除,</span>
<span class="line">index 索引/sort 排序</span>
<span class="line">find 查找/search 搜索,</span>
<span class="line">increase 增加/decrease 减少</span>
<span class="line">play 播放/pause 暂停,</span>
<span class="line">launch 启动/run 运行</span>
<span class="line">compile 编译/execute 执行,</span>
<span class="line">debug 调试/trace 跟踪</span>
<span class="line">observe 观察/listen 监听,</span>
<span class="line">build 构建/publish 发布</span>
<span class="line">input 输入/output 输出,</span>
<span class="line">encode 编码/decode 解码</span>
<span class="line">encrypt 加密/decrypt 解密,</span>
<span class="line">compress 压缩/decompress 解压缩</span>
<span class="line">pack 打包/unpack 解包,</span>
<span class="line">parse 解析/emit 生成</span>
<span class="line">connect 连接/disconnect 断开,</span>
<span class="line">send 发送/receive 接收</span>
<span class="line">download 下载/upload 上传,</span>
<span class="line">refresh 刷新/synchronize 同步</span>
<span class="line">update 更新/revert 复原,</span>
<span class="line">lock 锁定/unlock 解锁</span>
<span class="line">check out 签出/check in 签入,</span>
<span class="line">submit 提交/commit 交付</span>
<span class="line">push 推/pull 拉,</span>
<span class="line">expand 展开/collapse 折叠</span>
<span class="line">begin 起始/end 结束,</span>
<span class="line">start 开始/finish 完成</span>
<span class="line">enter 进入/exit 退出,</span>
<span class="line">abort 放弃/quit 离开</span>
<span class="line">obsolete 废弃/depreciate 废旧,</span>
<span class="line">collect 收集/aggregate 聚集</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个属性的标签元素规范" tabindex="-1"><a class="header-anchor" href="#多个属性的标签元素规范"><span>多个属性的标签元素规范</span></a></h3><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&amp;h=400&amp;f=png&amp;s=3451<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vue Logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fooattribute<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>barattribute<span class="token punctuation">&quot;</span></span> <span class="token attr-name">baz</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bazattribute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span></span>
<span class="line">  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&amp;h=400&amp;f=png&amp;s=3451<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vue Logo<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span></span>
<span class="line">  <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fooattribute<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">bar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>barattribute<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">baz</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bazattribute<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素属性的顺序" tabindex="-1"><a class="header-anchor" href="#元素属性的顺序"><span>元素属性的顺序</span></a></h3><p>原生属性放前面，指令放后面</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">- class</span>
<span class="line">  - id,ref</span>
<span class="line">  - name</span>
<span class="line">  - data-*</span>
<span class="line">  - src, for, type, href,value,max-length,max,min,pattern</span>
<span class="line">  - title, alt，placeholder</span>
<span class="line">  - aria-*, role</span>
<span class="line">  - required,readonly,disabled</span>
<span class="line">  - is</span>
<span class="line">  - v-for</span>
<span class="line">  - key</span>
<span class="line">  - v-if</span>
<span class="line">  - v-else-if</span>
<span class="line">  - v-else</span>
<span class="line">  - v-show</span>
<span class="line">  - v-cloak</span>
<span class="line">  - v-pre</span>
<span class="line">  - v-once</span>
<span class="line">  - v-model</span>
<span class="line">  - v-bind,:</span>
<span class="line">  - v-on,@</span>
<span class="line">  - v-html</span>
<span class="line">  - v-text</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令规范" tabindex="-1"><a class="header-anchor" href="#指令规范"><span>指令规范</span></a></h3><ul><li>指令有缩写则一律采用缩写形式</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// bad</span>
<span class="line">v-bind:code=&quot;code&quot;</span>
<span class="line">v-on:click=&quot;getUserData&quot;</span>
<span class="line">// good</span>
<span class="line">:code=&quot;code&quot;</span>
<span class="line">@click=&quot;getUserData&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一，添加 key 可提高性能</li></ul><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ todo.text }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ todo.text }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>避免 v-if 和 v-for 同时用在一个元素上（性能问题）</li></ul><p>出现这样的需求，有两种解决方案： 1.将数据替换为一个计算属性，让其返回过滤后的列表</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in users<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.isActive<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ user.name }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in activeUsers<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ user.name }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">activeUsers</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> user<span class="token punctuation">.</span>isActive</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.将 v-if 移动至容器元素上 (比如 ul, ol)</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in users<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shouldShowUsers<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ user.name }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shouldShowUsers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in users<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      {{ user.name }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53)])])}const o=n(l,[["render",p]]),u=JSON.parse('{"path":"/blogs/guifan/Vue guifan.html","title":"Vue 规范","lang":"zh-CN","frontmatter":{"title":"Vue 规范","date":"2022-04-15T00:00:00.000Z","categories":["规范"],"tags":["规范"],"home":false},"headers":[{"level":2,"title":"Vue 规范","slug":"vue-规范","link":"#vue-规范","children":[{"level":3,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[]},{"level":3,"title":"组件开发规范","slug":"组件开发规范","link":"#组件开发规范","children":[]},{"level":3,"title":"methods 命名规范","slug":"methods-命名规范","link":"#methods-命名规范","children":[]},{"level":3,"title":"多个属性的标签元素规范","slug":"多个属性的标签元素规范","link":"#多个属性的标签元素规范","children":[]},{"level":3,"title":"元素属性的顺序","slug":"元素属性的顺序","link":"#元素属性的顺序","children":[]},{"level":3,"title":"指令规范","slug":"指令规范","link":"#指令规范","children":[]}]}],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/规范/Vue 规范.md"}');export{o as comp,u as data};
