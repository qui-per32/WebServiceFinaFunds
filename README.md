# WebServiceFinaFunds

WebServiceFinaFunds es una pequeña aplicacion que sube un archivo csv a tu directorio local.
Cuando lo sube lo inserta a una base de datos de mongo.

Cuando estan insertados los datos puedes hacer una peticion web en ```/api/performance?isin=&dateFrom=&dateTo=```,
que recoge 3 paremetros: isin, dateFrom y dateTo.

En la peticion get realiza los calculos de performance y volatility.


Para que funcione la aplicacion tienes que tener previamente instalado mongodb.

Para arrancar la aplicacion priemero se realiza un npm i para instalar dependencias y luego un npm start.
