const jimp = require('jimp')
const {main_channel} = require('./../config.json')

module.exports = async function ( member, client ) {
    let channel_bem_vindo = client.channels.cache.get(main_channel)
    let URL = `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}`
    let mask = await jimp.read('./assets/mask.png')
    let font = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
    let background = await jimp.read('./assets/BannerDiscord.png')

    await jimp.read(URL).then( (avatar) =>{
        avatar.resize(330 , 330);
        mask.resize(330,330)
        avatar.mask(mask)
        background.print(font, 30, 30, member.user.username);
        background.print(font, 790, 30, member.user.discriminator);
        background.composite( avatar, 28, 115).write('./assets/welcome.png')
    })

    channel_bem_vindo.send({files: ['./assets/welcome.png']})
}  