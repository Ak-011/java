let str = "asdasdas"
undefined
str.indexOf("a")
0
str.indexOf("a", 1 )
3
str.substr(3,5)
'asdas'
let str = "ramaswami"
undefined
str.indexOf("s")
4
str.indexOf("s",5)
-1
str.substr(3,5)
'aswam'
str.substring3,5
5
str.substring(3,5
VM2530:1 Uncaught SyntaxError: missing ) after argument list
str.substring(3,5)
'as'
str.slice(4,5)
's'
str.substring(-4, -5)
''
str.slice(-4,-5)
''
str.slice(-5,-4)
's'
str.split('a')
(4) ['r', 'm', 'sw', 'mi']0: "r"1: "m"2: "sw"3: "mi"length: 4[[Prototype]]: Array(0)at: ƒ at()length: 1name: "at"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]concat: ƒ concat()length: 1name: "concat"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
let url = "https://www.youtube.com/watch?v=6dspWyrufBU"
undefined
url.split
ƒ split() { [native code] }
url.split('?')
(2) ['https://www.youtube.com/watch', 'v=6dspWyrufBU']
url.split('=")
VM3107:1 Uncaught SyntaxError: Invalid or unexpected token
url.split('=')
(2) ['https://www.youtube.com/watch?v', '6dspWyrufBU']