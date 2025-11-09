import React, { useState, useEffect } from 'react';
import { Download, BookOpen, Trophy, Users, MessageSquare, TrendingUp, Bell, Globe, CheckCircle, Star, Award, Target, Brain, Smartphone, Shield, Zap, ArrowRight, Menu, X, ChevronDown, Facebook } from 'lucide-react';

const KankoryarWebsite = () => {
  const [language, setLanguage] = useState('dari');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    dari: {
      appName: 'کانکوریار',
      tagline: 'پلتفورم جامع آموزشی برای آمادگی کانکور',
      nav: {
        home: 'خانه',
        features: 'امکانات',
        download: 'دانلود',
        about: 'درباره ما',
        contact: 'تماس'
      },
      hero: {
        title: 'به کانکوریار خوش آمدید',
        subtitle: 'راه حل کامل شما برای موفقیت در امتحان کانکور',
        description: 'یک پلتفورم آموزشی پیشرفته برای کمک به دانش‌آموزان افغان در آمادگی برای امتحان ورودی دانشگاه',
        downloadButton: 'دانلود اپلیکیشن',
        learnMore: 'بیشتر بدانید'
      },
      stats: {
        students: 'دانش‌آموزان فعال',
        quizzes: 'آزمون‌های موجود',
        subjects: 'مواد درسی',
        success: 'نرخ موفقیت'
      },
      features: {
        title: 'امکانات ویژه',
        subtitle: 'همه چیزهایی که برای موفقیت در کانکور نیاز دارید',
        list: [
          {
            icon: BookOpen,
            title: 'مواد آموزشی کامل',
            description: 'دسترسی به کتاب‌ها، یادداشت‌ها و ویدیوهای آموزشی برای صنف‌های 10، 11 و 12'
          },
          {
            icon: Brain,
            title: 'آزمون‌های تعاملی',
            description: 'آزمون‌های چند گزینه‌ای با نمرات فوری و پیگیری پیشرفت'
          },
          {
            icon: Trophy,
            title: 'جدول رتبه‌بندی',
            description: 'رقابت سالم با دانش‌آموزان برتر و مشاهده رتبه خود'
          },
          {
            icon: MessageSquare,
            title: 'انجمن پرسش و پاسخ',
            description: 'پرسش و پاسخ با همکلاسی‌ها و حل شبهات درسی'
          },
          {
            icon: TrendingUp,
            title: 'پیگیری پیشرفت',
            description: 'آمار دقیق از عملکرد شما در هر موضوع و صنف'
          },
          {
            icon: Bell,
            title: 'اخبار و اطلاعیه‌ها',
            description: 'آخرین اخبار کانکور، تاریخ امتحانات و بورسیه‌ها'
          },
          {
            icon: Globe,
            title: 'دو زبانه',
            description: 'پشتیبانی کامل از زبان‌های دری و پشتو'
          },
          {
            icon: Shield,
            title: 'امن و قابل اعتماد',
            description: 'احراز هویت امن و حفاظت از اطلاعات شما'
          }
        ]
      },
      howItWorks: {
        title: 'چگونه کار می‌کند',
        subtitle: 'شروع به استفاده در چند مرحله ساده',
        steps: [
          {
            number: '1',
            title: 'دانلود و نصب',
            description: 'اپلیکیشن را دانلود و روی دستگاه خود نصب کنید'
          },
          {
            number: '2',
            title: 'ثبت نام',
            description: 'حساب کاربری خود را ایجاد کنید'
          },
          {
            number: '3',
            title: 'انتخاب صنف',
            description: 'صنف و مواد درسی خود را انتخاب کنید'
          },
          {
            number: '4',
            title: 'شروع به یادگیری',
            description: 'به مواد آموزشی دسترسی پیدا کنید و آزمون‌ها را شروع کنید'
          }
        ]
      },
      testimonials: {
        title: 'نظرات دانش‌آموزان',
        subtitle: 'موفقیت آنها، الهام بخش ماست',
        list: [
          {
            name: 'احمد رضایی',
            role: 'دانشجوی پزشکی',
            text: 'کانکوریار به من کمک کرد تا با اعتماد به نفس در امتحان کانکور شرکت کنم. مواد آموزشی عالی و آزمون‌های مفید بودند.'
          },
          {
            name: ' حسینی',
            role: 'دانشجوی مهندسی',
            text: 'با استفاده از کانکوریار توانستم پیشرفت خود را ردیابی کنم و نقاط ضعفم را بهبود بخشم. بسیار توصیه می‌کنم!'
          },
          {
            name: 'محمد کریمی',
            role: 'دانشجوی حقوق',
            text: 'انجمن پرسش و پاسخ فوق‌العاده است. همیشه کسی هست که به سوالاتم پاسخ دهد.'
          }
        ]
      },
      download: {
        title: 'دانلود کانکوریار',
        subtitle: 'سفر موفقیت خود را امروز شروع کنید',
        description: 'اپلیکیشن کانکوریار را دانلود کنید و به هزاران دانش‌آموز موفق بپیوندید',
        button: 'دانلود مستقیم اپلیکیشن',
        version: 'نسخه ۱.۰.۰',
        size: 'حجم: ۲۵ مگابایت',
        requirements: 'نیازمندی: اندروید ۵.۰ و بالاتر',
        updates: 'به‌روزرسانی منظم'
      },
      updates: {
        title: 'تعهد ما به بهبود مستمر',
        subtitle: 'ما مدام در حال کار روی بهبود اپلیکیشن هستیم',
        description: 'تیم ما به طور منظم در حال افزودن محتوای جدید، بهبود عملکرد و اضافه کردن ویژگی‌های جدید است. با نصب آخرین نسخه، همیشه از جدیدترین امکانات بهره‌مند شوید.',
        features: [
          'محتوای آموزشی جدید هر ماه',
          'بهبود رابط کاربری',
          'رفع باگ‌ها و بهینه‌سازی',
          'ویژگی‌های جدید بر اساس نظرات کاربران'
        ]
      },
      footer: {
        about: 'درباره کانکوریار',
        aboutText: 'کانکوریار یک پلتفورم آموزشی پیشرفته است که به دانش‌آموزان افغان در آمادگی برای امتحان کانکور کمک می‌کند.',
        quickLinks: 'لینک‌های سریع',
        support: 'پشتیبانی',
        contact: 'تماس با ما',
        rights: 'تمامی حقوق محفوظ است'
      }
    },
    pashto: {
      appName: 'کانکوریار',
      tagline: 'د کانکور د چمتووالي لپاره بشپړ زده کړیز پلیټ فارم',
      nav: {
        home: 'کور',
        features: 'ځانګړتیاوې',
        download: 'ډاونلوډ',
        about: 'زموږ په اړه',
        contact: 'اړیکه'
      },
      hero: {
        title: 'کانکوریار ته ښه راغلاست',
        subtitle: 'ستاسو د کانکور په ازموینه کې د بریالیتوب بشپړ حل',
        description: 'یو پرمختللی زده کړیز پلیټ فارم چې افغان زده کوونکو ته د پوهنتون د ننوتلو په ازموینه کې مرسته کوي',
        downloadButton: 'اپلیکیشن ډاونلوډ کړئ',
        learnMore: 'نور معلومات'
      },
      stats: {
        students: 'فعال زده کوونکي',
        quizzes: 'شته کوئزونه',
        subjects: 'مضامین',
        success: 'د بریالیتوب کچه'
      },
      features: {
        title: 'ځانګړې ځانګړتیاوې',
        subtitle: 'هغه ټول څه چې تاسو د کانکور کې د بریالیتوب لپاره ورته اړتیا لرئ',
        list: [
          {
            icon: BookOpen,
            title: 'بشپړ زده کړیز مواد',
            description: 'د ۱۰، ۱۱ او ۱۲ ټولګیو لپاره کتابونو، یادښتونو او ویډیو لیکچرونو ته لاسرسی'
          },
          {
            icon: Brain,
            title: 'متقابل کوئزونه',
            description: 'څو انتخابي کوئزونه د سمدستي نمرو او پرمختګ تعقیب سره'
          },
          {
            icon: Trophy,
            title: 'د درجه بندۍ جدول',
            description: 'د غوره زده کوونکو سره سالم سیالي او خپل رتبه وګورئ'
          },
          {
            icon: MessageSquare,
            title: 'د پوښتنو او ځوابونو فورم',
            description: 'د ټولګیوالو سره پوښتنې او ځوابونه او د درسي شکونو حل'
          },
          {
            icon: TrendingUp,
            title: 'د پرمختګ تعقیب',
            description: 'ستاسو په هر موضوع او ټولګي کې د فعالیت دقیقې احصائیې'
          },
          {
            icon: Bell,
            title: 'خبرونه او اعلانونه',
            description: 'د کانکور وروستي خبرونه، د ازموینو نیټې او بورسونه'
          },
          {
            icon: Globe,
            title: 'دوه ژبنی',
            description: 'د دري او پښتو ژبو بشپړ ملاتړ'
          },
          {
            icon: Shield,
            title: 'خوندي او د اعتماد وړ',
            description: 'خوندي تصدیق او ستاسو د معلوماتو ساتنه'
          }
        ]
      },
      howItWorks: {
        title: 'څنګه کار کوي',
        subtitle: 'په څو ساده مرحلو کې کارولو ته پیل وکړئ',
        steps: [
          {
            number: '۱',
            title: 'ډاونلوډ او انسټال',
            description: 'اپلیکیشن ډاونلوډ او په خپل وسیله کې نصب کړئ'
          },
          {
            number: '۲',
            title: 'نوم لیکنه',
            description: 'خپل کاربري حساب جوړ کړئ'
          },
          {
            number: '۳',
            title: 'ټولګی انتخاب',
            description: 'خپل ټولګی او درسي مضامین انتخاب کړئ'
          },
          {
            number: '۴',
            title: 'زده کړې پیل کړئ',
            description: 'زده کړیزو موادو ته لاسرسی ومومئ او کوئزونه پیل کړئ'
          }
        ]
      },
      testimonials: {
        title: 'د زده کوونکو نظرونه',
        subtitle: 'د دوی بریالیتوب، زموږ الهام',
        list: [
          {
            name: 'احمد رضایی',
            role: 'د طب محصل',
            text: 'کانکوریار ماته مرسته وکړه چې په اعتماد سره په کانکور ازموینه کې برخه واخلم. زده کړیز مواد عالي او کوئزونه ګټور وو.'
          },
          {
            name: 'فاطمه حسینی',
            role: 'د انجینرۍ محصله',
            text: 'د کانکوریار په کارولو سره وکولای شوم چې خپل پرمختګ تعقیب کړم او خپلې کمزورۍ ښه کړم. ډیر سپارښتنه کوم!'
          },
          {
            name: 'محمد کریمی',
            role: 'د حقوقو محصل',
            text: 'د پوښتنو او ځوابونو فورم خورا عالي دی. تل څوک شته چې زما پوښتنو ته ځواب ووایی.'
          }
        ]
      },
      download: {
        title: 'کانکوریار ډاونلوډ کړئ',
        subtitle: 'خپل بریالیتوب سفر نن پیل کړئ',
        description: 'د کانکوریار اپلیکیشن ډاونلوډ کړئ او زرګونو بریالیو زده کوونکو سره یوځای شئ',
        button: 'مستقیم اپلیکیشن ډاونلوډ',
        version: 'نسخه ۲.۵.۰',
        size: 'اندازه: ۲۵ میګابایټ',
        requirements: 'اړتیا: اندروید ۵.۰ او پورته',
        updates: 'منظم تازه کول'
      },
      updates: {
        title: 'د دوامداره ښه والي لپاره زموږ ژمنه',
        subtitle: 'موږ تل د اپلیکیشن په ښه کولو کې کار کوو',
        description: 'زموږ ټیم په منظمه توګه د نوي مینځپانګې اضافه کولو، د فعالیت په ښه کولو او د نویو ځانګړتیاوو په اضافه کولو کې دی. د وروستي نسخې په نصبولو سره، تل له نویو امکاناتو ګټه واخلئ.',
        features: [
          'هره میاشت نوي زده کړیز مینځپانګه',
          'د کاروونکي انٹرفیس ښه والی',
          'د باګونو حل او غوره کول',
          'د کاروونکو نظرونو پر بنسټ نوي ځانګړتیاوې'
        ]
      },
      footer: {
        about: 'د کانکوریار په اړه',
        aboutText: 'کانکوریار یو پرمختللی زده کړیز پلیټ فارم دی چې افغان زده کوونکو ته د کانکور ازموینې لپاره مرسته کوي.',
        quickLinks: 'ګړندي لینکونه',
        support: 'ملاتړ',
        contact: 'له موږ سره اړیکه',
        rights: 'ټول حقونه خوندي دي'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'dari' || language === 'pashto';

  // const handleDownload = () => {
  //   // Replace with your actual APK download link
  //   const downloadUrl = 'https://www.mediafire.com/file/lycwmu62tjm45f4/base.apk/file';
  //   window.location.href = downloadUrl;
  //   // For demo purposes, show alert
  //   alert(language === 'dari' ? 'دانلود شروع می‌شود...' : 'ډاونلوډ پیل کیږي...');
  // };
  const handleDownload = () => {
  const downloadUrl = 'https://github.com/Hikmat97/kankoryarweb/releases/download/1.0.1/application-28a16011-0c2f-48d9-80b1-10c83632c298.apk';
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'Kankoryar.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert(language === 'dari' ? 'دانلود شروع می‌شود...' : 'ډاونلوډ پیل کیږي...');
};



  const Page = ({ children }) => (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {children}
    </div>
  );

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-x5 flex items-center justify-center ">
  <img
    src="/logo.jpg" // adjust path according to your project
    alt="Target Icon"
    className="w-12 h-12"
  />
  
</div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.appName}
              </h1>
              <p className="text-xs text-gray-600">{t.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`font-medium transition-colors ${
                  currentPage === key ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {value}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'dari' ? 'pashto' : 'dari')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'dari' ? 'پښتو' : 'دری'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-${isRTL ? 'right' : 'left'} px-4 py-3 font-medium ${
                  currentPage === key ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
              >
                {value}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'dari' ? 'pashto' : 'dari')}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
            >
              {language === 'dari' ? 'پښتو' : 'دری'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-medium text-sm">{t.updates.updates}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ">
              {t.hero.title}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">{t.hero.subtitle}</p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownload}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Download className="w-6 h-6" />
                <span>{t.hero.downloadButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('features')}
                className="flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <span>{t.hero.learnMore}</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: t.stats.students, value: '10,000+', icon: Users },
              { label: t.stats.quizzes, value: '5,000+', icon: Brain },
              { label: t.stats.subjects, value: '25+', icon: BookOpen },
              { label: t.stats.success, value: '92%', icon: Trophy }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Features Preview */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4">{t.features.title}</h2>
            <p className="text-xl text-gray-600 text-center mb-12">{t.features.subtitle}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.features.list.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setCurrentPage('features')}
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center space-x-2 mx-auto"
              >
                <span>{language === 'dari' ? 'مشاهده همه امکانات' : 'ټولې ځانګړتیاوې وګورئ'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Updates Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">{t.updates.title}</h2>
              <p className="text-xl mb-6 opacity-90">{t.updates.subtitle}</p>
              <p className="text-lg mb-8 opacity-80 leading-relaxed">{t.updates.description}</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {t.updates.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600 text-center mb-12">{t.testimonials.subtitle}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.testimonials.list.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      {/* <div className="text-sm text-gray-600">{testimonial.role}</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const FeaturesPage = () => (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.features.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.list.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-4">{t.howItWorks.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{t.howItWorks.subtitle}</p>
          <div className="grid md:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {idx < t.howItWorks.steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DownloadPage = () => (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.download.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{t.download.subtitle}</p>
          <p className="text-lg text-gray-500">{t.download.description}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Smartphone className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t.appName}</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <span className="font-semibold">{t.download.version}</span>
              </div>
              {/* <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <span className="font-semibold">{t.download.size}</span>
              </div> */}
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <span className="font-semibold">{t.download.requirements}</span>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="group w-full max-w-md mx-auto flex items-center justify-center space-x-3 px-8 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Download className="w-7 h-7" />
              <span>{t.download.button}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-2">{language === 'dari' ? 'دانلود مستقیم' : 'مستقیم ډاونلوډ'}</h3>
              <p className="opacity-90">{language === 'dari' ? 'بدون نیاز به گوگل پلی یا لینک‌های خارجی' : 'د ګوګل پلی یا بهرنیو لینکونو پرته'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <Zap className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-2">{t.download.updates}</h3>
              <p className="opacity-90">{language === 'dari' ? 'ویژگی‌های جدید و بهبودهای مداوم' : 'نوي ځانګړتیاوې او دوامداره ښه والی'}</p>
            </div>
          </div>
        </div>

        {/* Updates Commitment */}
        <div className="mt-16 bg-white rounded-3xl p-10 shadow-lg">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t.updates.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{t.updates.subtitle}</p>
            <p className="text-gray-600 leading-relaxed">{t.updates.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.updates.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.footer.about}
          </h1>
          <p className="text-xl text-gray-600">{t.footer.aboutText}</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {language === 'dari' ? 'مأموریت ما' : 'زموږ موخه'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {language === 'dari' 
              ? 'کانکوریار با هدف کمک به دانش‌آموزان افغان در دستیابی به اهداف تحصیلی‌شان ایجاد شده است. ما معتقدیم که هر دانش‌آموز باید به منابع آموزشی با کیفیت دسترسی داشته باشد.'
              : 'کانکوریار د افغان زده کوونکو سره د دوی د زده کړیزو موخو په ترلاسه کولو کې د مرستې موخه سره جوړ شوی. موږ باور لرو چې هر زده کوونکی باید با کیفیته زده کړیزو موادو ته لاسرسی ولري.'
            }
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'dari'
              ? 'تیم ما متشکل از متخصصان آموزشی، توسعه‌دهندگان نرم‌افزار و معلمان با تجربه است که همگی به بهبود کیفیت آموزش در افغانستان متعهد هستند.'
              : 'زموږ ټیم د زده کړیزو متخصصینو، سافټویر پراختیا کونکو او تجربه لرونکو ښوونکو څخه جوړ دی چې ټول په افغانستان کې د زده کړې کیفیت ته وده ورکولو ته ژمن دي.'
            }
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-lg opacity-90">{language === 'dari' ? 'دانش‌آموز فعال' : 'فعال زده کوونکي'}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl text-white text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-lg opacity-90">{language === 'dari' ? 'آزمون و تمرین' : 'کوئزونه او تمرینونه'}</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-8 rounded-2xl text-white text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">92%</div>
            <div className="text-lg opacity-90">{language === 'dari' ? 'نرخ موفقیت' : 'د بریالیتوب کچه'}</div>
          </div>
        </div> */}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.footer.contact}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'dari' ? 'ما مشتاق شنیدن نظرات شما هستیم' : 'موږ ستاسو د نظرونو د اوریدو مشتاق یو'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>              
                <div>
  <h3 className="font-bold text-lg mb-1">
    {language === 'dari' ? 'پشتیبانی' : 'ملاتړ'}
  </h3>
  <a
    href="mailto:hikmatdev6@gmail.com"
    className="text-blue-600 hover:underline"
  >
    hikmatdev6@gmail.com
  </a>
</div>

              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Facebook className="w-6 h-6 text-purple-600" />
                </div>
               <div>
  <h3 className="font-bold text-lg mb-1">
    {language === 'dari' ? 'شبکه‌های اجتماعی' : 'ټولنیز رسنۍ'}
  </h3>
  <a
    href="https://facebook.com/profile.php?id=61582101126048"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    @kankoryar
  </a>
</div>

              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                {language === 'dari' ? 'نظرات و پیشنهادات' : 'نظرونه او وړاندیزونه'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'dari'
                  ? 'نظرات شما برای ما بسیار ارزشمند است. لطفاً ایده‌ها و پیشنهادات خود را با ما در میان بگذارید تا بتوانیم کانکوریار را بهتر کنیم.'
                  : 'ستاسو نظرونه زموږ لپاره ډیر ارزښتناک دي. مهرباني وکړئ خپلې نظرونه او وړاندیزونه موږ سره شریک کړئ ترڅو کانکوریار ښه کړو.'
                }
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'dari' ? 'آماده برای شروع؟' : 'د پیل لپاره چمتو یاست؟'}
            </h3>
            <p className="text-lg opacity-90 mb-6">
              {language === 'dari'
                ? 'همین حالا کانکوریار را دانلود کنید و سفر موفقیت خود را آغاز کنید'
                : 'اوس کانکوریار ډاونلوډ کړئ او خپل بریالیتوب سفر پیل کړئ'
              }
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              <span>{t.hero.downloadButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{t.appName}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.aboutText}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setCurrentPage(key)}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.features.title}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>{language === 'dari' ? 'آزمون‌ها' : 'کوئزونه'}</div>
              <div>{language === 'dari' ? 'مواد آموزشی' : 'زده کړیز مواد'}</div>
              <div>{language === 'dari' ? 'جدول رتبه‌بندی' : 'درجه بندي'}</div>
              <div>{language === 'dari' ? 'انجمن' : 'فورم'}</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.support}</h4>
            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
              >
                <Download className="w-5 h-5" />
                <span>{language === 'dari' ? 'دانلود' : 'ډاونلوډ'}</span>
              </button>
              <button
                onClick={() => setLanguage(language === 'dari' ? 'pashto' : 'dari')}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition-all"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'dari' ? 'پښتو' : 'دری'}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 {t.appName} - {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );

  return (
    <Page>
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'features' && <FeaturesPage />}
      {currentPage === 'download' && <DownloadPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </Page>
  );
};

export default KankoryarWebsite;