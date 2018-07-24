const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   


client.on("message", message => {
	var prefix = "c.";
 if (message.content === "c.help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 

			 
${prefix}codes-public =-=-=> codes public

${prefix}codes-admin  =-=-=> codes admin
			 
${prefix}code-games   =-=-=> codes games

${prefix}code-music   =-=-=>codes music

	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  

client.on("message", message => {
	var prefix = "c.";
 if (message.content === "c.codes-public") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
***c.Codes Bot ***
***__         PUBLIC CODES__***
**
1_ code embed

https://hastebin.com/juqenotona.cs

2_ code say

https://hastebin.com/iwusiyizig.bash

3_ code tag

https://hastebin.com/silumodiki.coffeescript

4_ code avatar

https://hastebin.com/ategegoras.js

5_ code info server

https://hastebin.com/wusubekoti.js

6_ code info bot

https://hastebin.com/wuzifeyofu.coffeescript

7_ code id

https://hastebin.com/oneyoxolic.js

8_ code boardcast

https://hastebin.com/opucorixaw.js

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
client.on("message", message => {
	var prefix = "c.";
 if (message.content === "c.code-games") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
***c.Codes Bot ***
***__         GAMES CODES__***
**
codes all games
https://hastebin.com/tayepasuti.js

code emoji game

https://hastebin.com/edukakihap.js

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
`)
   message.author.sendEmbed(embed)
    
   }
   });
client.on("message", message => {
	var prefix = "c.";
 if (message.content === "c.code-music") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
***c.Codes Bot ***
***__         music CODE__***
**

code music
https://hastebin.com/ogavubilud.js

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
`)
   message.author.sendEmbed(embed)
    
   }
   });
client.on("message", message => {
	var prefix = "c.";
 if (message.content === "c.codes-admin") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
***c.Codes Bot ***
***__         ADMIN CODES__***
**
1_ code ban

https://hastebin.com/pitarapuga.js

2_ code kick

https://hastebin.com/obetubiqan.bash

3_ code mute/unmute

https://hastebin.com/cutepupafi.js

4_ code tempmute

https://hastebin.com/uresimeqox.bash

5_ code clear chat (of ProBot)

https://hastebin.com/uresimeqox.bash

6_code mute/unmutechannel

https://hastebin.com/uritugijor.coffeescript

7_ code created/delete voice/text room

https://hastebin.com/afehoviqub.coffeescript

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
`)
   message.author.sendEmbed(embed)
    
   }
   }); 



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('---bcall')){
 if(!message.author.id === '411911292643704854') return;
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
    if (message.content.startsWith("c.bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO c.Codes Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ c. ]` , true)
			      .addField('``My Language``' , `[ JS ]` , true)
			      .setFooter('By | Im_Mn7oSs For Ever')
    })
}
});

const mybot = "NDY5OTk0Njc2OTE3NzY0MDk3.Djj84w.H_SmaIjyvaQCrf9hZU4FWlz9L4M";
client.login(mybot);
