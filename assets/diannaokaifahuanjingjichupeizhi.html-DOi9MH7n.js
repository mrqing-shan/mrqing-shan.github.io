import{_ as i,c as t,a as s,e as a,b as l,d as p,r,o}from"./app-CsErcU0n.js";const c={},d={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://registry.npmmirror.com/binary.html?path=git-for-windows/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},v={start:"4"},b={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/varHarrie/varharrie.github.io/issues/10",target:"_blank",rel:"noopener noreferrer"},g={href:"https://repo.trojan-cdn.com/clash_for_windows_pkg/LatestRelease/",target:"_blank",rel:"noopener noreferrer"};function f(h,n){const e=r("ExternalLinkIcon");return o(),t("div",null,[n[14]||(n[14]=s("ul",null,[s("li",null,[a("该文档主要用于自用，为了快捷的配置 "),s("code",null,"Windows"),a(" 电脑开发环境用")])],-1)),s("ol",null,[s("li",null,[s("p",null,[n[2]||(n[2]=a("下载 ",-1)),s("a",d,[n[0]||(n[0]=a("Git",-1)),l(e)]),n[3]||(n[3]=a("，由于网络问题，可以通过",-1)),s("a",m,[n[1]||(n[1]=a("淘宝镜像下载",-1)),l(e)])])]),s("li",null,[s("p",null,[n[5]||(n[5]=a("安装 ",-1)),n[6]||(n[6]=s("code",null,"nvm",-1)),n[7]||(n[7]=a(" nodejs 管理包工具，",-1)),s("a",u,[n[4]||(n[4]=a("nvm-windows 版本下载",-1)),l(e)]),n[8]||(n[8]=a("，下载后一路默认安装即可",-1))])])]),n[15]||(n[15]=p(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装后看看版本号，成功执行就是安装成功</span></span>
<span class="line">nvm <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装指定 node 版本，例如安装 20.11.1 版本： nvm install 20.11.1</span></span>
<span class="line">nvm <span class="token function">install</span> <span class="token punctuation">[</span>版本号<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用指定版本的node</span></span>
<span class="line">nvm use <span class="token punctuation">[</span>版本号<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体命令查看[nvm 的安装与使用](/blogs/web/nvm deanzhuangyushiyong.html)</li></ul><ol start="3"><li>安装 <code>nrm</code>（ npm 的镜像源管理工具），快捷的切换镜像源</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看所有源名称</span></span>
<span class="line">nrm <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 基本源如下，带*的是当前使用的源，表明当前的镜像源</span></span>
<span class="line">* <span class="token function">npm</span> ---------- https://registry.npmjs.org/</span>
<span class="line">  <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/</span>
<span class="line">  tencent ------ https://mirrors.cloud.tencent.com/npm/</span>
<span class="line">  cnpm --------- https://r.cnpmjs.org/</span>
<span class="line">  taobao ------- https://registry.npmmirror.com/</span>
<span class="line">  npmMirror ---- https://skimdb.npmjs.com/registry/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换源，例如切换 taobao，nrm use taobao</span></span>
<span class="line">nrm use <span class="token punctuation">[</span>源名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 手动添加源</span></span>
<span class="line">nrm <span class="token function">add</span> registry <span class="token punctuation">[</span>源地址<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试源响应速度</span></span>
<span class="line">nrm <span class="token builtin class-name">test</span> <span class="token function">npm</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 响应速度示例</span></span>
<span class="line">* <span class="token function">npm</span> ---- <span class="token number">712</span> ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),s("ol",v,[s("li",null,[s("p",null,[n[11]||(n[11]=a("安装",-1)),s("a",b,[n[9]||(n[9]=a("vscode",-1)),l(e)]),n[12]||(n[12]=a("，",-1)),s("a",k,[n[10]||(n[10]=a("安装基础插件，按需安装",-1)),l(e)])])]),s("li",null,[s("p",null,[s("a",g,[n[13]||(n[13]=a("clash 镜像",-1)),l(e)])])])])])}const j=i(c,[["render",f]]),w=JSON.parse('{"path":"/blogs/guifan/diannaokaifahuanjingjichupeizhi.html","title":"前端开发电脑开发环境基础配置","lang":"zh-CN","frontmatter":{"title":"前端开发电脑开发环境基础配置","date":"2024-03-16T00:00:00.000Z","categories":["规范"],"tags":["规范"],"home":false},"headers":[],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/规范/电脑开发环境基础配置.md"}');export{j as comp,w as data};
