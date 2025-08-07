import "../styles/styles.css";

export default function IntroPilot() {
  return (
    <main className="pilot-layout">
      <header className="pilot-header">
        <h1>Исчезающие</h1>
        <p className="subtitle">Пилотный эпизод проекта “Atlas Pilots”</p>
      </header>
      
      <h1 className="text-3xl font-bold text-blue-500">Tailwind работает!</h1>

      <section className="pilot-section">
        <h2>Введение</h2>
        <p>
          Ледники Сибири тают с ускорением, которое было невозможно предсказать
          ещё 30 лет назад. В этом разделе мы просто выводим базовую разметку —
          никакого интерактива.
        </p>
      </section>

      <section className="pilot-section">
        <h2>Содержание</h2>
        <ul>
          <li>Историческая ретроспектива</li>
          <li>Географические области таяния</li>
          <li>Современные вызовы</li>
        </ul>
      </section>

      <footer className="pilot-footer">
        <p>© 2025 KK-PC Interactive Atlas</p>
      </footer>
    </main>
  );
}
