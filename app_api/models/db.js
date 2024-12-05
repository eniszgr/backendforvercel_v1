var mongoose = require('mongoose');
var dbURI = "mongodb+srv://Enis:enis@cluster0.zcfg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veri tabanına bağlanıldı");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veri tabanına bağlantı koptu");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("bağlantı kapatıldı");
    process.exit(0);
});

require("./venue");