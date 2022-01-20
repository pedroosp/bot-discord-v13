//Creditos: Pedro.#1760
//Creditos: Pedro.#1760

const Discord = require ('discord.js')


module.exports = {

    name:"addcargoall",
    category:"Criador",
    aliases: [''],

run: async (client, message, args) => {

       if (!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("Não tenho permissão.")
       if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send('Você não tem permissão.')

    let role = message.mentions.roles.first();
      const pedroerro1 = new Discord.MessageEmbed()

      .setDescription("Menciona um cargo que deseja setar nos membro.")
      .setColor("RANDOM")

      if (!role) return message.channel.send({content: `${message.author}`, embeds: [pedroerro1]})
    

    
     const pedroaddcargo = new Discord.MessageEmbed()
     
     .setTitle("<:px_c:916008825990045706> | Gerenciamento de Cargos")
     .addField(`👉 Cargo Adicionado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

    message.guild.members.cache.forEach(member => {
    member.roles.add(role.id).catch(e => console.error(e));
        })
   
     message.reply({ embeds: [pedroaddcargo] });


    }
}
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
