"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "ru";

const ru: Record<string, string> = {
  Contacts: "Контакты",
  Applications: "Приложения",
  Libraries: "Библиотеки",
  About: "Обо мне",
  "Android & KMP developer": "Android и KMP-разработчик",
  "I design cross-platform products, local-first workflows and reusable Kotlin libraries for Android and desktop.": "Разрабатываю кроссплатформенные продукты, local-first решения и переиспользуемые Kotlin-библиотеки для Android и desktop.",
  "Kotlin Multiplatform as architecture, not just code sharing": "Kotlin Multiplatform как архитектура, а не только общий код",
  "The main interest area is keeping product logic coherent across targets while preserving the strengths of each platform.": "Главный интерес — единая продуктовая логика на разных платформах с сохранением сильных сторон каждой из них.",
  "I focus on Kotlin Multiplatform as a practical way to share domain logic, keep product quality high and avoid fragmented architecture between platforms.": "Использую Kotlin Multiplatform как практичный способ разделять доменную логику, сохранять качество продукта и избегать разрозненной архитектуры между платформами.",
  "My strongest background is Android, but I also care about desktop tooling, local storage, synchronization and developer experience in internal libraries.": "Моя сильная сторона — Android, но мне также важны desktop-инструменты, локальное хранение, синхронизация и удобство разработки внутренних библиотек.",
  "I like products with clear mechanics: offline-first notes, technical utilities, productivity tools and infrastructure that stays maintainable as the codebase grows.": "Мне нравятся продукты с понятной механикой: offline-first заметки, технические утилиты, инструменты продуктивности и инфраструктура, которую легко поддерживать по мере роста кода.",
  "Programing Languages": "Языки программирования",
  "Mobile stack": "Мобильный стек",
  "Backend stack": "Backend-стек",
  Architecture: "Архитектура",
  Language: "Языки",
  "English - B2": "Английский — B2",
  "I am a Kotlin Multiplatform developer. I use it as a practical way to share domain logic, preserve product quality and avoid fragmented architecture across platforms.": "Я Kotlin Multiplatform разработчик, пользуюсь им как практичным способом разделять доменную логику, сохранять качество продукта и избегать разрозненной архитектуры между платформами.",
  "My strongest areas are Android and Ktor, but I also care about desktop tooling. In my work, I strive to refine the UX so users feel that their needs were considered.": "Моя сильная сторона — Android и Ktor, но мне также важны desktop-инструменты. В своих работах я стремлюсь максимально доработать UX, чтобы пользователь чувствовал, что о нём подумали.",
  "Beyond public projects, I have worked on commercial KMP projects, including:": "За моими плечами не только публичные проекты, но и коммерческие KMP-проекты, такие как:",
  "• A system for monitoring technological process parameters": "• Система мониторинга параметров технологических процессов",
  "• A corporate messenger and reference directory": "• Корпоративный мессенджер-справочник",
  "• A system for tracking document reporting and department employee work": "• Система учёта отчётности документов и работы сотрудников отдела",
  "Open project page": "Открыть страницу проекта",
  Application: "Приложение",
  Library: "Библиотека",
  Highlights: "Особенности",
  "App screens": "Экраны приложения",
  "Code sample": "Пример кода",
  "Back to projects": "К проектам",
  Status: "Статус",
  "API sketch": "Набросок API",
  "Featured Application": "Избранное приложение",
  Documents: "Документы",
  Tasks: "Задачи",
  Boards: "Доски",
  "FIELD INSTRUMENT": "ПОЛЕВОЙ ИНСТРУМЕНТ",
  "Local-first workspace for documents, tasks and boards": "Local-first пространство для документов, задач и досок",
  "A cross-platform productivity concept that keeps notes, tasks and kanban views close to the device, then synchronizes intentionally.": "Кроссплатформенная концепция продуктивности: заметки, задачи и канбан-доски остаются на устройстве и синхронизируются осознанно.",
  "Product concept and technical direction": "Концепция продукта и техническое направление",
  "Documents, tasks and boards in a shared workspace model": "Документы, задачи и доски в единой модели рабочего пространства",
  "Local persistence first, synchronization second": "Сначала локальное хранение, затем синхронизация",
  "Encrypted sync architecture and AI-assisted text workflows": "Архитектура зашифрованной синхронизации и AI-процессы для текста",
  Problem: "Проблема",
  "Knowledge work tools often separate notes, tasks and planning boards into disconnected surfaces. MnemoNote treats them as different projections of the same workspace state.": "Инструменты для работы со знаниями часто разделяют заметки, задачи и доски планирования. MnemoNote рассматривает их как разные представления одного состояния рабочего пространства.",
  "The main constraint is resilience: the product should remain useful without permanent connectivity and should not depend on a remote backend for everyday work.": "Главное ограничение — устойчивость: продукт должен быть полезен без постоянного подключения и не зависеть от удалённого backend для повседневной работы.",
  "Shared domain logic lives in Kotlin Multiplatform. Desktop-specific shell and editor integrations can be exposed through Electron and TypeScript where needed, while storage stays local via SQLite.": "Общая доменная логика живёт в Kotlin Multiplatform. Интеграции оболочки и редактора для desktop при необходимости реализуются через Electron и TypeScript, а данные хранятся локально в SQLite.",
  "Collaboration is modeled with CRDT-oriented primitives so synchronization remains conflict-tolerant and incremental instead of centralizing all edits in one online session.": "Совместная работа моделируется CRDT-ориентированными примитивами: синхронизация остаётся устойчивой к конфликтам и инкрементальной, а не собирает все правки в одной онлайн-сессии.",
  "Shared domain and sync logic in Kotlin": "Общая доменная логика и синхронизация на Kotlin",
  "Local database as the source of truth": "Локальная база данных как источник истины",
  "CRDT-oriented collaboration strategy": "CRDT-ориентированная стратегия совместной работы",
  "AI features attached as optional assistants, not mandatory infrastructure": "AI-функции как опциональные помощники, а не обязательная инфраструктура",
  "Product Focus": "Фокус продукта",
  "The strongest product angle is not a generic note editor, but a workspace where structure evolves from text into tasks, linked views and operational boards without data duplication.": "Ключевая идея продукта — не обычный редактор заметок, а рабочее пространство, где текст превращается в задачи, связанные представления и операционные доски без дублирования данных.",
  "Compass and inclination tool built around Android sensors": "Компас и инструмент измерения наклона на базе Android-сенсоров",
  "A compact Android utility for orientation, tilt measurement and sensor-driven feedback with a deliberate instrument-like visual language.": "Компактная Android-утилита для ориентации, измерения наклона и обратной связи от сенсоров с продуманным визуальным языком измерительного прибора.",
  "Compass heading and angle visualization": "Визуализация направления компаса и угла",
  "Lean UI designed around precise readings": "Лаконичный UI для точных показаний",
  "Real-time sensor processing on Android": "Обработка сенсоров Android в реальном времени",
  "Generic utility apps often bury the most important reading under chrome, ads or ornamental UI. Horizon approaches the screen more like a measuring instrument than a content feed.": "Универсальные утилиты часто прячут важные показания за оболочкой, рекламой или декоративным UI. Horizon относится к экрану как к измерительному прибору, а не к ленте контента.",
  Implementation: "Реализация",
  "The application consumes orientation and motion sensors, applies smoothing where needed and renders the final state with clear contrast so the reading remains legible outdoors and in motion.": "Приложение использует датчики ориентации и движения, применяет сглаживание там, где нужно, и отображает состояние с чётким контрастом, чтобы показания были различимы на улице и в движении.",
  "Sensor fusion and sampling discipline": "Объединение сенсорных данных и контроль частоты измерений",
  "Compose-driven interface with large touch targets": "Интерфейс на Compose с крупными сенсорными областями",
  "Minimal visual theme inspired by physical tools": "Минималистичная тема, вдохновлённая физическими инструментами",
  "Reusable Kotlin Multiplatform visual effects for Jetpack Compose": "Переиспользуемые Kotlin Multiplatform визуальные эффекты для Jetpack Compose",
  "A multi-module KMP library with app-agnostic visual effects for Compose, built around reusable patterned backgrounds and glow interactions instead of product-specific widgets.": "Многомодульная KMP-библиотека с независимыми от приложения визуальными эффектами для Compose: переиспользуемые узорные фоны и эффекты свечения вместо специализированных виджетов.",
  "Published artifact: io.github.nvshink:luma-compose:1.0.0": "Опубликованный артефакт: io.github.nvshink:luma-compose:1.0.0",
  "Shared public API for Android, Desktop, iOS and JS targets": "Общий публичный API для Android, Desktop, iOS и JS",
  "PatternBackground and FollowGlow as reusable app-agnostic composables": "PatternBackground и FollowGlow как переиспользуемые независимые от приложения composable",
  "Demo apps for Android and Desktop to validate the same effects across targets": "Демо-приложения для Android и Desktop, проверяющие одинаковые эффекты на разных платформах",
  Purpose: "Назначение",
  "luma-compose extracts decorative and interactive visual effects into a reusable library so applications can compose them without copying rendering logic into each product.": "luma-compose выносит декоративные и интерактивные эффекты в переиспользуемую библиотеку, чтобы приложения могли комбинировать их без копирования логики отрисовки в каждый продукт.",
  "The API is intentionally app-agnostic: the library does not hardcode domain models like compass, tilt or level, which keeps it usable across unrelated UI concepts.": "API намеренно не зависит от приложения: библиотека не содержит жёстко заданных моделей компаса, наклона или уровня, поэтому подходит для разных UI-концепций.",
  Design: "Дизайн",
  "The shared API lives in common source sets, while the repository also includes Android and Desktop demo applications to exercise the same visual primitives in concrete environments.": "Общий API находится в common source set, а репозиторий также включает демо-приложения Android и Desktop для проверки тех же визуальных примитивов в конкретных средах.",
  "The main surface area is immutable style plus runtime state: `PatternStyle` and `PatternState` for patterned backgrounds, `GlowState` and related defaults for point-following glow effects.": "Основная поверхность API — неизменяемые стили и состояние времени выполнения: `PatternStyle` и `PatternState` для узорных фонов, `GlowState` и связанные значения по умолчанию для эффектов свечения, следующих за точкой.",
  "Pattern presets like soft dots, ferrite stripes and floating sprites": "Пресеты узоров: мягкие точки, ферритовые полосы и плавающие спрайты",
  "Point-based interaction, blur, shadow and parallax-like depth controls": "Управление взаимодействием по точке, размытием, тенью и глубиной в стиле параллакса",
  "Published KMP root artifact plus target-specific publications": "Корневой KMP-артефакт и публикации для отдельных платформ",
  "Horizon App": "Приложение Horizon",
  "Privacy Policy": "Политика конфиденциальности",
  "Horizon is designed to work primarily on your device. We collect only the data needed to provide the app features described on screen.": "Horizon создан для работы преимущественно на вашем устройстве. Мы собираем только данные, необходимые для работы описанных на экране функций.",
  "Last updated: June 13, 2026": "Последнее обновление: 13 июня 2026 г.",
  Summary: "Кратко",
  "Sensor data is used only to power orientation and level features.": "Данные датчиков используются только для функций ориентации и уровня.",
  "Location access is optional and limited to compass-related features.": "Доступ к местоположению необязателен и используется только в функциях компаса.",
  "Calibration values and preferences stay on your device.": "Значения калибровки и настройки остаются на вашем устройстве.",
  "Horizon does not sell personal data.": "Horizon не продаёт персональные данные.",
  "What data Horizon uses": "Какие данные использует Horizon",
  "Horizon uses motion and orientation sensor data to show tilt, bubble level, and compass information. The app also stores your calibration and settings preferences on your device.": "Horizon использует данные датчиков движения и ориентации для отображения наклона, уровня и компаса. Приложение также хранит на устройстве калибровку и настройки.",
  "Location access": "Доступ к местоположению",
  "Location permission is requested only for the compass screen so the app can show your coordinates and calculate sun and moon direction for your current position. You can deny this permission and continue using the rest of the app.": "Разрешение на доступ к местоположению запрашивается только на экране компаса, чтобы приложение могло показать координаты и рассчитать направление на солнце и луну для текущей позиции. Вы можете отклонить разрешение и продолжить пользоваться остальными функциями.",
  "Data sharing": "Передача данных",
  "Horizon does not sell your personal data and does not share your sensor readings, coordinates, or settings with third parties.": "Horizon не продаёт ваши персональные данные и не передаёт третьим лицам показания датчиков, координаты или настройки.",
  "Storage and retention": "Хранение и срок хранения",
  "Calibration values and app preferences are stored locally on your device until you clear the app data or uninstall the app.": "Значения калибровки и настройки приложения хранятся локально на устройстве, пока вы не очистите данные приложения или не удалите его.",
  "Your control": "Ваш контроль",
  "You control location access through Android system permissions. You can also reset calibration and remove app data at any time from your device settings.": "Вы управляете доступом к местоположению через системные разрешения Android. Также вы можете в любой момент сбросить калибровку и удалить данные приложения в настройках устройства.",
  Contact: "Контакты",
  "If you have privacy questions, contact us at nvshink.dev@gmail.com.": "По вопросам конфиденциальности напишите нам: nvshink.dev@gmail.com.",
  "Policy updates": "Обновления политики",
  "We may update this policy when the app features or data practices change. The latest version will be available in the app settings and on this page.": "Мы можем обновлять эту политику при изменении функций приложения или практик работы с данными. Последняя версия будет доступна в настройках приложения и на этой странице.",
  "Back to Horizon": "К Horizon",
  "Project not found": "Проект не найден",
  "The requested project page was not generated for the current static export.": "Запрошенная страница проекта не была создана для текущего статического экспорта.",
  "Back to portfolio": "К портфолио",
  Source: "Исходный код",
  "Open in Google Play": "Открыть в Google Play",
};

function translate(locale: Locale) {
  const dictionary = locale === "ru" ? ru : Object.fromEntries(Object.entries(ru).map(([en, value]) => [value, en]));
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    const text = node.nodeValue;
    if (text && dictionary[text.trim()]) {
      node.nodeValue = text.replace(text.trim(), dictionary[text.trim()]);
    }
  });
  document.documentElement.lang = locale;
}

export function LocaleToggle() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "ru" || saved === "en") {
      window.setTimeout(() => setLocale(saved), 0);
    }
  }, []);

  useEffect(() => translate(locale), [locale, pathname]);

  function toggleLocale() {
    const next = locale === "en" ? "ru" : "en";
    localStorage.setItem("locale", next);
    setLocale(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={locale === "ru"}
      aria-label="Switch language"
      onClick={toggleLocale}
      data-locale={locale}
      className="locale-toggle rounded-full border border-[color:var(--border)] bg-white/70 p-1 text-xs font-semibold text-[color:var(--muted)] transition hover:border-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
    >
      <span className="locale-toggle__thumb" aria-hidden="true" />
      <span>EN</span>
      <span>RU</span>
    </button>
  );
}
