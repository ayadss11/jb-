const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});




var guilds = {};
client.on('message',async message => {
 var prefix = '!';//البرفكس
  if(message.content.startsWith(prefix + "buy")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "112");
 
  if(!submite) return message.channel.send("لايوجد روم خاص للي يوصل الشراء اليه :x:");
  let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('**ما تشتري ؟**').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('**الرجاء كتابة اسمك**').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('**الرجاء تحويل المبلغ المطلوب للشخص المطلوب|يوجد لديك 9 ثواني**').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('**هل متاكد من شرائك الرتبة اخي الكريم الرجاء الاجابة بنعم ام لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('**Done ✅, تم بنجاح شراء الرتبة الرجاء الانتظار حين الادارة ترد عليك**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submit**
 
[**هل يريد شراء الرتبة او كهدية**]:
${thisMessage}
 
[**اسم الذي يريد شراء الرتبة**]:
${boi}
 
[**هل تم التحويل ام لا**]:
${boi2}
 
[**اسم الشاري بمنشنة**]:
${message.author}
 
[**ايد�� الشاري**]:
${message.author.id}`);//Fras#2729
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
    
    
    
    
    
    client.login(process.env.TOKEN); 
