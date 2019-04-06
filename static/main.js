"use strict"

class Profile {
    constructor( {
    username: username,
    name: {firstname: firstname, lastname: lastname},
    password: password
    })
       {this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password
    }
    
    createUser({ username, name: { firstName, lastName }, password}, callback){
            return ApiConnector.createUser ({username, name: { firstName, lastName }, password}, (err, data) => {
              console.log(`User created ${this.username}  Passord cteated ${this.password}`);
              callback(err, data); 
            });
            }
    performLogin({ username, password }, callback){
            return ApiConnector.performLogin({username, password}, (err, data) =>{
              console.log(`Username: ${this.username} Password: ${this.password} `);
              callback(err, data);
            });
       }
    addMoney({ currency, amount }, callback) {
           return ApiConnector.addMoney({ currency, amount }, (err, data) => {
                console.log(`Adding ${amount} of ${currency} to ${this.username}`);
                callback(err, data); 
                });
        }
    convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback) { 
            return ApiConnector.convertMoney ({ fromCurrency, targetCurrency, targetAmount }, (err, data) => { 
            console.log(`Money were converted from ${fromCurrency} to ${targetCurrency}, quantity: ${targetAmount}`);
            callback(err, data); 
               })
      }
    
    transferMoney({ to, amount }, callback) {
            return ApiConnector.transferMoney ( { to, amount}, (err, data) =>{
              console.log(`Amouny of money ${amount} were transferd ${to} from ${this.username}`);
              callback(err, data); 
            })
    
       }
    
     getStocks(callback) {
           return ApiConnector.getStocks()
            callback(err, data); 
    }
    
    }
    
    /*
    function main(){
        const Ivan = new Profile({
                        username: 'ivan',
                        name: { firstName: 'Ivan', lastName: 'Chernyshev' },
                        password: 'ivanspass',
                    });
        // сначала создаем пользователя
        Ivan.createUser((err, data) => {
            if (err) {
                console.error('Ivan was not created');
                } else {
                    console.log(`Ivan was created`);
            }
           })
    
          ///авторизуем пользователя
        Ivan.performLogin((err, data) => {
            if (err) {
                console.error('Ivan was not loged in');
                } else {
                    console.log(`Ivan was loged in`);
            }
          })
        // после того, как мы авторизовали пользователя, добавляем ему денег в кошелек
        Ivan.addMoney(
          { currency: 'EUR', amount: 500000 }, (err, data) => {
            if (err) {
                console.error('Error during adding money to Ivan');
                } else {
                    console.log(`Added 500000 euros to Ivan`);
            } 
          })
    
          /////создаем второго пользователя
          const Oleg = new Profile({
                        username: 'oleg',
                        name: { firstName: 'Oleg', lastName: 'Petrov' },
                        password: 'olegsspass',
                    });
    
          Oleg.createUser((err, data) => {
            if (err) {
                console.error('Oleg was not created');
                } else {
                    console.log(`Oleg was created`);
            }
           })
    
          ///авторизуем пользователя
        Oleg.performLogin((err, data) => {
            if (err) {
                console.error('Oleg was not loged in');
                } else {
                    console.log(`Oleg was loged in`);
            }
          })          
    /////добовляем деньги второму пользователю
         Oleg.addMoney(
          { currency: 'RUB', amount: 100 }, (err, data) => {
            if (err) {
                console.error('Error during adding money to Ivan');
                } else {
                    console.log(`Added 100 euros to Ivan`);
            } 
    
          })
    /// передовим валюту в неткоины для первого пользователя
        Ivan.convertMoney ({ fromCurrency: 'EUR' , targetCurrency: 'Netcoin', targetAmount: 500000 }, (err, data) => {
          if (err) { 
            console.error(`Error during convert money for Ivan`)
          }else {
            console.log (`Money were converted from EUR to Netcoin, quantity: 500000`)
            }
          }) 
      ///// переводим деньги другому пользователю Олегу
         Ivan.transferMoney ({ to: "oleg", amount: 500000 }, (err, data)    => {
             if (err) { 
            console.error("error during transfer money to Oleg")}
            else {
            console.log("successfully transferd money to Oleg amount: 500000 Netcoin")
            }
         })
         ///// получение кусов волют для первого пользователя
         Ivan.getStocks ((err, data) => {
            if (err) {
             console.error("Error during get stock to Ivan ")
            } else {
              console.log("successfully got the stock ")
            }
    })
     ///// получение кусов волют для второго пользователя
    Oleg.getStocks ((err, data) => {
            if (err) {
             console.error("Error during get stock to Oleg ")
            } else {
              console.log("successfully got the stock ")
            }
    })
    
    }
    main();
*/
/*
function main(){
  const Oleg = new Profile({
                    username: 'oleg',
                    name: { firstName: 'Oleg', lastName: 'Petrov' },
                    password: 'olegsspass',
                });

           Oleg.createUser((err, data) => {
             if (err) {
                 console.error('Oleg was not created');
                 } else {
                     console.log(`Oleg was created`);

                     Oleg.performLogin((err, data) => {
                  if (err) {
                       console.error('Oleg was not loged in');
                      } else {
                         console.log(`Oleg was loged in`);

                           Oleg.addMoney(
                      { currency: 'RUB', amount: 100 }, (err, data) => {
                         if (err) {
                           console.error('Error during adding money to Oleg');
                             } else {
                                 console.log(`Added 100 euros to Oleg`);                          
                          } 
                    });
                   }
                 })  ; 
               }
            });
  
        const Ivan = new Profile({
                    username: 'ivan',
                    name: { firstName: 'Ivan', lastName: 'Chernyshev' },
                    password: 'ivanspass',
                });

           Ivan.createUser((err, data) => {
             if (err) {
                 console.error('Ivan was not created');
                 } else {
                     console.log(`Ivan was created`);

                     Ivan.performLogin((err, data) => {
                  if (err) {
                       console.error('Ivan was not loged in');
                      } else {
                         console.log(`Ivan was loged in`);
                         
                           Ivan.addMoney(
                     { currency: 'EUR', amount: 500000 }, (err, data) => {
                        if (err) {
                           console.error('Error during adding money to Ivan');
                        } else {
                            console.log(`Added 500000 euros to Ivan`);                   
                               Ivan.convertMoney ({ fromCurrency: 'EUR' , targetCurrency: 'Netcoin', targetAmount: 500000 }, (err, data) => {
                                if (err) { 
                                console.error(`Error during convert money for Ivan`)
                               }else {
                                   console.log (`Money were converted from EUR to Netcoin, quantity: 500000`)
                                     Ivan.transferMoney ({ to: "oleg", amount: 500000 }, (err, data)    => {
                                       if (err) { 
                                       console.error("error during transfer money to Oleg")}
                                        else {
                                             console.log("successfully transferd money to Oleg amount: 500000 Netcoin")
                                     }
                                 });
                              }
                           });     
                        } 
                    });
                   }
                 });  
               }
            });

}
 main();
*/

function main(){
  const Oleg = new Profile({
                    username: 'oleg',
                    name: { firstName: 'Oleg', lastName: 'Petrov' },
                    password: 'olegsspass',
                });

           Oleg.createUser((err, data) => {
             if (err) {
                return console.error('Oleg was not created');
                 } 
             console.log(`Oleg was created`);

                     Oleg.performLogin((err, data) => {
                  if (err) {
                      return console.error('Oleg was not loged in');
                      }
                  console.log(`Oleg was loged in`);

                           Oleg.addMoney(
                      { currency: 'RUB', amount: 100 }, (err, data) => {
                         if (err) {
                          return console.error('Error during adding money to Oleg');
                             } 
                         console.log(`Added 100 euros to Oleg`);                      
                  })                  
               })                  
            })
  
        const Ivan = new Profile({
                    username: 'ivan',
                    name: { firstName: 'Ivan', lastName: 'Chernyshev' },
                    password: 'ivanspass',
                });

           Ivan.createUser((err, data) => {
             if (err) {
                return console.error('Ivan was not created');
                 }
             console.log(`Ivan was created`);

                Ivan.performLogin((err, data) => {
                  if (err) {
                      return console.error('Ivan was not loged in');
                      }
                  console.log(`Ivan was loged in`);
                         
                           Ivan.addMoney(
                     { currency: 'EUR', amount: 500000 }, (err, data) => {
                        if (err) {
                          return console.error('Error during adding money to Ivan');
                        } 
                        console.log(`Added 500000 euros to Ivan`);                   
                               Ivan.convertMoney ({ fromCurrency: 'EUR' , targetCurrency: 'Netcoin', targetAmount: 500000 }, (err, data) => {
                                if (err) { 
                              return  console.error(`Error during convert money for Ivan`)
                               }
                                console.log (`Money were converted from EUR to Netcoin, quantity: 500000`)
                                     Ivan.transferMoney ({ to: "oleg", amount: 500000 }, (err, data)    => {
                                       if (err) { 
                                     return  console.error("error during transfer money to Oleg")}
                                      console.log("successfully transferd money to Oleg amount: 500000 Netcoin")
                            })
                        })        
                    })
                 })           
            })     
}
 main();

