//Creditos: Pedro.#1760
//Creditos: Pedro.#1760

const Discord = require ('discord.js')


module.exports =  {
name: "addcargoall",
description: "addcargo nos membros",
type: "CHAT_INPUT",
options: [

   
    {
        name: "cargo",
        type: "ROLE",
        description: "seleciona o cargo que deseja setar nos membros.",
        required: true
        
        },
       

],
     


run: async (client, interaction, args) => {

       if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.followUp("Não tenho permissão.")
       if(!interaction.member.permissions.has("MANAGE_ROLES")) return interaction.followUp('Você não tem permissão.')

     let role = interaction.options.getRole("cargo");



    
     const pedroaddcargo = new Discord.MessageEmbed()
     
     .setTitle("<:px_c:916008825990045706> | Gerenciamento de Cargos")
     .addField(`👉 Cargo Adicionado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

    interaction.guild.members.cache.forEach(member => {
    member.roles.add(role.id).catch(e => console.error(e));
        })
   
     interaction.followUp({ embeds: [pedroaddcargo] });
    }
}
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
