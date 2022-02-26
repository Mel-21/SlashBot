# **✦﹒﹒ Bot em Slash Commands (Discord.js) *!!***
⤹ Disponibilizando a base para fazer e registrar um bot de Discord em **Slash Commands**

## **✦﹒﹒ Instalações *!!***
```js
npm i discord.js glob
```

## **✦﹒﹒ Confira a biblioteca do Discord.js *!!***
> - [Discord.js](https://discord.js.org/#/)
> - [Discord.js Guide](https://discordjs.guide/#before-you-begin)
> - [Registrando Slash Commands](https://discordjs.guide/interactions/registering-slash-commands.html#options)
> - [Respondendo aos Slash Commands](https://discordjs.guide/interactions/replying-to-slash-commands.html#receiving-interactions)
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
        required: true, // Isso torna a opção requirida caso não queira só alterar para false
    }],

    run: async (client, interaction) => {

        // Para declarar a opção:
        const option = interaction.options.getString('nome') // Essa função pega a opção string, funções mais usadas: getNumber, getChannel e getUser

        // ai tu faz seu code aqui 💞

    }
}
```

![mao](https://i.pinimg.com/originals/59/74/26/597426a9e95f7767db7a76b57da0e774.gif)
