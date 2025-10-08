/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'en' | 'fr' | 'pl' | 'es' | 'uk' | 'ru' | 'de';

interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    designFocus: any;
    problemSolving: any;
    problemSolvingDesc: any;
    collaboration: any;
    collaborationDesc: any;
    subtitle: ReactNode;
    intro: ReactNode;
    specialization: ReactNode;
    mission: ReactNode;
    designFocusDesc: any;
    cleanCodeDesc: any;
    cleanCode: any;
    title: string;
    description: string;
  };
  experience: {
    title: string;
    job1Title: string;
    job1Company: string;
    job1Period: string;
    job1Description: string;
    job2Title: string;
    job2Company: string;
    job2Period: string;
    job2Description: string;
  };
  education: {
    title: string;
    degree1: string;
    university1: string;
    period1: string;
    degree2: string;
    university2: string;
    period2: string;
  };
  skills: {
    title: string;
    technical: string;
    languages: string;
    tools: string;
  };
  projects: {
    title: string;
    project1Title: string;
    project1Description: string;
    project2Title: string;
    project2Description: string;
    project3Title: string;
    project3Description: string;
    viewProject: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    home: {
      greeting: 'Hi, I\'m',
      name: 'Guy Muhoza',
      title: 'AI/ML Engineer and Data Scientist',
      subtitle: 'I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, innovative design, and solving complex problems.',
      cta: 'Download Resume'
    },
    about: {
      title: 'About Me',
      description: 'Passionate developer with a keen eye for design and a love for creating meaningful digital experiences.',
      subtitle: 'Hello! I\'m Guy Muhoza',
      intro: 'I\'m a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey began with a curiosity about how things work, which led me to discover the fascinating world of web development.',
      specialization: 'I specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.',
      mission: 'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I\'m always eager to learn and take on new challenges.',
      cleanCode: 'Clean Code',
      cleanCodeDesc: 'Writing maintainable, scalable, and efficient code',
      designFocus: 'Design Focus',
      designFocusDesc: 'Creating intuitive and beautiful user interfaces',
      problemSolving: 'Problem Solving',
      problemSolvingDesc: 'Finding innovative solutions to complex challenges',
      collaboration: 'Collaboration',
      collaborationDesc: 'Working effectively with cross-functional teams'
    },
    experience: {
      title: 'Experience',
      job1Title: 'Senior Full Stack Developer',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Present',
      job1Description: 'Led development of scalable web applications using React, Node.js, and cloud technologies.',
      job2Title: 'Frontend Developer',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Developed responsive websites and interactive user interfaces for various clients.'
    },
    education: {
      title: 'Education',
      degree1: 'Master of Science in Computer Science',
      university1: 'Tech University',
      period1: '2018 - 2020',
      degree2: 'Bachelor of Science in Software Engineering',
      university2: 'State University',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Skills',
      technical: 'Technical Skills',
      languages: 'Programming Languages',
      tools: 'Tools & Technologies'
    },
    projects: {
      title: 'Projects',
      project1Title: 'E-Commerce Platform',
      project1Description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
      project2Title: 'Task Management App',
      project2Description: 'A collaborative task management application with real-time updates.',
      project3Title: 'Portfolio Website',
      project3Description: 'A responsive portfolio website showcasing modern web development practices.',
      viewProject: 'View Project'
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    home: {
      greeting: 'Salut, je suis',
      name: 'Guy Muhoza',
      title: 'Ingénieur IA/ML et Data Scientist',
      subtitle: 'Je crée des expériences numériques belles, fonctionnelles et centrées sur l\'utilisateur. Passionné par le code propre, le design innovant et la résolution de problèmes complexes.',
      cta: 'Télécharger le CV'
    },
    about: {
      title: 'À Propos de Moi',
      description: 'Développeur passionné avec un œil attentif pour le design et un amour pour créer des expériences numériques significatives.',
      subtitle: 'Bonjour ! Je suis Guy Muhoza',
      intro: 'Je suis un développeur full-stack passionné avec plus de 5 ans d\'expérience dans la création de solutions numériques qui font la différence. Mon parcours a commencé par une curiosité sur le fonctionnement des choses, ce qui m\'a conduit à découvrir le monde fascinant du développement web.',
      specialization: 'Je me spécialise dans les technologies web modernes incluant React, TypeScript, Node.js et les plateformes cloud. Je crois en l\'écriture de code propre et maintenable et en la création d\'expériences utilisateur qui sont à la fois belles et fonctionnelles.',
      mission: 'Quand je ne code pas, vous pouvez me trouver en train d\'explorer de nouvelles technologies, de contribuer à des projets open source, ou de profiter d\'activités en plein air. Je suis toujours désireux d\'apprendre et de relever de nouveaux défis.',
      cleanCode: 'Code Propre',
      cleanCodeDesc: 'Écriture de code maintenable, évolutif et efficace',
      designFocus: 'Focus Design',
      designFocusDesc: 'Création d\'interfaces utilisateur intuitives et belles',
      problemSolving: 'Résolution de Problèmes',
      problemSolvingDesc: 'Trouver des solutions innovantes aux défis complexes',
      collaboration: 'Collaboration',
      collaborationDesc: 'Travailler efficacement avec des équipes transfonctionnelles'
    },
    experience: {
      title: 'Expérience',
      job1Title: 'Développeur Full Stack Senior',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Présent',
      job1Description: 'Direction du développement d\'applications web évolutives utilisant React, Node.js et les technologies cloud.',
      job2Title: 'Développeur Frontend',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Développement de sites web responsifs et d\'interfaces utilisateur interactives pour divers clients.'
    },
    education: {
      title: 'Formation',
      degree1: 'Master en Informatique',
      university1: 'Université Technologique',
      period1: '2018 - 2020',
      degree2: 'Licence en Génie Logiciel',
      university2: 'Université d\'État',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Compétences',
      technical: 'Compétences Techniques',
      languages: 'Langages de Programmation',
      tools: 'Outils et Technologies'
    },
    projects: {
      title: 'Projets',
      project1Title: 'Plateforme E-Commerce',
      project1Description: 'Une solution e-commerce complète construite avec React, Node.js et MongoDB.',
      project2Title: 'Application de Gestion de Tâches',
      project2Description: 'Une application collaborative de gestion de tâches avec mises à jour en temps réel.',
      project3Title: 'Site Portfolio',
      project3Description: 'Un site portfolio responsive présentant les pratiques modernes de développement web.',
      viewProject: 'Voir le Projet'
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Travaillons ensemble',
      name: 'Votre Nom',
      email: 'Votre Email',
      message: 'Votre Message',
      send: 'Envoyer le Message'
    }
  },
  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O Mnie',
      experience: 'Doświadczenie',
      education: 'Wykształcenie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      contact: 'Kontakt'
    },
    home: {
      greeting: 'Cześć, jestem',
      name: 'Guy Muhoza',
      title: 'Inżynier AI/ML i Data Scientist',
      subtitle: 'Tworzę piękne, funkcjonalne i skoncentrowane na użytkowniku doświadczenia cyfrowe. Pasjonuje mnie czysty kod, innowacyjny design i rozwiązywanie złożonych problemów.',
      cta: 'Pobierz CV'
    },
    about: {
      title: 'O Mnie',
      description: 'Pasjonat programowania z ostrym okiem na design i miłością do tworzenia znaczących doświadczeń cyfrowych.',
      subtitle: 'Cześć! Jestem Guy Muhoza',
      intro: 'Jestem pasjonatem programowania full-stack z ponad 5-letnim doświadczeniem w tworzeniu rozwiązań cyfrowych, które robią różnicę. Moja podróż zaczęła się od ciekawości, jak rzeczy działają, co doprowadziło mnie do odkrycia fascynującego świata programowania webowego.',
      specialization: 'Specjalizuję się w nowoczesnych technologiach webowych, w tym React, TypeScript, Node.js i platformach chmurowych. Wierzę w pisanie czystego, łatwego w utrzymaniu kodu i tworzenie doświadczeń użytkownika, które są zarówno piękne, jak i funkcjonalne.',
      mission: 'Kiedy nie programuję, możesz znaleźć mnie eksplorującego nowe technologie, przyczyniającego się do projektów open source lub cieszącego się aktywnościami na świeżym powietrzu. Zawsze chętnie uczę się i podejmuję nowe wyzwania.',
      cleanCode: 'Czysty Kod',
      cleanCodeDesc: 'Pisanie łatwego w utrzymaniu, skalowalnego i efektywnego kodu',
      designFocus: 'Fokus na Design',
      designFocusDesc: 'Tworzenie intuicyjnych i pięknych interfejsów użytkownika',
      problemSolving: 'Rozwiązywanie Problemów',
      problemSolvingDesc: 'Znajdowanie innowacyjnych rozwiązań złożonych wyzwań',
      collaboration: 'Współpraca',
      collaborationDesc: 'Efektywna praca z zespołami międzyfunkcyjnymi'
    },
    experience: {
      title: 'Doświadczenie',
      job1Title: 'Senior Programista Full Stack',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Obecnie',
      job1Description: 'Kierowanie rozwojem skalowalnych aplikacji internetowych przy użyciu React, Node.js i technologii chmurowych.',
      job2Title: 'Programista Frontend',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Tworzenie responsywnych stron internetowych i interaktywnych interfejsów użytkownika dla różnych klientów.'
    },
    education: {
      title: 'Wykształcenie',
      degree1: 'Magister Informatyki',
      university1: 'Uniwersytet Techniczny',
      period1: '2018 - 2020',
      degree2: 'Licencjat Inżynierii Oprogramowania',
      university2: 'Uniwersytet Państwowy',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Umiejętności',
      technical: 'Umiejętności Techniczne',
      languages: 'Języki Programowania',
      tools: 'Narzędzia i Technologie'
    },
    projects: {
      title: 'Projekty',
      project1Title: 'Platforma E-Commerce',
      project1Description: 'Kompleksowe rozwiązanie e-commerce zbudowane w React, Node.js i MongoDB.',
      project2Title: 'Aplikacja Zarządzania Zadaniami',
      project2Description: 'Aplikacja do współpracy w zarządzaniu zadaniami z aktualizacjami w czasie rzeczywistym.',
      project3Title: 'Strona Portfolio',
      project3Description: 'Responsywna strona portfolio prezentująca nowoczesne praktyki rozwoju stron internetowych.',
      viewProject: 'Zobacz Projekt'
    },
    contact: {
      title: 'Skontaktuj się ze mną',
      subtitle: 'Współpracujmy razem',
      name: 'Twoje Imię',
      email: 'Twój Email',
      message: 'Twoja Wiadomość',
      send: 'Wyślij Wiadomość'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    home: {
      greeting: 'Hola, soy',
      name: 'Guy Muhoza',
      title: 'Ingeniero de IA/ML y Data Scientist',
      subtitle: 'Creo experiencias digitales hermosas, funcionales y centradas en el usuario. Apasionado por el código limpio, el diseño innovador y resolver problemas complejos.',
      cta: 'Descargar CV'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Desarrollador apasionado con un ojo agudo para el diseño y amor por crear experiencias digitales significativas.',
      subtitle: '¡Hola! Soy Guy Muhoza',
      intro: 'Soy un desarrollador full-stack apasionado con más de 5 años de experiencia creando soluciones digitales que marcan la diferencia. Mi viaje comenzó con curiosidad sobre cómo funcionan las cosas, lo que me llevó a descubrir el fascinante mundo del desarrollo web.',
      specialization: 'Me especializo en tecnologías web modernas incluyendo React, TypeScript, Node.js y plataformas en la nube. Creo en escribir código limpio y mantenible y crear experiencias de usuario que sean tanto hermosas como funcionales.',
      mission: 'Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o disfrutando actividades al aire libre. Siempre estoy ansioso por aprender y asumir nuevos desafíos.',
      cleanCode: 'Código Limpio',
      cleanCodeDesc: 'Escribir código mantenible, escalable y eficiente',
      designFocus: 'Enfoque en Diseño',
      designFocusDesc: 'Crear interfaces de usuario intuitivas y hermosas',
      problemSolving: 'Resolución de Problemas',
      problemSolvingDesc: 'Encontrar soluciones innovadoras a desafíos complejos',
      collaboration: 'Colaboración',
      collaborationDesc: 'Trabajar eficazmente con equipos multifuncionales'
    },
    experience: {
      title: 'Experiencia',
      job1Title: 'Desarrollador Full Stack Senior',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Presente',
      job1Description: 'Lidero el desarrollo de aplicaciones web escalables usando React, Node.js y tecnologías en la nube.',
      job2Title: 'Desarrollador Frontend',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Desarrollo de sitios web responsivos e interfaces de usuario interactivas para varios clientes.'
    },
    education: {
      title: 'Educación',
      degree1: 'Maestría en Ciencias de la Computación',
      university1: 'Universidad Tecnológica',
      period1: '2018 - 2020',
      degree2: 'Licenciatura en Ingeniería de Software',
      university2: 'Universidad Estatal',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Habilidades',
      technical: 'Habilidades Técnicas',
      languages: 'Lenguajes de Programación',
      tools: 'Herramientas y Tecnologías'
    },
    projects: {
      title: 'Proyectos',
      project1Title: 'Plataforma E-Commerce',
      project1Description: 'Una solución completa de e-commerce construida con React, Node.js y MongoDB.',
      project2Title: 'App de Gestión de Tareas',
      project2Description: 'Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real.',
      project3Title: 'Sitio Web Portfolio',
      project3Description: 'Un sitio web portfolio responsivo que muestra prácticas modernas de desarrollo web.',
      viewProject: 'Ver Proyecto'
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'Trabajemos juntos',
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje'
    }
  },
  uk: {
    nav: {
      home: 'Головна',
      about: 'Про мене',
      experience: 'Досвід',
      education: 'Освіта',
      skills: 'Навички',
      projects: 'Проекти',
      contact: 'Контакти'
    },
    home: {
      greeting: 'Привіт, я',
      name: 'Гай Мухоза',
      title: 'Інженер ШІ/МО та Data Scientist',
      subtitle: 'Я створюю красиві, функціональні та орієнтовані на користувача цифрові рішення. Захоплююсь чистим кодом, інноваційним дизайном та вирішенням складних проблем.',
      cta: 'Завантажити резюме'
    },
    about: {
      title: 'Про мене',
      description: 'Пристрасний розробник з гострим оком для дизайну та любов\'ю до створення значущих цифрових рішень.',
      subtitle: 'Привіт! Я Гай Мухоза',
      intro: 'Я пристрасний full-stack розробник з понад 5-річним досвідом створення цифрових рішень, які роблять різницю. Мій шлях почався з цікавості про те, як все працює, що привело мене до відкриття захоплюючого світу веб-розробки.',
      specialization: 'Я спеціалізуюсь на сучасних веб-технологіях, включаючи React, TypeScript, Node.js та хмарні платформи. Я вірю в написання чистого, підтримуваного коду та створення користувацьких досвідів, які є як красивими, так і функціональними.',
      mission: 'Коли я не кодую, ви можете знайти мене за дослідженням нових технологій, внеском у проекти з відкритим кодом або насолодженням активностями на свіжому повітрі. Я завжди прагну вчитися та брати на себе нові виклики.',
      cleanCode: 'Чистий код',
      cleanCodeDesc: 'Написання підтримуваного, масштабованого та ефективного коду',
      designFocus: 'Фокус на дизайні',
      designFocusDesc: 'Створення інтуїтивних та красивих користувацьких інтерфейсів',
      problemSolving: 'Вирішення проблем',
      problemSolvingDesc: 'Пошук інноваційних рішень для складних викликів',
      collaboration: 'Співпраця',
      collaborationDesc: 'Ефективна робота з міжфункціональними командами'
    },
    experience: {
      title: 'Досвід',
      job1Title: 'Старший Full Stack розробник',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Зараз',
      job1Description: 'Керував розробкою масштабованих веб-додатків використовуючи React, Node.js та хмарні технології.',
      job2Title: 'Frontend розробник',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Розробляв адаптивні веб-сайти та інтерактивні користувацькі інтерфейси для різних клієнтів.'
    },
    education: {
      title: 'Освіта',
      degree1: 'Магістр комп\'ютерних наук',
      university1: 'Технічний університет',
      period1: '2018 - 2020',
      degree2: 'Бакалавр програмної інженерії',
      university2: 'Державний університет',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Навички',
      technical: 'Технічні навички',
      languages: 'Мови програмування',
      tools: 'Інструменти та технології'
    },
    projects: {
      title: 'Проекти',
      project1Title: 'E-Commerce платформа',
      project1Description: 'Повне e-commerce рішення побудоване з React, Node.js та MongoDB.',
      project2Title: 'Додаток управління завданнями',
      project2Description: 'Колаборативний додаток управління завданнями з оновленнями в реальному часі.',
      project3Title: 'Портфоліо веб-сайт',
      project3Description: 'Адаптивний портфоліо веб-сайт, що демонструє сучасні практики веб-розробки.',
      viewProject: 'Переглянути проект'
    },
    contact: {
      title: 'Зв\'яжіться зі мною',
      subtitle: 'Давайте працювати разом',
      name: 'Ваше ім\'я',
      email: 'Ваш email',
      message: 'Ваше повідомлення',
      send: 'Надіслати повідомлення'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Bildung',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    home: {
      greeting: 'Hallo, ich bin',
      name: 'Guy Muhoza',
      title: 'KI/ML-Ingenieur und Data Scientist',
      subtitle: 'Ich erstelle schöne, funktionale und benutzerzentrierte digitale Erlebnisse. Leidenschaftlich für sauberen Code, innovatives Design und das Lösen komplexer Probleme.',
      cta: 'Lebenslauf herunterladen'
    },
    about: {
      title: 'Über mich',
      description: 'Leidenschaftlicher Entwickler mit einem scharfen Auge für Design und einer Liebe für die Schaffung bedeutungsvoller digitaler Erlebnisse.',
      subtitle: 'Hallo! Ich bin Guy Muhoza',
      intro: 'Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit über 5 Jahren Erfahrung in der Erstellung digitaler Lösungen, die einen Unterschied machen. Meine Reise begann mit der Neugier darauf, wie Dinge funktionieren, was mich dazu führte, die faszinierende Welt der Webentwicklung zu entdecken.',
      specialization: 'Ich spezialisiere mich auf moderne Webtechnologien einschließlich React, TypeScript, Node.js und Cloud-Plattformen. Ich glaube an das Schreiben von sauberem, wartbarem Code und das Schaffen von Benutzererlebnissen, die sowohl schön als auch funktional sind.',
      mission: 'Wenn ich nicht code, können Sie mich dabei finden, neue Technologien zu erkunden, zu Open-Source-Projekten beizutragen oder Outdoor-Aktivitäten zu genießen. Ich bin immer begierig zu lernen und neue Herausforderungen anzunehmen.',
      cleanCode: 'Sauberer Code',
      cleanCodeDesc: 'Schreiben von wartbarem, skalierbarem und effizientem Code',
      designFocus: 'Design-Fokus',
      designFocusDesc: 'Erstellen intuitiver und schöner Benutzeroberflächen',
      problemSolving: 'Problemlösung',
      problemSolvingDesc: 'Finden innovativer Lösungen für komplexe Herausforderungen',
      collaboration: 'Zusammenarbeit',
      collaborationDesc: 'Effektive Arbeit mit funktionsübergreifenden Teams'
    },
    experience: {
      title: 'Erfahrung',
      job1Title: 'Senior Full Stack Entwickler',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Gegenwart',
      job1Description: 'Leitete die Entwicklung skalierbarer Webanwendungen mit React, Node.js und Cloud-Technologien.',
      job2Title: 'Frontend Entwickler',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Entwickelte responsive Websites und interaktive Benutzeroberflächen für verschiedene Kunden.'
    },
    education: {
      title: 'Bildung',
      degree1: 'Master of Science in Informatik',
      university1: 'Technische Universität',
      period1: '2018 - 2020',
      degree2: 'Bachelor of Science in Software Engineering',
      university2: 'Staatliche Universität',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Fähigkeiten',
      technical: 'Technische Fähigkeiten',
      languages: 'Programmiersprachen',
      tools: 'Tools und Technologien'
    },
    projects: {
      title: 'Projekte',
      project1Title: 'E-Commerce-Plattform',
      project1Description: 'Eine vollständige E-Commerce-Lösung gebaut mit React, Node.js und MongoDB.',
      project2Title: 'Aufgabenverwaltungs-App',
      project2Description: 'Eine kollaborative Aufgabenverwaltungsanwendung mit Echtzeit-Updates.',
      project3Title: 'Portfolio-Website',
      project3Description: 'Eine responsive Portfolio-Website, die moderne Webentwicklungspraktiken zeigt.',
      viewProject: 'Projekt anzeigen'
    },
    contact: {
      title: 'Kontaktieren Sie mich',
      subtitle: 'Lassen Sie uns zusammenarbeiten',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      experience: 'Опыт',
      education: 'Образование',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    home: {
      greeting: 'Привет, я',
      name: 'Гай Мухоза',
      title: 'Инженер ИИ/МО и Data Scientist',
      subtitle: 'Я создаю красивые, функциональные и ориентированные на пользователя цифровые решения. Увлекаюсь чистым кодом, инновационным дизайном и решением сложных проблем.',
      cta: 'Скачать резюме'
    },
    about: {
      title: 'Обо мне',
      description: 'Увлеченный разработчик с острым глазом на дизайн и любовью к созданию значимых цифровых решений.',
      subtitle: 'Привет! Я Гай Мухоза',
      intro: 'Я увлеченный full-stack разработчик с более чем 5-летним опытом создания цифровых решений, которые имеют значение. Мое путешествие началось с любопытства о том, как все работает, что привело меня к открытию увлекательного мира веб-разработки.',
      specialization: 'Я специализируюсь на современных веб-технологиях, включая React, TypeScript, Node.js и облачные платформы. Я верю в написание чистого, поддерживаемого кода и создание пользовательских опытов, которые одновременно красивы и функциональны.',
      mission: 'Когда я не программирую, вы можете найти меня изучающим новые технологии, вносящим вклад в проекты с открытым исходным кодом или наслаждающимся активностями на свежем воздухе. Я всегда стремлюсь учиться и принимать новые вызовы.',
      cleanCode: 'Чистый код',
      cleanCodeDesc: 'Написание поддерживаемого, масштабируемого и эффективного кода',
      designFocus: 'Фокус на дизайне',
      designFocusDesc: 'Создание интуитивных и красивых пользовательских интерфейсов',
      problemSolving: 'Решение проблем',
      problemSolvingDesc: 'Поиск инновационных решений сложных задач',
      collaboration: 'Сотрудничество',
      collaborationDesc: 'Эффективная работа с кросс-функциональными командами'
    },
    experience: {
      title: 'Опыт',
      job1Title: 'Старший Full Stack разработчик',
      job1Company: 'Tech Solutions Inc.',
      job1Period: '2022 - Настоящее время',
      job1Description: 'Руководил разработкой масштабируемых веб-приложений с использованием React, Node.js и облачных технологий.',
      job2Title: 'Frontend разработчик',
      job2Company: 'Digital Agency Co.',
      job2Period: '2020 - 2022',
      job2Description: 'Разрабатывал адаптивные веб-сайты и интерактивные пользовательские интерфейсы для различных клиентов.'
    },
    education: {
      title: 'Образование',
      degree1: 'Магистр компьютерных наук',
      university1: 'Технический университет',
      period1: '2018 - 2020',
      degree2: 'Бакалавр программной инженерии',
      university2: 'Государственный университет',
      period2: '2014 - 2018'
    },
    skills: {
      title: 'Навыки',
      technical: 'Технические навыки',
      languages: 'Языки программирования',
      tools: 'Инструменты и технологии'
    },
    projects: {
      title: 'Проекты',
      project1Title: 'E-Commerce платформа',
      project1Description: 'Полное e-commerce решение, построенное с React, Node.js и MongoDB.',
      project2Title: 'Приложение управления задачами',
      project2Description: 'Совместное приложение управления задачами с обновлениями в реальном времени.',
      project3Title: 'Портфолио веб-сайт',
      project3Description: 'Адаптивный портфолио веб-сайт, демонстрирующий современные практики веб-разработки.',
      viewProject: 'Посмотреть проект'
    },
    contact: {
      title: 'Свяжитесь со мной',
      subtitle: 'Давайте работать вместе',
      name: 'Ваше имя',
      email: 'Ваш email',
      message: 'Ваше сообщение',
      send: 'Отправить сообщение'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}