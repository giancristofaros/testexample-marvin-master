#testautomation-demo

Un semplice esempio di utilizzo del framework marvin-js https://github.com/brunoscopelliti/marvin

# Prerequisiti:

- Installare node js

 ##Come far partire questo test su Valentino:
 
 - Scaricare o clonare il repository sul desktop ( Ad esempio nella cartella C: ) 
 - Posizionarsi nella cartella che ospita il repository ( Nel nostro caso sarà: C:\valentino-marvin-master ) e aprire il prompt dei comandi.
 - Installare i node_modules necessari a far funzionare marvin e le altre dipendenze tramite il comando:
  
  - npm install chalk
  - npm install chai
  - npm install selenium-webdriver
  - npm install nconf
  - npm install marvin-js
  - npm install mocha
  - npm install yadda
  - npm install wrench
  - npm install handlebars
  - npm install glob

##Comando per far partire il test:

npm test ( Partiranno tutti i test sulle feature presenti nella cartella Feature con il tag dev, per modificare queste impostazioni far riferimento al link del progetto: https://github.com/brunoscopelliti/marvin )
