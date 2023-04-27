// подключаем встроенный модуль, с названием(path)
const path = require('path');
// подключаем плагин (HtmlWebpackPlugin)
const HtmlWebpackPlugin = require('html-webpack-plugin');
// подключаем плагин чтобы стили CSS добавлялись в виде файла
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // параметр (mode) со значением 'development', означает что мы собираем все
  // в режиме разработке
  mode: 'development',
  // в (entry) мы указываем, файл который является входным для нашего приложения
  entry: {
    // 6_13_globalFiles
    normalizeScript: './src/6_13_globalFiles/normalizeScript.js',
    bootstrapScript: './src/6_13_globalFiles/bootstrapScript.js',
    swiperScript: './src/6_13_globalFiles/swiperScript.js',
    borschPancakesPilafScript:
      './src/6_13_globalFiles/borschPancakesPilafScript.js',
    // 6_0_0_authentication
    index: './src/6_0_0_authentication/index.js',
    // 6_0_mainPage
    initializeSwiper: './src/6_0_mainPage/initializeSwiper.js',
    main: './src/6_0_mainPage/main.js',
    mainAnimationSection: './src/6_0_mainPage/mainAnimationSection.js',
    mainSpeedClickSection: './src/6_0_mainPage/mainSpeedClickSection.js',
    // 6_1_borschPage
    borsch: './src/6_1_borschPage/borsch.js',
    // 6_2_pancakesPage
    pancakes: './src/6_2_pancakesPage/pancakes.js',
    // 6_3_pilafPage
    pilaf: './src/6_3_pilafPage/pilaf.js',
    // 6_4_mortgageCalculatorPage
    mortgageCalculator:
      './src/6_4_mortgageCalculatorPage/mortgageCalculator.js',
    // 6_5_dailyCalculatorPage
    dailyCalculator: './src/6_5_dailyCalculatorPage/dailyCalculator.js',
    dailyCalculatorFromDateToDate:
      './src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js',
    dailyCalculatorFromTheCurrentDay:
      './src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js',
    dailyCalculatorLeapYear:
      './src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js',
    // 6_6_factsAboutCatsPage
    factsAboutCats: './src/6_6_factsAboutCatsPage/factsAboutCats.js',
    // 6_7_electricityCalculatorPage
    electricityCalculator:
      './src/6_7_electricityCalculatorPage/electricityCalculator.js',
    // 6_8_waterCalculatorPage
    waterCalculator: './src/6_8_waterCalculatorPage/waterCalculator.js',
    // 6_9_dailyTodoListPage
    dailyTodoList: './src/6_9_dailyTodoListPage/dailyTodoList.js',
    // 6_10_passwordGeneratorPage
    passwordGenerator: './src/6_10_passwordGeneratorPage/passwordGenerator.js',
    // 6_11_notepadPage
    notepad: './src/6_11_notepadPage/notepad.js',
    // 6_12_informationIpPage
    informationIp: './src/6_12_informationIpPage/informationIp.js',
  },
  // в параметре (output), указываем куда нам следует складывать результат
  output: {
    // параметр (filename) указываем выходное имя файла для папки dist
    filename: '[name].js',
    // в параметре (path) мы указываем путь, куда это все сложить!
    path: path.resolve(__dirname, 'dist'),
    // для очистки старой сборки, при формировании новой сборки
    clean: true,
  },
  // ___Сервер___
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
    port: 4200,
  },
  // так добавляем плагины (массив всех плагинов, которые есть в webpack)
  plugins: [
    // подключаем HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // так у нас будет присваиваться исходное имя файлу при сборке
      filename: 'index.html',
      // чтобы привязать к определенному html файлу, мы указываем в
      // в параметре (template) путь до этого файла
      template: './src/6_0_0_authentication/index.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/6_0_mainPage/main.html',
      // Скрипты, которые нужно подключить к странице
      chunks: [
        'normalizeScript',
        'bootstrapScript',
        'swiperScript',
        'initializeSwiper',
        'main',
        'mainAnimationSection',
        'mainSpeedClickSection',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'borsch.html',
      template: './src/6_1_borschPage/borsch.html',
      // Скрипты, которые нужно подключить к странице
      chunks: [
        'normalizeScript',
        'bootstrapScript',
        'borsch',
        'borschPancakesPilafScript',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'pancakes.html',
      template: './src/6_2_pancakesPage/pancakes.html',
      // Скрипты, которые нужно подключить к странице
      chunks: [
        'normalizeScript',
        'bootstrapScript',
        'pancakes',
        'borschPancakesPilafScript',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'pilaf.html',
      template: './src/6_3_pilafPage/pilaf.html',
      // Скрипты, которые нужно подключить к странице
      chunks: [
        'normalizeScript',
        'bootstrapScript',
        'pilaf',
        'borschPancakesPilafScript',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'mortgageCalculator.html',
      template: './src/6_4_mortgageCalculatorPage/mortgageCalculator.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'mortgageCalculator'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dailyCalculator.html',
      template: './src/6_5_dailyCalculatorPage/dailyCalculator.html',
      // Скрипты, которые нужно подключить к странице
      chunks: [
        'normalizeScript',
        'bootstrapScript',
        'dailyCalculator',
        'dailyCalculatorFromDateToDate',
        'dailyCalculatorFromTheCurrentDay',
        'dailyCalculatorLeapYear',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'factsAboutCats.html',
      template: './src/6_6_factsAboutCatsPage/factsAboutCats.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'factsAboutCats'],
    }),
    new HtmlWebpackPlugin({
      filename: 'electricityCalculator.html',
      template:
        './src/6_7_electricityCalculatorPage/electricityCalculator.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'electricityCalculator'],
    }),
    new HtmlWebpackPlugin({
      filename: 'waterCalculator.html',
      template: './src/6_8_waterCalculatorPage/waterCalculator.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'waterCalculator'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dailyTodoList.html',
      template: './src/6_9_dailyTodoListPage/dailyTodoList.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'dailyTodoList'],
    }),
    new HtmlWebpackPlugin({
      filename: 'passwordGenerator.html',
      template: './src/6_10_passwordGeneratorPage/passwordGenerator.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'passwordGenerator'],
    }),
    new HtmlWebpackPlugin({
      filename: 'notepad.html',
      template: './src/6_11_notepadPage/notepad.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'notepad'],
    }),
    new HtmlWebpackPlugin({
      filename: 'informationIp.html',
      template: './src/6_12_informationIpPage/informationIp.html',
      // Скрипты, которые нужно подключить к странице
      chunks: ['normalizeScript', 'bootstrapScript', 'informationIp'],
    }),
    // подключаем MiniCssExtractPlugin
    new MiniCssExtractPlugin({
      // в конструктор передаем параметр filename
      // патерн ([name]) динамически указывает на ключ(название нашего исходного файла)
      filename: '[name].css',
    }),
  ],
  // ключ module для работы с loader
  module: {
    // ключ rules
    rules: [
      // добавляем лоудера для работы с css файлами
      {
        // если файлы попадаются с таким расширением, то нужно использовать лоадеры
        // расширения (css, sass, scss)
        test: /\.(c|sa|sc)ss$/i,
        // !!!т.к. мы подключили плагин MiniCssExtractPlugin, то мы вместо
        // 'style-loader' обращаемся к статическому полю MiniCssExtractPlugin.loader - это
        // позволит нам выносить css в отдельный файл
        // (sass-loader, postcss-loader) нужен для работы с bootstrap в проекте
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      // добавляем Asset Modules для работы с картинками раньше делали с помощью file-loader
      // Asset Modules -это тип модуля, который позволяет использовать файлы ресурсов
      // (шрифты, иконки и т.д.) Без настройки дополнительных загрузчиков.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // asset создает отдельный файл и экспортирует URL
        type: 'asset/resource',
        // так генерируются исходное имя картинок, и название папки куда они будут складываться
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      // добавляем Asset Modules для работы с шрифтами
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        // так генерируются исходное имя шрифта
        generator: {
          filename: '[name][ext]',
        },
      },
      // добавляем Babel JS, используется для транспиляции (преобразования) кода ECMAScript 2015+ в обратно
      // совместимый код JavaScript, который может выполняться старыми движками JavaScript
      {
        test: /\.m?js$/,
        // из поиска убираем папку node_modules(т.е мы эту папку пропускаем)
        // при поиске кода который нужно преобразовать
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // здесь перечисляем массив прессетов которые будут использоваться
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
