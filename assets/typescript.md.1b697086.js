import{o as n,c as s,a}from"./app.1f1a6988.js";const p='{"title":"TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"键值对模型","slug":"键值对模型"},{"level":2,"title":"集合模型","slug":"集合模型"}],"relativePath":"typescript.md","lastUpdated":1619085930020}',e={},t=a('<h1 id="typescript"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>Kurimudb 支持 TypeScript，除了为你带来代码提示以外，还可以依靠泛型，限制存入数据的格式和类型。</p><h2 id="键值对模型"><a class="header-anchor" href="#键值对模型" aria-hidden="true">#</a> 键值对模型</h2><div class="language-ts line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Models <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> LocalStorageDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-driver-localstorage&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">ThemeInterface</span> <span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  fontSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  background<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ThemeState</span> <span class="token keyword">extends</span> <span class="token class-name">Models</span><span class="token punctuation">.</span>keyValue<span class="token operator">&lt;</span>\n  ThemeInterface<span class="token punctuation">,</span> <span class="token comment">// 限制模型的数据格式，即 `themeState.data` 的格式</span>\n  LocalStorageDriver <span class="token comment">// 若传入驱动，可获得驱动专有 Api 的代码提示</span>\n<span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;themeState&quot;</span><span class="token punctuation">,</span>\n      <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n      driver<span class="token operator">:</span> LocalStorageDriver<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">ThemeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="集合模型"><a class="header-anchor" href="#集合模型" aria-hidden="true">#</a> 集合模型</h2><div class="language-ts line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Models <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> LocalStorageDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-driver-localstorage&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">NoteItemInterface</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">NoteList</span> <span class="token keyword">extends</span> <span class="token class-name">Models</span><span class="token punctuation">.</span>collection<span class="token operator">&lt;</span>\n  NoteItemInterface<span class="token punctuation">,</span> <span class="token comment">// 限制集合模型中，每个子项目的格式</span>\n  LocalStorageDriver <span class="token comment">// 若传入驱动，可获得驱动专有 Api 的代码提示</span>\n<span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;noteList&quot;</span><span class="token punctuation">,</span>\n      <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>\n      driver<span class="token operator">:</span> LocalStorageDriver<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">NoteList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',6);e.render=function(a,p,e,o,r,c){return n(),s("div",null,[t])};export default e;export{p as __pageData};
