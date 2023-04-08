const   gpio = require('pigpio').Gpio;

const  relaySwitch = {

     relay: null,
     dataone:3,

     Init  : (pin) => {
              relay = new gpio(pin, { mode: gpio.OUTPUT });
              console.log("릴레이스위치 활성화");
              relay.digitalWrite(0);
            },
     toggleOn  : () => {
               relay.digitalWrite(1);
               console.log("LED on");
               setTimeout(relaySwitch.toggleOff, 1000);
              },
     toggleOff : () => {
               relay.digitalWrite(0);
               console.log("LED off");
               setTimeout(relaySwitch.toggleOn, 5000);
              },
     Exit: () => {
               relay.digitalWrite(0);
               console.log("릴레이스위치 비활성화");
              },
     getDataone: 
              () => { return relaySwitch.dataone; }
}

/*
module.exports.Init = function(pin) { relaySwitch.Init(pin); };
module.exports.toggle = function() { relaySwitch.toggleOn(); };
module.exports.Exit = function() { relaySwitch.Exit(); };
*/
module.exports.Init = relaySwitch.Init;
module.exports.toggle = relaySwitch.toggleOn;
module.exports.Exit = relaySwitch.Exit;
module.exports.getDataone = relaySwitch.getDataone;
