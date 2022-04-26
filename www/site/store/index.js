import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Список курсов обучения",
  projectsDescription: "Выберите нужное Вам направление",
  courses: [
    {
      id: uuidv4(),
      title: "Косметолог эстетист (без мед. образования) 60 акк. часов",
      slug: "kosmetolog-estetist-bez-med-obrazovaniya-60-akk-chasov",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "60 акк. часов",
      price: "52 000",
      old_price: "56 000",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Медицинское образование не требуется",
      thumb: "/dist/services/estetist-60.jpeg",
      video: "",
      training_schedules: [
        {
          id: 1,
          date: "4 апреля — 19 мая",
          weekday: "пн-пт, 04.04-19.05, c 09:00 до 17:30",
          course_id: 1,
          created_at: "2022-04-26T16:58:25.000000Z",
          updated_at: "2022-04-26T16:58:25.000000Z",
          deleted_at: null
        }
      ],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    },
    {
      id: uuidv4(),
      title: "Косметолог эстетист (без мед. образования) 144 акк. часов",
      slug: "kosmetolog-estetist-bez-med-obrazovaniya-144-akk-chasov",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "144 акк. часов",
      price: "45 000",
      old_price: "48 500",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Медицинское образование не требуется",
      thumb: "/dist/services/estetist-144.webp",
      video: "",
      training_schedules: [],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    },
    {
      id: uuidv4(),
      title: "Сестринское дело 288 акк. часов",
      slug: "sestrinskoe-delo-288-akk-chasov",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "288 акк. часов",
      price: "60 000",
      old_price: "62 500",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Требуется среднее мед. образование",
      thumb: "/dist/services/kosmetologia-288.jpeg",
      video: "",
      training_schedules: [],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    },
    {
      id: uuidv4(),
      title: "Косметология 576 акк. часов",
      slug: "kosmetologiya-576-akk-chasov",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "576 акк. часов",
      price: "90 000",
      old_price: "115 000",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Требуется высшее мед. образование",
      thumb: "/dist/services/kosmetologia-576.jpeg",
      video: "",
      training_schedules: [],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    },
    {
      id: uuidv4(),
      title: "Курс младших мед. сестер 50 акк. часов",
      slug: "kurs-mladshih-med-sester-50-akk-chasov",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "50 акк. часов",
      price: "12 000",
      old_price: "15 000",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Требуется среднее мед. образование",
      thumb: "/dist/services/kosmetologia-288.jpeg",
      video: "",
      training_schedules: [],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    },
    {
      id: uuidv4(),
      title: "Сестринское дело 288 акк. часов",
      slug: "sestrinskoe-delo-288-akk-chasov-2",
      category_id: {
        id: 1,
        title: "Курсы косметологии",
        slug: "kurs-dlya-cosmetology",
        created_at: "2022-04-26T16:58:25.000000Z",
        updated_at: "2022-04-26T16:58:25.000000Z",
        deleted_at: null
      },
      description: "Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.",
      duration: "288 акк. часов",
      price: "60 000",
      old_price: "62 500",
      credit_info: "Кредит, рассрочка. Идет набор в группу!",
      medicine_info: "Требуется среднее мед. образование",
      thumb: "/dist/services/kosmetologia-288.jpeg",
      video: "",
      training_schedules: [],
      advantages: "",
      program: "",
      program_pdf: "",
      contract_url: "",
      limit_users: "",
      type: "Очное обучение"
    }
  ],
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Google Health Platform",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/cosmetic.school",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/cosmetic.school",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/cosmetic.school",
        },
        {
          id: uuidv4(),
          name: "VK",
          icon: "VK",
          url: "https://vk.com/cosmetic.school",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/cosmetic-school",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Phoenix Digital Agency",
      category: "Mobile Application",
      img: "images/mobile-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Project Management UI",
      category: "UI/UX Design",
      img: "images/ui-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "Cloud Storage Platform",
      category: "UI/UX Design",
      img: "images/ui-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "Uber Social App",
      category: "Mobile Application",
      img: "images/mobile-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "Apple Design System",
      category: "Web Application",
      img: "images/web-project-1.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
  ],
  clientsHeading: "Some of the brands I worked with",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],
  aboutMe: [],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/cosmetic.school",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/cosmetic.school",
    },
  ],
  // categories: [
  //   {
  //     id: uuidv4(),
  //     value: "cosmetologiya",
  //     name: "Курсы косметологии",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "manikur",
  //     name: "Курсы маникюра и педикюра",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "lashes",
  //     name: "Курсы наращивания ресниц",
  //   },
  //   {
  //     id: uuidv4(),
  //     value: "lashes",
  //     name: "Курсы ламинирования ресниц",
  //   },
  // ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
