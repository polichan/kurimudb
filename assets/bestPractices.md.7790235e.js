import{o as n,c as s,a}from"./app.1f1a6988.js";const e='{"title":"最佳实践","description":"","frontmatter":{},"headers":[{"level":2,"title":"模型方法","slug":"模型方法"},{"level":3,"title":"只用方法修改数据","slug":"只用方法修改数据"},{"level":3,"title":"只修改自己的模型","slug":"只修改自己的模型"},{"level":2,"title":"模型数据","slug":"模型数据"},{"level":3,"title":"避免深层赋值","slug":"避免深层赋值"},{"level":2,"title":"模型命名","slug":"模型命名"},{"level":2,"title":"和视图框架结合","slug":"和视图框架结合"},{"level":3,"title":"Vue3","slug":"vue3"},{"level":3,"title":"React","slug":"react"}],"relativePath":"bestPractices.md","lastUpdated":1619407137621}',t={},p=a('<h1 id="最佳实践"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h1><p>我们总结了一份 Kurimudb 的最佳实践。如果愿意遵守这些简单的约定，往往有助于我们规避 Bug、写出质量更高的代码、或陷入&quot;这个代码要写在哪里&quot;这样的纠结。</p><h2 id="模型方法"><a class="header-anchor" href="#模型方法" aria-hidden="true">#</a> 模型方法</h2><h3 id="只用方法修改数据"><a class="header-anchor" href="#只用方法修改数据" aria-hidden="true">#</a> 只用方法修改数据</h3><p>对模型增删改查的代码，强烈推荐写在其模型方法里。不推荐写在视图组件中，再通过 <code>yourModel.data</code> 来修改模型的数据。</p><p>这么做除了方便我们日后复用代码，还能解耦视图层，和使我们的代码意图更加清晰。关于这一点，<code>Vuex/Redux</code> 的 <code>Action</code> 也都有类似的约定。</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// Bad ✖ 在视图组件中直接修改模型的值</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>themeSize <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>themeColor <span class="token operator">=</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Good ✔ 将操作写成一个方法，视图组件去调用</span>\nconfigState<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="只修改自己的模型"><a class="header-anchor" href="#只修改自己的模型" aria-hidden="true">#</a> 只修改自己的模型</h3><p>模型方法应当只操作自己模型的数据，不应操作其它模型的数据。如果你要做一件事，它涉及了多个模型的操作，你可以分别调用它们模型上的各自方法，或者采用<a href="https://stackoverflow.com/questions/130794/what-is-dependency-injection" target="_blank" rel="noopener noreferrer">依赖注入</a>的方式。</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// Bad ✖ 在模型方法中操作别的模型</span>\n<span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>\n  <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token parameter">themeId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> theme <span class="token operator">=</span> themeList<span class="token punctuation">.</span>data<span class="token punctuation">[</span>themeId<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>activeTheme <span class="token operator">=</span> theme<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Good ✔ 通过依赖注入来解耦</span>\n<span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>\n  <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>activeTheme <span class="token operator">=</span> theme<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="模型数据"><a class="header-anchor" href="#模型数据" aria-hidden="true">#</a> 模型数据</h2><h3 id="避免深层赋值"><a class="header-anchor" href="#避免深层赋值" aria-hidden="true">#</a> 避免深层赋值</h3><p>当你存入一个对象或数组时，如果要修改其属性值，你可能会凭直觉，写出如下的代码：</p><div class="language-js line-numbers-mode"><pre><code>local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> <span class="token string">&quot;white&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nlocal<span class="token punctuation">.</span>data<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但这样写<strong>无法持久化数据</strong>。原因是，你取出了 <code>theme</code> 对象的值，却没有将改动后的结果保存。上面的代码，本质上相当于：</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><div class="highlighted"> </div><br></div><pre><code>local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> <span class="token string">&quot;white&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> theme <span class="token operator">=</span> local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>theme<span class="token punctuation">;</span>\ntheme<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// you also need: local.data.theme = theme;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>由于 Kurimudb 的设计不同，我们不推荐像 Vuex 那样，将一组状态存入到一个多层嵌套的对象中。我们推荐建立一个模型，将相关状态存入到此模型中。模型的层级可以通过建立不同文件夹来实现。</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// bad ✖ 将相关数据存入一个对象</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> <span class="token string">&quot;white&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// good ✔ 利用变量名来区分归类</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>themeColor <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>themeMode <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// good ✔ 建立一个模型，存储此类数据</span>\nthemeState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>\nthemeState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果要存入一组数据，我们同样推荐使用<strong>集合模型</strong>来代替数组：</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// bad ✖ 将数据存为数组，并存入键值对中</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>drafts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> drafts <span class="token operator">=</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>drafts<span class="token punctuation">;</span>\ndrafts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconfigState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>drafts <span class="token operator">=</span> drafts<span class="token punctuation">;</span>\n\n<span class="token comment">// good ✔ 建立一个集合模型，存储此类数据</span>\ndraftModel<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="模型命名"><a class="header-anchor" href="#模型命名" aria-hidden="true">#</a> 模型命名</h2><p>我们推荐使用 <code>名词 + State</code> 作为键值对模型的名称，使用 <code>名词 + List</code> 作为集合模型的名称。这样通过名称，我们就可以方便地分辨它是什么类型的模型。</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// bad ✖ 直接使用 `名词` 或 `名词 + Model` 作为模型名</span>\n<span class="token keyword">class</span> <span class="token class-name">Tab</span> <span class="token operator">...</span>\n<span class="token keyword">class</span> <span class="token class-name">TabModel</span> <span class="token operator">...</span>\n\n<span class="token comment">// good ✔ 使用 `名称 + (State/List)` 作为模型名</span>\n<span class="token keyword">class</span> <span class="token class-name">TabState</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token operator">...</span>\n<span class="token keyword">class</span> <span class="token class-name">TabList</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>collection</span> <span class="token operator">...</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>拿一个实际场景来举例，假设我们要为中后台系统制作一个标签页功能，我们需要建立下面两个模型：</p><ul><li><p><strong><code>tabList</code> 模型：</strong> 是集合模型，存放所打开的标签页。里面每个项目都包括名称、图标、URL、顺序 等字段……</p></li><li><p><strong><code>tabState</code> 模型：</strong> 是键值对模型，存放标签页展现形式、当前所激活的标签页 id……</p></li></ul><p>如果 <code>tabState</code> 直接使用 <code>tab</code> 作为模型名，那如果需要 <code>tabList</code> 时，就很难为其起准确的名字。而且，以单名词命名也容易产生冲突：例如你在标签页相关的视图代码中，很容易使用 <code>tab</code> 作为变量名，但由于它和模型名称重复了，所以导致你不得不改名。</p><h2 id="和视图框架结合"><a class="header-anchor" href="#和视图框架结合" aria-hidden="true">#</a> 和视图框架结合</h2><h3 id="vue3"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h3><p>待续 🐸</p><h3 id="react"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3><p>待续 🐸</p>',31);t.render=function(a,e,t,o,c,l){return n(),s("div",null,[p])};export default t;export{e as __pageData};
