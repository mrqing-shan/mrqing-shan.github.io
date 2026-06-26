import{_ as i,c as l,d as t,a as n,e as a,b as p,r as c,o as r}from"./app-CsErcU0n.js";const d={},o={href:"https://www.vuepress.cn/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"};function u(m,s){const e=c("ExternalLinkIcon");return r(),l("div",null,[s[2]||(s[2]=t(`<p>将 VuePress 项目部署到 GitHub Pages 大致需要以下几步</p><p>注: 需要 git 配置完毕，GitHub Pages 仓库已创建，才可进行以下几步</p><ul><li>在项目根目录新建一个 deploy.sh 文件，文件内容如下 （请自行判断去掉高亮行的注释）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生成静态文件</span></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入生成的文件夹（ 进入VuePress打包后的文件夹根目录 ）</span></span>
<span class="line"><span class="token builtin class-name">cd</span> public</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果是发布到自定义域名</span></span>
<span class="line highlighted"><span class="token comment"># echo &#39;www.baidu.com(自定义域名)&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line highlighted"><span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line highlighted"><span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> -</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>package.json 添加代码：</li></ul><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deploy.sh&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>部署到 GitHub Pages</li></ul><div class="language-npm line-numbers-mode" data-highlighter="prismjs" data-ext="npm" data-title="npm"><pre><code><span class="line">npm run deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8)),n("p",null,[s[1]||(s[1]=a("转载自：",-1)),n("a",o,[s[0]||(s[0]=a("VuePress Github Pages",-1)),p(e)])])])}const b=i(d,[["render",u]]),g=JSON.parse('{"path":"/blogs/web/VuePress xiangmubushudao GitHub.html","title":"VuePress 项目部署到 GitHub Pages","lang":"zh-CN","frontmatter":{"title":"VuePress 项目部署到 GitHub Pages","date":"2020-09-23T00:00:00.000Z","categories":["web"],"tags":["GitHub Pages"]},"headers":[],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/web/VuePress 项目部署到 GitHub.md"}');export{b as comp,g as data};
