import { SxProps } from '@mui/material';

import { percent, px } from 'src/core/helpers/styles';
import { EGameType, EScenarioType, TGame } from 'src/core/types';

// NOTE: Attention to relative paths to `/public/videos/` (as `./videos/`)

const defaultGameScenarioButtonSx: SxProps = {
  /* // UNUSED: Relative, based on screen width
   * left: vw(4),
   * top: vw(10),
   * width: vw(45.5),
   * height: vw(46),
   */
  left: percent(4.5),
  top: percent(18),
  width: percent(44.5),
  height: percent(80.5),
  borderRadius: percent(12),
  borderWidth: px(10),
};

const defaultAnswerSx: SxProps = {
  // borderRadius: '4vmax',
  borderRadius: percent(20),
  // borderWidth: '1vmax',
  top: percent(76),
  height: percent(16),
  left: percent(1),
  width: percent(48),
};

const defaultRightAnswerSx: SxProps = {
  ...defaultAnswerSx,
  left: percent(51),
};

const secondGameLeftButtonSx = {
  ...defaultAnswerSx,
  top: percent(77.5),
  height: percent(14),
  left: percent(7.5),
  width: percent(41),
};

const secondGameRightButtonSx = {
  ...defaultRightAnswerSx,
  top: percent(77.5),
  height: percent(14),
  left: percent(51.2),
  width: percent(41),
};

const thirdGameLeftButtonSx = {
  ...defaultAnswerSx,
  top: percent(77.5),
  height: percent(14),
  left: percent(7.5),
  width: percent(41),
};

const thirdGameRightButtonSx = {
  ...defaultRightAnswerSx,
  top: percent(77.5),
  height: percent(14),
  left: percent(51.2),
  width: percent(41),
};

export const gamesList: TGame[] = [
  {
    id: EGameType.First,
    startVideoUrl: './videos/1c/1c-0-start.mp4',
    scenarios: [
      {
        id: EScenarioType.Natasha,
        selectButtonSx: { ...defaultGameScenarioButtonSx },
        screens: [
          {
            videoUrl: './videos/1c/natasha/1c-1.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Повышенное давление',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(0.2),
                  width: percent(46.2),
                },
              },
              {
                text: 'Это норма для беременных',
                buttonSx: {
                  ...defaultRightAnswerSx,
                  left: percent(45.7),
                  width: percent(53.5),
                },
              },
            ],
            finalComment:
              'Это типичные проявления повышенного давления. А еще иногда артериальное давление повышается, а головной боли нет. Это очень опасно. Важно мерить его регулярно.',
          },
          {
            videoUrl: './videos/1c/natasha/1c-2.mp4',
            finalComment:
              'Если давление выше 140/90, нужно вызывать скорую. Иначе такое состояние негативно скажется на беременности.',
            answers: [
              {
                text: 'Сказать врачу на плановом приеме',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(3.5),
                  width: percent(46.2),
                  top: percent(72),
                  height: percent(24),
                  // borderRadius: percent(20),
                },
              },
              {
                isCorrect: true,
                text: 'Вызвать скорую',
                buttonSx: {
                  ...defaultRightAnswerSx,
                  left: percent(50.2),
                  width: percent(46.2),
                  top: percent(72),
                  height: percent(24),
                },
              },
            ],
          },
          {
            videoUrl: './videos/1c/natasha/1c-3.mp4',
            finalComment:
              'Так как после приема пищи давление можно измерять только через 1-2 часа, по утрам первым делом лучше измерить давление. Чтобы не забыть об этом и сэкономить время, положите тонометр рядом с кроватью. Так вы сможете измерять давление сразу после пробуждения.',
            answers: [
              {
                text: 'Поесть',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(11),
                  width: percent(28.7),
                },
              },
              {
                isCorrect: true,
                text: 'Измерить давление',
                buttonSx: {
                  ...defaultRightAnswerSx,
                  left: percent(47),
                  width: percent(42),
                },
              },
            ],
          },
          {
            videoUrl: './videos/1c/natasha/1c-4.mp4',
            finalComment: 'Перед измерением давления убирайте одежду с выбранной руки.',
            answers: [
              {
                text: 'Да, можно мерить давление',
                buttonSx: { ...defaultAnswerSx, left: percent(5.5), width: percent(53) },
              },
              {
                isCorrect: true,
                text: 'Нет, есть ошибка',
                buttonSx: { ...defaultAnswerSx, left: percent(60.5), width: percent(36) },
              },
            ],
          },
          {
            videoUrl: './videos/1c/natasha/1c-5.mp4',
            finalComment:
              'При беременности нормальным считается давление до 130/85 мм рт. ст. Это стандартная норма, но у вас может быть другая. Проконсультируйтесь с врачом. Даже незначительное повышение относительно вашего обычного показателя на 10 мм рт. ст. требует внимания.',
            answers: [
              {
                isCorrect: true,
                text: 'Давление в норме',
                buttonSx: {
                  ...defaultAnswerSx,
                  borderRadius: '2vmax',
                  top: percent(73),
                  height: percent(22),
                  left: percent(0),
                  width: percent(20.6),
                },
              },
              {
                text: 'Это нормальное высокое давление',
                buttonSx: {
                  ...defaultAnswerSx,
                  borderRadius: '2vmax',
                  top: percent(73),
                  height: percent(22),
                  left: percent(20.3),
                  width: percent(35),
                },
              },
              {
                text: 'Это высокое артериальное давление',
                buttonSx: {
                  ...defaultAnswerSx,
                  borderRadius: '2vmax',
                  top: percent(73),
                  height: percent(22),
                  left: percent(54.9),
                  width: percent(45),
                },
              },
            ],
          },
        ],
      },
      {
        id: EScenarioType.Irina,
        selectButtonSx: { ...defaultGameScenarioButtonSx, left: percent(50.7) },
        screens: [
          {
            videoUrl: './videos/1c/irina/1c-6.mp4',
            finalComment:
              'Повышение давления относительно обычного показателя даже на 10 мм рт. ст. требует внимания. Надо сообщить об этом врачу. Нужно ли это сделать срочно или ждет до планового визита, разберем на последнем уроке курса.',
            answers: [
              {
                text: 'Ирина права',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(6.5),
                  width: percent(42.5),
                },
              },
              {
                isCorrect: true,
                text: 'Ирина не права',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(50.7),
                  width: percent(42.5),
                },
              },
            ],
          },
          {
            videoUrl: './videos/1c/irina/1c-7.mp4',
            finalComment:
              'Во время беременности пульс в норме увеличивается, однако он не должен превышать 100 ударов в минуту в состоянии покоя. Если пульс превышает этот показатель, нужно обратиться к врачу для дополнительного обследования.',
            answers: [
              {
                text: 'ЧСС в норме',
                buttonSx: {
                  ...defaultAnswerSx,
                  top: percent(73),
                  height: percent(22),
                  left: percent(0.5),
                  width: percent(28.5),
                },
              },
              {
                isCorrect: true,
                text: 'Пульс слишком частый',
                buttonSx: {
                  ...defaultAnswerSx,
                  top: percent(73),
                  height: percent(22),
                  left: percent(29.2),
                  width: percent(35),
                },
              },
              {
                text: 'Пульс редкий',
                buttonSx: {
                  ...defaultAnswerSx,
                  top: percent(73),
                  height: percent(22),
                  left: percent(64.5),
                  width: percent(35),
                },
              },
            ],
          },
          {
            videoUrl: './videos/1c/irina/1c-8.mp4',
            finalComment:
              'У Ирины повышенное давление относительно ее обычного показателя 100/60, а также 01.06.2024 высокий пульс вечером. Нужно обсудить с врачом',
            answers: [
              {
                text: 'Показатели в норме',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(2),
                  width: percent(41.5),
                },
              },
              {
                isCorrect: true,
                text: 'Есть отклонение от нормы',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(47),
                  width: percent(50.5),
                },
              },
            ],
          },
          {
            videoUrl: './videos/1c/irina/1c-9.mp4',
            finalComment:
              'В норме давление в течение дня может колебаться существенно. Оно зависит от физической активности. Целесообразно измерять давление два раза в день: утром и вечером. В это время организм находится в состоянии покоя.',
            answers: [
              {
                text: 'Да, это целесообразно',
                buttonSx: {
                  ...defaultAnswerSx,
                  left: percent(3.5),
                  width: percent(44.5),
                },
              },
              {
                isCorrect: true,
                text: 'Нет, это не имеет смысла',
                buttonSx: { ...defaultAnswerSx, left: percent(48.5), width: percent(48) },
              },
            ],
          },
          {
            videoUrl: './videos/1c/irina/1c-10.mp4',
            finalComment:
              'Легкая отечность ног это частое явление при беременности. Оно не требует срочной медицинской помощи, но врачу на приеме сказать нужно.',
            answers: [
              {
                text: 'Да, нужно срочно вызывать врача',
                buttonSx: {
                  ...defaultAnswerSx,
                  top: percent(73.5),
                  height: percent(22),
                  left: percent(3.5),
                  width: percent(45.5),
                },
              },
              {
                isCorrect: true,
                text: 'Нет, скорая не нужна',
                buttonSx: {
                  ...defaultAnswerSx,
                  top: percent(73.5),
                  height: percent(22),
                  left: percent(50.5),
                  width: percent(45.5),
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: EGameType.Second,
    startVideoUrl: './videos/2c/2c-0-start.mp4',
    scenarios: [
      {
        id: EScenarioType.Natasha,
        selectButtonSx: { ...defaultGameScenarioButtonSx },
        screens: [
          {
            // Наташа выбирает напиток в столовой, показываем буфет (витрину), стоят три напитка. Наташа думает: “Ну вот, опять тошнит, надоело! Что бы взять, чтобы полегчало?”
            videoUrl: './videos/2c/natasha/2c-natasha-1.mp4',
            answers: [
              {
                text: 'Кола',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  left: percent(4),
                  width: percent(27.5),
                },
              },
              {
                isCorrect: true,
                text: 'Вода с лимоном',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  left: percent(32),
                  width: percent(35.5),
                  height: percent(13.5),
                },
              },
              {
                text: 'Кофе',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  left: percent(68),
                  width: percent(28),
                },
              },
            ],
            finalComment:
              'Чтобы немного облегчить самочувствие и уменьшить частоту приступов тошноты и рвоты, помогают прохладные напитки. Например, негазированная вода с лимоном.',
          },
          {
            // Наташа в абстрактном пространстве, корчится. Думает: “Опять тошнит!!! Врач говорил, помогают некоторые продукты. Что-нибудь из моего подойдет?” Тут показываем содержимое сумки.
            videoUrl: './videos/2c/natasha/2c-natasha-2.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Сушки',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  left: percent(4),
                  width: percent(22),
                },
              },
              {
                text: 'Чипсы',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(27),
                  width: percent(22),
                },
              },
              {
                isCorrect: true,
                text: 'Леденцы',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(49.8),
                  width: percent(22),
                },
              },
              {
                text: 'Сникерс',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(72.8),
                  width: percent(22),
                },
              },
            ],
            finalComment:
              'Советуем найти универсальный безвредный продукт, который снимает приступ тошноты именно у вас. Например, это могут быть сушки, леденцы или дольки кислых фруктов.',
          },
          {
            // Изображаем Наташу плачущей на абстрактном фоне. Думает: “Ну вот, не взяла важный конспект, все время что-то забываю! Еще и спать хочу все время. Это ненормально!?”
            videoUrl: './videos/2c/natasha/2c-natasha-3.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Это является нормой для беременности',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(4),
                  width: percent(45),
                },
              },
              {
                text: 'Это повод обратиться к врачу',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(50.5),
                  width: percent(45),
                },
              },
            ],
            finalComment:
              'Забывчивость, сонливость, переменчивое настроение и плаксивость – нормальные проявления беременности. Переживать не стоит.',
          },
          {
            // Наташа с носовым платком на абстрактном фоне, думает: “Еще и нос заложило. Где мои капли и соляной раствор? Всегда мне помогает.”.
            videoUrl: './videos/2c/natasha/2c-natasha-4.mp4',
            answers: [
              {
                text: 'Использовать только капли',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(51.5),
                  height: percent(21.3),
                  left: percent(4),
                  width: percent(45),
                },
              },
              {
                isCorrect: true,
                text: 'Использовать только соляной раствор',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(51.5),
                  height: percent(21.3),
                  left: percent(50.5),
                  width: percent(45),
                },
              },
              {
                text: 'Использовать и капли, и соляной раствор',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(4),
                  width: percent(45),
                },
              },
              {
                text: 'Ничего не использовать до похода ко врачу',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(50.5),
                  width: percent(45),
                },
              },
            ],
            finalComment:
              'Не используйте сосудосуживающие капли без показаний врача. Самостоятельно от заложенности можно применить, например, соляной раствор.',
          },
          {
            // Наташа в магазине с тележкой, думает: «Так хочется чипсов! Беременным можно все, что хочется! Съем половинку пачки, ничего же страшного.»
            videoUrl: './videos/2c/natasha/2c-natasha-5.mp4',
            answers: [
              {
                text: 'Да, Наташа права',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  left: percent(7),
                  width: percent(40.5),
                },
              },
              {
                isCorrect: true,
                text: 'Нет, Наташа не права',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(48.5),
                  width: percent(43),
                },
              },
            ],
            finalComment:
              'Во время беременности могут появляться необычные вкусовые пристрастия. Можете есть то, что не вредит здоровью. От вредных продуктов, например, чипсов, стоит отказаться. Они в избытке содержат соль, ароматизаторы, консерванты, усилители вкуса и другие соединения, которые отрицательно влияют на здоровье будущей мамы и развитие плода.',
          },
          {
            // Наташа в магазине перед полкой с косметикой, выбирает крем у полок с баночками. Думает: “После беременности такие некрасивые растяжки. Аня пользовалась вот этим, ей помогло вроде, или у врача спросить?”. Тянется за баночкой.
            videoUrl: './videos/2c/natasha/2c-natasha-6.mp4',
            answers: [
              {
                text: 'Взять крем подруги',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  left: percent(2.6),
                  width: percent(40.5),
                },
              },
              {
                isCorrect: true,
                text: 'Посоветоваться с врачом',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(47),
                  width: percent(50),
                },
              },
            ],
            finalComment:
              'Совсем предотвратить растяжки невозможно, однако можно уменьшить их проявления. В этом помогут специальные средства ухода за кожей. Какие из них подойдут именно вам, лучше узнать у врача.',
          },
          {
            // Наташа меряет давление (правильно, рукав пижамы поднят вверх), крупно экран тонометра,  результат на тонометре - 115/74 мм рт. ст. Думает: “Не помню, нормально или нет. Обычно у меня 120/80. Вроде, все ок?”
            videoUrl: './videos/2c/natasha/2c-natasha-7.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Давление в норме',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(0),
                  width: percent(21),
                },
              },
              {
                text: 'Это нормальное высокое давление',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(20.5),
                  width: percent(34.5),
                },
              },
              {
                text: 'Это высокое артериальное давление',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(73.7),
                  height: percent(21.3),
                  left: percent(55),
                  width: percent(44.5),
                },
              },
            ],
            finalComment:
              'Нормальное давление при беременности - до 130/85 мм рт. ст. Это стандартная норма, но у вас может быть другая. Проконсультируйтесь с врачом. Даже незначительное повышение относительно вашего обычного показателя на 10 мм рт. ст. требует внимания. А пониженным считается давление, которое на 20% ниже вашего привычного.',
          },
        ],
      },
      {
        id: EScenarioType.Irina,
        selectButtonSx: { ...defaultGameScenarioButtonSx, left: percent(50.7) },
        screens: [
          {
            // Ирина в магазине с тележкой, думает: “Здорово, что у меня пока нет токсикоза, а если начнется? Возьму-ка я что-нибудь, что обычно снимает приступы тошноты у беременных. Что же мне взять?”
            videoUrl: './videos/2c/irina/2c-irina-1.mp4',
            answers: [
              {
                text: 'Йогурт',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  left: percent(4),
                  width: percent(22),
                },
              },
              {
                text: 'Пирожное',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(27),
                  width: percent(22),
                },
              },
              {
                isCorrect: true,
                text: 'Грейпфрут',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(50),
                  width: percent(22),
                },
              },
              {
                text: 'Банан',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(72.5),
                  width: percent(22.5),
                },
              },
            ],
            finalComment:
              'Если вас мучает токсикоз, советуем найти универсальный продукт, который снимает приступ тошноты именно у вас. Например, это могут быть сушки, леденцы или дольки кислых фруктов.',
          },
          {
            // Ирина в магазине с тележкой, думает: “У моей беременной подруги были запоры. Нужно бы как-то себя обезопасить. Возьму-ка продукты для профилактики, которые советовал врач. А что он советовал?”.
            videoUrl: './videos/2c/irina/2c-irina-2.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Творог',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  left: percent(2.5),
                  width: percent(22),
                },
              },
              {
                text: 'Белый хлеб',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(25.5),
                  width: percent(25),
                },
              },
              {
                isCorrect: true,
                text: 'Морковь',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(51.5),
                  width: percent(22),
                },
              },
              {
                text: 'Шоколад',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  left: percent(75),
                  width: percent(22),
                },
              },
            ],
            finalComment:
              'Чтобы избежать запоров, включите в рацион кисломолочку и продукты, содержащие клетчатку. Исключите белый хлеб, шоколад, крепкий чай и кофе.',
            finalImage: './videos/2c/irina/2c-irina-2r.png',
          },
          {
            // Ирина на абстрактном фоне, думает: “Каждый день небольшое головокружение. Как-то это меня волнует. Вдруг с малышом что-то не так?”
            videoUrl: './videos/2c/irina/2c-irina-3.mp4',
            answers: [
              {
                text: 'Ирина права',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                },
              },
              {
                isCorrect: true,
                text: 'Ирина не права',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                },
              },
            ],
            finalComment:
              'Легкое головокружение – нормальное проявление беременности, оно не указывает на проблему.',
          },
          {
            // Ирина на абстрактном фоне, думает: “Так странно, никогда не ела банан со сметаной, а теперь все время об этом думаю. Наверное, не стоит экспериментировать?”
            videoUrl: './videos/2c/irina/2c-irina-4.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Можно съесть, так как эти продукты не вредят маме и малышу',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(51),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
              {
                text: 'В беременность не стоит пробовать новые сочетания',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(74),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
            ],
            finalComment:
              'Во время беременности у вас могут измениться вкусовые пристрастия. Разрешите себе любые сочетания продуктов, которые не вредят здоровью.',
          },
          {
            // Ирина с носовым платком на абстрактном фоне. Думает: “Заложило нос, ну вот, простыла! Говорили же мне беречь себя. Неужели я заболела?”.
            videoUrl: './videos/2c/irina/2c-irina-5.mp4',
            answers: [
              {
                text: 'Заложенность носа – плохой признак, срочно к врачу',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(51),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
              {
                isCorrect: true,
                text: 'Заложенность носа еще не говорит о простуде или воспалении',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(74),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
            ],
            finalComment:
              'Один из неприятных симптомов беременности – заложенность носа. Ринит беременных не указывает на воспаление или простудное заболевание. Просто гормон беременности задерживает жидкость, и слизистая носа отекает.',
          },
          {
            // Ирина сидит в кресле, озадачена. В той же розовой пижаме. Думает: “Что-то я часто хожу в туалет. Может, что-то застудила? Живот же еще не растет, ребенок пока ни на что не давит.”
            videoUrl: './videos/2c/irina/2c-irina-6.mp4',
            answers: [
              {
                text: 'Частое мочеиспускание на раннем сроке – плохой признак',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                  top: percent(51),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
              {
                isCorrect: true,
                text: 'Частое мочеиспускание в норме может быть и на раннем сроке',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                  top: percent(74),
                  height: percent(21.2),
                  left: percent(16),
                  width: percent(68),
                },
              },
            ],
            finalComment:
              'Один из спутников беременности – частое мочеиспускание. На ранних сроках этому способствуют гормоны, а уже позже – растущая матка, которая давит на мочевой пузырь.',
          },
          {
            // Ирина меряет давление, результат на автоматическом тонометре - 103/65 мм рт. ст. Думает: “Норма -  до 130/85, но обычно-то у меня 100/60. Думаю, все хорошо.”
            videoUrl: './videos/2c/irina/2c-irina-7.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Ирина права',
                buttonSx: {
                  ...secondGameLeftButtonSx,
                  // ...
                },
              },
              {
                text: 'Ирина не права',
                buttonSx: {
                  ...secondGameRightButtonSx,
                  // ...
                },
              },
            ],
            finalComment:
              'У Ирины все в порядке. Внимания требует повышение давления относительно обычного показателя на 10 мм рт. ст. и более.',
          },
        ],
      },
    ],
  },
  {
    id: EGameType.Third,
    startVideoUrl: './videos/3c/3c-0-start.mp4',
    scenarios: [
      {
        id: EScenarioType.Natasha,
        selectButtonSx: { ...defaultGameScenarioButtonSx },
        screens: [
          // Сюжет, если выбрали Наташу
          {
            // 1. Наташа (покраснела) говорит: «Ой, температура повысилась.» Показывает градусник: на нем 37,6. Дальше думает: “Не страшно… Бывает.”
            videoUrl: './videos/3c/natasha/3c-natasha-1.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment: 'Тревожный сигнал, если температура выше 37,5°С.',
          },
          {
            // 2. Несчастная Наташа говорит: «Токсикоз... Тошнит. Позавтракала, а на обед только бутерброд съела. Хорошо, хоть голова не кружится. К семинару могу подготовиться.»
            videoUrl: './videos/3c/natasha/3c-natasha-2.mp4',
            answers: [
              {
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                isCorrect: true,
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Если в течение дня вы можете есть и пить, пусть чуть меньше нормы, это не повод беспокоиться. Тем более, если вас не рвет постоянно и нет синдромов обезвоживания.',
          },
          {
            // 3. Еще более несчастная Наташа: «Ну это кошмар какой-то. Постоянно рвет сегодня весь день. Сегодня не ела. И даже пить уже не могу. Голова кружится и во рту все пересохло.»
            videoUrl: './videos/3c/natasha/3c-natasha-3.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Опасно, когда вы не можете есть и пить в течение целого дня. И появляются симптомы обезвоживания: жажда, сухость кожи и слизистых, слабость, головокружение. Также тревожный симптом, если вы теряете более 5% массы тела за один-два дня.',
          },
          {
            // 4. Озадаченная Наташа: «Ой, что-то месячные начались. Говорят, если маленький срок, бывает такое.»
            videoUrl: './videos/3c/natasha/3c-natasha-4.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Кровянистые выделения из половых путей любой интенсивности это тревожный симптом. Может быть угроза выкидыша.',
          },
          {
            // 5. Наташа страдает от боли: «Ну что так спина разболелась? В пояснице, и как будто заболит сильно, а потом отпустит. Никогда такого не было. Пойду полежу»
            videoUrl: './videos/3c/natasha/3c-natasha-5.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Сильные схваткообразные боли внизу живота или в области поясницы повод вызвать скорую.',
          },
        ],
      },
      {
        id: EScenarioType.Irina,
        selectButtonSx: { ...defaultGameScenarioButtonSx, left: percent(50.7) },
        screens: [
          // Сюжет, если выбрали Ирину
          {
            // 1. Ирина озадачена: «Обычно у меня давление 100/60. А сейчас 120/65.»
            videoUrl: './videos/3c/irina/3c-irina-1.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Повышение давления даже больше чем на 10 мм рт. ст. по сравнению с обычным во время беременности тревожный сигнал. Нужно экстренно связаться с врачом или вызвать скорую.',
          },
          {
            // 2. Ирина расстроена: «Что-то цвет мочи сегодня другой, темный. И больно было в туалет ходить.»
            videoUrl: './videos/3c/irina/3c-irina-2.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Болезненное мочеиспускание и изменение цвета мочи на темный, примесь крови опасный симптом.',
          },
          {
            // 3. Ирина страдает от боли: «Спина болит. Может, это грыжа опять, а может и нет. Но болит как обычно – тянет немного, боль одинаковая все время.»
            videoUrl: './videos/3c/irina/3c-irina-3.mp4',
            answers: [
              {
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                isCorrect: true,
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Опасны сильные схваткообразные боли внизу живота или в области поясницы. В случае Ирины это не опасно, но обязательно нужно сказать врачу на плановом приеме.',
          },
          {
            // 4. Ирина озадаченно: «Ой, как я сильно отекла сегодня. Никогда такого не было. Становится хуже, и правая нога явно больше левой.»
            videoUrl: './videos/3c/irina/3c-irina-4.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Выраженные отеки ног, пальцев рук. Особенно – если они появились резко, нарастают, а также есть выраженная асимметрия в расположении отеков это опасно. Надо или звонить врачу или вызывать скорую.',
          },
          {
            // 5. Ирина в расслабленном состоянии: «Голова кружится и как будто «мушки» поплыли.»
            videoUrl: './videos/3c/irina/3c-irina-5.mp4',
            answers: [
              {
                isCorrect: true,
                text: 'Опасно',
                buttonSx: {
                  ...thirdGameLeftButtonSx,
                },
              },
              {
                text: 'Не опасно',
                buttonSx: {
                  ...thirdGameRightButtonSx,
                },
              },
            ],
            finalComment:
              'Головная боль, головокружение, нечеткое зрение, появление «мушек» перед глазами – это тревожные симптомы.',
          },
        ],
      },
    ],
  },
];

export const gamesHash = gamesList.reduce(
  (hash, game) => {
    hash[game.id] = game;
    return hash;
  },
  {} as Record<EGameType, TGame>,
);
