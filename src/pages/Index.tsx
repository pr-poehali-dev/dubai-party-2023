import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const articles = [
    {
      id: 1,
      title: "Современные тренды веб-дизайна",
      description: "Изучаем актуальные тенденции в дизайне интерфейсов и UX подходы для 2024 года",
      category: "Дизайн",
      image: "/img/ad731c49-2f3f-47b7-85e3-c4dd8131df6e.jpg",
      readTime: "5 мин",
      date: "24 июля 2024"
    },
    {
      id: 2,
      title: "Технологии будущего",
      description: "Обзор перспективных IT-решений и их влияние на повседневную жизнь",
      category: "Технологии",
      image: "/img/5dfc7555-7447-4e5f-9410-6011f66a5aea.jpg",
      readTime: "8 мин",
      date: "23 июля 2024"
    },
    {
      id: 3,
      title: "Продуктивность и баланс",
      description: "Эффективные методы организации рабочего времени в современном мире",
      category: "Лайфстайл",
      image: "/img/2e02e5f7-fb77-4ae5-8174-5578dcfddc76.jpg",
      readTime: "6 мин",
      date: "22 июля 2024"
    }
  ];

  const categories = ["Все", "Дизайн", "Технологии", "Лайфстайл", "Маркетинг"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] bg-clip-text text-transparent">
                ModernBlog
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Статьи</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Категории</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">О нас</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-[#FF6B6B]/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-[#96CEB4]/20 text-[#96CEB4] border-[#96CEB4]/30">
              ✨ Новые статьи каждую неделю
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4E0DC4] to-[#45B7D1] bg-clip-text text-transparent leading-tight">
              Современный блог
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Исследуем тренды дизайна, технологий и lifestyle. Делимся знаниями и вдохновляем на новые идеи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 px-8 py-3 text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="border-[#45B7D1] text-[#45B7D1] hover:bg-[#45B7D1]/10">
                <Icon name="Users" size={20} className="mr-2" />
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-[#FF6B6B] hover:bg-[#FF6B6B]/90" 
                  : "border-gray-200 hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Последние статьи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-[#FF6B6B] transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="text-[#FF6B6B] hover:bg-[#FF6B6B]/10 p-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B]">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-[#45B7D1]/10 hover:text-[#45B7D1]">
                        <Icon name="Share2" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Integration Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B6B]/10 via-[#96CEB4]/10 to-[#45B7D1]/10 mx-4 rounded-3xl mb-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Следите за нами в соцсетях
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Не пропускайте новые статьи и получайте эксклюзивный контент в наших социальных сетях
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white">
              <Icon name="Twitter" size={20} className="mr-2" />
              Twitter
            </Button>
            <Button size="lg" className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white">
              <Icon name="Linkedin" size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" className="bg-[#E60023] hover:bg-[#E60023]/90 text-white">
              <Icon name="Heart" size={20} className="mr-2" />
              Pinterest
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Icon name="Mail" size={48} className="mx-auto mb-6 text-[#FF6B6B]" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Подпишитесь на рассылку
          </h2>
          <p className="text-gray-600 mb-8">
            Получайте новые статьи прямо на почту и будьте в курсе всех обновлений
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            />
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 px-6">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] bg-clip-text text-transparent">
                ModernBlog
              </h3>
              <p className="text-gray-400">
                Современный блог о дизайне, технологиях и lifestyle
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Лайфстайл</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Реклама</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:bg-[#FF6B6B]/20 hover:text-[#FF6B6B]">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-[#45B7D1]/20 hover:text-[#45B7D1]">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-[#96CEB4]/20 hover:text-[#96CEB4]">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ModernBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;