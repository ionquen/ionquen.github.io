"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[490],{2924:(r,n,a)=>{a.r(n),a.d(n,{default:()=>e});const e={data:{title:"Регулярные выражения",tags:["js"]},content:'\r\n## Определение\r\n\r\n**Регулярные выражения** - специальные шаблоны, используемые для нахождения в строке необходимых подстрок. Сам шаблон представляет из себя строку, состоящую из специальных символов, каждый из которых имеет определённое значение. Такие символы называются **метасимволами**. \r\n\r\n### Специальные символы\r\nШаблон регулярного выражения строится из любых символов, некоторые из которых обладают специфическим назначением. Все цифры и символы алфавита, с которыми работают спецсимволы, записываются как есть. Для того, чтобы записать метасимвол как есть, его необходимо **экранировать** обратной косой чертой (обратный слеш).\r\n\r\n**Квантификатор** - это метасимвол, позволяющий ограничить число повторений предшествующего символа или группы символов. Существуют следующие квантификаторы: ? + * {n}.\r\n\r\n| Символ | Пример шаблона | Описание |\r\n| - | - | - |\r\n| `/` | `/.*/` | Создание регулярного выражения. Символ должен находиться в начале и в конце шаблона.  |\r\n| `.` | `/.*/` | Представляет из себя любой символ в строке. |\r\n| `*` | `/.*/` | Квантификатор. Находит строку, состоящую из предыдущего символа (в данном случае любой символ), который повторяется 0 или более раз. В текущем примере равнозначен всей строке, по которой осуществляется поиск |\r\n| `{ }` | `/a{2}/` | Квантификатор. Находит строку, состоящую из предыдущего символа, который повторяется указанное в фигурных скобках количество раз. Можно задать диапазон. Так диапазон `{2, 5}` найдёт строки длиной от 2 до 5 символов, а `{2, }` найдёт строку, длина которой больше или равна 2. |\r\n| `+` | `/.+/` | Квантификатор. Находит строку, состоящую из предыдущего символа, который повторяется 1 или более раз. |\r\n| `?` | `/.?/` | Квантификатор. Находит строку, состоящую из предыдущего символа, который повторяется 0 или 1 раз. |\r\n| `?` | `/.*?/` | Изначально квантификаторы . и + жадные, то есть стараются захватить в результирующую строку как можно больше символов. В данном случае квантификатор, после которого стоит метасимвол ? становится нежадным и будет искать самые короткие строки соответствующие шаблону, например в строке "abcde" найдёт только a |\r\n| `^` | `/^a+/` | Указывает на то, что последующая часть шаблона должна сопоставиться с началом строки. В данном шаблоне при сопостовлении со строкой "aabc" найдёт aa, в строке "ddaaa" ничего не найдёт. |\r\n| `$` | `/a+$/` | Указывает, что предшествующая часть шаблона должна сопоставиться только в конце строки. Здесь в строке "cba" найдёт a  |\r\n| `[ ]` | `/[abc]*/` | Набор символов, указанный в квадратных скобках. Можно указать диапазон через тире, например `/[a-z]*/`, которые равен любому слову, состоящему из букв латинского алфавита. Также имеется возможность вставлять символьные классы: `/[\\d.]*/` что соответствует любому числу в строке. Чтобы добавить символ тире в набор необходимо его разместить в конце набора `/[a-z-]*/`. |\r\n| `[^ ]` | `/[abc]*/` | Символы, которые не входят в данный набор символов. Символ ^ добавляется в группу только если он находится не в начале набора. |\r\n| `()` | `/(abc)+/` | Скобочная группа. Группирует содержимое и позволяет применить к ним квантификаторы. Содержимое скобок можно получить в результате применения шаблона. |\r\n| `(?:)` | `/(?:abc)+/` | Исключающая скобочная группа. Содержимое скобок сключается из результата. |\r\n| `x(?=y)` | `/a(?=b)/` | Сопоставляется с x, только если за x следует y  |\r\n| `x(?!y)` | `/a(?!b)/` | Сопоставляется с x, только если за x не следует y |\r\n| `x(?<=y)` | `/a(?<=b)/` | Сопоставляется с x, только если за y следует x |\r\n| `x(?<!y)` | `/a(?<!b)/` | Сопоставляется с x, только если за y не следует x |\r\n| `a\\|b` | `/a(a\\|b\\|c)a/` | Альтернация. Позволяет сопоставиться либо с a, либо с b. В данном примере найдёт aaa и aba в строке baaabac. |\r\n| `(?<key>)` | `/(?<ссылка>[a-zA-Z]{2})(\\k<ссылка>*)/` | Создаёт ссылку на скобочную группу, позволяя получить её значение в результате по ключевому слову.  |\r\n| `\\` | `/\\\\.+/` | Символ экранирования - позволяет использовать спецсимволы в шаблонах. При применении на буквы латинского алфавита представляет собой символьные классы (об этом ниже). В данном примере находит строку, начало которой равно точке. |\r\n\r\n### Флаги\r\nФлаги указывают правила сопоставления шаблона и указываются после регулярного выражения: `/abc/i`. Также можно установить несколько флагов неважно с какой последовательностью.\r\n\r\n| Флаг | Расшифровка | Значение |\r\n| - | - |  - | \r\n| `u` | Unicode | Обработать строку по кодировке Unicode  |\r\n| `g` | Global | Искать все совпадения. При отсутствии флага находит только первое попавшееся совпадение |\r\n| `i` | Ignore | Игнорировать регистр при сопоставлении |\r\n| `m` | Multiline | Производит поиск по нескольким строкам. Шаблон, в котором используется $ и ^ применяется в том числе и для каждой строке |\r\n\r\n### Символьные классы и ссылки\r\nДля указания группы символов существует спецсимволы `[]`, однако для некоторых групп изначально предопределены символьные классы, ускоряющих создание шаблонов. \r\n\r\nДля вставки символьного класса используется знак обратной косой черты `\\`.\r\n\r\nПример: `/\\d/` - найти все целые числа.\r\n\r\n| Символ | Расшифровка | Значение |\r\n| - | - | - |\r\n| `\\d` | Digit | Цифры от 0 до 9. |\r\n| `\\s` | Space | Любые пробельные символы, включая символ пробел, табуляция, перевод строки. |\r\n| `\\w` | Word | Любая буква латинского алфавита, а также цифры от 0 до 9 и символ подчёркивания. |\r\n| `\\t` | Tabulation  | Символ табуляции. | \r\n| `\\r` | Carriage return | Возврат каретки - символ, управляющий возвращением текущей позиции в начало текущей линии.|\r\n| `\\n` | New line | Символ переноса строки. |\r\n| `\\r` | Form feed | Разделитель страниц. |\r\n| `\\v` | Vertical tabulation | Символ вертикальной табуляции. |\r\n| `\\b` | Border | Граница слова. |\r\n| `[\\b]` | Backspace | Символ Backspace. Задаётся только в символьном наборе. |\r\n| `\\xCC` |  | Представляет из себя символ с кодом  CC. |\r\n| `\\uCCCC` | Unicode | Представляет из себя Unicode-символ с кодом  CCCC. |\r\n| `\\p{prop}` | Unicode | Представляет из себя символ, свойство prop которого соответствует определённой группе Unicode-символов. |\r\n| `\\k<>` | Keyword | Обратная ссылка по названию якоря. Пример: `/(?<word>[a-zA-Z]{2})(\\k<word>*)/` - создаётся ссылка на скобочную группу, значение которой повторно применяется впоследствии. |\r\n| `\\n` |  | Обратная ссылка на скобочную группу, где n - число от 1, представляющее номер скобочной группы в последовательности.  |\r\n| `\\0` | Null | Соответствует символу Null |\r\n\r\nМожно также находить символы, не состоящие в данном символьном классе. Для этого символ записывается в верхнем регистре. \r\n\r\nНапример: `/\\D/` - найти все символы, не состоящие в классе d, то есть не цифры.\r\n\r\n### Свойства символов\r\nКаждый Unicode символ обладает некоторым свойстом, что позволяет отнести его к определённой группе символов: цифры, числа, алфавит, эмодзи, наличие символа в кодировке ASCII и так далее.\r\n\r\nДля поиска по свойству применяется следующий синтаксис: `/\\p{prop=value}/`, где prop представляет собой свойство, а value его значение, например: `{sc=Cyrillic}`, `{Emoji=yes}` или просто `{Emoji}`. Если значение свойства является булевым, то достаточно указать только свойство, например: `{Alpha}`.\r\n\r\nДля того, чтобы применить данный функционал, необходимо к регулярному выражению добавить флаг **u**.\r\n\r\nВ следующей таблице представлены свойства с булевым значением\r\n\r\n| Свойство | Псевдоним | Описание |\r\n| - | - | - |\r\n| Alphabetic | Alpha | Является буквой любого алфавита  |\r\n| Uppercase | Upper | Заглавная буква |\r\n| Lowercase | Lower | Строчная буква |\r\n| Emoji | Emoji | Эмоджи | \r\n| ASCII | ASCII | Наличие символа в кодировке ASCII |\r\n| Hex_Digit | AHex | Символ используется в шестнадцатеричной системе счисления |\r\n| Math | Math | Математические символы |\r\n| White_Space | Pat_WS | Разделительные символы: перевод строки, новая страница... |\r\n\r\nТакже можно определить, из какого алфавита взят символ. Для этого используется свойство **Script** или его псевдоним **sc**.\r\n\r\n Значение | Сокращение | Описание\r\n| - | - |  - | \r\n| Cyrillic | Cyrl |  | \r\n| Arabic | Arab |  | \r\n| Armenian | Armn |  | \r\n| Latin | Latn |  | \r\n| Common | Zyyy | Общие символы, не являющиеся буквами алфавита | \r\n\r\nИ многие другие...\r\n\r\nС полным перечнем можно ознакомиться на [сайте Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt).\r\n\r\n[Все свойства юникод-символа](https://util.unicode.org/UnicodeJsps/character.jsp)\r\n\r\n[Категоризация символов](https://www.unicode.org/reports/tr36/idn-chars.html) '}}}]);