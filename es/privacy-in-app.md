---
layout: in-app-content
lang: es
title: Declaración de privacidad de la aplicación CoronaMelder
---

## La aplicación CoronaMelder
CoronaMelder (la aplicación) es un recurso técnico que ayuda a limitar la propagación del virus de la COVID-19. Si ha instalado la aplicación CoronaMelder en su teléfono inteligente, recibirá un mensaje cuando haya estado durante un periodo de tiempo determinado cerca de alguien que haya dado positivo en el test de COVID-19, siempre que dicha persona también haya instalado la aplicación CoronaMelder. Si existe la posibilidad de haber sido contagiado por otro usuario de CoronaMelder, la aplicación le aconsejará que se haga una prueba, si desarrolla algún síntoma. A continuación se ofrece una breve explicación del funcionamiento de la aplicación CoronaMelder.
La aplicación reconoce a otros teléfonos inteligentes en los que se haya instalado CoronaMelder, a través de Bluetooth Low Energy (Bluetooth de baja energía: BLE). El reconocimiento de otros teléfonos inteligentes se realiza de acuerdo con códigos aleatorios (series de números), que se conocen como Rolling Proximity Indicators (indicadores móviles de proximidad, RPI). Dichos códigos se renuevan cada 10 o 20 minutos y son una derivación de unas claves de exposición temporal (Temporary Exposure Keys, TEK). Las TEK son también códigos aleatorios, pero estos vuelven a generarse cada día y se guardan en el teléfono del usuario durante 14 días.
Si su teléfono inteligente está cerca de otro teléfono inteligente en el que se haya instalado la aplicación, ambos teléfonos intercambian los distintos RPI y se guardan localmente. Si un usuario de la aplicación da positivo en la prueba de COVID-19, el usuario puede optar libremente por comunicarlo en la aplicación. Si se elige comunicar el positivo, la aplicación envía a un servidor backend las TEK que se han generado durante los últimos 14 días, y las guarda localmente. El servidor backend únicamente acepta las TEK enviadas si el usuario y el Servicio Municipal de Salud (GGD) han confirmado el envío con un código de validación. En el servidor backend, las TEK recibidas se transforman en otro tipo de códigos denominados Diagnosis Keys (claves de diagnóstico: DK).
Seguidamente, el servidor backend facilita las DK para que puedan ser recibidas automáticamente por los teléfonos inteligentes en los que se ha instalado la aplicación. La conexión con el servidor se interrumpe cuando su teléfono inteligente haya recibido las DK del servidor. Este proceso automatizado se repite varias veces al día, para mantener actualizados los eventuales riesgos de contagio. Seguidamente, partiendo de las DK recibidas, su teléfono inteligente calcula si existe alguna coincidencia con los diferentes RPI de otros teléfonos inteligentes en cuya proximidad haya podido estar. Inmediatamente después, las DK se eliminan de su teléfono inteligente.
Si se descubre una coincidencia, se determina si puede catalogarse como contacto de riesgo (conforme a varios factores de ponderación). Si ese fuera el caso (esto es: usted ha estado recientemente cerca de una persona contagiada con la COVID-19), usted recibe un aviso de posibilidad aumentada de contagio. Si presenta síntomas, la aplicación también le aconseja que se haga una prueba de COVID-19.

### 1. ¿Quién es responsable del tratamiento de los datos personales?
Si se tratan datos para organizar y gestionar la aplicación CoronaMelder, el responsable del tratamiento de datos es el ministro de Sanidad, Bienestar y Deportes.
Si el Servicio Municipal de Salud (GGD) usa datos personales obtenidos a través de la aplicación, para rastrear el origen y los contactos, el GGD de su región será el responsable del tratamiento de datos. En [www.GGD.nl](https://www.ggd.nl) puede encontrar qué GGD es competente en su lugar de domicilio, introduciendo el código postal de su dirección. Si no tiene una dirección en los Países Bajos, puede introducir el código postal de su lugar de alojamiento.

### 2. ¿Con qué finalidad se tratan los datos personales?
Esta aplicación ha sido desarrollada como complemento al rastreo de origen y contactos de los GGD. La finalidad es informar de forma rápida y sencilla a los usuarios con una posibilidad aumentada de contagio, con un alto grado de anonimato.

### 3. Base para el tratamiento de datos personales
En la aplicación se pueden tratar datos personales. De forma resumida, la base para el tratamiento de datos personales es el desempeño de una función de carácter público. Además, para el ministro de Sanidad, Bienestar y Deportes, se trata (resumidamente) de la función pública de dirigir la lucha contra el COVID-19 y procurar el mantenimiento y la mejora de la estructura nacional de apoyo. 
En el caso del Servicio Municipal de Salud (GGD), se trata de la tarea de rastreo de origen y contactos, cuando se notifica un contagio con COVID-19. 
Así pues, con la introducción de la aplicación CoronaMelder como herramienta de apoyo del rastreo de origen y contactos, se están ejecutando las funciones públicas antes mencionadas del ministro de Sanidad, Bienestar y Deporte y de los GGD.
El uso de la aplicación CoronaMelder es voluntario. Por consiguiente, la aplicación CoronaMelder pedirá su consentimiento antes de que usted pueda usarla. Si usted no da su consentimiento, no podrá usar la aplicación CoronaMelder. También se solicitará su consentimiento antes de que usted pueda compartir sus datos con los GGD (en caso de resultado positivo).

### 4. ¿Qué datos personales se tratan?
En la aplicación se tratan los siguientes datos:

* Rolling proximity indicators (indicadores móviles de proximidad: RPI)
* Temporary Exposure Keys (claves de exposición temporal: TEK)
* Diagnosis Keys (claves de diagnóstico: DK)
* Pseudo dirección MAC
* Potencia de la señal y duración del contacto
* Primer día de enfermedad
* Código de validación
* Exposure Risk Value (valor del riesgo de exposición: alto, medio, bajo)
* Dirección IP

Dichos datos pueden ser datos personales.
Una TEK es una serie aleatoria de números generados criptográficamente, que sirven de referencia temporal. En el servidor backend, las TEK se convierten en DK. Además, se genera un RPI cada 10-20 minutos, esto es: una serie temporal de números que también se genera criptográficamente. Dicha serie de números es una derivación de una TEK, y se intercambia con otros teléfonos inteligentes en los que se haya instalado la aplicación y que hayan estado cerca del teléfono inteligente en cuestión durante un periodo de tiempo prefijado. La recepción y el envío de los RPI se realizan a través de Bluetooth de baja energía. Los RPI se envían y reciben en combinación con la potencia de la señal (para determinar la distancia entre los usuarios) y con la duración del contacto (de Bluetooth). Los RPI recibidos se eliminan de los teléfonos inteligentes en el plazo de 14 días.
Tanto las TEK, como las DK y los RPI son claves de identificación seudonimizadas.
Con el fin de excluir en lo posible el riesgo de identificación de los usuarios, al intercambiar los RPI se sustituye la dirección MAC (un número de hardware único del transmisor de Bluetooth) del teléfono inteligente por un código generado aleatoriamente, una pseudo dirección MAC que, al igual que los RPI, cambia cada 10-20 minutos.
El código de validación se genera con ayuda de una funcionalidad que ofrece y muestra la aplicación. El GGD utiliza el código de validación para validar las TEK enviadas al GGD. El GGD sube ese código de validación al portal del GGD, con la fecha del primer día de enfermedad. Ese portal del GGD solo es accesible para empleados del GGD. El servidor backend únicamente acepta TEK de usuarios si vienen acompañadas de un código de validación que ha sido validado por el GGD de la forma indicada. Durante la fase de validación, se tratan las direcciones IP para fines de gestión y seguridad.

Además de las DK, el primer día de enfermedad y el código de validación, también se envía al servidor backend la dirección IP. Esto es inherente al uso de Internet y de la tecnología IP. La dirección IP se almacena por separado de los demás datos, de forma que en el servidor backend no se almacena ninguna dirección IP. Por consiguiente, no se puede rastrear quién ha enviado una información concreta.

### 5. Información estadística
Los datos recopilados por la aplicación únicamente se usan para los fines mencionados en esta declaración de privacidad. No se genera información estadística.

### 6. ¿A quién se facilitan los datos personales?
El envío y la recepción de los RPI se realizan localmente en los teléfonos inteligentes. Si se constata un contagio, el usuario puede elegir enviar al servidor backend sus TEK, conjuntamente con un código de validación único. El servidor backend está gestionado por la CIBG (entidad gestora del Ministerio de Sanidad), con la empresa de telecomunicaciones KPN como subcontratista (encargado del tratamiento de datos personales).
El GGD trata el código de validación, con la fecha del primer día de enfermedad, en el portal que tiene el GGD para la aplicación, al que solo pueden acceder empleados autorizados del GGD.
Los teléfonos inteligentes de otros usuarios obtienen periódicamente (varias veces al día) las DK que se encuentran en ese servidor backend.

### 7. Conservación de los datos personales
Los datos almacenados localmente en su teléfono inteligente se guardan durante 14 días. Cuando transcurren los 14 días, los datos se borran automáticamente y de forma permanente. Usted también puede eliminar en cualquier momento los datos almacenados.
Si sus datos se almacenan en el servidor backend, se guardan únicamente durante 14 días desde el momento en que se suban al servidor. Cuando transcurren esos 14 días, los datos se borran.
Las direcciones IP tratadas para fines de gestión y seguridad se eliminan cuando transcurre un máximo de 7 días.

### 8. Sus derechos con respecto a sus datos personales
Usted tiene varios derechos para mantener el control de sus datos personales. Puede consultarlos aquí, en el sitio de la Autoridad para la Protección de Datos Personales.

Como la aplicación CoronaMelder se ha diseñado conforme a los puntos de partida de minimización de datos y de privacidad desde el diseño, usted solo puede acogerse de forma limitada a sus derechos derivados del RGPD. De hecho, únicamente se tratan datos limitados. Asimismo, los datos prácticamente no son reconducibles y se guardan durante poco tiempo. Del artículo 11 del RGPD se desprende que no se aplicarán los derechos derivados de los artículos 15 a 20 del RGPD cuando el responsable del tratamiento (ya) no esté en condiciones de identificar al interesado. 

En la primera fase (antes de que los usuarios suban las TEK al servidor backend) solo se tratan datos en los teléfonos inteligentes de los usuarios de la aplicación CoronaMelder. El ministro de Sanidad, Bienestar y Deporte y el GGD no tienen acceso a ellos. Así pues, en esta fase no se puede acceder, por ejemplo, a una petición de modificación o de eliminación de datos aunque, naturalmente, también se aplica que dichos datos deben ser eliminados automáticamente del teléfono inteligente después de un máximo de catorce días.
Debido al carácter de privacidad desde el diseño que tiene la aplicación, después de subir las TEK (que después serán DK) tampoco es posible averiguar qué códigos pertenecen al usuario contagiado. El Ministerio de Sanidad, Bienestar y Deporte y los GGD no tienen capacidad técnica para vincular los códigos almacenados (temporalmente) en el servidor backend, al usuario que ha subido las TEK. Debido a la imposibilidad de identificar al usuario partiendo de los códigos, no son aplicables los derechos de los artículos 15 a 20 del RGPD.
En consecuencia, solo será necesario ejecutar de forma limitada los derechos del RGPD, dado que los datos no son reconducibles (o solo de forma muy limitada) hasta personas concretas o porque los datos han sido ya eliminados (corto plazo de conservación). Con ello se cumple el artículo 11 del RGPD, del que se desprende que no se aplicarán los derechos derivados de los artículos 15 a 20 del RGPD cuando ya no se puedan identificar a los interesados.
No obstante, seguirá existiendo la posibilidad de reclamar sus derechos de privacidad. Puede enviar su petición al GGD que sea responsable en su lugar de residencia. En [www.GGD.nl](https://www.ggd.nl) puede rellenar el código postal de su domicilio para comprobar qué GGD es responsable en su lugar de residencia. Si no tiene una dirección en los Países Bajos, puede introducir el código postal de su lugar de alojamiento.
Usted siempre tiene el derecho de presentar una reclamación sobre el tratamiento de sus datos personales, ante la Autoridad para la Protección de Datos Personales o ante un tribunal. Aquí encontrará más información sobre esta cuestión.

Puede encontrar los datos de contacto del delegado de protección de datos del GGD responsable en su lugar de domicilio, a través del sitio web de dicho GGD.

Puede encontrar los datos de contacto del delegado de protección de datos del Ministerio de Sanidad, Bienestar y Deporte, en el sitio web de dicho ministerio.

### 9. Seguridad de sus datos personales
El ministro de Sanidad, Bienestar y Deportes y los GGD se toman muy en serio la protección de sus datos y adoptan las medidas adecuadas para evitar el uso indebido, la pérdida, el acceso no autorizado, la publicación no deseada y la modificación no permitida de dichos datos.

### 10. Modificación de la declaración de privacidad
Esta declaración de privacidad puede ser modificada. En ese caso, publicaremos en nuestro sitio web la declaración de privacidad modificada, inmediatamente después de lo cual entrará en vigor dicha declaración. Última actualización: 10 de septiembre de 2020.
