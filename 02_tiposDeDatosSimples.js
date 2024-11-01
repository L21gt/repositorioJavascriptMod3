/*******************   DECLARACIÓN DE CLASE  *******************************
 * 
 * TEMAS:
 *    + Primitivos y autoboxing;
 *    + Booleano;
 *    + Num;
 *    + String;
 *    + Date.
 * 
 * 
*/

/*********  Tipos de datos simples       
 * 
 * Ya hemos hablado del término tipos de datos anteriormente.
 * 
 * En programación de computadoras, todos los datos son de algún tipo.
 * 
 * Este tipo se utiliza para indicarle al intérprete o compilador cómo tratar los datos.
 * 
 * Más comúnmente, los tipos de datos se dividen en dos categrías:
 *          + Simples (o primitivos)
 *          + Compuestos (o complejos).
 * 
 * Los tipos simples contienen un valor único, que se interpretará como algo así como
 * un número o texto.
 * 
 * Los tipos compuestos generalmente se construyeb a partir de tipos simples y, en la mayoría
 * de los casos, son todo tipo de colecciones(ordenadas o no).
 * 
 * Ahora veremos los tipos primitivos básicos de JavaScript y sus correspondientes objetos
 * integrados.
 */


/**     Primitivos y autoboxing      
 * 
 * Ya hemos hablado muchas veces de primitivos, es decir, tipos de datos no objetivos, i. e.
 * no son objetos.
 * 
 * Hay un total de siete, pero de momento sólo tres de ellos son importantes para nosotros:
 *      + Boolean
 *      + number
 *      + string
 * 
 * Como no son objetos, no tienen métodos ni propiedaes.
 * 
 * Los datos de cada uno de estos tipos colocados en las variable son valores puros,
 * almacenados en el formato apropiado en la memoria.
 * 
 * Sin embargo, para cada uno de los tipos e datosm primitivos existe un constructor
 * especial en JavaScript (que puedes tratar como una clase), respectivamente:
 * Boolean, Number, y String.
 * 
 * Estos son objetos integrados estándas. La conexión entre estas primitivas y sus correspon-
 * dientes constructores es relativamente simple, pero unas pocas palabras de explicación no 
 * vendrían mal.
 * 
 * En primer lugar, ¿por qué necesitamos tales constructores? De hecho, los necesitamos sólo
 * por conveniencia.
 * 
 * El uso de objetos y la notación de puntos relacionada es muy intuitivo y hace que la
 * notación de ciertas operaciones sea simple y lógica.
 * 
 * Veamos un ejemplo:
 */

let strObj = new String("¿Los murcielagos comen gatos?");
console.log(typeof(strObj));// --> object
console.log(strObj.length);// --> 17
let words = strObj.split(" ");
console.log(words[0]);// --> ¿Los

/** En este ejemplo, creamos strObj usando el String constructor.
 * 
 * Le pasamos al constructor una pregunta muy importante.
 * 
 * Nuestro objeto tiene muchas propiedades y métodos útiles.
 * 
 * Entre otras cosas, podemos comprobar cuántas letras tiene esta pregunta (nos referimos
 * a la propiedad length para este fin.
 * 
 * Usando el método split, dividimos nuestra pregunta en palabras individuales separadas
 * por espacios.
 * 
 * Almacenamos el resultado (palabras individuales) en el array words, todo esto utilizando 
 * las propiedades y métodos de nuestro objeto.
 * 
 * La escritura es sencilla y legible, fácil de recordar.  Entonces, ¿por qué utilizar
 * primitivos cuando utilizar objetos en su lugar es tan sencillo y agradable?
 * 
 * Desafortunadamente, además de sus innegables ventajas, los objetos tienen un serio
 * inconveniente.
 * 
 * Ocupan incomparablemente más espacio de memoria que los primitivos.
 * 
 * Entonces llegamos a la siguiente pregunta: si los objetos son convenientes, pero las
 * primitivas ahorran memoria, ¿cuáles deberíamos usar?
 * 
 * resulta que la respuesta es: ambos.  Y lo que es aún más extraño: al mismo tiempo
 * 
 * Veamos otro ejemplo:
 */
let str = "¿Los murcielagos comen gatos?";
console.log(typeof(str)); // --> string
console.log(str.length); // --> 17
let words2 = str.split(" ");
console.log(words[0]); // --> ¿Los

/**Esta vez asignamos directamene la cadena "¿Los murcielagos comen gatos?" hacia
 * la variable str.
 * 
 * Esta variable contiene una primitiva en lugar de un objeto, que verificamos con
 * typeof.
 * 
 * Y ahora una pequeña sorpresa:  a pesar de que nuestra variable no contiene un objeto
 * logramos ferirnos a los campos length y split, que conocemos por el objeto String.
 * 
 * ¿Cómo es posible este sucesooooo?
 * 
 * El motor JavaScript es responsable de esto.
 * 
 * Al usar la notación de puntos, indicamos que queremos usar algún método o propiedad de un
 * primitivo (que no tiene ninguna propiedad ni ningun propiedad de sus métodos) y el
 * motor lo convierte en el objeto (temporal) correspondiente.
 * 
 * El objeto temporal se mantiene en la memoria sólo hasta que se completa la operación,
 * despues de lo cual el motor de JavaScript lo libera.
 * 
 * Una operación de este tipo evidentemente repercute en el rendimiento del motor, pero la 
 * memoria que ahorramos de esta manera merece la pena.  Este comportamineto del motor
 * JavaScript se llama autoboxing.
 * 
 * Utilice primitivos.  No cree explícitamente objetos usando constructors Boolean, Number, o
 * String.  Por supuesto, es posible crear dichos objetos, como hemos mostrado en el
 * ejemplo anterior, pero no se recomienda.  Puede confiar en el motor JavaScript para
 * reconocer cuándo desea tratar una primitiva como un objeto y permitirle hacerlo
 * realizando la conversión adecuada sobre la marcha. 
 */


/***** Boolean **********************
 * 
 * Comenzaremos con uno de los objetos incorporados más simples, cuya sencillez nos permitirá
 * organizar algunos hechos relacionados con el tema que estamos discutiendo.
 * 
 * Boolean es un constructor, que es una función que permite crear objetos.
 * 
 * Corresponde al primitivisimo boolean.
 * 
 * Como todos los constructores asociados con primtivos en JavaScript, Boolean se puede 
 * utilizar de varias manera.
 * 
 * En primer lugar, se puede utilizar sin nuestro conocimiento durante el autoboxing,
 * cuando el valor lógico primitivo se convierte sobre la marcha en el objeto correspondiente.
 * 
 * También podemos usar explícitamente el constructor para crear un nuevo objeto usando
 * el nuevo operador.
 * 
 * También podemos usar explícitamente el constructor para crear un nuevo objeto usando el
 * nuevo operador.
 * 
 * En este caso, debemos proporcionar un valor booleano (lógico) como argumento al constructor,
 * que se almacenará en el objeto (si no proporcionamos un argumento, el objeto almacenará
 * false por defecto).
 * 
 * Boolean no tiene propiedades ni métodos estáticos
 * 
 * Tampoco tiene propiedades de prototipo.
 * 
 * Para ser honesto, aquí tampoco encontramos demasiados métodos prototipo.
 * 
 * Sólo hay dos de ellos: toString y valueOf.
 * 
 * El primero devuelve un valor lógico colocado en un objeto en forma de cadena de caracteres,
 * mientras que el segundo devolverá el mismo valor, pero en forma de un booleano primitivo
 * (es decir false o true).
 * 
 * Observa el siguiente ejemplo:
 */
let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();

console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

/** Usando el constructor Boolean y el operador new, creamos dos objetos:
 * boolObj1 y boolObj2.
 * 
 * Al crear el primero, no proporcionamos el argumento al constructor, por lo que contendrá el
 * valor predeterminado false.
 * 
 * El segundo objeto contiene el valor true pasado explícitamente al constructor.
 * 
 * Usando los métodos toString y valueOf, recuperamos los valores colocados en estos
 * objetos (en forma de cadenas de caracteres y valores lógicos respectivamente).
 * 
 * Por supuesto, podemos hacer una prueba similar usando autoboxing. 
 */
let bool1 = false;
let str22 = bool1.toString();
let bool22 = bool1.valueOf();

console.log(`str1 : ${typeof str22} : ${str22}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool22} : ${ bool22}`); // -> bool2 : boolean : false

/**Puede que el ejemplo no sea el más inteligente, pero es difícil diseñar algo
 * muy sensato con sólo dos métodos simples.
 * 
 * Así que dejémonos llevar por ña fantasía y supongamos que elegir un valor se una variable
 * que co tiene un boolean primitivo usando el método valueOf tiene sentido.
 * 
 * Por el momento, sólo estamos intentando demostrar el mecanismo en sí.
 * 
 * Mira el código en el editor.
 * 
 * En la variable bool1 hemos colocado un tipo de dato primitivo: el valor lógico false.
 * 
 * Al intentar utilizar los métodos toString y valueOf, forzamos al motor JavaScript
 * a convertir temporalmente esta primitiva en un objeto de clase Boolean.
 * 
 * Recuerda:
 * El motor es un program o un entorno que interpreta o ejecuta el código
 * JavaScript.   Estos motores son responsables de convertir el código JavaScript en 
 * instrucciones que la máquina puede entender y ejecutar. Los motores de JavaScript 
 * son una parte crucial de los navegadores web, pero también se utilizan en otros entornos,
 * como servidores y aplicaciones de escritorio.
 * 
 * Hay otra forma de utilizar el booleano. Podemos llamar alconstructor sin el nuevo operador.
 * 
 * ¿Qué lograremos de esa manera? La función constructora no creará un nuevo objeto, solo
 * convertirá el argumento enviado en un valor lógico primitivo que devolverá.
 * 
 * Mira el código:
 */
let bool11 = Boolean(false);
let bool21 = Boolean(1);
let bool31 = Boolean("");

console.log(`bool1 : ${typeof bool11} : ${bool11}`); // -> bool1 : boolean : false
console.log(`bool2 : ${typeof bool21} : ${bool21}`); // -> bool2 : boolean : true
console.log(`bool3 : ${typeof bool31} : ${bool31}`); // -> bool3 : boolean : false


 /** 
 * En el ejemplo, hemos convertido sucesivamente los argumentos false, 1 y " " a valores
 * lógicos.  Si bien el primer caso es bastante obvio, los otros dos pueden requerir una o 
 * dos palabras de aclaración.
 * 
 * En JavaScript, los siguientes valores se tratan como false:
 *  false (lo que probablementeno es una sorpresa), 
 *  null, undefined, NaN (no es un número), 
 *  " " (cadena vacía),
 *  0 (el número cero),
 *  -0 (el número cero negativo),
 *  0n (BigInt cero),
 *  -0n (Cero BigInt negativo).
 * 
 * Todos los demás valores serán tratados como tue, de ahí los valores obtenidos en el ejemplo.
 * 
 * Como puede ver, Boolean es un caso extremadamente simple y, francamente aparte de usarse
 * para la conversión, sirve poco.
 * 
 * Por supuesto no estamos hablando de la utilidad de los tipos lógicos como tales, sino del
 * uso explícito de los tipos lógicos.  El constructor Boolean y sus dos métodos
 * 
 */

 /** ************* NUMBER ***********************************
  * 
  * El constructor Number esta aociado con los números primitivos y representan los números
  * de punto flotante (los que utilizan el punto decimal), en doble precisión en formato de 
  * 64 bit.
  * 
  * Antes de iniciar la discusión de este constructor, recordems algunos hechos sobre el
  * número primitivo.
  * 
  *       UNAS PALABRAS SOBRE LOS NÚMEROS DE JAVASCRIPT
  * 
  * El formato de punto flotante permite almacenar números enteros y números reales
  * (en muchos lenguajes de programación, se distingue entre este tipo de números, mientras
  * que en JavaScript son simplemente números).
  * 
  * Este formato a menudo resulta en valores almacaenados siendo aproximados.
  * 
  * La gama de valores es limitada (es decir, no se pueden almacenas números fuera del
  * rango de límite).
  * 
  * Para los esnteros, por defecto, el valor más pequeño es  -(2^53 - 1) y el más grande
  * (2^53 -1).
  * 
  * De hecho, es posible anotar úmeros fuera de este rango, pero los cálculos realizados sobre
  * ellos son tan umpreciso que es poco probable que se realicen.
  * 
  * Si por alguna razón necesitáramos almacenar valores más grandes (por ejemplo, implementar
  * un algoritmo criptográfico que opere con números primos grandes), tenemos que teclear BigInt.
  * 
  * Sin embargo, en aplicaciones de la vida real, se usa tan raramente que lo omitiremos aquí.
  * 
  * A la hora de dar los valores numéricos, normalmente operamos con el sistema decimal, al
  * que estamos acostubrados en la vida cotidiana.
  * 
  * Sin embargo, al anteponer el valor numérico con 0x, 0o o 0b, podemos decirle al motor
  * de JavaScript que trate el número como hexadecimal, octal o binario.
  * 
  * También es posible escribir un número en forma exponencial, así por ejemplo, en lugar
  * de 9000 podemos escribir 9e3, y en lugar de 0.00123 podemos escribir 123e-5.
  * 
  * Probablemente ya esté familiarizado con estos términos, como representación decimal,
  * hexadecimal o exponencial.
  * 
  * Veamos un ejemplo
  */
 let a = 10; // decimal - default
 let b = 0x10;   // hexadecimal
 let c = 0o10; // octal
 let d = 0b10; // binary
 
 console.log(a); // -> 10
 console.log(b); // -> 16
 console.log(c); // -> 8
 console.log(d); // -> 2
 
 let x = 0.3;
 let y = 0.6;
 console.log(x + y); // -> 0.8999999999999999
 console.log((x + y).toFixed(1));    // -> 0.9
 
 console.log(x / 0);      // -> Infinity
 console.log(x / "abc");  // -> NaN

 /**La primera parte del código son unas pocas líneas que muestran cómo escribimos números en
  * formatos distintos al decimal.
  * 
  * Tenga en cuenta que al recuperar un valor, siempre lo obtiene en formato decimal.  Un
  * fragmento de código un poco más interesante se refiere a aproximaciones en valores reales
  * almacenados.
  * 
  * Las variables x e y, aunque nos parecen sencillas (representaciones decimales), se almacenan
  * en la memoria como números binarios de punto flotante.
  * 
  * Este formato, si bien es conveniente para una computadora, hace que algunos valores sean
  * imposibles de almacenar sin pequeñas aproximaciones.  El efecto de esto es visible
  * después de sumar ambas variable.  en tal situación, uno de los métodos del objeto Number,
  * toFixed puede ayudarnos.
  * 
  * Nos permite redondear el resultado a un número determinado de decimales.  Al final del
  * ejemplo, hay dos valores asociados con el tipo de número: Infinity y NaN(no es un número).
  * El primero puede generarse como resultado de operaciones artimétics que harán que se supere
  * el rango de números.
  * 
  * El sefundo valor nos informa que aunque el resultado es una determinada operación debe ser
  * un valor numérico, no es posible determinar el valor de salida correcto debido a datos de
  * entrada incorrectos.
  * 
  *    EL CONSTRUCTOR Number
  * 
  * Después de este pequeño paréntesis, volvamos al tema principal, el objeto estándar incorporado
  * Number.
  * 
  * Es un constructor que se puede utililizar implicitamente durante el autoboxing, en un
  * intento de tratar el número primitivo como un objeto.
  * 
  * También podemos usarlo para crear explícitamente un objeto usando el operador new,
  * aunque como en el caso de Boolean (y otros constructores correspondientes a primitivos) esto 
  * no se recomienda.
  * 
  * Si una llamada al constructor no está precedida por el nuevo operador, solo se usará
  * para convertir el argumento dado en un número (el valor devuelto será primitivo).
  * 
  * Para obtener una lista completa de métodos y propiedades del constructor Number, incluidas
  * descripciones y ejemplos, consulte el MDN (Mozilla Developer Network).
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  * 
  * Al igual que en booleano, también tenemos los métodos toString y valueOf.
  * 
  * Sus operaciones son similares y sólo hay una pequeñ deiferencia: el método toString puede
  * aceptar un argumento, un número que especifica en qué formato se devolverá el valor
  * almacenado en el objeto.  Por ejemplo, el argumento 16 hará que la cadena devuelta sea una
  * representación hexadecimal (el argumento 8 es una representación octal, etc.). Si no
  * proporcionamos ningún argumento, se devuelve la representación decimal predeterminada.
  * 
  * Veamos alguno ejemplos sencillos
  */
let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b

/** En la primera línea del código, tratamos el número 11 como un objeto, intentando llamar al
 * método toString.
 * 
 * Ponemos el número entre paréntesis: de lo contrario, JavaScript trataría el punto de la
 * notación de puntos como el comienzo de la parte fraccionaria.
 * 
 * Este es un ejemplo de autoboxing.
 * 
 * El motor JavaScript convierte un número sobre la marcha en su correspondiente tipo de objeto
 * Number, y luego llama al método toString.
 * 
 * Como no hemos proporcionado un argumento para el método llamado, se devuelve la cadena con
 * la representación predeterminada de nuestro número(decimal).
 * 
 * La segunda línea hace lo mismo, sólo que esta vez toString recibe el argumento 16, lo
 * que significa que debería devolver la representación hexadecimal de nuestro número 11,
 * esto es, b.
 * 
 * En el siguiente ejmeplo, declaramos explícitamente varios objetos usando el constructor
 * Number.
 * Reduerde:  este ejemplo es estrictamente didáctico (no debemos utilizar Number de
 * esta manera).
 */
let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity

console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0

/** Preste atención a qué valores se almacenan en diferentes objetos según el argumento
 * dado al constructor.  En el ejemplo, se muestra sólo el valor del objeto numberObj1.
 * 
 * Intenta hacer lo mismo con los otros cuatro objetos.
 * 
 * EL siguiente ejempo demuestra el uso del constructor Number sin el operaor new, es decir
 * usarlo sola para convertir el argumento en un número primitivo.
 */
let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100
/**Intente repetir la conversión de la misma forma para los argumentos del ejemplo anterior,
 * es decir "200", "abc" y 9e10000.
 * 
 * 
 * *****  Convertir números a diferentes formatos de cadenas
 * 
 * El conjunto de métodos prototipo de Number no se limita a valueOf y toString.
 * 
 * Todavía tenemos, entre otros, los siguientes:
 *      + toExponential(fractionDigits)
 *      + toFixed(digits)
 *      + toLocaleString([locales], [options])
 * 
 * El primero de estos métodos devuelve la cadena que representan un número en 
 * forma exponencial, con un dígito antes de la coma, redondeado a la fractionDigits después
 * de la coma.  El argumento puede ser omitido.
 */
let a1 = 12345;
console.log(a1.toExponential());   // -> 1.2345e+4
console.log(a1.toExponential(1));  // -> 1.2e+4
/** el método toFixed devuelve una cadena que representa un número redondeado a digits decimales
 * 
 * El redondeo se realiza de acuerdo con la convención generalmente aceptada, es decir, de 5
 * hacia arriba o por debajo de 5 hacia abajo.
 * 
 * Recuerde, sin embargo, que los números se almacenan en un formato impredecible, lo que
 * a veces puede llevar a resultados sorprendente.
 */
let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550

let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

/** En el primer caso, el redondeo del número almacenado en a variable nr1 se lleva a
 *cabo como esperamos.  El resultado del segundo redondeo se debe a la representación
 imprecisa del número en la memoria.

 Un método interesante es toLocaleString.
 Similar a toString, devuelve una cadena que representa un número almacenado en un objeto Number,
 pero esta vez la cadena se formateará de acuerdo con la convención del idioma seleccionado.

 ¿Cuál es el punto de utilizar este método? Dependiendo de la región en la que nos encontremos y 
 el idioma que utilicemos, los números se presentan de diferentes formas.

 No se trata sólo de dígitos diferentes.

 Un ejemplo típico es la separación de dígitos fraccionarios: en algunas regiones se
 utiliza un punto, en otras una coma.

 En el código JavaScript usamos un punto para este propósito pero, por ejemplo, al convertir
 un número en una cadena que queremos mostrar en nuestro sitio, es posible que queramos 
 presentarlo de acuerdo con las reglas locales.

 Si no proporcionamos el argumento local, en la conversión se utilizará el idioma establecido
 en la configuración de su sistema operativo.

 Además del argumento local, puede proporcionar opciones adicionales para modificar el
 formato.
 */
 let nr3 = 123456.789;

 console.log(nr3.toLocaleString("en-GB")); // "123,456.789"
 console.log(nr3.toLocaleString("fr-FR")); // "123 456,789"
 console.log(nr3.toLocaleString("de-DE")); // "123.456,789"
 console.log(nr3.toLocaleString("ar-EG")); // "١٢٣٬٤٥٦٫٧٨٩"
 console.log(nr3.toLocaleString("es-ES", {
     style: "currency",
     currency: "EUR"
 })); // "123.456,79 €"
 
 console.log(nr3.toLocaleString()); // Depende de la configuración regional predeterminada 
                                    // del entorno

/** En el ejemplo anterior, seprueba el funcionamiento del método toLocaleString con el
 * valor 123456.789 y presentado en los siguientes formatos:  "en-GB" (inglés británico), 
 * "fr-FR" (estándar francés), "de-DE" (estándar alemán), "ar-EG" (árabe egipcio) y 
 * "es- ES" (castellano). En la última línea llamamos al método sin argumentos,
 * por lo que el formato del número mostrado dependerá de la configuración local de su 
 * sistema operativo. 
 * 
 * *** Propiedades estáticas y métodos del constructor Number
 * 
 * El constructor Number no solo está equipado con métodos prototipo, sino que también nos
 * proporciona varias propiedades y métodos estáticos.
 * 
 * Entre las propiedades más importantes encontramos MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER y
 * MIN_SAFE_INTEGER.
 */
console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

/** La propiedad MAX_VALUE es el valor máximo que se puede almacenar utilizando el tipo de
 * número.
 * 
 * Sin embargo, deberías tratar este valor más como una curiosidad, ya que todos los valores
 * por encima MAX_SAFE_INTEGER se guardan con errores de aproximación crecientes.
 * 
 * El alcance seguro está limitado desde abajo por MIN_SAFE_INTEGER.
 * 
 * El valor MIN_VALUE es el valor fraccionario positivo más pequeño que se puede guardar con el
 * tipo de número. 
 * 
 * Los m´rtodos estátios nos permiten comprobar, entre otras cosas, si un valor es un número
 * entero, si es un número finito, si está dentro del rango seguro de números enteros, etc.
*/

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index<numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

/**En el ejemplo, hemos creado un array numbers en el que hemps colocado los valores
 * 2e100, 200000, 1.5, Infinity.
 * 
 * En el bucle for, recorremos la matriz, probando cada uno de los valores usando los métodos
 * estáticos isInteger, isSafeInteger y isFinit.  El resultado debería verse así:
 * 
 * is 2e+100 Integer: true
is 2e+100 safe Integer: false
is 2e+100 finite number: true

is 200000 Integer: true
is 200000 safe Integer: true
is 200000 finite number: true

is 1.5 Integer: false
is 1.5 safe Integer: false
is 1.5 finite number: true

is Infinity Integer: false
is Infinity safe Integer: false
is Infinity finite number: false


Estudiemos dos métodos estáticos más, parseInt y parseFloat, puede resultar útil convertir
valores numéricos a valores escritos como cadenas(strings).

¿Por qué usarlos si el constructor Number usado sin el operador new hace lo mismo?
Debido a que pueden perdonar algunos errores en el formato de cadena.

Funcionarán correctamente si al menos el fragmento inicial de la cadena de entrada
se puede interpretar como un número (el resto de la cadena se ignorará).

El constructor Number considerará el mismo caso como un error y devolverá el valor NaN.
 */ 
console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN

/**El lenguaje JavaScript no se inventó para cálculos matemáticos complejos.
 * 
 * Por supuesto, es posible realizar cualquier operación aritmética en él, 
 * y el objeto Math proporcionará muchas funciones matemáticas un poco más avanzadas.
 * 
 * Sin embargo, no es necesario complicarse la vida: en este ámbito, JavaScript da paso a
 * lenguajes como Python, que fueron creados para resolver problemas científicos.
 * 
 * Sin embargo, esto no debería preocuparnos demasiado.
 * 
 * Las tareas que se resuelven en el mundo real de JavaScript rara vez requieren el uso
 * de instrumentos matemáticos serios.
 * 
 * Nunca sentirás las limitaciones del lenguaje en este asunto, y el constructor Number lo
 * usarás con mayor frecuencia para convertir datos.
 */



/*********    STRING    
 * 
 * Finalmente hemos llegado a algo realmente práctico.
 * 
 * El constructor String, tal como estamos hablando, corresponde al primitivo string y
 * permite una cómoda manipulación de cadenas de caracteres.
 * 
 * Este objeto nos brinda un rico conjunto de métodos prototipo, de los cuales solo
 * discutiremos una parte determinada.
 * 
 * Una lista completa de métodos y propiedades del constructor String, junto con descripciones
 * y ejemplos, se pueden encontrar en la página MDN.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * 
 * ** Lo que ya sabemos sobre las strings
 * 
 * Ya hemos hablado acerca de las strings, pero refrescaremos la memoria.
 * 
 * En JavaScipt, las cadenas contienen caracteres entre comillas dobles, comillas simples o
 * comillas invertidas.
 * 
 * estos métodos pueden verse como alternativas entre sí.  El último permite el uso de 
 * marcadores de posición dentro de la cadena.
 * 
 * Las cadenas que contienen un marcador de posición se denominarán literales de plantilla.
 * El marcador de posición le permite insertar dinámicamente los valores de las variables en lugar
 * seleccionado de la cadena en tiempo de ejecución.
*/
let delay = 10;
let name1 = "Bob";
let order = 'pizza';
let info = `Hi ${name1}, you have to wait about ${delay} minutes for your ${order}`;

console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza

console.log(typeof name1); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

/**El ejemplo muestra el uso de comillas dobles, comillas simples y comillas invertidas al
 * crear cadenas, y con literales de plantilla siendo utilizadas al declarar la 
 * variable info.
 * 
 * Una forma conveniente de declar una variable para este proposito se muestra acontinuación:
 */
let anotherInfo = "Hi " + name1 + ", you have to wait about " + delay + " minutes for your " + order;

/** Si una cadena de caracteres debe contener uno de los caracteres que se utilizan para
 * especificar la cadena (", ', `), un carárter de escape, es decir \ (barra invertida), se
 * puede utilizar.
 * 
 * Esto hará que el carácter que le sigue se trate como parte de la cadena, en lugar de 
 * como un carácter de control(normalmente interpretado como el final de la cadena, por
 * ejemplo).
 * 
 * También puedes utilizar un carácter alternativo.  Por ejemplo, si desea que aparezca una
 * comilla doble dentro de una cadena, puede utilizar una comilla simple para especificar la
 * cadena.
 */
let warn1 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn2 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn3 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn4 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;
/**
 ****El constructor String
 * 
 * Volvamos al constructor String.
 * 
 * Similar a Boolean y Number, se utiliza, entre otras cosas, durante el autoboxing (es dedir,
 * cuando se intenta tratar la cadena primitiva como un objeto).
 * 
 * También podemos usarlo explícitamente para crear un nuevo objeto (nuevamente, esto no se
 * recomienda, ¿resuerdas por qué?) y para convertir otros tipos primitivos a string.
 * 
 * Comenzaremos analizando el constructor con la única propiedad de prototipo que tiene.
 * 
 * Esta es la propiedad length y, como puedes adivinar, nos informa sobre la cantidad de
 * caracteres de la cadena almacenados en el objeto.
 */
 let name = "Bob";
 console.log(name.length); // -> 3
 console.log("Alice".length ); // -> 5
 console.log("".length ); // -> 0
 /**El concepto de esta propiedad es tan simple que apenas necesita mayor explicación.
  * 
  * Sin embargo, hay dos cosas a tener en cuenta.  En primer lugar, en muchcos lenguajes
  * de programación, la longitud de una cadena se obtiene mediante una función, no una
  * propiedad, por lo que las personas que ya han aprendido un poco de programación a menudo 
  * se equivocan aquí.
  * El segundo problema no se refiere estrictamente a la propiedad length, sino sobre cierto
  * error lógico.
  * 
  * Por ejemplo a menudo se prueba si la longitud de una cadena es diferente de cero para
  * mostrarla.
  * 
  * Sin embargo es recomendable comprobar primero si la variable que estamos probando contiene
  * un string o cualquier otro valor antes de intentar hacer referencia al campo length.
  * 
  * Esto es lo que hacemos en el siguiente ejemplo utilizando el operador lógico AND(&&).
  */
 let strings = [undefined, "", "ab", "cd ef", 4, null];

for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}
/**Hemos colocado seis elementos en la matriz de cadenas, de los cuales sólo tres son
 * cadenas,y de esos tres, sólo dos son más largos que 0. Tan solo 'ab' y 'cd ef' se mostrará.
 * 
 * El comando console.log(strings[i]) se ejecutará bajo dos condiciones:
 *    + El elemento específico en la matriz no es igual a nulo o indefinido(comando strings[i])
 *    + El elemento tiene una propiedad de longuitud, que es diferente de cero(comando 
 *      string[i].length).
 * 
 * Por cierto, en el ejemplo también usamos la propiedad de longitud de matriz de cadenas.
 * 
 * Entonces vemos cierta repetición en los esquemas de nombres en JavaScript, lo que debería
 * facilitarnos recordarlos.
 * 
 * 
 ****     String como una matriz de caracteres  
 *       
 * Mientras estemos en las matrices, la cadena se puede tratar como una matriz de caracteres.
 * 
 * Dado que es un matriz, en teoría deberíamos poder hacer referencia a caracteres
 * individuales mediante un índice (posición) y corchetes.
 * 
 * Y de hecho podemos.
 * 
 * El mismo efecto se puede lograr con el método prototipo chartAt.
 * Observa el sguiente código
 */
 let title = "Alien 10";
 console.log(title[0]); // -> A
 console.log(title.charAt(0)); // -> A
 /**Usando corchetes, hemos indicado la primera letra (índice 0) de la cadena almacenada
  * en la variable de título.
  * 
  * Repetimos lo mismo usando el método charAt
  * 
  * *****  Conversión de casos
  * 
  * Dos métodos de uso frecuente son toLowerCase y toUpperCase.
  * 
  * Es fácil adivinar para qué los utilizamos.
  * 
  * En este ejemplo lo usaremos para observar un determinado fenómeno.
  * 
  * Observa el ejemplo:
  */

 // Guardamos una cadena en la variable title
let title1 = "Hello, World!";

// Llamamos al método toUpperCase en la cadena
let upperTitle = title1.toUpperCase();

// Imprimimos la cadena convertida en mayúsculas
console.log(upperTitle); // "HELLO, WORLD!"

// Imprimimos el contenido original de la variable title
console.log(title1); // "Hello, World!"

// Creamos un objeto de cadena usando el constructor String
let greeting = new String("GOOD MORNING!");

// Llamamos al método toLowerCase en el objeto de cadena
let lowerGreeting = greeting.toLowerCase();

// Imprimimos la cadena convertida en minúsculas
console.log(lowerGreeting); // "good morning!"

// Imprimimos el contenido original del objeto greeting, el cual no cambia.
console.log(greeting); // "GOOD MORNING!"

/**NOTA:************************************************************************************
 *   Los métodos prototipo de la String El constructor no modifica la cadena original 
 *   pero devuelve una copia modificada de la misma. Lo mismo ocurre con muchos de los
 *   métodos del constructor Array.
 *   Si no está 100% seguro de si un método modifica el contenido de un objeto o devuelve una
 *   copia modificada, consulte la documentación. 
 ********************************************************************************************/

/**      Dividiendo la string           
 * 
 * Un método que puede resultar útil es split, mediante el cual la cadena se puede dividir
 * en fragmentos (subcadenas), que se devolverán como una matriz.
 * 
 * Como argumento, damos lacadena que se va a tratar como separador.
 * 
 * Este método no afecta la cadena original.
 * 
 * Eche un vistazo al ejemplo en el editor.
 * 
 * En el ejemplo, dividimos la dirección IP, almacenada en forma de cadena, en cuatro partes.
 * 
 * Al llamar al método split, pasamos una cadena que contiene el punto como argumento,
 * indicando así como se separan estas partes entre sí.
 * 
 * Las piezas se almacenaran en ipParts.
 */
 let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127


/*****     Reemplazo de subcadenas  
 * Veamos el siguiente método útil, replaceAll, que le permite reemplazar una cadena de
 * caracteres seleccionada por otra que le hayamos proporcionado.
 * 
 * Nuevamente, no modificamos la cadena original, sino que la tratamos como una fuente.
 * 
 * Usando el método de división y el nueo método replaceAll, demostraremos el encadenamiento
 * de métodos.
  */
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue," +
            "suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque\
            aliquet tellus. Phasellus pharetra nulla ac diam.";
let words1 = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words1.length); // -> 30
/**En el ejemplo, ponemos algunas frase de LoremIpsum en la variable de texto.
 * 
 * Llamando a toLowerCase, cambiamos todas las letras mayúsculas a minúsculas.  Sin embargo, el
 * resultado nose almacena en ninguna variable ni se muestra en pantalla.
 * 
 * Despues de llamar a toLowerCase, aparece un punto inmediatamente y el siguiente método
 * se llama replaceAll.
 * 
 * Esto significa que el resultado obtenido de toLowerCase será procesado por replaceAll y así
 * sucesivamente.
 * 
 * Por lo tanto, podríamos presentar esta línea de código de la siguiente forma
 */
let aS = text.toLowerCase();
let bS = aS.replaceAll('.','');
let cS = bS.replaceAll(',','');
let wordS = cS.split(' ');
/**Probablemente estarás de acuerdo en que dicha notación es innecesariamente extensa y poco
 * elegante.  Debes tener en cuenta que el texto variable y los resultados intermedios devueltos
 * por toLowerCase o replaceAll son strings.
 * 
 * Tratarlos como objetos (es decir, la capacidad de llamarlos métodos constructors String)
 * es posible gracias al autoboxing.
 * 
 * El encadenamiento de métodos (o cascada) consiste en llamar a un método tras otro en una
 * línea de código.  Los métodos se llaman en orden de izquierda a derecha.  Cada método
 * posterior se ejecuta sobre el resultado del método anterior. Los métodos no tienen que ser
 * de un solo tipo de objeto.
 * 
 * Sin embargo, volvamos a los métodos replaceAll y split.
 * 
 * La primera llamada de replaceAll busca una cadena que consta de un solo punto y la 
 * convierte en una cadena vacía, es decir, simplemente eliminamos todos los puntos de la
 * cadena de entrada.
 * 
 * La segunda llamada de replaceAll elimina las comas de la misma manera.
 * 
 * El resultado es tratado por el método split.  Le pasamos una cadena que consta de un
 * espacio como argumento.
 * 
 * Este argumento se interpreta como un separador.  La cadena resultante de la última
 * replaceAll se dividirá en secciones separadas por espacios.
 * 
 * El método split devolverá una matriz que incluirá estas palabras individuales.  Al final,
 * verificamos la longitud de la matriz recibida.
 * 
 * Resulta que es 30 - este es el número de palabras que contiene el fragmento "Lorem ipsum".
 * 
 * Un método similar, replace, difiere de replaceAll en el sentido que no cambia todo,
 * sino sólo la primera coincidencia.
 * 
 * *****    Buscando subcadenas
 * 
 * Algunos de los métodos más útiles del constructor String son includes, indexOf y lastIndexOf.
 * 
 * Le permiten comprobar si hay una detertminada subcadena dentro de la cadena.
 * 
 * El método de includes solo devuelve información sobre si se ha encontrado dicha subcadena
 * (dada como argumento de la llamda al método).
 * 
 * El método indexOf, devolverá la posición de la primera aparición de la subcadena seleccionada
 * (puede ocurrir muchas veces).
 * 
 * Como puedes adivinar, lastIndexOf devolverá la posición de la última subcadena coincidente.
 * 
 * Recuerda que tratamos una cadena como una matriz, por lo que el primer carácter tiene
 * la posición 0 (La indexación de matrices comienza con 0).
 * 
 * Los métodos indexOf y lastIndexOf devolverán un valor de -1 si no encuentran la subcadena
 * especificada.
 * 
 * Eche un vistazo al ejemplo en el editos.
 * 
 * Este ejemplo no debería requerir ninguna explicación adicional.
 */
let textS = "One, two, three, one, two, three.";
console.log(textS.includes("two")); // -> true
console.log(textS.includes("four")); // -> false
console.log(textS.indexOf("two")); // -> 5
console.log(textS.indexOf("four")); // -> -1
console.log(textS.lastIndexOf("two")); // -> 22

/** ****** Copiar subcadena
 * 
 * Utilizando los métodos substr, substring y slice, podemos copiar la parte seleccionada de la
 * cadena.
 * 
 * El funcionamiento de estos métodos es muy similar y se diferencian principlamente en la forma
 * en que interpretan los argumentos que se les proporcionan.
 */
let textSb = "One, two, three, one, two, three.";

console.log(textSb.substr(0,8)); // -> One, two
console.log(textSb.substr(10)); // -> three, one, two, three.
console.log(textSb.substr(-6)); // -> three.
console.log(textSb.substr(-6, 2)); // -> th

/**En el caso del método substr, el primer argumento es la posición del comienzo de la
 * subcadena que se va a copiar
 */





