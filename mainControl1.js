const   relay = require('./relay.js');

const  RELAY = 19;

    relay.Init(RELAY);
    setImmediate(relay.toggle);

process.on('SIGINT', function() {
       relay.Exit();
       console.log(relay.getDataone());
       console.log("  프로그램이 종료됩니다….");
       process.exit();
});
