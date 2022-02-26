# **✦﹒﹒ Bot em Slash Commands (Discord.js) *!!***
⤹ Disponibilizando a base para fazer e registrar um bot de Discord em **Slash Commands**

## **✦﹒﹒ Instalações *!!***
```js
npm i discord.js glob util
```

## **✦﹒﹒ Confira a livraria do Discord.js *!!***
> - [Discord.js](https://discord.js.org/#/)
> - [Discord.js Guilde](https://discordjs.guide/#before-you-begin)
> - [Sobre Slash Commands](https://discordjs.guide/interactions/registering-slash-commands.html#options)
> - [+ Sobre o Slash Commands](https://discordjs.guide/interactions/replying-to-slash-commands.html#receiving-interactions)
> - *(sério, quase tudo que você precisa saber sobre Discord.js está nas docs do próprio Discord,js, óbviamente 😢)*


## **✦﹒﹒ Base simples de Slash Commands *!!***
```js
const Discord = require("discord.js")

module.exports = {
name: 'nome', // nome do comando
description: 'descrição', // Descrição
type: 'CHAT_INPUT', // Type recomendado
options: [{ // Caso queira por opções:
name: 'nome', // Nome da opção
type: 'STRING', // Pode utilizar USER, CHANNEL, MENTION...
description: 'Descrição', // Descrição da opcão
required: true, // Caso queira que a opção seja opcional, deixe "false"
}],

run: async (client, interaction, options) => {

// Para declarar a opção:
const option = interaction.options.getString('nome') // Se não for string e tiver mudado o type, use getUser getChannel por exemplo

// ai tu faz seu code aqui 💞

}
}
```

![mao](https://i.pinimg.com/originals/59/74/26/597426a9e95f7767db7a76b57da0e774.gif)