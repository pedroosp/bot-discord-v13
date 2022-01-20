//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
const Discord = require('discord.js');


module.exports = {

    name:"removercargo",
    category:"Utilidades",
    aliases: [''],
}
      module.exports.run = (client, message, args) => {


       const user = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
       const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

       
       if (!message.guild.me.permissions.has('MENAGE_ROLES')) return message.channel.send("Não tenho permissão!")
       if(!message.member.permissions.has('MENAGE_ROLES')) return message.channel.send('Você não tem permissão de executar este comando!')
       const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
       
       const pedroerro1 = new Discord.MessageEmbed()

       .setDescription("Menciona um membro para remover o cargo.")
       .setColor("RANDOM")

       if (!args[0]) return message.channel.send({content: `${message.author}`, embeds: [pedroerro1]})
       let msg = args.join(' ')

 

      const pedroerro2 = new Discord.MessageEmbed()

      .setDescription("Menciona um cargo que deseja remover do membro.")
      .setColor("RANDOM")

      if (!role) return message.channel.send({content: `${message.author}`, embeds: [pedroerro2]})

    
     const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first(); 
     
     const pedroremovercargo = new Discord.MessageEmbed()
     
     .setTitle("<:px_c:916008825990045706> | Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member.user}`)
     .addField(`👉 Cargo Retirado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

     user.roles.remove(role);
   
     message.reply({ embeds: [pedroremovercargo] }); 


};
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
