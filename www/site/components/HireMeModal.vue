<script>
import feather from "feather-icons";
import Button from "./reusable/Button.vue";
export default {
  props: ["showModal", "modal"],
  components: { Button },
  data: () => {
    return {
      // @todo
      courses: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
    };
  },
  mounted() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="
          bg-filter bg-black bg-opacity-50
          fixed
          inset-0
          w-full
          h-full
          z-20
        "
      ></div>
      <!-- Modal contents -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="
                modal
                max-w-md
                mx-5
                xl:max-w-xl
                lg:max-w-xl
                md:max-w-xl
                bg-white
                max-h-screen
                shadow-lg
                flex-row
                rounded-lg
                relative
              "
            >
              <div
                class="
                  modal-header
                  flex
                  justify-between
                  gap-10
                  p-5
                  border-b border-ternary-light
                  dark:border-ternary-dark
                "
              >
                <h5 class="text-primary-dark dark:text-primary-light text-xl pl-1">
                  Какой курс Вас интересует?
                </h5>
                <button
                  class="text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x" class="w-8 sm:w-12"></i>
                </button>
              </div>
              <div class="modal-body p-2 w-full h-full">
                <form
                  @submit="
                    (e) => {
                      e.preventDefault;
                    }
                  "
                  class="max-w-xl m-4 text-left"
                >
                  <div class="mt-0">
                    <input
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="name"
                      name="name"
                      type="text"
                      required=""
                      placeholder="Ваше Имя"
                      aria-label="Ваше Имя"
                    />
                  </div>
                  <div class="mt-6">
                    <input
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email адрес"
                      aria-label="Email адрес"
                    />
                  </div>
                  <div class="mt-6">
                    <input
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="phone"
                      name="phone"
                      type="text"
                      required=""
                      placeholder="Телефон"
                      aria-label="Телефон"
                    />
                  </div>
                  <div class="mt-6">
                    <select
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="subject"
                      name="subject"
                      type="text"
                      required=""
                      aria-label="Выбор курса"
                    >
                      <option
                        v-for="course in courses"
                        :key="course.id"
                        :value="course.slug"
                      >
                        {{ course.title }}
                      </option>
                    </select>
                  </div>

                  <div class="mt-6">
                    <textarea
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="message"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Ваше сообщение"
                      placeholder="Ваше сообщение"
                    ></textarea>
                  </div>

                  <div class="mt-2 pb-4 sm:pb-1">
                    <Button
                      title="Отправить"
                      class="
                        px-4
                        sm:px-6
                        py-2
                        sm:py-2.5
                        text-white
                        bg-indigo-500
                        hover:bg-indigo-600
                        rounded-md
                        focus:ring-1 focus:ring-indigo-900
                        duration-500
                      "
                      type="submit"
                      aria-label="Отправить"
                    />
                  </div>
                </form>
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
              >
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
