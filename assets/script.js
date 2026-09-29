const translations = {
  ru: {
    skipContent:"Перейти к содержанию",menuLabel:"Открыть навигацию",navHome:"Главная",navAbout:"Обо мне",navServices:"Услуги",navCases:"Кейсы",navContact:"Контакты",
    available:"Портфолио специалиста",role:"Инженер по информационной безопасности",
    heroLead:"Проектирую, внедряю и развиваю практичные системы защиты — от SIEM и разработки правил обнаружения до сегментации сети и защиты периметра.",
    viewCases:"Смотреть кейсы",contactMe:"Связаться",factSiem:"SIEM и обнаружение",factNetwork:"Сетевая безопасность",factAutomation:"Автоматизация ИБ",
    aboutKicker:"Профиль",aboutTitle:"Безопасность, которая работает в реальной инфраструктуре.",
    aboutLead:"Я специалист по информационной безопасности, сфокусированный на создании надёжных, понятных и управляемых систем защиты.",
    aboutBody:"Моя работа объединяет мониторинг, сетевую архитектуру и автоматизацию. Я интегрирую разнородные источники событий, разрабатываю логику обнаружения, укрепляю сетевой периметр и превращаю технические события в полезные отчёты.",
    principleOneTitle:"Инженерный подход",principleOneText:"Решения с учётом стабильности, сопровождения и реальных операционных задач.",
    principleTwoTitle:"Комплексный взгляд",principleTwoText:"От сырых событий и сетевого трафика до обнаружения, реагирования и отчётности.",
    principleThreeTitle:"Понятная документация",principleThreeText:"Архитектура, политики и рабочие инструкции, которыми действительно удобно пользоваться.",
    servicesKicker:"Чем я занимаюсь",servicesTitle:"Услуги по безопасности с опорой на вашу инфраструктуру.",
    serviceOneTitle:"Внедрение SIEM",serviceOneText:"Развёртывание Wazuh, подключение источников, собственные декодеры, правила обнаружения, уведомления и отчёты.",
    serviceTwoTitle:"Защита сети",serviceTwoText:"Инфраструктура Check Point, политики межсетевого экранирования, сегментация, VPN и предотвращение угроз.",
    serviceThreeTitle:"Автоматизация ИБ",serviceThreeText:"Интеграции на Python, работа с API, обогащение событий и автоматическое формирование отчётов.",
    serviceFourTitle:"Архитектура и документация",serviceFourText:"Сетевые схемы, политики безопасности и понятная техническая документация по реализованным решениям.",
    skillsKicker:"Компетенции",skillsTitle:"Инструменты полезны, когда решают правильную задачу.",skillsIntro:"Практический набор технологий для мониторинга, защиты инфраструктуры и инженерных задач.",
    skillGroupOne:"SIEM и мониторинг",skillGroupTwo:"Сетевая безопасность",skillGroupThree:"Средства защиты",skillGroupFour:"Автоматизация и платформы",
    casesKicker:"Избранные работы",casesTitle:"Практические кейсы",previousCase:"Назад",nextCase:"Далее",caseDetails:"Подробнее о кейсе",challenge:"Задача",implementation:"Реализация",result:"Результат",
    caseOneType:"SIEM · Обнаружение · Автоматизация",caseOneTitle:"Внедрение и развитие SIEM на базе Wazuh",
    caseOneSummary:"Централизованная система сбора и анализа событий для разнородной инфраструктуры с собственными правилами обнаружения, уведомлениями и автоматической отчётностью.",
    caseOneChallenge:"Развернуть Wazuh, подключить инфраструктурные системы и средства защиты, реализовать обработку событий, сценарии обнаружения, отчётности и оповещения.",
    caseOneImplementation:"Развёрнуты компоненты Wazuh и агенты Windows/Linux. Подключены MikroTik, Check Point, Cisco, DLP Cyber Protego, Kaspersky, OpenAppSec WAF, Nginx, Postfix и журналы 1С. Реализована передача данных из ClickHouse с помощью Python и Airflow, созданы собственные декодеры и правила.",
    caseOneResult:"Получена централизованная видимость по разнородным источникам, работающие сценарии обнаружения, автоматические уведомления и отчётность, а также ролевой доступ через Keycloak.",
    caseTwoType:"МЭ · Сегментация · Отказоустойчивость",caseTwoTitle:"Инфраструктура Check Point и сегментация сети",
    caseTwoSummary:"Отказоустойчивый периметр с трёхуровневой сегментацией, контролируемым межсегментным трафиком и политиками, учитывающими бизнес-процессы.",
    caseTwoChallenge:"Развернуть и сопровождать отказоустойчивую инфраструктуру Check Point, сегментировать сеть и обеспечить стабильную работу защитных компонентов.",
    caseTwoImplementation:"Созданы кластеры шлюзов и Security Management Server, разработаны политики МЭ, настроены HTTPS Inspection, Content Awareness, Threat Prevention, Anti-Virus, Threat Emulation и IPS. Спроектированы сегменты DMZ, APP и DB с контролируемыми правилами доступа.",
    caseTwoResult:"Создан управляемый и отказоустойчивый периметр: критичные системы разделены, трафик между уровнями ограничен, а диагностика охватывает сеть, политики и защитные компоненты.",
    contactKicker:"Связаться",contactTitle:"Есть задача по безопасности? Давайте обсудим.",contactBody:"Опишите инфраструктуру, текущую проблему или проект. Я свяжусь с вами, чтобы уточнить задачу.",
    placeholderNote:"Контактные ссылки — примеры. Их необходимо заменить перед публикацией.",
    formName:"Ваше имя",formEmail:"Email",formMessage:"Чем я могу помочь?",formSubmit:"Подготовить письмо",formNote:"Статическая форма откроет почтовую программу; данные не сохраняются.",
    formNamePlaceholder:"Алексей Иванов",formEmailPlaceholder:"alex@example.com",formMessagePlaceholder:"Расскажите о вашем проекте...",rights:"Все права защищены.",backTop:"Наверх"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const languageSwitch = document.querySelector(".language-switch");
const englishText = new Map();

document.querySelectorAll("[data-i18n]").forEach((element) => englishText.set(element, element.textContent));
document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => englishText.set(element, element.placeholder));

function setLanguage(language) {
  const isRussian = language === "ru";
  document.documentElement.lang = language;
  document.title = isRussian ? "Levin Aleksandr — Инженер по информационной безопасности" : "Levin Aleksandr — Cybersecurity Engineer";
  document.querySelector('meta[name="description"]').content = isRussian
    ? "Портфолио Levin Aleksandr — SIEM, сетевая безопасность и автоматизация информационной безопасности."
    : "Cybersecurity portfolio of Levin Aleksandr — SIEM, network security, security engineering and automation.";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = translations.ru[element.dataset.i18n];
    element.textContent = isRussian && translated ? translated : englishText.get(element);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const translated = translations.ru[element.dataset.i18nPlaceholder];
    element.placeholder = isRussian && translated ? translated : englishText.get(element);
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  languageSwitch.classList.toggle("is-ru", isRussian);
  localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
if (localStorage.getItem("portfolio-language") === "ru") setLanguage("ru");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const header = document.querySelector(".site-header");
const navLinks = [...navigation.querySelectorAll("a")];
const sections = [...document.querySelectorAll("main section[id]")];
function updatePageState() {
  header.classList.toggle("scrolled", window.scrollY > 12);
  const marker = window.scrollY + 180;
  let current = "home";
  sections.forEach((section) => { if (section.offsetTop <= marker) current = section.id; });
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", updatePageState, { passive: true });
updatePageState();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); instance.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

const caseCarousel = document.querySelector(".case-carousel");
const caseSlides = [...document.querySelectorAll("[data-case-slide]")];
const caseDots = [...document.querySelectorAll("[data-case-index]")];
let activeCase = 0;

function showCase(index, direction = "next") {
  activeCase = (index + caseSlides.length) % caseSlides.length;
  caseCarousel.dataset.direction = direction;
  caseSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === activeCase;
    slide.hidden = !active;
    slide.setAttribute("aria-hidden", String(!active));
  });
  caseDots.forEach((dot, dotIndex) => {
    const active = dotIndex === activeCase;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", String(active));
  });
}

document.querySelector(".case-arrow-prev").addEventListener("click", () => showCase(activeCase - 1, "previous"));
document.querySelector(".case-arrow-next").addEventListener("click", () => showCase(activeCase + 1, "next"));
caseDots.forEach((dot) => dot.addEventListener("click", () => {
  const nextIndex = Number(dot.dataset.caseIndex);
  showCase(nextIndex, nextIndex < activeCase ? "previous" : "next");
}));
caseCarousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showCase(activeCase - 1, "previous");
  if (event.key === "ArrowRight") showCase(activeCase + 1, "next");
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") || "Not specified";
  const subject = document.documentElement.lang === "ru" ? `Запрос с сайта от ${name}` : `Website enquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${form.get("email")}\n\n${form.get("message")}`;
  window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.getElementById("year").textContent = new Date().getFullYear();
