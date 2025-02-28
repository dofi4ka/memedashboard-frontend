import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-white border-t border-border p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">О проекте</h3>
          <p className="text-muted/80 w-2/3">
            Аналитическая платформа для отслеживания трендов и популярности
            мемов в социальных сетях
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Разделы</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/analytics"
                className="text-muted/80 hover:text-primary-foreground transition-colors"
              >
                Аналитика
              </Link>
            </li>
            <li>
              <Link
                href="/trends"
                className="text-muted/80 hover:text-primary-foreground transition-colors"
              >
                Тренды
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-muted/80 hover:text-primary-foreground transition-colors"
              >
                О проекте
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Контакты</h3>
          <ul className="space-y-2 text-muted/80">
            <li>
              <a
                href="mailto:info@memedash.ru"
                className="hover:text-white transition-colors"
              >
                info@memedash.ru
              </a>
            </li>
            <li>
              <a
                href="tel:+79991234567"
                className="hover:text-white transition-colors"
              >
                +7 (999) 123-45-67
              </a>
            </li>
            <li>
              <a
                href="https://yandex.ru/maps/-/CHuXJC92"
                className="hover:text-white transition-colors"
              >
                г. Ростов-на-Дону, ул. Большая Садовая, 53
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Социальные сети</h3>
          <ul className="space-y-2 text-muted/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                VK
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border text-center text-muted/80">
        <p>© 2025 Meme Dashboard. Все мемы смешные.</p>
      </div>
    </footer>
  );
}
