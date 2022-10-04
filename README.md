# React-basic

## Simple routing react
<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(0, 0, 0); color: rgb(248, 248, 248);"><span class="hljs-keyword" style="color: rgb(150, 203, 254);">import</span> React <span class="hljs-keyword" style="color: rgb(150, 203, 254);">from</span> <span class="hljs-string" style="color: rgb(168, 255, 96);">'react'</span>;
<span class="hljs-keyword" style="color: rgb(150, 203, 254);">import</span> { createRoot } <span class="hljs-keyword" style="color: rgb(150, 203, 254);">from</span> <span class="hljs-string" style="color: rgb(168, 255, 96);">'react-dom/client'</span>;
<span class="hljs-keyword" style="color: rgb(150, 203, 254);">import</span> { BrowserRouter, Link, Route, Routes } <span class="hljs-keyword" style="color: rgb(150, 203, 254);">from</span> <span class="hljs-string" style="color: rgb(168, 255, 96);">'react-router-dom'</span>;
<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(150, 203, 254);">function</span> <span class="hljs-title" style="color: rgb(255, 255, 182);">HomePage</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword" style="color: rgb(150, 203, 254);">return</span> <span class="xml"><span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span>This is Homepage<span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;/<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span></span>;
}

<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(150, 203, 254);">function</span> <span class="hljs-title" style="color: rgb(255, 255, 182);">AboutPage</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword" style="color: rgb(150, 203, 254);">return</span> <span class="xml"><span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span>This is About page<span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;/<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span></span>;
}

<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(150, 203, 254);">function</span> <span class="hljs-title" style="color: rgb(255, 255, 182);">FAQPage</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword" style="color: rgb(150, 203, 254);">return</span> <span class="xml"><span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span>This is FAQ page<span class="hljs-tag" style="color: rgb(150, 203, 254);">&lt;/<span class="hljs-name" style="color: rgb(150, 203, 254);">p</span>&gt;</span></span>;
}

<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(150, 203, 254);">function</span> <span class="hljs-title" style="color: rgb(255, 255, 182);">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword" style="color: rgb(150, 203, 254);">return</span> (
    &lt;&gt;
      &lt;header&gt;
        &lt;ul&gt;
          &lt;li&gt;
            &lt;Link to="/"&gt;Home&lt;/Link&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;Link to="/about"&gt;About&lt;/Link&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;Link to="/faq"&gt;FAQ&lt;/Link&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/header&gt;
      &lt;main&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;HomePage /&gt;} /&gt;
          &lt;Route path="/about" element={&lt;AboutPage /&gt;} /&gt;
          &lt;Route path="/faq" element={&lt;FAQPage /&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/main&gt;
    &lt;/&gt;
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  &lt;BrowserRouter&gt;
    &lt;App /&gt;
  &lt;/BrowserRouter&gt;
);
</pre>
