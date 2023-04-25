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
    ],
  },
};
