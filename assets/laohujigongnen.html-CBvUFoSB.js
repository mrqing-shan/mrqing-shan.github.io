import{_ as n,c as i,d as a,o as l}from"./app-CsErcU0n.js";const e={};function d(p,s){return l(),i("div",null,[...s[0]||(s[0]=[a(`<ul><li>该老虎机抽奖功能兼容 小程序/APP/H5，主要通过 <code>swiper</code> 内置组件实现</li></ul><h2 id="组件配置" tabindex="-1"><a class="header-anchor" href="#组件配置"><span>组件配置</span></a></h2><ul><li>子组件</li></ul><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue" data-title="Vue"><pre><code><span class="line">&lt;!-- m-slotMachine-item.vue --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;view class=&quot;draw-swiper-wrap&quot;&gt;</span>
<span class="line">    &lt;swiper class=&quot;draw-swiper&quot; skip-hidden-item-layout circular disable-touch acceleration :indicator-dots=&quot;false&quot;</span>
<span class="line">      :vertical=&quot;true&quot; :display-multiple-items=&quot;1&quot; :current=&quot;currentIndex&quot; :autoplay=&quot;isAutoplay&quot;</span>
<span class="line">      :interval=&quot;interval&quot; :duration=&quot;duration&quot; @change=&quot;onChange&quot;&gt;</span>
<span class="line">      &lt;swiper-item v-for=&quot;(item, index) in prizeArr&quot; :key=&quot;index&quot;&gt;</span>
<span class="line">        &lt;image class=&quot;draw-prize-img&quot; mode=&quot;aspectFill&quot; :src=&quot;item.img&quot;&gt;&lt;/image&gt;</span>
<span class="line">      &lt;/swiper-item&gt;</span>
<span class="line">    &lt;/swiper&gt;</span>
<span class="line">  &lt;/view&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  export default {</span>
<span class="line">    props: {</span>
<span class="line">      index: { // 结果下标</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 0</span>
<span class="line">      },</span>
<span class="line">      prizeArr: { // 奖品数组</span>
<span class="line">        type: Array,</span>
<span class="line">        default: () =&gt; {</span>
<span class="line">          return [];</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      interval: { // 自动切换时间间隔</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 0</span>
<span class="line">      },</span>
<span class="line">      duration: { // 滑动动画时长</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 0</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    data() {</span>
<span class="line">      return {</span>
<span class="line">        isAutoplay: false, // 是否开始抽奖 (自动播放)</span>
<span class="line">        currentIndex: 0, // swiper对应的index</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">      onChange(event) {</span>
<span class="line">        if (this.index === event.detail.current) {</span>
<span class="line">          this.isAutoplay = false;</span>
<span class="line">          // 抽奖结束</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            this.$emit(&quot;drawStop&quot;)</span>
<span class="line">          }, 500)</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      //触发滚动</span>
<span class="line">      startScroll() {</span>
<span class="line">        this.isAutoplay = true;</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot; scoped&gt;</span>
<span class="line">  .draw-swiper-wrap {</span>
<span class="line">    width: 100%;</span>
<span class="line">    height: 100%;</span>
<span class="line">    display: flex;</span>
<span class="line">    align-items: center;</span>
<span class="line">    flex: 1;</span>
<span class="line"></span>
<span class="line">    .draw-swiper {</span>
<span class="line">      width: 100%;</span>
<span class="line">      height: 100%;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .draw-prize-img {</span>
<span class="line">      width: 100%;</span>
<span class="line">      height: 100%;</span>
<span class="line">      border-radius: 10rpx;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>父组件</li></ul><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue" data-title="Vue"><pre><code><span class="line">&lt;!-- m-slotMachine.vue --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;view class=&quot;m-slotMachine-wrap&quot;&gt;</span>
<span class="line">    &lt;view class=&quot;m-slotMachine&quot;&gt;</span>
<span class="line">      &lt;m-slot-machine-item :ref=&quot;\`slotMachine\${index}\`&quot; :interval=&quot;50&quot; :duration=&quot;100&quot; :prizeArr=&quot;prizeArr&quot;</span>
<span class="line">        :index=&quot;results[index]&quot; v-for=&quot;(item, index) in column&quot; :key=&quot;index&quot; @drawStop=&quot;stop(index)&quot; /&gt;</span>
<span class="line">    &lt;/view&gt;</span>
<span class="line">  &lt;/view&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import mSlotMachineItem from &#39;./m-slotMachine-item.vue&#39;;</span>
<span class="line">  export default {</span>
<span class="line">    components: {</span>
<span class="line">      mSlotMachineItem</span>
<span class="line">    },</span>
<span class="line">    props: {</span>
<span class="line">      // 抽奖秒数</span>
<span class="line">      seconds: {</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 3</span>
<span class="line">      },</span>
<span class="line">      // 每个奖池滚动间隔</span>
<span class="line">      interval: {</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 200</span>
<span class="line">      },</span>
<span class="line">      // 奖池</span>
<span class="line">      prizeArr: {</span>
<span class="line">        type: Array,</span>
<span class="line">        default: () =&gt; {</span>
<span class="line">          // 数组内容解析，奖池图片的默认尺寸为 80 * 120</span>
<span class="line">          // {</span>
<span class="line">          //   name: &#39;奖品 名称&#39;</span>
<span class="line">          //   value: &#39;奖品 ID&#39;</span>
<span class="line">          //   img: &#39;图片 url 地址&#39;</span>
<span class="line">          // }</span>
<span class="line">          return []</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      // 抽奖列数</span>
<span class="line">      column: {</span>
<span class="line">        type: Number,</span>
<span class="line">        default: 3</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    data() {</span>
<span class="line">      return {</span>
<span class="line">        luckyDrawLoading: false, // 抽奖中</span>
<span class="line">        results: [-1,-1,-1], // 开奖结果</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    watch: {</span>
<span class="line">      prizeArr(newVal) {</span>
<span class="line">        // 初始化随机</span>
<span class="line">        this.$nextTick(() =&gt; {</span>
<span class="line">          this.results = this.getResults()</span>
<span class="line">        })</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">      // 开始抽奖</span>
<span class="line">      start(id = undefined) {</span>
<span class="line">        if (this.luckyDrawLoading) {</span>
<span class="line">          return;</span>
<span class="line">        }</span>
<span class="line">        // 防止重复点击</span>
<span class="line">        this.luckyDrawLoading = true;</span>
<span class="line">        // 初始化结果</span>
<span class="line">        this.results = [-1,-1,-1]</span>
<span class="line">        this.results.forEach((item, index) =&gt; {</span>
<span class="line">          // 开始滚动</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            this.$refs[\`slotMachine\${index}\`][0].startScroll();</span>
<span class="line">          }, (index * interval));</span>
<span class="line">        })</span>
<span class="line">        let {</span>
<span class="line">          interval,</span>
<span class="line">          seconds</span>
<span class="line">        } = this</span>
<span class="line">        let getArr = this.getResults(id)</span>
<span class="line">        this.results.forEach((item, index) =&gt; {</span>
<span class="line">          // 开始滚动</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            this.$set(this.results, index, getArr[index])</span>
<span class="line">          }, (seconds * 1000) + (index * interval));</span>
<span class="line">        })</span>
<span class="line">      },</span>
<span class="line">      // 抽奖结束</span>
<span class="line">      stop(index) {</span>
<span class="line">        if(index !== this.results.length - 1) {</span>
<span class="line">          return</span>
<span class="line">        }</span>
<span class="line">        this.luckyDrawLoading = false;</span>
<span class="line">        this.$emit(&#39;drawEnd&#39;)</span>
<span class="line">      },</span>
<span class="line">      // 获取结果 or 随机</span>
<span class="line">      getRandom(arr = []) {</span>
<span class="line">        let max = this.prizeArr.length - 1;</span>
<span class="line">        let index = Math.floor(Math.random() * (max - 1 + 1) + 1)</span>
<span class="line">        if (!arr.includes(index)) {</span>
<span class="line">          return index</span>
<span class="line">        } else {</span>
<span class="line">          return this.getRandom(arr)</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      // 获取中奖结果下标数组</span>
<span class="line">      getRandomArr(id = undefined) {</span>
<span class="line">        let results = [];</span>
<span class="line">        for(let i = 0;i &lt; this.column;i++) {</span>
<span class="line">          results.push(</span>
<span class="line">            id ?</span>
<span class="line">            this.prizeArr.findIndex(item =&gt; item.value === id) :</span>
<span class="line">            this.getRandom(results)</span>
<span class="line">          )</span>
<span class="line">        }</span>
<span class="line">        return results</span>
<span class="line">      },</span>
<span class="line">      // 获取中奖结果</span>
<span class="line">      getResults(id = undefined) {</span>
<span class="line">        if(!this.prizeArr.length){</span>
<span class="line">          return uni.showToast({</span>
<span class="line">            title: &#39;奖池不能为空&#39;,</span>
<span class="line">            duration: 2000,</span>
<span class="line">            icon: &#39;none&#39;</span>
<span class="line">          });</span>
<span class="line">        }</span>
<span class="line">        // id 为中奖</span>
<span class="line">        let arr = this.getRandomArr(id);</span>
<span class="line">        return arr</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot; scoped&gt;</span>
<span class="line">  .m-slotMachine-wrap{</span>
<span class="line">    width: 558rpx;</span>
<span class="line">    height: 280rpx;</span>
<span class="line">    .m-slotMachine {</span>
<span class="line">      height: 100%;</span>
<span class="line">      display: flex;</span>
<span class="line">      align-items: center;</span>
<span class="line">      justify-content: space-between;</span>
<span class="line">      position: relative;</span>
<span class="line">      &amp;::before {</span>
<span class="line">        position: absolute;</span>
<span class="line">        top: 0;</span>
<span class="line">        left: 0;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 100%;</span>
<span class="line">        background-color: rgba(0, 0, 0, 0);</span>
<span class="line">        z-index: 6;</span>
<span class="line">        content: &#39;&#39;;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue" data-title="Vue"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;view&gt;</span>
<span class="line">    &lt;view class=&quot;draw_wrap&quot;&gt;</span>
<span class="line">      &lt;m-slotMachine ref=&quot;draw&quot; :prizeArr=&quot;prizeArr&quot; @drawEnd=&quot;end&quot;/&gt;</span>
<span class="line">    &lt;/view&gt;</span>
<span class="line">    &lt;button @click=&quot;drawClick()&quot;&gt;抽奖&lt;/button&gt;</span>
<span class="line">  &lt;/view&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import mSlotMachine from &quot;@/components/m-slotMachine/m-slotMachine.vue&quot;;</span>
<span class="line">  export default {</span>
<span class="line">    components: {</span>
<span class="line">      mSlotMachine</span>
<span class="line">    },</span>
<span class="line">    data() {</span>
<span class="line">      return {</span>
<span class="line">        prizeArr: [],</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    onLoad() {</span>
<span class="line">      this.init()</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">      init() {</span>
<span class="line">        // 初始化获取奖池信息</span>
<span class="line">        this.prizeArr = [</span>
<span class="line">          {</span>
<span class="line">            name: &#39;iPhone13&#39;,</span>
<span class="line">            value: &#39;iPhone&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            name: &#39;airPods3&#39;,</span>
<span class="line">            value: &#39;airPods&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            name: &#39;行李箱&#39;,</span>
<span class="line">            value: &#39;luggage&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            name: &#39;风筒&#39;,</span>
<span class="line">            value: &#39;dryer&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            name: &#39;平行车&#39;,</span>
<span class="line">            value: &#39;balanceCar&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            name: &#39;iPad5&#39;,</span>
<span class="line">            value: &#39;iPad&#39;,</span>
<span class="line">            img: require(&#39;@/xxx.png&#39;)</span>
<span class="line">          }</span>
<span class="line">        ]</span>
<span class="line">      },</span>
<span class="line">      drawClick(){</span>
<span class="line">        // 模拟抽奖结果，随机一个奖品，实际可根据后端返回的奖品 ID 进行配置</span>
<span class="line">        let id = this.$refs.draw.prizeArr[this.$refs.draw.getRandom()].value</span>
<span class="line">        this.$refs.draw.start(id);</span>
<span class="line">      },</span>
<span class="line">      end() {</span>
<span class="line">        console.log(&#39;抽奖结束&#39;)</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot; scoped&gt;</span>
<span class="line">  page {</span>
<span class="line">    background: #fff;</span>
<span class="line">    padding: 0 20rpx;</span>
<span class="line">  }</span>
<span class="line">  .draw_wrap{</span>
<span class="line">    display: flex;</span>
<span class="line">    justify-content: center;</span>
<span class="line">    padding: 80rpx 0;</span>
<span class="line">    ::v-deep{</span>
<span class="line">      .draw-swiper-wrap{</span>
<span class="line">        width: 160rpx;</span>
<span class="line">        height: 240rpx;</span>
<span class="line">        border-radius: 10rpx;</span>
<span class="line">        border: 2rpx solid #d2d2d2;</span>
<span class="line">        overflow: hidden;</span>
<span class="line">        &amp; + .draw-swiper-wrap{</span>
<span class="line">          margin-left: 20rpx;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)])])}const v=n(e,[["render",d]]),r=JSON.parse('{"path":"/blogs/Vue/laohujigongnen.html","title":"uni-app 老虎机功能","lang":"zh-CN","frontmatter":{"title":"uni-app 老虎机功能","date":"2022-09-19T00:00:00.000Z","categories":["Vue"],"tags":["Vue","uni-app"]},"headers":[{"level":2,"title":"组件配置","slug":"组件配置","link":"#组件配置","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1782186555000,"updatedTime":1782186555000,"contributors":[{"name":"qingshan","email":"muyan_jun@163.com","commits":1}]},"filePathRelative":"blogs/Vue/老虎机功能.md"}');export{v as comp,r as data};
