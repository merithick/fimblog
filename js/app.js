/* ==========================================================================
   FIMBLOGS HYBRID ENGINE - FULL RICH TEST ARTICLE (React 18)
   ========================================================================== */

const { useState, useEffect, useMemo, createContext, useContext } = React;

const INITIAL_ARTICLES = [
  {
    id: "rich-test-article-tamil-finance",
    slug: "rich-test-article-tamil-finance-guide",
    title: "இந்திய பங்குச்சந்தை 2026: முதலீட்டாளர்கள் தெரிந்துகொள்ள வேண்டிய 5 முக்கிய விதிகள்",
    category: "Daily Insights",
    readTime: "4 min read",
    date: "14 Sep 2026",
    views: 215,
    shares: 42,
    seoTitle: "Indian Stock Market 2026 Guide | FimBlogs Tamil",
    seoDescription: "இந்திய பங்குச்சந்தையில் 2026-ல் எவ்வாறு பாதுகாப்பாக முதலீடு செய்வது என்பதைப் பற்றிய விரிவான தமிழ் வழிகாட்டி.",
    seoKeywords: "Indian Stock Market 2026, Tamil Investment Guide, FimBlogs",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "பங்குச்சந்தையில் நீண்டகால அடிப்படையில் லாபம் ஈட்ட <b>முக்கிய நிதி உத்திகள்</b> மற்றும் <i>அபாய மேலாண்மை</i> பற்றிய எளிய தமிழ் தொகுப்பு.",
    content: `<p>2026 ஆம் ஆண்டில் இந்திய பங்குச்சந்தை புதிய உச்சங்களை எட்டி வரும் வேளையில், சாதாரண முதலீட்டாளர்கள் கவனமாக செயல்பட வேண்டியது அவசியமாகும். <b>நீண்டகால முதலீடு (Long-term Investment)</b> எப்போதும் சந்தையின் நிலையற்ற தன்மையை வெல்லக்கூடிய சிறந்த வழியாகும்.</p>

<div class="fimblogs-callout">
  <div class="callout-title">Executive Takeaway</div>
  பங்குச்சந்தை ஏற்ற இறக்கங்களுக்கு பயப்படாமல் <b>SIP (Systematic Investment Plan)</b> முறையில் தொடர்ச்சியாக முதலீடு செய்வதே சிறந்த செல்வத்தை உருவாக்கும் வழிமுறையாகும்.
</div>

<h2>1. கூட்டு வட்டியின் ஆற்றல் (Power of Compounding)</h2>
<p>உங்கள் பணத்தை சீராக முதலீடு செய்யும்போது, அது <i>கூட்டு வட்டி (Compounding)</i> மூலம் வேகமாக வளரும். மேலும் விபரங்களுக்கு <a href="https://www.nseindia.com" target="_blank" rel="noopener">NSE India அதிகாரப்பூர்வ தளத்தை</a> பார்வையிடலாம்.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80" alt="Stock Market Chart" style="width:100%; border-radius:12px; margin:1.5rem 0;" />

<h2>2. அபாய மேலாண்மை (Risk Management)</h2>
<p>அனைத்து முதலீடுகளையும் ஒரே துறையில் போடாமல் <b>பல்வேறு துறைகளில் (Diversification)</b> பிரித்து முதலீடு செய்வது உங்கள் <i>அபாயத்தைக் (Risk)</i> குறைக்கும்.</p>`
  },
  {
    id: "us-treasury-bond-yields-tamil",
    slug: "us-treasury-bond-yields-explained-in-tamil",
    title: "அமெரிக்க பத்திர லாபம் (Treasury Bond Yields): இந்திய முதலீட்டாளர்களுக்கு என்ன பாதிப்பு?",
    category: "Daily Insights",
    readTime: "3 min read",
    date: "14 Sep 2026",
    views: 142,
    shares: 18,
    seoTitle: "US Treasury Bond Yields Explained | FimBlogs",
    seoDescription: "அமெரிக்க டிரஷரி பாண்ட் ஈல்ட் உயர்வினால் இந்திய பங்குச்சந்தை மற்றும் டாலர் மதிப்பு எவ்வாறு பாதிக்கிறது என்பதைப் பற்றிய எளிய தமிழ் விளக்கம்.",
    seoKeywords: "US Treasury, Bond Yields, Stock Market, FimBlogs Tamil",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    excerpt: "அமெரிக்க அரசு தனது கடன் பத்திர வட்டி விகிதங்களைக் கட்டுப்படுத்த முயல்கிறது. இதனால் இந்திய பங்குச்சந்தையில் வெளிநாட்டு முதலீடுகள் (FII) என்னவாகும்?",
    content: `<p>கடந்த சில வாரங்களாக உலகளாவிய நிதிச் செய்திகளில் அமெரிக்க டிரஷரி பாண்ட் ஈல்ட் (Bond Yields) பற்றி விரிவாகப் பேசப்பட்டு வருகிறது...</p>`
  },
  {
    id: "tesla-robotaxi-tamil-analysis",
    slug: "tesla-robotaxi-business-model-tamil",
    title: "டெஸ்லா ரோபோடாக்ஸி (Tesla Robotaxi): டாக்சி தொழில்துறையின் எதிர்காலம் மாறுமா?",
    category: "Markets",
    readTime: "4 min read",
    date: "13 Sep 2026",
    views: 98,
    shares: 12,
    seoTitle: "Tesla Robotaxi Fleet Unit Economics | FimBlogs",
    seoDescription: "தான் இயங்கும் ஓட்டுநரில்லா டாக்சிகள் மூலம் போக்குவரத்து செலவுகள் எவ்வாறு 80% குறையும் என்பதைப் பற்றிய தமிழ் பகுப்பாய்வு.",
    seoKeywords: "Tesla Robotaxi, EV Market, FimBlogs",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    excerpt: "ஓட்டுநர் இல்லாத மின்சார டாக்சிகள் அறிமுகமாகும் போது ஒரு மைலுக்கான பயணச் செலவு பாதியாகக் குறையும்.",
    content: `<p>மின்சார வாகனத் தயாரிப்பில் முன்னணியில் உள்ள டெஸ்லா நிறுவனம், அடுத்து ஓட்டுநர் இல்லாத தானியங்கி டாக்சி சேவையை அறிமுகப்படுத்த தீவிரமாக செயல்பட்டு வருகிறது.</p>`
  }
];

const DEFAULT_CATEGORIES = ["Daily Insights", "Markets", "Personal Finance", "Infographics"];
const DEFAULT_MAIN_MENU = [
  { id: "m1", label: "Daily Insights", category: "Daily Insights" },
  { id: "m2", label: "Markets", category: "Markets" },
  { id: "m3", label: "Personal Finance", category: "Personal Finance" },
  { id: "m4", label: "Infographics", category: "Infographics" }
];
const DEFAULT_FOOTER_MENU = [
  { id: "f1", label: "Privacy Policy", url: "#/" },
  { id: "f2", label: "Terms of Service", url: "#/" },
  { id: "f3", label: "Editorial Guidelines", url: "#/" }
];

/* ==========================================================================
   SUPABASE DATABASE CONFIGURATION & SERVICE
   ========================================================================== */
const SUPABASE_URL = "https://xepxicgiuzxpxwetopdy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_k6h2Rq5WGn8NqBJZyUXpAw_yBbt-zkP";

let supabaseClient = null;
try {
  const createClientFn = window.supabase?.createClient || window.supabaseClient?.createClient || window.createClient;
  if (typeof createClientFn === "function") {
    supabaseClient = createClientFn(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn("Supabase init bypassed safely:", e);
  supabaseClient = null;
}

const SupabaseService = {
  fetchArticles: async () => {
    if (!supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient.from('articles').select('*').order('created_at', { ascending: false });
      if (error || !data || data.length === 0) return null;
      return data.map(item => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        category: item.category,
        readTime: item.read_time || item.readTime || "3 min read",
        date: item.date,
        views: item.views || 0,
        shares: item.shares || 0,
        seoTitle: item.seo_title || item.seoTitle || item.title,
        seoDescription: item.seo_description || item.seoDescription || item.excerpt,
        seoKeywords: item.seo_keywords || item.seoKeywords || "",
        image: item.image,
        excerpt: item.excerpt,
        content: item.content
      }));
    } catch (e) {
      console.warn("Supabase fetch warning:", e);
      return null;
    }
  },

  saveArticle: async (article) => {
    if (!supabaseClient) return;
    try {
      const payload = {
        id: article.id,
        slug: article.slug,
        title: article.title,
        category: article.category,
        read_time: article.readTime,
        date: article.date,
        views: article.views || 0,
        shares: article.shares || 0,
        seo_title: article.seoTitle,
        seo_description: article.seoDescription,
        seo_keywords: article.seoKeywords,
        image: article.image,
        excerpt: article.excerpt,
        content: article.content
      };
      await supabaseClient.from('articles').upsert(payload, { onConflict: 'id' });
    } catch (e) {
      console.warn("Supabase save article warning:", e);
    }
  },

  deleteArticle: async (id) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('articles').delete().eq('id', id);
    } catch (e) {
      console.warn("Supabase delete article warning:", e);
    }
  },

  updateViews: async (slug, newViews) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('articles').update({ views: newViews }).eq('slug', slug);
    } catch (e) {
      console.warn("Supabase update views warning:", e);
    }
  },

  updateShares: async (slug, newShares) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('articles').update({ shares: newShares }).eq('slug', slug);
    } catch (e) {
      console.warn("Supabase update shares warning:", e);
    }
  },

  addSubscriber: async (email) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('subscribers').insert({ email });
    } catch (e) {
      console.warn("Supabase subscriber warning:", e);
    }
  }
};

const StorageService = {
  getArticles: () => JSON.parse(localStorage.getItem("fimblogs_articles_v9") || JSON.stringify(INITIAL_ARTICLES)),
  saveArticles: (arts) => localStorage.setItem("fimblogs_articles_v9", JSON.stringify(arts)),
  getCategories: () => JSON.parse(localStorage.getItem("fimblogs_categories_v9") || JSON.stringify(DEFAULT_CATEGORIES)),
  saveCategories: (cats) => localStorage.setItem("fimblogs_categories_v9", JSON.stringify(cats)),
  getMainMenu: () => JSON.parse(localStorage.getItem("fimblogs_main_menu_v9") || JSON.stringify(DEFAULT_MAIN_MENU)),
  saveMainMenu: (m) => localStorage.setItem("fimblogs_main_menu_v9", JSON.stringify(m)),
  getFooterMenu: () => JSON.parse(localStorage.getItem("fimblogs_footer_menu_v9") || JSON.stringify(DEFAULT_FOOTER_MENU)),
  saveFooterMenu: (m) => localStorage.setItem("fimblogs_footer_menu_v9", JSON.stringify(m)),
  getSubscribers: () => JSON.parse(localStorage.getItem("fimblogs_subscribers_v9") || JSON.stringify(["corporate.reader@bloomberg.net"])),
  saveSubscribers: (subs) => localStorage.setItem("fimblogs_subscribers_v9", JSON.stringify(subs))
};

const AppContext = createContext();

const AppProvider = function({ children }) {
  const [articles, setArticles] = useState(StorageService.getArticles());
  const [categories, setCategories] = useState(StorageService.getCategories());
  const [mainMenu, setMainMenu] = useState(StorageService.getMainMenu());
  const [footerMenu, setFooterMenu] = useState(StorageService.getFooterMenu());
  const [subscribers, setSubscribers] = useState(StorageService.getSubscribers());
  
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || "#/");
  const [theme, setTheme] = useState(localStorage.getItem("fimblogs_theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(sessionStorage.getItem("fimblogs_admin") === "true");

  // Fetch live articles from Supabase DB on load
  useEffect(() => {
    const syncSupabaseData = async () => {
      const remoteArticles = await SupabaseService.fetchArticles();
      if (remoteArticles && remoteArticles.length > 0) {
        setArticles(remoteArticles);
        StorageService.saveArticles(remoteArticles);
      } else {
        // Seed default articles to Supabase if DB table is initialized
        INITIAL_ARTICLES.forEach(art => SupabaseService.saveArticle(art));
      }
    };
    syncSupabaseData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("fimblogs_theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  const incrementViewCount = (slug) => {
    if (!sessionStorage.getItem("viewed_" + slug)) {
      sessionStorage.setItem("viewed_" + slug, "true");
      setArticles(prev => {
        const updated = prev.map(a => {
          if (a.slug === slug) {
            const newViews = (a.views || 0) + 1;
            SupabaseService.updateViews(slug, newViews);
            return { ...a, views: newViews };
          }
          return a;
        });
        StorageService.saveArticles(updated);
        return updated;
      });
    }
  };

  const incrementShareCount = (slug) => {
    setArticles(prev => {
      const updated = prev.map(a => {
        if (a.slug === slug) {
          const newShares = (a.shares || 0) + 1;
          SupabaseService.updateShares(slug, newShares);
          return { ...a, shares: newShares };
        }
        return a;
      });
      StorageService.saveArticles(updated);
      return updated;
    });
  };

  const saveArticle = (article) => {
    const exists = articles.some(a => a.id === article.id);
    const updated = exists ? articles.map(a => a.id === article.id ? article : a) : [article, ...articles];
    setArticles(updated);
    StorageService.saveArticles(updated);
    SupabaseService.saveArticle(article);
  };

  const deleteArticle = (id) => {
    const updated = articles.filter(a => a.id !== id);
    setArticles(updated);
    StorageService.saveArticles(updated);
    SupabaseService.deleteArticle(id);
  };

  const addSubscriber = (email) => {
    if (email && !subscribers.includes(email)) {
      const updated = [email, ...subscribers];
      setSubscribers(updated);
      StorageService.saveSubscribers(updated);
      SupabaseService.addSubscriber(email);
    }
  };

  const updateCategories = (newCats) => { setCategories(newCats); StorageService.saveCategories(newCats); };
  const updateMainMenu = (newMenu) => { setMainMenu(newMenu); StorageService.saveMainMenu(newMenu); };
  const updateFooterMenu = (newMenu) => { setFooterMenu(newMenu); StorageService.saveFooterMenu(newMenu); };

  return React.createElement(AppContext.Provider, {
    value: {
      articles, saveArticle, deleteArticle, incrementViewCount, incrementShareCount,
      categories, updateCategories, mainMenu, updateMainMenu, footerMenu, updateFooterMenu,
      subscribers, addSubscriber, currentRoute, setCurrentRoute, theme, toggleTheme,
      searchQuery, setSearchQuery, activeCategory, setActiveCategory,
      isAdminLoggedIn, setIsAdminLoggedIn
    }
  }, children);
};

const useApp = () => useContext(AppContext);

const SEOHead = function({ title, description, image }) {
  useEffect(() => {
    document.title = title ? title + " | FimBlogs" : "FimBlogs | Financial News Made Simple in Tamil";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = description || "FimBlogs financial analysis in Tamil.";
  }, [title, description, image]);
  return null;
};

const SunIcon = () => React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
  React.createElement("circle", { cx: "12", cy: "12", r: "5" }),
  React.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
  React.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" })
);

const MoonIcon = () => React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
  React.createElement("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
);

// Header Component
const Header = function() {
  const app = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [app.currentRoute, app.activeCategory]);

  return React.createElement("header", { className: "header" },
    React.createElement("div", { className: "container header-container" },
      React.createElement("a", { href: "#/", className: "brand-logo", onClick: () => { app.setActiveCategory("All"); setMobileOpen(false); } },
        React.createElement("div", { className: "brand-symbol" }, "F"), "FIMBLOGS"
      ),
      React.createElement("ul", { className: "nav-links " + (mobileOpen ? "mobile-open" : "") },
        React.createElement("li", null,
          React.createElement("a", { href: "#/", className: "nav-link " + (app.activeCategory === "All" ? "active" : ""), onClick: () => { app.setActiveCategory("All"); setMobileOpen(false); } }, "All")
        ),
        app.mainMenu.map(item => React.createElement("li", { key: item.id },
          React.createElement("a", { href: "#/", className: "nav-link " + (app.activeCategory === item.category ? 'active' : ''), onClick: () => { app.setActiveCategory(item.category); setMobileOpen(false); } }, item.label)
        ))
      ),
      React.createElement("div", { className: "header-actions" },
        React.createElement("button", { className: "btn-icon", onClick: app.toggleTheme, "aria-label": "Toggle Dark Theme" }, app.theme === "light" ? React.createElement(MoonIcon) : React.createElement(SunIcon)),
        React.createElement("button", { className: "btn-primary btn-subscribe-header", onClick: () => alert("Subscribed!") }, "Subscribe Briefing"),
        React.createElement("button", { className: "mobile-menu-toggle", onClick: () => setMobileOpen(!mobileOpen), "aria-label": "Toggle Menu" }, mobileOpen ? "✕" : "☰")
      )
    ),
    React.createElement("div", { className: "mobile-backdrop " + (mobileOpen ? "active" : ""), onClick: () => setMobileOpen(false) })
  );
};

// FINSHOTS HERO SECTION
const HeroSection = function() {
  const app = useApp();
  const [email, setEmail] = useState("");
  const featured = app.articles[0] || INITIAL_ARTICLES[0];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      app.addSubscriber(email.trim());
      alert(`நன்றி! தினசரி தமிழ் நிதிச் செய்திகள் ${email} முகவரிக்கு அனுப்பப்படும்.`);
      setEmail("");
    }
  };

  return React.createElement("section", { className: "hero" },
    React.createElement("div", { className: "container hero-grid" },
      React.createElement("div", null,
        React.createElement("div", { className: "subscribers-badge" }, "Loved by 50,000+ Tamil Readers"),
        React.createElement("h1", { className: "hero-title-tamil" }, "நிதிச் செய்திகள் மிகவும் எளிமையாக (Financial News Made Simple in Tamil)"),
        React.createElement("p", { className: "hero-description-main" },
          "சமீபத்திய மற்றும் முக்கியமான பொருளாதார மற்றும் பங்குச்சந்தை தகவல்களை எளிய தமிழில் 3 நிமிடங்களில் படித்து தெரிந்துகொள்ளுங்கள்."
        ),
        React.createElement("form", { onSubmit: handleSubscribe, className: "sub-form-main" },
          React.createElement("input", { type: "email", className: "input-email-main", placeholder: "உங்கள் ஈமெயில் முகவரி", value: email, onChange: e => setEmail(e.target.value), required: true }),
          React.createElement("button", { type: "submit", className: "btn-subscribe-main" }, "SUBSCRIBE")
        )
      ),

      React.createElement("div", { className: "phone-mockup-wrapper" },
        React.createElement("div", { className: "phone-backdrop-circle" }),
        React.createElement("div", { className: "iphone-frame-stylish" },
          React.createElement("div", { className: "iphone-notch" }),
          React.createElement("div", { className: "iphone-screen-stylish" },
            React.createElement("div", { className: "phone-header-brand" },
              React.createElement("span", { className: "brand-logo", style: { fontSize: '0.85rem' } }, React.createElement("div", { className: "brand-symbol", style: { width: '20px', height: '20px', fontSize: '0.7rem' } }, "F"), "FIMBLOGS"),
              React.createElement("span", { className: "phone-article-badge" }, featured.category)
            ),
            React.createElement("h3", { className: "phone-article-title-stylish" }, featured.title),
            React.createElement("div", { className: "phone-article-img-wrapper" },
              React.createElement("img", { src: featured.image, alt: featured.title, className: "phone-article-img-stylish" })
            ),
            React.createElement("p", { className: "phone-article-text-stylish", dangerouslySetInnerHTML: { __html: featured.excerpt || "பங்குச்சந்தையில் நீண்டகால அடிப்படையில் லாபம் ஈட்ட முக்கிய நிதி உத்திகள்..." } })
          )
        )
      )
    )
  );
};

const ArticleCard = function({ article }) {
  return React.createElement("div", { className: "article-card", onClick: () => window.location.hash = "#/article/" + article.slug },
    React.createElement("div", { className: "article-card-img-wrapper" },
      React.createElement("img", { src: article.image, alt: article.title, className: "article-card-img" }),
      React.createElement("span", { className: "category-tag" }, article.category)
    ),
    React.createElement("div", { className: "article-card-body" },
      React.createElement("div", { className: "article-meta" }, React.createElement("span", null, article.date + " • " + article.readTime)),
      React.createElement("h3", { className: "article-card-title" }, article.title),
      React.createElement("p", { className: "article-card-excerpt", dangerouslySetInnerHTML: { __html: article.excerpt } }),
      React.createElement("div", { className: "article-card-footer" },
        React.createElement("span", null, "Read Briefing →"),
        React.createElement("span", null, (article.views || 0) + " Views • " + (article.shares || 0) + " Shares")
      )
    )
  );
};

const HomeView = function() {
  const app = useApp();
  const filtered = useMemo(() => {
    return app.articles.filter(a => (app.activeCategory === "All" || a.category === app.activeCategory) && (a.title.toLowerCase().includes(app.searchQuery.toLowerCase())));
  }, [app.articles, app.activeCategory, app.searchQuery]);

  return React.createElement("div", null,
    React.createElement(SEOHead, { title: "FimBlogs | Financial News Made Simple in Tamil" }),
    React.createElement(HeroSection),
    React.createElement("div", { className: "container", style: { padding: '3.5rem 1.25rem' } },
      React.createElement("div", { className: "section-header-bar" },
        React.createElement("h2", { style: { fontSize: '1.5rem', fontWeight: 800 } }, "All Tamil Briefings"),
        React.createElement("div", { className: "search-box-wrapper" },
          React.createElement("svg", { className: "search-icon-svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
            React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
            React.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ),
          React.createElement("input", {
            type: "text",
            className: "search-input-stylish",
            placeholder: "Search Tamil briefings...",
            value: app.searchQuery,
            onChange: e => app.setSearchQuery(e.target.value)
          })
        )
      ),
      React.createElement("div", { className: "article-grid" }, filtered.map(art => React.createElement(ArticleCard, { key: art.id, article: art })))
    )
  );
};

const ArticleDetailView = function({ slug }) {
  const app = useApp();
  const article = app.articles.find(a => a.slug === slug) || app.articles[0];

  useEffect(() => { window.scrollTo(0, 0); if (article) app.incrementViewCount(article.slug); }, [slug]);
  if (!article) return React.createElement("div", { className: "container" }, "Article not found.");

  return React.createElement("article", { className: "container container-narrow article-detail-container" },
    React.createElement(SEOHead, { title: article.seoTitle || article.title, description: article.excerpt }),
    React.createElement("header", { className: "article-header" },
      React.createElement("span", { className: "article-category-badge" }, article.category),
      React.createElement("h1", { className: "article-full-title" }, article.title)
    ),
    React.createElement("div", { className: "featured-img-container" }, React.createElement("img", { src: article.image, alt: article.title, style: { width: '100%', maxHeight: '440px', objectFit: 'cover' } })),
    React.createElement("div", { className: "article-content", dangerouslySetInnerHTML: { __html: article.content } })
  );
};

const AdminLogin = function() {
  const app = useApp();
  const [u, setU] = useState(""); const [p, setP] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (u === "admin" && p === "fimblogs2026") {
      sessionStorage.setItem("fimblogs_admin", "true"); app.setIsAdminLoggedIn(true); window.location.hash = "#/secret-admin/dashboard";
    } else alert("Invalid credentials.");
  };

  return React.createElement("div", { className: "container container-narrow", style: { padding: '5rem 0' } },
    React.createElement("div", { style: { background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
      React.createElement("h2", { style: { textAlign: 'center', marginBottom: '1.5rem' } }, "FimBlogs Portal Management"),
      React.createElement("form", { onSubmit: handleLogin, style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Username", value: u, onChange: e => setU(e.target.value) }),
        React.createElement("input", { type: "password", className: "input-styled", placeholder: "Password", value: p, onChange: e => setP(e.target.value) }),
        React.createElement("button", { type: "submit", className: "btn-primary" }, "Authenticate Portal")
      )
    )
  );
};

// CATEGORY EDITOR SECTION
const CategoryEditorSection = function() {
  const app = useApp();
  const [newCat, setNewCat] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (newCat.trim() && !app.categories.includes(newCat.trim())) {
      app.updateCategories([...app.categories, newCat.trim()]);
      setNewCat("");
    }
  };

  const handleDelete = (catToDelete) => {
    if (confirm(`Delete category '${catToDelete}'?`)) {
      app.updateCategories(app.categories.filter(c => c !== catToDelete));
    }
  };

  return React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
    React.createElement("h3", { style: { fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' } }, "Category Management Console"),
    React.createElement("form", { onSubmit: handleAdd, style: { display: 'flex', gap: '10px', marginBottom: '1.5rem' } },
      React.createElement("input", { type: "text", className: "input-styled", style: { flexGrow: 1 }, placeholder: "Enter New Category Name", value: newCat, onChange: e => setNewCat(e.target.value), required: true }),
      React.createElement("button", { type: "submit", className: "btn-accent" }, "+ Add Category")
    ),
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
      app.categories.map(cat =>
        React.createElement("div", { key: cat, style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("span", { style: { fontWeight: 700 } }, cat),
          React.createElement("button", { className: "btn-secondary", style: { color: '#ef4444', padding: '4px 10px', fontSize: '0.8rem' }, onClick: () => handleDelete(cat) }, "Delete Category")
        )
      )
    )
  );
};

// MAIN MENU EDITOR SECTION
const MainMenuEditorSection = function() {
  const app = useApp();
  const [label, setLabel] = useState("");
  const [selectedCat, setSelectedCat] = useState(app.categories[0] || "Daily Insights");

  const handleAdd = (e) => {
    e.preventDefault();
    if (label.trim()) {
      const newItem = { id: "m_" + Date.now(), label: label.trim(), category: selectedCat };
      app.updateMainMenu([...app.mainMenu, newItem]);
      setLabel("");
    }
  };

  const handleDelete = (id) => {
    app.updateMainMenu(app.mainMenu.filter(m => m.id !== id));
  };

  return React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
    React.createElement("h3", { style: { fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' } }, "Header Main Navigation Editor"),
    React.createElement("form", { onSubmit: handleAdd, className: "admin-inline-form" },
      React.createElement("input", { type: "text", className: "input-styled", placeholder: "Nav Label (e.g. Markets)", value: label, onChange: e => setLabel(e.target.value), required: true }),
      React.createElement("select", { className: "input-styled", value: selectedCat, onChange: e => setSelectedCat(e.target.value) },
        app.categories.map(c => React.createElement("option", { key: c, value: c }, c))
      ),
      React.createElement("button", { type: "submit", className: "btn-accent" }, "+ Add Nav Link")
    ),
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
      app.mainMenu.map(item =>
        React.createElement("div", { key: item.id, style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", null,
            React.createElement("span", { style: { fontWeight: 700, marginRight: '10px' } }, item.label),
            React.createElement("span", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, `(Filters Category: ${item.category})`)
          ),
          React.createElement("button", { className: "btn-secondary", style: { color: '#ef4444', padding: '4px 10px', fontSize: '0.8rem' }, onClick: () => handleDelete(item.id) }, "Delete Link")
        )
      )
    )
  );
};

// FOOTER MENU EDITOR SECTION
const FooterMenuEditorSection = function() {
  const app = useApp();
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("#/");

  const handleAdd = (e) => {
    e.preventDefault();
    if (label.trim()) {
      const newItem = { id: "f_" + Date.now(), label: label.trim(), url: url.trim() || "#/" };
      app.updateFooterMenu([...app.footerMenu, newItem]);
      setLabel("");
      setUrl("#/");
    }
  };

  const handleDelete = (id) => {
    app.updateFooterMenu(app.footerMenu.filter(f => f.id !== id));
  };

  return React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
    React.createElement("h3", { style: { fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' } }, "Footer Links Editor"),
    React.createElement("form", { onSubmit: handleAdd, className: "admin-inline-form" },
      React.createElement("input", { type: "text", className: "input-styled", placeholder: "Footer Label (e.g. Privacy Policy)", value: label, onChange: e => setLabel(e.target.value), required: true }),
      React.createElement("input", { type: "text", className: "input-styled", placeholder: "URL (e.g. #/privacy)", value: url, onChange: e => setUrl(e.target.value), required: true }),
      React.createElement("button", { type: "submit", className: "btn-accent" }, "+ Add Footer Link")
    ),
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
      app.footerMenu.map(item =>
        React.createElement("div", { key: item.id, style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", null,
            React.createElement("span", { style: { fontWeight: 700, marginRight: '10px' } }, item.label),
            React.createElement("span", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, `(${item.url})`)
          ),
          React.createElement("button", { className: "btn-secondary", style: { color: '#ef4444', padding: '4px 10px', fontSize: '0.8rem' }, onClick: () => handleDelete(item.id) }, "Delete Link")
        )
      )
    )
  );
};

// ARTICLE EDITOR SECTION
const AdminArticleEditor = function({ form, setForm, handleSaveForm, app }) {
  const [editorMode, setEditorMode] = useState("html");

  const textOnly = useMemo(() => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = form.content || "";
    return tmp.textContent || tmp.innerText || "";
  }, [form.content]);

  const wordCount = useMemo(() => {
    const trimmed = textOnly.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [textOnly]);

  const charCount = textOnly.length;
  const readingTime = Math.ceil(wordCount / 200) + " min read";

  const seoChecklist = useMemo(() => {
    const titleLen = (form.title || '').trim().length;
    const seoTitleLen = (form.seoTitle || '').trim().length;
    const metaDescLen = (form.seoDescription || '').trim().length;
    const contentStr = form.content || '';
    const keywordsStr = (form.seoKeywords || '').toLowerCase();

    const list = [
      { id: 1, label: "Title is descriptive & engaging", passed: titleLen >= 15, tip: "Min 15 characters" },
      { id: 2, label: "SEO Title length optimized", passed: seoTitleLen >= 30 && seoTitleLen <= 60, tip: "30 - 60 chars" },
      { id: 3, label: "Meta Description search length", passed: metaDescLen >= 70 && metaDescLen <= 160, tip: "70 - 160 chars" },
      { id: 4, label: "Clean SEO-friendly URL Slug", passed: (form.slug || '').length >= 5 && (form.slug || '').includes('-'), tip: "Contains hyphens" },
      { id: 5, label: "Institutional content length", passed: wordCount >= 150, tip: "Min 150 words" },
      { id: 6, label: "Uses H2 section subheadings", passed: contentStr.includes("<h2>"), tip: "<h2> Tag used" },
      { id: 7, label: "Executive Callout Box included", passed: contentStr.includes("fimblogs-callout"), tip: "Highlights key takeaways" },
      { id: 8, label: "Contains supporting visual graphics", passed: contentStr.includes("<img"), tip: "Inline <img> included" },
      { id: 9, label: "Includes external reference link", passed: contentStr.includes("<a href="), tip: "Hyperlink <a> tag used" },
      { id: 10, label: "Target SEO Focus Keywords set", passed: keywordsStr.length >= 3 && keywordsStr.split(',').length >= 2, tip: "Comma separated tags" }
    ];

    const passedCount = list.filter(i => i.passed).length;
    const score = Math.round((passedCount / 10) * 100);

    return { list, score, passedCount };
  }, [form, wordCount]);

  const insertFormatting = (tagType) => {
    const textarea = document.getElementById("cms-content-editor");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end) || "Text";
    let replacement = "";
    if (tagType === "bold") replacement = `<b>${selected}</b>`;
    else if (tagType === "italic") replacement = `<i>${selected}</i>`;
    else if (tagType === "link") {
      const u = prompt("Enter Link URL:", "https://");
      if (u) replacement = `<a href="${u}" target="_blank" rel="noopener">${selected}</a>`; else return;
    } else if (tagType === "h2") replacement = `\n<h2>${selected}</h2>\n`;
    else if (tagType === "callout") replacement = `\n<div class="fimblogs-callout">\n  <div class="callout-title">Executive Briefing</div>\n  ${selected}\n</div>\n`;

    const updated = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    setForm({ ...form, content: updated, readTime: readingTime });
  };

  const handleImageUpload = (e, targetField) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const base64 = evt.target.result;
      if (targetField === "cover") setForm({ ...form, image: base64 });
      else {
        const textarea = document.getElementById("cms-content-editor");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const imgTag = `\n<img src="${base64}" alt="Briefing Graphic" style="width:100%; border-radius:8px; margin:1.5rem 0;" />\n`;
        const updated = textarea.value.substring(0, start) + imgTag + textarea.value.substring(start);
        setForm({ ...form, content: updated });
      }
    };
    reader.readAsDataURL(file);
  };

  return React.createElement("form", { onSubmit: handleSaveForm, className: "admin-editor-grid" },
    React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' } },
      React.createElement("div", { style: { marginBottom: '1.25rem' } },
        React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '6px' } }, "Article Title (Tamil)"),
        React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%', fontSize: '1rem', fontWeight: 600 }, value: form.title, onChange: e => setForm({ ...form, title: e.target.value }), required: true })
      ),
      React.createElement("div", { className: "admin-form-two-col", style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' } },
        React.createElement("div", null,
          React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '6px' } }, "Category"),
          React.createElement("select", { className: "input-styled", style: { width: '100%' }, value: form.category, onChange: e => setForm({ ...form, category: e.target.value }) },
            app.categories.map(c => React.createElement("option", { key: c, value: c }, c))
          )
        ),
        React.createElement("div", null,
          React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '6px' } }, "URL Slug"),
          React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%' }, value: form.slug, onChange: e => setForm({ ...form, slug: e.target.value }), required: true })
        )
      ),
      React.createElement("div", { style: { marginBottom: '1.25rem' } },
        React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '6px' } }, "Cover Image"),
        React.createElement("div", { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
          React.createElement("input", { type: "text", className: "input-styled", style: { flexGrow: 1, minWidth: '180px' }, placeholder: "Image URL", value: form.image, onChange: e => setForm({ ...form, image: e.target.value }) }),
          React.createElement("label", { className: "btn-secondary", style: { cursor: 'pointer', whiteSpace: 'nowrap' } }, "📁 Upload Image",
            React.createElement("input", { type: "file", accept: "image/*", style: { display: 'none' }, onChange: e => handleImageUpload(e, "cover") })
          )
        )
      ),

      /* RICH EDITOR TOOLBAR & HTML/VISUAL TOGGLE */
      React.createElement("div", { style: { marginBottom: '1.25rem' } },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' } },
          React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            React.createElement("label", { style: { fontWeight: 700, fontSize: '0.85rem' } }, "Article Content"),
            React.createElement("div", { style: { display: 'inline-flex', background: 'var(--bg-surface)', padding: '2px', borderRadius: '4px', border: '1px solid var(--border-color)' } },
              React.createElement("button", {
                type: "button",
                style: { border: 'none', background: editorMode === 'html' ? 'var(--primary)' : 'transparent', color: editorMode === 'html' ? 'white' : 'var(--text-muted)', padding: '3px 10px', borderRadius: '3px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' },
                onClick: () => setEditorMode("html")
              }, "HTML Code Editor"),
              React.createElement("button", {
                type: "button",
                style: { border: 'none', background: editorMode === 'visual' ? 'var(--primary)' : 'transparent', color: editorMode === 'visual' ? 'white' : 'var(--text-muted)', padding: '3px 10px', borderRadius: '3px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' },
                onClick: () => setEditorMode("visual")
              }, "Visual Preview Mode")
            )
          ),
          React.createElement("div", { style: { fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700, background: 'var(--accent-light)', padding: '2px 8px', borderRadius: '4px' } },
            `${wordCount} Words | ${charCount} Chars | ${readingTime}`
          )
        ),

        editorMode === "html" ?
          React.createElement("div", null,
            React.createElement("div", { className: "admin-editor-toolbar" },
              React.createElement("button", { type: "button", className: "btn-secondary", style: { padding: '3px 10px', fontWeight: 800 }, onClick: () => insertFormatting("bold") }, "B"),
              React.createElement("button", { type: "button", className: "btn-secondary", style: { padding: '3px 10px', fontStyle: 'italic' }, onClick: () => insertFormatting("italic") }, "I"),
              React.createElement("button", { type: "button", className: "btn-secondary", style: { padding: '3px 10px' }, onClick: () => insertFormatting("link") }, "🔗 Link"),
              React.createElement("button", { type: "button", className: "btn-secondary", style: { padding: '3px 10px', fontWeight: 700 }, onClick: () => insertFormatting("h2") }, "H2"),
              React.createElement("button", { type: "button", className: "btn-secondary", style: { padding: '3px 10px', background: 'var(--accent-light)', color: 'var(--accent)' }, onClick: () => insertFormatting("callout") }, "+ Callout Box"),
              React.createElement("label", { className: "btn-secondary", style: { cursor: 'pointer', padding: '3px 10px' } }, "🖼 Inline Image",
                React.createElement("input", { type: "file", accept: "image/*", style: { display: 'none' }, onChange: e => handleImageUpload(e, "inline") })
              )
            ),
            React.createElement("textarea", {
              id: "cms-content-editor",
              className: "input-styled",
              style: { width: '100%', height: '280px', fontFamily: 'monospace', fontSize: '0.85rem', borderRadius: '0 0 4px 4px' },
              value: form.content,
              onChange: e => setForm({ ...form, content: e.target.value, readTime: readingTime })
            })
          ) :
          React.createElement("div", {
            style: { width: '100%', height: '318px', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)', overflowY: 'auto', lineHeight: 1.8 },
            dangerouslySetInnerHTML: { __html: form.content || "<p><em>No content entered yet...</em></p>" }
          })
      ),

      React.createElement("button", { type: "submit", className: "btn-primary", style: { width: '100%', padding: '0.75rem' } }, "Publish Briefing Article")
    ),

    /* SEO ENGINE & CHECKLIST AUDIT */
    React.createElement("div", null,
      React.createElement("div", { className: "seo-card-premium" },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' } },
          React.createElement("h3", { style: { fontSize: '1.15rem', fontWeight: 800 } }, "SEO Optimization Engine"),
          React.createElement("div", { className: "seo-badge-pill", style: { background: seoChecklist.score >= 80 ? '#dcfce7' : seoChecklist.score >= 50 ? '#fef3c7' : '#fee2e2', color: seoChecklist.score >= 80 ? '#15803d' : seoChecklist.score >= 50 ? '#b45309' : '#b91c1c' } },
            `SEO Score: ${seoChecklist.score}/100`
          )
        ),

        React.createElement("div", { style: { marginBottom: '1rem' } },
          React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
            React.createElement("label", { style: { fontWeight: 700, fontSize: '0.85rem' } }, "SEO Meta Title"),
            React.createElement("span", { style: { fontSize: '0.75rem', color: (form.seoTitle || '').length > 60 ? '#ef4444' : 'var(--text-muted)' } }, `${(form.seoTitle || '').length}/60 chars`)
          ),
          React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%' }, value: form.seoTitle, onChange: e => setForm({ ...form, seoTitle: e.target.value }) })
        ),

        React.createElement("div", { style: { marginBottom: '1rem' } },
          React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
            React.createElement("label", { style: { fontWeight: 700, fontSize: '0.85rem' } }, "Meta Description"),
            React.createElement("span", { style: { fontSize: '0.75rem', color: (form.seoDescription || '').length > 160 ? '#ef4444' : 'var(--text-muted)' } }, `${(form.seoDescription || '').length}/160 chars`)
          ),
          React.createElement("textarea", { className: "input-styled", style: { width: '100%', height: '70px' }, value: form.seoDescription, onChange: e => setForm({ ...form, seoDescription: e.target.value }) })
        ),

        React.createElement("div", { style: { marginBottom: '1.25rem' } },
          React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '4px' } }, "Target Keywords (Comma Separated)"),
          React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%' }, placeholder: "e.g. Tamil Finance, Stock Market, FimBlogs", value: form.seoKeywords, onChange: e => setForm({ ...form, seoKeywords: e.target.value }) })
        ),

        React.createElement("div", { style: { marginBottom: '1.25rem' } },
          React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } },
            React.createElement("h4", { style: { fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' } }, "10-Point SEO Writer Checklist"),
            React.createElement("span", { style: { fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' } }, `${seoChecklist.passedCount}/10 Passed`)
          ),
          seoChecklist.list.map(item =>
            React.createElement("div", { key: item.id, className: "checklist-item-card " + (item.passed ? "passed" : "failed") },
              React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                React.createElement("div", { className: "checklist-icon-status " + (item.passed ? "passed" : "failed") }, item.passed ? "✓" : "!"),
                React.createElement("span", { style: { fontSize: '0.8rem', fontWeight: 600 } }, item.label)
              ),
              React.createElement("span", { style: { fontSize: '0.7rem', color: 'var(--text-muted)', fontStyle: 'italic' } }, item.tip)
            )
          )
        ),

        React.createElement("h4", { style: { fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' } }, "Google SERP Live Preview"),
        React.createElement("div", { className: "seo-preview-box" },
          React.createElement("div", { className: "google-title" }, form.seoTitle || form.title || "Article Title | FimBlogs"),
          React.createElement("div", { className: "google-url" }, "https://fimblogs.com/posts/" + (form.slug || 'article-slug')),
          React.createElement("div", { className: "google-desc" }, form.seoDescription || form.excerpt || "Google SERP snippet snippet preview.")
        )
      )
    )
  );
};

// FULL ADMIN PANEL
const AdminPanel = function({ tab = "dashboard" }) {
  const app = useApp();
  const [editingArticle, setEditingArticle] = useState(null);

  const currentTab = useMemo(() => {
    const route = app.currentRoute;
    if (route.startsWith("#/secret-admin/")) {
      return route.replace("#/secret-admin/", "") || "dashboard";
    }
    return "dashboard";
  }, [app.currentRoute]);

  const navigateToTab = (tabName) => {
    window.location.hash = "#/secret-admin/" + tabName;
  };

  const [form, setForm] = useState({
    title: "", slug: "", category: app.categories[0] || "Daily Insights", readTime: "3 min read",
    seoTitle: "", seoDescription: "", seoKeywords: "", image: "", excerpt: "", content: ""
  });

  const handleEditInit = (art) => {
    setEditingArticle(art);
    setForm(art);
    navigateToTab("editor");
  };

  const handleCreateNew = () => {
    const newArt = {
      id: "art_" + Date.now(),
      slug: "executive-briefing-" + Date.now(),
      title: "புதிய தமிழ் நிதிப் பகுப்பாய்வு",
      category: app.categories[0] || "Daily Insights",
      readTime: "3 min read",
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      views: 0, shares: 0,
      seoTitle: "New Executive Briefing | FimBlogs",
      seoDescription: "Briefing summary for search engine optimization.",
      seoKeywords: "Tamil Finance, FimBlogs",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      excerpt: "இன்றைய நிதிச் செய்தியின் எளிய சுருக்கம்.",
      content: "<p>இங்கு உங்கள் தமிழ் கட்டுரையை எழுதுங்கள்...</p>"
    };
    setEditingArticle(newArt);
    setForm(newArt);
    navigateToTab("editor");
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    app.saveArticle(form);
    alert("Article published and saved!");
    navigateToTab("articles");
  };

  return React.createElement("div", { className: "admin-layout" },
    React.createElement("div", { className: "admin-sidebar" },
      React.createElement("h3", { style: { fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem' } }, "CMS Console"),
      React.createElement("ul", { className: "admin-menu" },
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'dashboard' ? 'active' : ''), onClick: () => navigateToTab('dashboard') }, "Dashboard"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'articles' ? 'active' : ''), onClick: () => navigateToTab('articles') }, "Articles (" + app.articles.length + ")"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'editor' ? 'active' : ''), onClick: handleCreateNew }, "+ Create Article"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'categories' ? 'active' : ''), onClick: () => navigateToTab('categories') }, "Category Editor"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'main-menu' ? 'active' : ''), onClick: () => navigateToTab('main-menu') }, "Main Menu Editor"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'footer-menu' ? 'active' : ''), onClick: () => navigateToTab('footer-menu') }, "Footer Menu Editor"),
        React.createElement("li", { className: "admin-menu-item", style: { marginTop: '2rem', color: '#ef4444' }, onClick: () => { sessionStorage.removeItem("fimblogs_admin"); app.setIsAdminLoggedIn(false); window.location.hash = "#/"; } }, "Exit CMS Portal")
      )
    ),
    React.createElement("div", { className: "admin-main" },
      currentTab === "dashboard" ?
        React.createElement("div", null,
          React.createElement("h2", { style: { fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' } }, "Real-Time Portal Metrics"),
          React.createElement("div", { className: "stats-grid" },
            React.createElement("div", { className: "stat-card" }, React.createElement("div", null, "Published Briefings"), React.createElement("div", { className: "stat-number" }, app.articles.length)),
            React.createElement("div", { className: "stat-card" }, React.createElement("div", null, "Actual Reader Views"), React.createElement("div", { className: "stat-number" }, app.articles.reduce((acc, a) => acc + (a.views || 0), 0))),
            React.createElement("div", { className: "stat-card" }, React.createElement("div", null, "Actual Shares"), React.createElement("div", { className: "stat-number" }, app.articles.reduce((acc, a) => acc + (a.shares || 0), 0)))
          )
        ) :
      currentTab === "articles" ?
        React.createElement("div", null,
          React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '10px' } },
            React.createElement("h2", { style: { fontSize: '1.5rem', fontWeight: 800 } }, "Article Index"),
            React.createElement("button", { className: "btn-primary", onClick: handleCreateNew }, "+ New Article")
          ),
          React.createElement("div", { className: "table-responsive" },
            React.createElement("table", null,
              React.createElement("thead", null,
                React.createElement("tr", { style: { background: 'var(--bg-surface)' } },
                  React.createElement("th", { style: { padding: '0.85rem' } }, "Title"),
                  React.createElement("th", { style: { padding: '0.85rem' } }, "Category"),
                  React.createElement("th", { style: { padding: '0.85rem' } }, "Views"),
                  React.createElement("th", { style: { padding: '0.85rem' } }, "Shares"),
                  React.createElement("th", { style: { padding: '0.85rem' } }, "Actions")
                )
              ),
              React.createElement("tbody", null,
                app.articles.map(art => React.createElement("tr", { key: art.id, style: { borderBottom: '1px solid var(--border-color)' } },
                  React.createElement("td", { style: { padding: '0.85rem', fontWeight: 600 } }, art.title),
                  React.createElement("td", { style: { padding: '0.85rem' } }, art.category),
                  React.createElement("td", { style: { padding: '0.85rem', color: 'var(--accent)', fontWeight: 700 } }, art.views || 0),
                  React.createElement("td", { style: { padding: '0.85rem', color: 'var(--accent)', fontWeight: 700 } }, art.shares || 0),
                  React.createElement("td", { style: { padding: '0.85rem', whiteSpace: 'nowrap' } },
                    React.createElement("button", { className: "btn-secondary", style: { marginRight: '4px' }, onClick: () => handleEditInit(art) }, "Edit"),
                    React.createElement("button", { className: "btn-secondary", style: { color: '#ef4444' }, onClick: () => app.deleteArticle(art.id) }, "Delete")
                  )
                ))
              )
            )
          )
        ) :
      currentTab === "editor" ? React.createElement(AdminArticleEditor, { form, setForm, handleSaveForm, app }) :
      currentTab === "categories" ? React.createElement(CategoryEditorSection) :
      currentTab === "main-menu" ? React.createElement(MainMenuEditorSection) :
      currentTab === "footer-menu" ? React.createElement(FooterMenuEditorSection) : null
    )
  );
};

// Root Router & Application Component
const App = function() {
  const app = useApp();
  let content;
  if (app.currentRoute === "#/" || app.currentRoute === "") content = React.createElement(HomeView);
  else if (app.currentRoute.startsWith("#/article/")) content = React.createElement(ArticleDetailView, { slug: app.currentRoute.replace("#/article/", "") });
  else if (app.currentRoute === "#/secret-admin") content = app.isAdminLoggedIn ? React.createElement(AdminPanel, { tab: "dashboard" }) : React.createElement(AdminLogin);
  else if (app.currentRoute.startsWith("#/secret-admin/")) content = app.isAdminLoggedIn ? React.createElement(AdminPanel, { tab: app.currentRoute.replace("#/secret-admin/", "") }) : React.createElement(AdminLogin);
  else content = React.createElement(HomeView);

  return React.createElement("div", null,
    React.createElement(Header),
    React.createElement("main", null, content),
    React.createElement("footer", { className: "footer" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "footer-grid" },
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' } }, "FIMBLOGS"),
            React.createElement("p", { style: { color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '360px' } },
              "Delivering high-signal macro economics, equity research, and capital market insights in simple Tamil."
            )
          ),
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-muted)' } }, "Categories"),
            React.createElement("ul", { style: { listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' } },
              app.categories.map(c => React.createElement("li", { key: c }, c))
            )
          ),
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-muted)' } }, "Legal & Links"),
            React.createElement("ul", { style: { listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' } },
              app.footerMenu.map(item => React.createElement("li", { key: item.id }, React.createElement("a", { href: item.url }, item.label)))
            )
          )
        ),
        React.createElement("div", { className: "footer-bottom-bar" },
          React.createElement("div", null, "© 2026 FimBlogs Inc. All rights reserved."),
          React.createElement("div", null, "FimBlogs Media & Research Network")
        )
      )
    )
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("FimBlogs UI Error caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return React.createElement("div", { className: "container", style: { padding: "4rem 1rem", textAlign: "center" } },
        React.createElement("h2", { style: { marginBottom: "1rem" } }, "FimBlogs Portal"),
        React.createElement("p", { style: { color: "var(--text-muted)", marginBottom: "1.5rem" } }, "A minor rendering update occurred. Click below to continue."),
        React.createElement("button", { className: "btn-primary", onClick: () => { this.setState({ hasError: false }); window.location.hash = "#/"; } }, "Return to Home Page")
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(ErrorBoundary, null,
    React.createElement(AppProvider, null,
      React.createElement(App, null)
    )
  )
);
