//Creditos: Pedro.#1760
//Creditos: Pedro.#1760

const Discord = require ('discord.js')


module.exports =  {
name: "removercargoall",
description: "remover cargo dos membros",
type: "CHAT_INPUT",
options: [

   
    {
        name: "cargo",
        type: "ROLE",
        description: "seleciona o cargo que deseja remover dos membros.",
        required: true
        
        },
       

],
     


run: async (client, interaction, args) => {

       if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.followUp("Não tenho permissão.")
       if(!interaction.member.permissions.has("MANAGE_ROLES")) return interaction.followUp('Você não tem permissão.')

     let role = interaction.options.getRole("cargo");



    
     const pedroremovercargo = new Discord.MessageEmbed()
     
     .setTitle("<:px_c:916008825990045706> | Gerenciamento de Cargos")
     .addField(`👉 Cargo Retirado`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

    interaction.guild.members.cache.forEach(member => {
    member.roles.remove(role.id).catch(e => console.error(e));
        })
   
     interaction.followUp({ embeds: [pedroremovercargo] });


    }
}
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
