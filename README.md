#Testautomation-demo

Un semplice esempio di utilizzo del framework marvin-js https://github.com/brunoscopelliti/marvin

##Prerequisiti:

- Installare node js ( https://nodejs.org/en/download/ )

##Come far partire il test automatico:
 
 - Scaricare o clonare il repository sul desktop ( Ad esempio nella cartella C: ).
 
 - Posizionarsi nella cartella che ospita il repository ( Nel nostro caso sarà: C:\testexample-marvin-master ) e aprire il prompt dei comandi.

 - Installare i node_modules necessari a far funzionare marvin e le altre dipendenze tramite i comandi:
 
        - `npm install chai`
        - `npm install chalk`
        - `npm install selenium-webdriver`
        - `npm install nconf`
        - `npm install marvin-js`
        - `npm install mocha`
        - `npm install yadda`
        - `npm install wrench`
        - `npm install handlebars`
        - `npm install glob`

 - Infine lanciare `npm test` ( Partiranno tutti i test sulle feature presenti nella cartella Feature con il tag dev, per modificare queste impostazioni far riferimento al link del progetto: https://github.com/brunoscopelliti/marvin#feature-tags )


