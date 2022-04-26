<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = [
            [
                'title'         => 'Косметолог эстетист (без мед. образования) 60 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '60 акк. часов',
                'price'         => '52 000',
                'old_price'     => '56 000',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Медицинское образование не требуется',
                'thumb'         => '~/static/services/estetist-60.jpeg',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
            [
                'title'         => 'Косметолог эстетист (без мед. образования) 144 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '144 акк. часов',
                'price'         => '45 000',
                'old_price'     => '48 500',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Медицинское образование не требуется',
                'thumb'         => '~/static/services/estetist-144.webp',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
            [
                'title'         => 'Сестринское дело 288 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '288 акк. часов',
                'price'         => '60 000',
                'old_price'     => '62 500',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Требуется среднее мед. образование',
                'thumb'         => '~/static/services/kosmetologia-288.jpeg',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
            [
                'title'         => 'Косметология 576 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '576 акк. часов',
                'price'         => '90 000',
                'old_price'     => '115 000',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Требуется высшее мед. образование',
                'thumb'         => '~/static/services/kosmetologia-576.jpeg',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
            [
                'title'         => 'Курс младших мед. сестер 50 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '50 акк. часов',
                'price'         => '12 000',
                'old_price'     => '15 000',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Требуется среднее мед. образование',
                'thumb'         => '~/static/services/kosmetologia-288.jpeg',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
            [
                'title'         => 'Сестринское дело 288 акк. часов',
                'category_id'   => 1,
                'description'   => 'Услуги косметологов в настоящее время особенно востребованы: в наше время принято ухаживать за собой, прибегая к помощи профессионалов. Косметолог -подготовленный специалист, знающий секреты правильного ухода за кожей, он отвечает за её красоту и здоровое состояние. Центр дополнительного образования “Орхидея” предлагает программу по курсу медицинской косметологии для слушателей с различными уровнями подготовки.',
                'duration'      => '288 акк. часов',
                'price'         => '60 000',
                'old_price'     => '62 500',
                'credit_info'   => 'Кредит, рассрочка. Идет набор в группу!',
                'medicine_info' => 'Требуется среднее мед. образование',
                'thumb'         => '~/static/services/kosmetologia-288.jpeg',
                'video'         => '',
                'advantages'    => '',
                'program'       => '',
                'program_pdf'   => '',
                'contract_url'  => '',
                'limit_users'   => '',
                'type'          => 'Оффлайн',
            ],
        ];
        
        foreach ($courses as $course)
        {
            Course::create($course);
        }
    }
}