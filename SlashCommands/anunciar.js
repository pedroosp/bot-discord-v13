//Créditos: Pedro.#1760
//Créditos: Pedro.#1760
const {  Message, Client, MessageActionRow, MessageButton,  MessageEmbed, Interaction,
} = require("discord.js");

module.exports =  {
name: "anunciar",
description: "anunciar em algum chat",
type: "CHAT_INPUT",
options: [

        {
            name: "chat",
            type: "CHANNEL",
            description: "em qual chat a mensagem será enviada?",
            required: true
            
            },
            {
            name: "mensagem",
            type: "STRING",
            description: "qual mensagem que será enviada?",
            required: true
            
            },

],


run: async (client, interaction, args) => {
  

        if (!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp(`Você não tem perm`);
        let channel =  interaction.options.getChannel('chat');
        let id = channel.id
        let canal =  interaction.options.getChannel('chat');
        let string =  interaction.options.getString('mensagem');


 const arg1 = args.join(' ');



 const button = new MessageActionRow().addComponents(

            new MessageButton()
            .setCustomId("comembed")
            .setLabel("Embed")
            .setStyle("SUCCESS"),

            new MessageButton()
            .setCustomId("semembed")
            .setLabel("Sem Embed")
            .setStyle("SUCCESS"),

            new MessageButton()
            .setCustomId("cancelar")
            .setLabel("Cancelar")
            .setStyle("DANGER"),
        )

        const embed = new  MessageEmbed()
        .setTitle("Pedro BOT | Anúncios")
        .setDescription(`> Aperte "Embed" para mensagem ser enviada em embed\n> Aperte "Sem Embed" para mensagem ser enviada sem embed\n> Aperte "Cancelar" para cancelar o envio\n\n<:msg_px:932854168127934544> Mensagem: **${string}**\n<:chat_px:932854193658667090> Chat selecionado: ${canal}`)
        .setColor("RANDOM")
        .setThumbnail(interaction.member.displayAvatarURL())

        const comembed = new  MessageEmbed()
        .setTitle("Pedro BOT | Anúncios")
        .setDescription(`A mensagem em embed foi enviada com sucesso.\n\n<:msg_px:932854168127934544> Mensagem enviada: **${string}**\n<:chat_px:932854193658667090> Chat selecionado: ${canal}`)
        .setColor("RANDOM")
        .setThumbnail(interaction.member.displayAvatarURL())
    

         const semembed = new  MessageEmbed()
        .setTitle("Pedro BOT | Anúncios")
        .setDescription(`A mensagem sem embed foi enviada com sucesso.\n\n<:msg_px:932854168127934544> Mensagem enviada: **${string}**\n<:chat_px:932854193658667090> Chat selecionado: ${canal}`)
        .setColor("RANDOM")
        .setThumbnail(interaction.member.displayAvatarURL())

        const cancelar = new  MessageEmbed()
        .setTitle("Pedro BOT | Anúncios")
        .setDescription(`o envio da mensagem foi cancelada.`)
        .setColor("RANDOM")
        .setThumbnail(interaction.member.displayAvatarURL())


        const msg = await interaction.followUp({ embeds: [embed], components: [button]})
    

        const collector = msg.createMessageComponentCollector({ componentType: "BUTTON" })

          collector.on("collect", interaction => {
            if( interaction.user.id != interaction.user.id ) return interaction.reply({ content: `Apenas ${interaction.user} pode reagir em algum button`, ephemeral: true })
          
            if(interaction.customId === "comembed") {
                
        const pedrosla = new MessageEmbed()
	      .setColor("RANDOM")
        .setDescription(`${string}`)
        canal.send({embeds: [pedrosla]})

               msg.edit({
                    embeds: [comembed],
                    components: []
                })
            }

            if(interaction.customId === "semembed") {
                
        const sayMessage = args.slice(1, 2).join(' ');

        canal.send(sayMessage)

               msg.edit({
                    embeds: [semembed],
                    components: []
                })
            }

               if(interaction.customId === "cancelar") {
                
               msg.edit({
                    embeds: [cancelar],
                    components: []
                })
            }
        })

}
}
//Créditos: Pedro.#1760
//Créditos: Pedro.#1760
