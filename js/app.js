(function() {
  'use strict';

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
  { id: "f1", label: "About Us", url: "#/page/about-us" },
  { id: "f2", label: "Contact Us", url: "#/page/contact-us" },
  { id: "f3", label: "Privacy Policy", url: "#/page/privacy-policy" },
  { id: "f4", label: "Terms and Conditions", url: "#/page/terms-and-conditions" },
  { id: "f5", label: "Disclaimer", url: "#/page/disclaimer" }
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
  },

  fetchQuizByArticleId: async (articleId) => {
    if (!supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient.from('quizzes').select('*').eq('article_id', articleId).single();
      if (error || !data) return null;
      return data;
    } catch (e) { return null; }
  },

  fetchQuestionsByQuizId: async (quizId) => {
    if (!supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient.from('quiz_questions').select('*').eq('quiz_id', quizId).order('question_order', { ascending: true });
      if (error || !data) return null;
      return data;
    } catch (e) { return null; }
  },

  saveQuiz: async (quiz) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('quizzes').upsert(quiz, { onConflict: 'id' });
    } catch (e) { console.warn("Supabase save quiz warning:", e); }
  },

  deleteQuiz: async (id) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('quizzes').delete().eq('id', id);
    } catch (e) { console.warn("Supabase delete quiz warning:", e); }
  },

  saveQuizQuestion: async (question) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('quiz_questions').upsert(question, { onConflict: 'id' });
    } catch (e) { console.warn("Supabase save question warning:", e); }
  },

  deleteQuizQuestion: async (id) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('quiz_questions').delete().eq('id', id);
    } catch (e) { console.warn("Supabase delete question warning:", e); }
  },

  saveQuizAttempt: async (attempt) => {
    if (!supabaseClient) return;
    try {
      await supabaseClient.from('quiz_attempts').insert(attempt);
    } catch (e) { console.warn("Supabase save attempt warning:", e); }
  },

  fetchAllQuizzes: async () => {
    if (!supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient.from('quizzes').select('*').order('created_at', { ascending: false });
      if (error || !data) return null;
      return data;
    } catch (e) { return null; }
  }
};

/* ==========================================================================
   JWT (JSON WEB TOKEN) CRYPTOGRAPHIC AUTHENTICATION & SECURITY ENGINE
   ========================================================================== */
const JWT_SECRET = "fimblogs_secure_jwt_secret_key_2026_982347";

const JwtAuthService = {
  // Utility for Base64URL encoding
  base64UrlEncode: (str) => {
    return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  },
  base64UrlDecode: (str) => {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) { str += '='; }
    return atob(str);
  },

  // Generates a HMAC-SHA256 signed JWT Token
  generateToken: async (payload) => {
    const header = { alg: "HS256", typ: "JWT" };
    const now = Math.floor(Date.now() / 1000);
    const expPayload = {
      ...payload,
      iat: now,
      exp: now + (24 * 60 * 60) // 24 Hours Expiry
    };

    const encodedHeader = JwtAuthService.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = JwtAuthService.base64UrlEncode(JSON.stringify(expPayload));
    const tokenData = `${encodedHeader}.${encodedPayload}`;

    // Cryptographic Signature via Web Crypto API
    const encoder = new TextEncoder();
    const keyData = encoder.encode(JWT_SECRET);
    const cryptoKey = await crypto.subtle.importKey(
      "raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(tokenData));
    const signatureArray = Array.from(new Uint8Array(signatureBuffer));
    const signatureStr = String.fromCharCode.apply(null, signatureArray);
    const encodedSignature = JwtAuthService.base64UrlEncode(signatureStr);

    return `${tokenData}.${encodedSignature}`;
  },

  // Verifies JWT Token validity, signature, and expiration
  verifyToken: async (token) => {
    if (!token || typeof token !== "string") return false;
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    try {
      const [encodedHeader, encodedPayload, encodedSignature] = parts;
      const tokenData = `${encodedHeader}.${encodedPayload}`;

      const encoder = new TextEncoder();
      const keyData = encoder.encode(JWT_SECRET);
      const cryptoKey = await crypto.subtle.importKey(
        "raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["verify"]
      );

      const sigStr = JwtAuthService.base64UrlDecode(encodedSignature);
      const sigBuf = new Uint8Array(sigStr.length);
      for (let i = 0; i < sigStr.length; i++) {
        sigBuf[i] = sigStr.charCodeAt(i);
      }

      const isValidSignature = await crypto.subtle.verify(
        "HMAC", cryptoKey, sigBuf, encoder.encode(tokenData)
      );

      if (!isValidSignature) return false;

      const payload = JSON.parse(JwtAuthService.base64UrlDecode(encodedPayload));
      const now = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < now) {
        return false; // Token expired
      }

      return payload;
    } catch (e) {
      console.warn("JWT Verification Security Error:", e);
      return false;
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
  saveSubscribers: (subs) => localStorage.setItem("fimblogs_subscribers_v9", JSON.stringify(subs)),
  getQuizzes: () => JSON.parse(localStorage.getItem("fimblogs_quizzes_v9") || "[]"),
  saveQuizzes: (q) => localStorage.setItem("fimblogs_quizzes_v9", JSON.stringify(q)),
  getQuizQuestions: () => JSON.parse(localStorage.getItem("fimblogs_quiz_questions_v9") || "[]"),
  saveQuizQuestions: (q) => localStorage.setItem("fimblogs_quiz_questions_v9", JSON.stringify(q))
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
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Validate JWT Token on Provider Mount
  useEffect(() => {
    const validateAdminSession = async () => {
      const token = sessionStorage.getItem("fimblogs_jwt_token");
      if (token) {
        const payload = await JwtAuthService.verifyToken(token);
        if (payload && payload.role === "admin") {
          setIsAdminLoggedIn(true);
        } else {
          sessionStorage.removeItem("fimblogs_jwt_token");
          sessionStorage.removeItem("fimblogs_admin");
          setIsAdminLoggedIn(false);
        }
      }
    };
    validateAdminSession();
  }, []);

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
        React.createElement("a", {
          href: "https://whatsapp.com/channel/0029VbDiSjk11ulWMY06Z93w",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-whatsapp-header"
        },
          React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" },
            React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" })
          ),
          "Join WhatsApp Channel"
        ),
        React.createElement("button", { className: "mobile-menu-toggle", onClick: () => setMobileOpen(!mobileOpen), "aria-label": "Toggle Menu" }, mobileOpen ? "✕" : "☰")
      )
    ),
    React.createElement("div", { className: "mobile-backdrop " + (mobileOpen ? "active" : ""), onClick: () => setMobileOpen(false) })
  );
};

// FINSHOTS HERO SECTION
const HeroSection = function() {
  const app = useApp();
  const featured = app.articles[0] || INITIAL_ARTICLES[0];

  return React.createElement("section", { className: "hero" },
    React.createElement("div", { className: "container hero-grid" },
      React.createElement("div", null,
        React.createElement("div", { className: "subscribers-badge" }, "Loved by 10,000+ Readers"),
        React.createElement("h1", { className: "hero-title-tamil" }, "நிதிச் செய்திகள் மிகவும் எளிமையாக (Financial News Made Simple in Tamil)"),
        React.createElement("p", { className: "hero-description-main" },
          "சமீபத்திய மற்றும் முக்கியமான பொருளாதார மற்றும் பங்குச்சந்தை தகவல்களை எளிய தமிழில் 3 நிமிடங்களில் படித்து தெரிந்துகொள்ளுங்கள்."
        ),
        React.createElement("div", { className: "hero-whatsapp-box" },
          React.createElement("p", { className: "hero-whatsapp-box-desc" },
            "தினசரி புதிய தமிழ் நிதி மற்றும் பங்குச்சந்தை கட்டுரைகளின் நேரடி லிங்குகளை நமது WhatsApp சேனலில் உடனுக்குடன் பெறுங்கள்!"
          ),
          React.createElement("a", {
            href: "https://whatsapp.com/channel/0029VbDiSjk11ulWMY06Z93w",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-whatsapp-hero"
          },
            React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
              React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" })
            ),
            "Join Channel on WhatsApp"
          )
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

const SocialShareBar = function({ article }) {
  const app = useApp();
  const [toastMsg, setToastMsg] = useState("");

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleShareClick = (platform) => {
    app.incrementShareCount(article.slug);
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(`FimBlogs: ${shareTitle}`);

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`, '_blank');
    } else if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
    } else if (platform === 'copy') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast("✓ Link copied to clipboard!");
        }).catch(() => {
          showToast("✓ Link copied!");
        });
      } else {
        showToast("✓ Link ready to share!");
      }
    } else if (platform === 'native') {
      if (navigator.share) {
        navigator.share({ title: shareTitle, text: `FimBlogs: ${shareTitle}`, url: shareUrl }).catch(() => {});
      } else {
        if (navigator.clipboard) navigator.clipboard.writeText(shareUrl);
        showToast("✓ Link copied to clipboard!");
      }
    }
  };

  return React.createElement("div", { className: "share-bar-container" },
    React.createElement("div", { className: "share-bar-title" },
      React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
        React.createElement("circle", { cx: "18", cy: "5", r: "3" }),
        React.createElement("circle", { cx: "6", cy: "12", r: "3" }),
        React.createElement("circle", { cx: "18", cy: "19", r: "3" }),
        React.createElement("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
        React.createElement("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })
      ),
      "கட்டுரையைப் பகிர்க (Share Briefing):"
    ),
    React.createElement("div", { className: "share-buttons-group" },
      React.createElement("button", { className: "btn-share-icon btn-share-whatsapp", onClick: () => handleShareClick('whatsapp'), title: "Share on WhatsApp", "aria-label": "WhatsApp Share" },
        React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" },
          React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" })
        )
      ),
      React.createElement("button", { className: "btn-share-icon btn-share-x", onClick: () => handleShareClick('x'), title: "Share on X", "aria-label": "X Share" },
        React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
          React.createElement("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
        )
      ),
      React.createElement("button", { className: "btn-share-icon btn-share-linkedin", onClick: () => handleShareClick('linkedin'), title: "Share on LinkedIn", "aria-label": "LinkedIn Share" },
        React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" },
          React.createElement("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
        )
      ),
      React.createElement("button", { className: "btn-share-icon btn-share-facebook", onClick: () => handleShareClick('facebook'), title: "Share on Facebook", "aria-label": "Facebook Share" },
        React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" },
          React.createElement("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        )
      ),
      navigator.share && React.createElement("button", { className: "btn-share-icon btn-share-native", onClick: () => handleShareClick('native'), title: "Share via Device", "aria-label": "Native Share" },
        React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          React.createElement("circle", { cx: "18", cy: "5", r: "3" }),
          React.createElement("circle", { cx: "6", cy: "12", r: "3" }),
          React.createElement("circle", { cx: "18", cy: "19", r: "3" }),
          React.createElement("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
          React.createElement("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })
        )
      ),
      React.createElement("button", { className: "btn-share-icon btn-share-copy", onClick: () => handleShareClick('copy'), title: "Copy Link", "aria-label": "Copy Link" },
        React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          React.createElement("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
          React.createElement("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
        )
      )
    ),
    toastMsg && React.createElement("div", { className: "fimblogs-toast" }, toastMsg)
  );
};

const DEFAULT_QUIZZES = {
  "rich-test-article-tamil-finance": [
    {
      id: "q1",
      question: "பங்குச்சந்தை நிலையற்ற தன்மையை வெல்லக்கூடிய சிறந்த முதலீட்டு முறை எது?",
      options: ["ஒரே நாளில் அதிக பங்குகளை வாங்குவது", "SIP (Systematic Investment Plan) முறை", "கடன் வாங்கி முதலீடு செய்வது", "பங்குகளை உடனே விற்பது"],
      correct: 1,
      explanation: "SIP முறையில் தொடர்ச்சியாக முதலீடு செய்வதே சந்தை ஏற்ற இறக்கங்களைச் சமாளித்து நீண்டகாலத்தில் செல்வத்தை உருவாக்கும் சிறந்த வழியாகும்."
    },
    {
      id: "q2",
      question: "உங்கள் முதலீட்டின் அபாயத்தை (Risk) குறைக்க என்ன செய்ய வேண்டும்?",
      options: ["ஒரே நிறுவனத்தின் பங்குகளை வாங்குவது", "பல்வேறு துறைகளில் பிரித்து முதலீடு செய்வது (Diversification)", "தினமும் பங்குகளின் விலையை கவனிப்பது", "எந்த பங்கையும் வாங்காமல் இருப்பது"],
      correct: 1,
      explanation: "முதலீடுகளை பல துறைகளில் பிரித்து முதலீடு செய்வதன் மூலம் (Diversification) உங்கள் அபாயத்தைக் குறைக்கலாம்."
    },
    {
      id: "q3",
      question: "2026 ஆம் ஆண்டிலும் முதலீட்டில் வெற்றி பெற எந்த காரணி மிக முக்கியம்?",
      options: ["குறுகிய கால வர்த்தகம்", "கூட்டு வட்டியின் ஆற்றல் (Power of Compounding)", "வதந்திகளை நம்புவது", "சந்தை வீழ்ச்சியின் போது பயந்து விற்பது"],
      correct: 1,
      explanation: "சீராக முதலீடு செய்யும்போது கூட்டு வட்டி (Compounding) மூலம் உங்கள் பணம் வேகமாக வளரும்."
    }
  ],
  "us-treasury-bond-yields-tamil": [
    {
      id: "q1",
      question: "அமெரிக்க டிரஷரி பாண்ட் ஈல்ட் உயர்வினால் இந்திய பங்குச்சந்தைக்கு என்னவாகும்?",
      options: ["வெளிநாட்டு முதலீடுகள் (FII) வெளியேற வாய்ப்பு", "இந்திய சந்தை உடனடியாக உயரும்", "டாலர் மதிப்பு பாதியாகக் குறையும்", "எந்த மாற்றமும் இருக்காது"],
      correct: 0,
      explanation: "அமெரிக்க கடன் பத்திர வட்டி உயரும் போது வெளிநாட்டு முதலீட்டாளர்கள் பாதுகாப்பான அமெரிக்க பாண்டுகளில் முதலீடு செய்ய விரும்புவர்."
    },
    {
      id: "q2",
      question: "டிரஷரி பாண்ட் (Treasury Bond) என்பது யார் வெளியிடும் கடன் பத்திரம்?",
      options: ["தனியார் வங்கி", "அமெரிக்க அரசாங்கம்", "தொழில்நுட்ப நிறுவனங்கள்", "பங்குச்சந்தை தரகர்கள்"],
      correct: 1,
      explanation: "அமெரிக்க டிரஷரி பாண்டுகள் அமெரிக்க அரசாங்கத்தால் வெளியிடப்படும் அதிகாரப்பூர்வ கடன் பத்திரங்களாகும்."
    }
  ],
  "tesla-robotaxi-tamil-analysis": [
    {
      id: "q1",
      question: "டெஸ்லா ரோபோடாக்ஸி சேவையின் முக்கிய நன்மை என்னவாக இருக்கும்?",
      options: ["பயணக் கட்டணம் மற்றும் செலவு பெருமளவு குறையும்", "டிரைவர் சம்பளம் அதிகமாகும்", "மின்சார பயன்பாடு நிறுத்தப்படும்", "வேகம் மட்டுமே அதிகமாகும்"],
      correct: 0,
      explanation: "ஓட்டுநர் இல்லாத தானியங்கி மின்சார டாக்சிகள் மூலம் ஒரு மைலுக்கான போக்குவரத்து செலவு 80% வரை குறையும்."
    },
    {
      id: "q2",
      question: "ரோபோடாக்ஸி தொழில் நுட்பத்தில் முதன்மையான இயக்கி எது?",
      options: ["தானியங்கி செயற்கை நுண்ணறிவு (AI) & Full Self Driving", "மனித ஓட்டுநர்", "நீராவி என்ஜின்", "குதிரை வண்டி"],
      correct: 0,
      explanation: "தானியங்கி AI மற்றும் கேமரா சென்சார்கள் மூலமே ரோபோடாக்ஸிக்கள் பாதுகாப்பாக இயக்கப்படுகின்றன."
    }
  ]
};

const GENERIC_FALLBACK_QUIZ = [
  {
    id: "fq1",
    question: "இக்கட்டுரையின் முக்கிய நிதி நோக்கம் என்ன?",
    options: ["நிதி விழிப்புணர்வு பெற உதவுவது", "பயமுறுத்துவது", "வர்த்தகத்தை நிறுத்துவது", "எதுவுமில்லை"],
    correct: 0,
    explanation: "FimBlogs நிதிச் செய்திகளையும் பொருளாதாரக் கருத்துக்களையும் எளிய தமிழில் வாசகர்களுக்கு விளக்குவதை நோக்கமாகக் கொண்டுள்ளது."
  },
  {
    id: "fq2",
    question: "நிதித் திட்டமிடலில் (Financial Planning) எது முதன்மையானது?",
    options: ["சீரான சேமிப்பு மற்றும் முதலீடு", "தேவையற்ற கடன்கள் வாங்குவது", "ஒரே நாளில் பணம் சம்பாதிக்க நினைப்பது", "திட்டமிடல் இல்லாமை"],
    correct: 0,
    explanation: "சீரான சேமிப்பு மற்றும் உத்திகளுடனான முதலீடே நிதி சுதந்திரத்திற்கு வழிவகுக்கும்."
  }
];

const QuizWidget = function({ article }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const loadQuiz = async () => {
      let qList = null;
      if (article && article.id) {
        const remoteQuiz = await SupabaseService.fetchQuizByArticleId(article.id);
        if (remoteQuiz) {
          const remoteQuestions = await SupabaseService.fetchQuestionsByQuizId(remoteQuiz.id);
          if (remoteQuestions && remoteQuestions.length > 0) {
            qList = remoteQuestions.map(q => ({
              id: q.id,
              question: q.question_text,
              options: q.options || [],
              correct: q.correct_option_index,
              explanation: q.explanation || ""
            }));
          }
        }
      }
      if (!qList) {
        const localQuizzes = StorageService.getQuizzes();
        const foundLocal = localQuizzes.find(q => q.articleId === article.id || q.articleSlug === article.slug);
        if (foundLocal && foundLocal.questions && foundLocal.questions.length > 0) {
          qList = foundLocal.questions;
        }
      }
      if (!qList) {
        qList = DEFAULT_QUIZZES[article.id] || DEFAULT_QUIZZES[article.slug] || GENERIC_FALLBACK_QUIZ;
      }
      setQuestions(qList);
      setCurrentIndex(0);
      setSelectedAnswers({});
      setSubmitted(false);
      setScore(0);
    };
    loadQuiz();
  }, [article.id, article.slug]);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optIdx) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);

    SupabaseService.saveQuizAttempt({
      article_id: article.id,
      score: calculatedScore,
      total_questions: totalQuestions,
      completed_at: new Date().toISOString()
    });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);
    setScore(0);
  };

  const handleShareScore = () => {
    const text = `நான் FimBlogs-இல் "${article.title}" வினாடி-வினாவில் ${score}/${totalQuestions} மதிப்பெண்கள் பெற்றுள்ளேன்! நீங்களும் விளையாடிப் பாருங்கள்: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scorePercentage = Math.round((score / totalQuestions) * 100);

  if (submitted) {
    let wishTitle = "வாழ்த்துக்கள்! (Outstanding!)";
    let wishMsg = "நீங்கள் இந்த கட்டுரையின் நிதித் கருத்துக்களை சிறப்பாக புரிந்துகொண்டுள்ளீர்கள்! தமிழ் நிதி அறிவை மேலும் வளர்த்துக்கொள்ள தொடர்ந்து படியுங்கள்.";

    if (scorePercentage < 50) {
      wishTitle = "நல்ல முயற்சி! (Keep Learning!)";
      wishMsg = "கட்டுரையை மீண்டும் ஒருமுறை படித்து உங்கள் பங்குச்சந்தை மற்றும் நிதி அறிவை மேம்படுத்திக் கொள்ளுங்கள்!";
    } else if (scorePercentage < 100) {
      wishTitle = "சிறப்பான திறன்! (Great Job!)";
      wishMsg = "பெரும்பாலான கேள்விகளுக்கு சரியாக பதிலளித்துள்ளீர்கள். நீர் ஒரு வளர்ந்து வரும் நிதி நிபுணர்!";
    }

    return React.createElement("div", { className: "mcq-quiz-card" },
      React.createElement("div", { className: "quiz-wish-banner" },
        React.createElement("h2", { className: "wish-title" }, wishTitle),
        React.createElement("p", { className: "wish-message" }, wishMsg),

        React.createElement("div", { className: "score-badge-big" },
          React.createElement("span", { className: "score-badge-number" }, `${score} / ${totalQuestions}`),
          React.createElement("span", { className: "score-badge-sub" }, `${scorePercentage}% Accuracy Score`)
        ),

        React.createElement("div", { style: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } },
          React.createElement("button", { className: "btn-primary", onClick: handleRetake, style: { background: 'var(--primary)' } }, "வினாடி வினாவை மீண்டும் செய்ய (Retake Quiz)"),
          React.createElement("button", { className: "btn-primary", onClick: handleShareScore, style: { background: '#25D366' } }, "மதிப்பெண்ணை வாட்ஸ்அப்பில் பகிர (Share Result)")
        )
      )
    );
  }

  const selectedOpt = selectedAnswers[currentIndex];
  const isAnswered = selectedOpt !== undefined;

  return React.createElement("div", { className: "mcq-quiz-card" },
    React.createElement("div", { className: "quiz-card-topbar" },
      React.createElement("span", { className: "quiz-header-badge" }, "3-Min Tamil Quiz Challenge"),
      React.createElement("span", { style: { fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' } }, `Question ${currentIndex + 1} of ${totalQuestions}`)
    ),

    React.createElement("div", { className: "quiz-progress-bar-bg" },
      React.createElement("div", { className: "quiz-progress-bar-fill", style: { width: `${progressPercent}%` } })
    ),

    React.createElement("h3", { className: "quiz-question-title" }, currentQ.question),

    React.createElement("div", { className: "quiz-options-list" },
      currentQ.options.map((optText, optIdx) => {
        let btnClass = "quiz-option-btn";
        if (selectedOpt === optIdx) {
          btnClass += " selected";
        }
        const letter = String.fromCharCode(65 + optIdx);

        return React.createElement("button", {
          key: optIdx,
          className: btnClass,
          onClick: () => handleSelectOption(optIdx)
        },
          React.createElement("span", { className: "quiz-option-letter" }, letter),
          React.createElement("span", { style: { flexGrow: 1 } }, optText)
        );
      })
    ),

    isAnswered && currentQ.explanation && React.createElement("div", { className: "quiz-explanation-box" },
      React.createElement("strong", { style: { color: 'var(--accent)', display: 'block', marginBottom: '4px' } }, "விளக்கம் (Explanation):"),
      currentQ.explanation
    ),

    React.createElement("div", { className: "quiz-action-bar" },
      React.createElement("button", {
        className: "btn-secondary",
        onClick: handlePrev,
        disabled: currentIndex === 0,
        style: { opacity: currentIndex === 0 ? 0.5 : 1 }
      }, "← முந்தைய (Prev)"),

      currentIndex < totalQuestions - 1 ?
        React.createElement("button", {
          className: "btn-primary",
          onClick: handleNext,
          disabled: !isAnswered,
          style: { opacity: !isAnswered ? 0.6 : 1 }
        }, "அடுத்த கேள்வி (Next) →") :
        React.createElement("button", {
          className: "btn-primary",
          onClick: handleSubmit,
          disabled: Object.keys(selectedAnswers).length < totalQuestions,
          style: { background: 'var(--accent)', opacity: Object.keys(selectedAnswers).length < totalQuestions ? 0.6 : 1 }
        }, "முடிவுகளைக் காண்க (Complete Quiz)")
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
      React.createElement("h1", { className: "article-full-title" }, article.title),
      React.createElement("div", { style: { fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 } },
        `Published: ${article.date || "14 Sep 2026"} • ${article.readTime || "3 min read"}`
      )
    ),
    React.createElement("div", { className: "featured-img-container" }, React.createElement("img", { src: article.image, alt: article.title, style: { width: '100%', maxHeight: '440px', objectFit: 'cover' } })),
    React.createElement("div", { className: "article-content", dangerouslySetInnerHTML: { __html: article.content } }),
    React.createElement(SocialShareBar, { article: article }),
    React.createElement(QuizWidget, { article: article })
  );
const STATIC_PAGES = {
  "about-us": {
    title: "About Us - FimBlogs",
    heading: "About FimBlogs",
    subtitle: "Financial Intelligence Made Simple in Tamil",
    content: `
      <p>Welcome to <b>FimBlogs</b>, your premier digital network dedicated to breaking down complex financial news, stock market updates, macroeconomic analysis, and personal finance strategies into simple, easy-to-understand Tamil.</p>
      <h2>Our Mission</h2>
      <p>Financial literacy is the foundation of economic independence. At FimBlogs, our mission is to empower Tamil readers across the globe with high-signal, zero-fluff financial insights in 3-minute daily briefings. Whether you are a beginner looking to understand SIP investments or an experienced trader analyzing stock trends, FimBlogs delivers clear, actionable knowledge.</p>
      <h2>What We Offer</h2>
      <ul>
        <li><b>Daily Market Insights:</b> Clear breakdown of Indian stock markets (NSE & BSE), global trends, and corporate financial performance.</li>
        <li><b>Personal Finance & Compounding:</b> Practical guides on wealth creation, mutual funds, tax-saving strategies, and risk management.</li>
        <li><b>Interactive Learning:</b> Engaging Tamil quizzes to test and reinforce your financial understanding.</li>
      </ul>
      <h2>Our Editorial Standard</h2>
      <p>We believe in independence, accuracy, and reader-first reporting. Every briefing is curated by financial enthusiasts and translated into accessible Tamil without overwhelming technical jargon.</p>
    `
  },
  "contact-us": {
    title: "Contact Us - FimBlogs",
    heading: "Contact Us",
    subtitle: "Get in touch with the FimBlogs editorial and support team",
    content: `
      <p>Have questions, feedback, or media inquiries? We would love to hear from you!</p>
      <h2>Editorial & News Desk</h2>
      <p>If you have news tips, financial topic requests, or feedback regarding our content, please reach out to us at:</p>
      <p><b>Email:</b> contact@fimblogs.in</p>
      <h2>Advertising & Sponsorships</h2>
      <p>For brand partnerships, newsletter sponsorships, or advertising inquiries, contact our media team:</p>
      <p><b>Business Email:</b> media@fimblogs.in</p>
      <h2>WhatsApp Channel</h2>
      <p>Join our official WhatsApp channel for instant Tamil financial updates: <a href="https://whatsapp.com/channel/0029VbDiSjk11ulWMY06Z93w" target="_blank" rel="noopener">Join FimBlogs on WhatsApp</a></p>
      <h2>Office Address</h2>
      <p>FimBlogs Media Network,<br/>Chennai, Tamil Nadu, India - 600001</p>
    `
  },
  "privacy-policy": {
    title: "Privacy Policy - FimBlogs",
    heading: "Privacy Policy",
    subtitle: "How we collect, protect, and respect your personal information",
    content: `
      <p>Last updated: September 15, 2026</p>
      <p>At <b>FimBlogs</b> (accessible from https://fimblogs.in), the privacy of our visitors is one of our top priorities. This Privacy Policy document outlines the types of information collected and recorded by FimBlogs and how we use it.</p>
      <h2>Information We Collect</h2>
      <p>We collect minimal information necessary to deliver a seamless reader experience:</p>
      <ul>
        <li><b>Email Addresses:</b> Provided voluntarily when subscribing to our daily financial briefings.</li>
        <li><b>Usage Data:</b> Standard log files including anonymous page views, device types, and referral sources to optimize performance.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>We use the collected data strictly to:</p>
      <ul>
        <li>Provide, operate, and maintain our blog and quiz platform.</li>
        <li>Send periodic financial newsletters and briefing updates.</li>
        <li>Improve and personalize reader experience based on popular topics.</li>
        <li>Prevent security threats, unauthorized access, and malicious activity.</li>
      </ul>
      <h2>Data Protection & Cookies</h2>
      <p>FimBlogs does not sell, trade, or rent readers' personal information to third parties. We use essential local browser storage to save reader preferences such as dark mode and quiz progress.</p>
      <h2>Third-Party Services</h2>
      <p>Our website utilizes secure cloud infrastructure (Supabase) for real-time article delivery and subscriber management. All data transmissions are encrypted using standard TLS protocols.</p>
    `
  },
  "terms-and-conditions": {
    title: "Terms and Conditions - FimBlogs",
    heading: "Terms and Conditions",
    subtitle: "Rules and guidelines for using the FimBlogs platform",
    content: `
      <p>Last updated: September 15, 2026</p>
      <p>Welcome to <b>FimBlogs</b>! By accessing or using our website located at https://fimblogs.in, you agree to comply with and be bound by the following Terms and Conditions.</p>
      <h2>Intellectual Property Rights</h2>
      <p>Unless otherwise stated, FimBlogs and/or its licensors own the intellectual property rights for all original content, Tamil briefings, graphics, and interactive material on this site. You may view and read content for personal, non-commercial use only.</p>
      <h2>Restrictions</h2>
      <p>You are explicitly restricted from:</p>
      <ul>
        <li>Republishing FimBlogs content on other commercial media platforms without proper attribution.</li>
        <li>Using this website in any way that damages, disables, or overburdens our infrastructure.</li>
        <li>Engaging in automated data scraping, harvesting, or extraction.</li>
      </ul>
      <h2>User Submissions & Quiz Participation</h2>
      <p>Quiz responses and subscriber entries must be submitted in good faith. FimBlogs reserves the right to modify or remove content at any time without prior notice.</p>
    `
  },
  "disclaimer": {
    title: "Disclaimer - FimBlogs",
    heading: "Financial & Investment Disclaimer",
    subtitle: "Educational purpose disclaimer regarding financial content",
    content: `
      <p>Last updated: September 15, 2026</p>
      <p>The information provided on <b>FimBlogs</b> (https://fimblogs.in) is for general educational and informational purposes only. All financial news, market summaries, stock analysis, and investment concepts published in Tamil are intended to foster financial awareness.</p>
      <h2>Not Financial or Investment Advice</h2>
      <p><b>FimBlogs is not a SEBI-registered financial advisor, broker, or investment advisory firm.</b> Nothing published on this website constitutes professional financial, tax, legal, or investment advice. Readers should not construe any article as a recommendation to buy, sell, or hold any financial security or asset.</p>
      <h2>Risk Warning</h2>
      <p>Investing in stock markets, mutual funds, derivatives, and financial instruments involves substantial risk of capital loss. Past performance of any company or strategy does not guarantee future results. Always consult a certified financial advisor before making any financial or investment decisions.</p>
      <h2>Accuracy of Information</h2>
      <p>While we strive to keep information accurate and up to date, FimBlogs makes no warranties about the completeness, reliability, or accuracy of market data provided by third-party sources.</p>
    `
  }
};

const StaticPageView = function({ pageKey }) {
  const page = STATIC_PAGES[pageKey] || STATIC_PAGES["about-us"];

  useEffect(() => { window.scrollTo(0, 0); }, [pageKey]);

  return React.createElement("article", { className: "container container-narrow article-detail-container" },
    React.createElement(SEOHead, { title: page.title, description: page.subtitle }),
    React.createElement("header", { className: "article-header" },
      React.createElement("span", { className: "article-category-badge" }, "FimBlogs Information"),
      React.createElement("h1", { className: "article-full-title" }, page.heading),
      React.createElement("p", { style: { fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.5rem' } }, page.subtitle)
    ),
    React.createElement("div", { className: "article-content", style: { marginTop: '2rem' }, dangerouslySetInnerHTML: { __html: page.content } })
  );
};

const AdminLogin = function() {
  const app = useApp();
  const [u, setU] = useState(""); const [p, setP] = useState(""); const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (u === "admin" && p === "fimblogs2026") {
      const token = await JwtAuthService.generateToken({ username: "admin", role: "admin" });
      sessionStorage.setItem("fimblogs_jwt_token", token);
      sessionStorage.setItem("fimblogs_admin", "true");
      app.setIsAdminLoggedIn(true);
      window.location.hash = "#/secret-admin/dashboard";
    } else {
      setError("Security Alert: Invalid administrative credentials.");
    }
  };

  return React.createElement("div", { className: "container container-narrow", style: { padding: '5rem 0' } },
    React.createElement("div", { style: { background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } },
      React.createElement("h2", { style: { textAlign: 'center', marginBottom: '0.5rem' } }, "🔒 Secure Admin Portal Login"),
      React.createElement("p", { style: { textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' } }, "Protected by JWT HMAC-SHA256 Token Authentication"),
      error && React.createElement("div", { style: { padding: '10px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' } }, error),
      React.createElement("form", { onSubmit: handleLogin, style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Username", value: u, onChange: e => setU(e.target.value) }),
        React.createElement("input", { type: "password", className: "input-styled", placeholder: "Password", value: p, onChange: e => setP(e.target.value) }),
        React.createElement("button", { type: "submit", className: "btn-primary" }, "Authenticate Session (JWT)")
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

// QUIZ EDITOR SECTION
const QuizEditorSection = function() {
  const app = useApp();
  const [selectedArticleId, setSelectedArticleId] = useState(app.articles[0]?.id || "");
  const [questions, setQuestions] = useState([]);
  const [qText, setQText] = useState("");
  const [opt0, setOpt0] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [correctIdx, setCorrectIdx] = useState(0);
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    if (!selectedArticleId) return;
    const targetArt = app.articles.find(a => a.id === selectedArticleId);
    if (!targetArt) return;

    const localQuizzes = StorageService.getQuizzes();
    const found = localQuizzes.find(q => q.articleId === targetArt.id || q.articleSlug === targetArt.slug);
    if (found && found.questions) {
      setQuestions(found.questions);
    } else if (DEFAULT_QUIZZES[targetArt.id] || DEFAULT_QUIZZES[targetArt.slug]) {
      setQuestions(DEFAULT_QUIZZES[targetArt.id] || DEFAULT_QUIZZES[targetArt.slug]);
    } else {
      setQuestions(GENERIC_FALLBACK_QUIZ);
    }
  }, [selectedArticleId, app.articles]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!qText.trim() || !opt0.trim() || !opt1.trim()) {
      alert("Please fill question text and at least 2 options.");
      return;
    }
    const newQ = {
      id: "q_" + Date.now(),
      question: qText.trim(),
      options: [opt0.trim(), opt1.trim(), opt2.trim(), opt3.trim()].filter(Boolean),
      correct: parseInt(correctIdx),
      explanation: explanation.trim()
    };
    const updatedQs = [...questions, newQ];
    setQuestions(updatedQs);

    const targetArt = app.articles.find(a => a.id === selectedArticleId);
    const localQuizzes = StorageService.getQuizzes().filter(q => q.articleId !== selectedArticleId);
    localQuizzes.push({ articleId: targetArt.id, articleSlug: targetArt.slug, questions: updatedQs });
    StorageService.saveQuizzes(localQuizzes);

    setQText(""); setOpt0(""); setOpt1(""); setOpt2(""); setOpt3(""); setExplanation("");
  };

  const handleDeleteQuestion = (qId) => {
    const updatedQs = questions.filter(q => q.id !== qId);
    setQuestions(updatedQs);
    const targetArt = app.articles.find(a => a.id === selectedArticleId);
    const localQuizzes = StorageService.getQuizzes().filter(q => q.articleId !== selectedArticleId);
    localQuizzes.push({ articleId: targetArt.id, articleSlug: targetArt.slug, questions: updatedQs });
    StorageService.saveQuizzes(localQuizzes);
  };

  return React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
    React.createElement("h3", { style: { fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' } }, "Article Quiz Management Console"),

    React.createElement("div", { style: { marginBottom: '1.5rem' } },
      React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '6px' } }, "Select Article to Manage Quiz:"),
      React.createElement("select", { className: "input-styled", style: { width: '100%' }, value: selectedArticleId, onChange: e => setSelectedArticleId(e.target.value) },
        app.articles.map(a => React.createElement("option", { key: a.id, value: a.id }, a.title))
      )
    ),

    React.createElement("form", { onSubmit: handleAddQuestion, style: { background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '2rem' } },
      React.createElement("h4", { style: { fontWeight: 800, marginBottom: '1rem' } }, "+ Add MCQ Question"),

      React.createElement("div", { style: { marginBottom: '1rem' } },
        React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '4px' } }, "Question Text (Tamil)"),
        React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%' }, placeholder: "e.g. முதலீட்டின் அபாயத்தைக் குறைக்க என்ன செய்ய வேண்டும்?", value: qText, onChange: e => setQText(e.target.value), required: true })
      ),

      React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1rem' } },
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Option A", value: opt0, onChange: e => setOpt0(e.target.value), required: true }),
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Option B", value: opt1, onChange: e => setOpt1(e.target.value), required: true }),
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Option C (Optional)", value: opt2, onChange: e => setOpt2(e.target.value) }),
        React.createElement("input", { type: "text", className: "input-styled", placeholder: "Option D (Optional)", value: opt3, onChange: e => setOpt3(e.target.value) })
      ),

      React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '1rem' } },
        React.createElement("div", null,
          React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '4px' } }, "Correct Choice"),
          React.createElement("select", { className: "input-styled", style: { width: '100%' }, value: correctIdx, onChange: e => setCorrectIdx(e.target.value) },
            React.createElement("option", { value: 0 }, "Option A"),
            React.createElement("option", { value: 1 }, "Option B"),
            React.createElement("option", { value: 2 }, "Option C"),
            React.createElement("option", { value: 3 }, "Option D")
          )
        ),
        React.createElement("div", null,
          React.createElement("label", { style: { fontWeight: 700, display: 'block', fontSize: '0.85rem', marginBottom: '4px' } }, "Explanation / Takeaway"),
          React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%' }, placeholder: "Brief explanation for readers", value: explanation, onChange: e => setExplanation(e.target.value) })
        )
      ),

      React.createElement("button", { type: "submit", className: "btn-primary", style: { width: '100%' } }, "+ Add Question to Quiz")
    ),

    React.createElement("h4", { style: { fontWeight: 800, marginBottom: '1rem' } }, `Current Quiz Questions (${questions.length})`),
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
      questions.map((q, idx) =>
        React.createElement("div", { key: q.id || idx, style: { padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 800 } }, `${idx + 1}. ${q.question}`),
            React.createElement("div", { style: { fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' } }, `Correct: Option ${String.fromCharCode(65 + q.correct)} (${q.options[q.correct]})`),
            q.explanation && React.createElement("div", { style: { fontSize: '0.80rem', color: 'var(--accent)', marginTop: '2px', fontStyle: 'italic' } }, `Explanation: ${q.explanation}`)
          ),
          React.createElement("button", { className: "btn-secondary", style: { color: '#ef4444', fontSize: '0.8rem' }, onClick: () => handleDeleteQuestion(q.id) }, "Delete")
        )
      )
    )
  );
};

// ARTICLE EDITOR SECTION
const AdminArticleEditor = function({ form, setForm, handleSaveForm, app }) {
  const [editorMode, setEditorMode] = useState("html");

  // Embedded Quiz Builder State for current article
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [qText, setQText] = useState("");
  const [opt0, setOpt0] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [correctIdx, setCorrectIdx] = useState(0);
  const [explanation, setExplanation] = useState("");

  // Load existing quiz for this article
  useEffect(() => {
    if (!form) return;
    const localQuizzes = StorageService.getQuizzes();
    const found = localQuizzes.find(q => q.articleId === form.id || q.articleSlug === form.slug);
    if (found && found.questions && found.questions.length > 0) {
      setQuizQuestions(found.questions);
    } else if (DEFAULT_QUIZZES[form.id] || DEFAULT_QUIZZES[form.slug]) {
      setQuizQuestions(DEFAULT_QUIZZES[form.id] || DEFAULT_QUIZZES[form.slug]);
    } else {
      setQuizQuestions([]);
    }
  }, [form.id, form.slug]);

  const handleAddQuizQuestion = (e) => {
    e.preventDefault();
    if (!qText.trim() || !opt0.trim() || !opt1.trim()) {
      alert("Please enter question text and at least 2 options.");
      return;
    }
    const newQ = {
      id: "q_" + Date.now(),
      question: qText.trim(),
      options: [opt0.trim(), opt1.trim(), opt2.trim(), opt3.trim()].filter(Boolean),
      correct: parseInt(correctIdx),
      explanation: explanation.trim()
    };
    const updated = [...quizQuestions, newQ];
    setQuizQuestions(updated);

    // Save quiz into LocalStorage for this article
    const localQuizzes = StorageService.getQuizzes().filter(q => q.articleId !== form.id && q.articleSlug !== form.slug);
    localQuizzes.push({ articleId: form.id, articleSlug: form.slug, questions: updated });
    StorageService.saveQuizzes(localQuizzes);

    setQText(""); setOpt0(""); setOpt1(""); setOpt2(""); setOpt3(""); setExplanation("");
  };

  const handleDeleteQuizQuestion = (qId) => {
    const updated = quizQuestions.filter(q => q.id !== qId);
    setQuizQuestions(updated);
    const localQuizzes = StorageService.getQuizzes().filter(q => q.articleId !== form.id && q.articleSlug !== form.slug);
    localQuizzes.push({ articleId: form.id, articleSlug: form.slug, questions: updated });
    StorageService.saveQuizzes(localQuizzes);
  };

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

      /* EMBEDDED ARTICLE QUIZ BUILDER SECTION */
      React.createElement("div", { style: { marginTop: '2rem', marginBottom: '1.5rem', borderTop: '2px dashed var(--border-color)', paddingTop: '1.5rem' } },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' } },
          React.createElement("h3", { style: { fontSize: '1.1rem', fontWeight: 800 } }, "💡 Article MCQ Quiz Builder (Optional)"),
          React.createElement("span", { style: { fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-light)', padding: '2px 8px', borderRadius: '99px' } }, `${quizQuestions.length} Questions Configured`)
        ),

        /* Existing Quiz Questions for this article */
        quizQuestions.length > 0 ?
          React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.25rem' } },
            quizQuestions.map((q, idx) =>
              React.createElement("div", { key: q.id || idx, style: { padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                React.createElement("div", null,
                  React.createElement("div", { style: { fontWeight: 700, fontSize: '0.875rem' } }, `${idx + 1}. ${q.question}`),
                  React.createElement("div", { style: { fontSize: '0.775rem', color: 'var(--text-muted)' } }, `Correct: ${q.options[q.correct]} (Option ${String.fromCharCode(65 + q.correct)})`)
                ),
                React.createElement("button", { type: "button", className: "btn-secondary", style: { color: '#ef4444', padding: '2px 8px', fontSize: '0.75rem' }, onClick: () => handleDeleteQuizQuestion(q.id) }, "Delete")
              )
            )
          ) :
          React.createElement("p", { style: { fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1rem' } }, "No custom quiz added yet. You can add MCQ questions below for readers to take on this article!"),

        /* Form to add a new question */
        React.createElement("div", { style: { background: 'var(--bg-surface)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' } },
          React.createElement("div", { style: { fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' } }, "+ Add MCQ Question to this Article"),
          React.createElement("input", { type: "text", className: "input-styled", style: { width: '100%', marginBottom: '8px', fontSize: '0.85rem' }, placeholder: "Question Text (Tamil)", value: qText, onChange: e => setQText(e.target.value) }),
          React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' } },
            React.createElement("input", { type: "text", className: "input-styled", style: { fontSize: '0.8rem' }, placeholder: "Option A", value: opt0, onChange: e => setOpt0(e.target.value) }),
            React.createElement("input", { type: "text", className: "input-styled", style: { fontSize: '0.8rem' }, placeholder: "Option B", value: opt1, onChange: e => setOpt1(e.target.value) }),
            React.createElement("input", { type: "text", className: "input-styled", style: { fontSize: '0.8rem' }, placeholder: "Option C", value: opt2, onChange: e => setOpt2(e.target.value) }),
            React.createElement("input", { type: "text", className: "input-styled", style: { fontSize: '0.8rem' }, placeholder: "Option D", value: opt3, onChange: e => setOpt3(e.target.value) })
          ),
          React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6px', marginBottom: '10px' } },
            React.createElement("select", { className: "input-styled", style: { fontSize: '0.8rem' }, value: correctIdx, onChange: e => setCorrectIdx(e.target.value) },
              React.createElement("option", { value: 0 }, "Option A is Correct"),
              React.createElement("option", { value: 1 }, "Option B is Correct"),
              React.createElement("option", { value: 2 }, "Option C is Correct"),
              React.createElement("option", { value: 3 }, "Option D is Correct")
            ),
            React.createElement("input", { type: "text", className: "input-styled", style: { fontSize: '0.8rem' }, placeholder: "Explanation / Takeaway for reader", value: explanation, onChange: e => setExplanation(e.target.value) })
          ),
          React.createElement("button", { type: "button", className: "btn-secondary", style: { width: '100%', background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 700 }, onClick: handleAddQuizQuestion }, "+ Attach Question to Article Quiz")
        )
      ),

      React.createElement("button", { type: "submit", className: "btn-primary", style: { width: '100%', padding: '0.75rem', marginTop: '1rem' } }, "Publish Briefing Article")
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
          React.createElement("div", { className: "google-url" }, "https://fimblogs.in/posts/" + (form.slug || 'article-slug')),
          React.createElement("div", { className: "google-desc" }, form.seoDescription || form.excerpt || "Google SERP snippet snippet preview.")
        )
      )
    )
  );
};

// SEO & GENERATIVE ENGINE OPTIMIZATION (GEO) CONSOLE SECTION
const SeoConsoleSection = function() {
  const app = useApp();
  const [copiedType, setCopiedType] = useState("");

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(""), 3000);
    }
  };

  const sitemapXMLContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://fimblogs.in/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
  </url>
${app.articles.map(a => `  <url>
    <loc>https://fimblogs.in/#/article/${a.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  const robotsTxtContent = `User-agent: *
Allow: /
Allow: /css/
Allow: /js/
Disallow: /#/secret-admin/

# AI Generative Engines Explicit Access
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /

Sitemap: https://fimblogs.in/sitemap.xml
Host: https://fimblogs.in`;

  return React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '2rem' } },
    React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
      React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' } },
        React.createElement("h2", { style: { fontSize: '1.4rem', fontWeight: 800 } }, "🔍 Google SERP & AI Search Sitelinks Preview (fimblogs.in)"),
        React.createElement("span", { style: { background: '#dcfce7', color: '#15803d', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '99px' } }, "Google & AI Sitelinks Active")
      ),
      React.createElement("p", { style: { color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' } },
        "Below is how FimBlogs.in appears on Google Search & AI Search Overviews (Gemini, ChatGPT Search, Perplexity), complete with multi-column sitelinks and brand verification."
      ),

      /* GOOGLE SERP SITELINKS PREVIEW CARD (MATCHING FINSHOTS.IN SCREENSHOT) */
      React.createElement("div", { className: "serp-sitelinks-container" },
        React.createElement("div", { className: "serp-site-header" },
          React.createElement("div", { className: "serp-site-icon" }, "F"),
          React.createElement("div", null,
            React.createElement("div", { className: "serp-site-name" }, "FimBlogs"),
            React.createElement("div", { className: "serp-site-url" }, "https://fimblogs.in")
          )
        ),
        React.createElement("div", { className: "serp-site-title" }, "FimBlogs | Financial News made simple in Tamil"),
        React.createElement("div", { className: "serp-site-snippet" },
          "Delivering high-signal macro economics, equity research, and capital market insights in simple Tamil. Read key financial news in 3 minutes."
        ),

        React.createElement("div", { className: "serp-sitelinks-grid" },
          React.createElement("div", { className: "sitelink-item" },
            React.createElement("div", { className: "sitelink-title" }, "Top Articles"),
            React.createElement("div", { className: "sitelink-desc" }, app.articles[0]?.title || "இந்திய பங்குச்சந்தை 2026 முக்கிய வழிகாட்டி...")
          ),
          React.createElement("div", { className: "sitelink-item" },
            React.createElement("div", { className: "sitelink-title" }, "Daily Insights"),
            React.createElement("div", { className: "sitelink-desc" }, "3 Min reads that are fun, insightful and easy to understand in Tamil...")
          ),
          React.createElement("div", { className: "sitelink-item" },
            React.createElement("div", { className: "sitelink-title" }, "Markets & Equity"),
            React.createElement("div", { className: "sitelink-desc" }, "Every week we bring you the most important capital market developments...")
          ),
          React.createElement("div", { className: "sitelink-item" },
            React.createElement("div", { className: "sitelink-title" }, "Personal Finance"),
            React.createElement("div", { className: "sitelink-desc" }, "SIP investment strategies, tax planning, and wealth compounding...")
          )
        )
      )
    ),

    /* SITEMAP.XML & ROBOTS.TXT MANAGEMENT */
    React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' } },
      React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' } },
          React.createElement("h3", { style: { fontSize: '1.1rem', fontWeight: 800 } }, "📄 XML Sitemap (https://fimblogs.in/sitemap.xml)"),
          React.createElement("button", { className: "btn-secondary", style: { fontSize: '0.8rem' }, onClick: () => copyToClipboard(sitemapXMLContent, "sitemap") }, copiedType === "sitemap" ? "✓ Copied!" : "Copy XML")
        ),
        React.createElement("textarea", {
          readOnly: true,
          className: "input-styled",
          style: { width: '100%', height: '180px', fontFamily: 'monospace', fontSize: '0.775rem' },
          value: sitemapXMLContent
        })
      ),

      React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' } },
          React.createElement("h3", { style: { fontSize: '1.1rem', fontWeight: 800 } }, "🤖 Crawler & AI Directives (robots.txt)"),
          React.createElement("button", { className: "btn-secondary", style: { fontSize: '0.8rem' }, onClick: () => copyToClipboard(robotsTxtContent, "robots") }, copiedType === "robots" ? "✓ Copied!" : "Copy Robots.txt")
        ),
        React.createElement("textarea", {
          readOnly: true,
          className: "input-styled",
          style: { width: '100%', height: '180px', fontFamily: 'monospace', fontSize: '0.775rem' },
          value: robotsTxtContent
        })
      )
    ),

    /* GENERATIVE ENGINE OPTIMIZATION (GEO) & REGIONAL TAMIL AUDIT */
    React.createElement("div", { style: { background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' } },
      React.createElement("h3", { style: { fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' } }, "🤖 AI Generative Engine Optimization (GEO) & Regional Target Audit"),
      React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' } },
        React.createElement("div", { style: { padding: '12px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, "Production Domain"),
          React.createElement("div", { style: { fontWeight: 800, color: 'var(--accent)' } }, "https://fimblogs.in")
        ),
        React.createElement("div", { style: { padding: '12px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, "AI Engine Access"),
          React.createElement("div", { style: { fontWeight: 800, color: 'var(--accent)' } }, "GPTBot, Gemini & Perplexity Enabled")
        ),
        React.createElement("div", { style: { padding: '12px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, "Target Geo Region"),
          React.createElement("div", { style: { fontWeight: 800, color: 'var(--accent)' } }, "IN-TN (Tamil Nadu, India)")
        ),
        React.createElement("div", { style: { padding: '12px', background: 'var(--bg-surface)', borderRadius: '6px', border: '1px solid var(--border-color)' } },
          React.createElement("div", { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, "AI Knowledge Graph Schema"),
          React.createElement("div", { style: { fontWeight: 800, color: 'var(--accent)' } }, "NewsMediaOrganization + FAQPage")
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
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'quizzes' ? 'active' : ''), onClick: () => navigateToTab('quizzes') }, "Quiz Management"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'seo' ? 'active' : ''), onClick: () => navigateToTab('seo') }, "SEO & GEO Console"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'categories' ? 'active' : ''), onClick: () => navigateToTab('categories') }, "Category Editor"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'main-menu' ? 'active' : ''), onClick: () => navigateToTab('main-menu') }, "Main Menu Editor"),
        React.createElement("li", { className: "admin-menu-item " + (currentTab === 'footer-menu' ? 'active' : ''), onClick: () => navigateToTab('footer-menu') }, "Footer Menu Editor"),
        React.createElement("li", { className: "admin-menu-item", style: { marginTop: '2rem', color: '#ef4444' }, onClick: () => { sessionStorage.removeItem("fimblogs_jwt_token"); sessionStorage.removeItem("fimblogs_admin"); app.setIsAdminLoggedIn(false); window.location.hash = "#/"; } }, "Exit CMS Portal")
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
      currentTab === "quizzes" ? React.createElement(QuizEditorSection) :
      currentTab === "seo" ? React.createElement(SeoConsoleSection) :
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
  else if (app.currentRoute.startsWith("#/page/")) content = React.createElement(StaticPageView, { pageKey: app.currentRoute.replace("#/page/", "") });
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
              app.categories.map(c => React.createElement("li", { key: c },
                React.createElement("a", { href: "#/", className: "footer-link", onClick: () => app.setActiveCategory(c) }, c)
              ))
            )
          ),
          React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-muted)' } }, "Legal & Links"),
            React.createElement("ul", { style: { listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' } },
              app.footerMenu.map(item => React.createElement("li", { key: item.id }, React.createElement("a", { href: item.url, className: "footer-link" }, item.label)))
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
})();
