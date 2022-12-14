// MADE BY Kannachann
// Ditulis Ulang Oleh ImYanXiao

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
%dash
%m1 *๐ ๐ ๐ ๐ ่พ*
%m2 *๐ฝ๐๐๐:* %name
%m2 *๐๐๐:* %tag
%m2 *๐๐๐๐๐๐:* %prems
%m2 *๐ป๐๐๐๐:* %limit
%m2 *๐ผ๐๐๐๐ข:* %money
%m2 *๐๐๐๐:* %role
%m2 *๐ป๐๐๐๐:* %level [ %xp4levelup Xp For Levelup]
%m2 *๐๐:* %exp / %maxexp
%m2 *๐๐๐๐๐ ๐๐:* %totalexp
%m3

%m1 *๐ ๐ ๐ ๐๐ข ๅผ*
%m2 *%ucpn*
%m2 *๐ณ๐๐ข๐:* %week %weton
%m2 *๐ณ๐๐๐:* %date
%m2 *๐ธ๐๐๐๐๐๐ ๐ณ๐๐๐:* %dateIslamic
%m2 *๐๐๐๐:* %wib
%m3

%m1 *ษช ษด า แด  สแดแด ่ด*
%m2 _*๐ฑ๐๐ ๐ฝ๐๐๐:*_ %me
%m2 *๐๐ฐ๐ฅ๐ฆ:* %mode
%m2 *๐๐ญ๐ข๐ต๐ง๐ฐ๐ณ๐ฎ:* %platform
%m2 *๐๐บ๐ฑ๐ฆ:* Node.Js
%m2 *๐๐ข๐ช๐ญ๐ฆ๐บ๐ด:* ๐๐ถ๐ญ๐ต๐ช ๐๐ฆ๐ท๐ช๐ค๐ฆ
%m2 *๐๐ณ๐ฆ๐ง๐ช๐น:* [ *%_p* ]
%m2 *๐๐ฑ๐ต๐ช๐ฎ๐ฆ:* %muptime
%m2 *๐๐ข๐ต๐ข๐ฃ๐ข๐ด๐ฆ:* %rtotalreg dari %totalreg
%m3

%m1 *ษชษดาแด แดแดแด ่ฏถ* 
%m4 *โ* = ๐ฟ๐๐๐๐๐๐
%m4 *โ* = ๐ป๐๐๐๐
%m3
%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    '': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} แดแดษชษด ${htka}`,
	rows: [
	    {title: `โก ${pmenus} ๐๐ฟ๐ด๐ด๐ณ ๐ฑ๐พ๐`, rowId: ".ping", description: "๐ผ๐๐๐๐๐๐๐๐๐๐ ๐บ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐ฑ๐พ๐"},
	    {title: `โฐ ${pmenus} ๐๐๐ฝ๐๐ธ๐ผ๐ด ๐ฑ๐พ๐`, rowId: ".runtime", description: "๐ผ๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐ฑ๐พ๐ ๐ฑ๐๐๐๐๐๐๐"}, 
	    {title: `๐ ${pmenus} ๐พ๐๐ฝ๐ด๐ ๐ฑ๐พ๐`, rowId: ".owner", description: "๐ผ๐๐๐๐๐๐๐๐๐๐ ๐ธ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐พ๐?๐๐๐"},
	    {title: `๐ ${pmenus} ๐๐ฒ๐๐ธ๐ฟ๐ ๐ฑ๐พ๐`, rowId: ".sc", description: `๐๐๐๐๐๐ ๐ฒ๐๐๐ ${namebot}`},
	]
    },{
	title: `${htki} sแดแดแดแดสแด ${htka}`,
	rows: [
	    {title: `๐น ${pmenus} ๐ณ๐พ๐ฝ๐ฐ๐๐ด`, rowId: ".donasi", description: '๐๐๐๐๐๐๐ ๐พ๐?๐๐๐ ๐ฐ๐๐๐ ๐ป๐๐๐๐ ๐๐๐๐๐๐๐๐'},
	]
	},{
	title: `${htki} แดแดษดแด ${htka}`,
	rows: [
	    {title: `๐ฌ ${pmenus} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
	    {title: `๐ฑ ${pmenus} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
	{title: `โจ ${pmenus} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
	{title: `๐ฎ ${pmenus} Game`, rowId: ".? game", description: "Gamenya seru seru lho (เนหฬตใแดใหฬต)"},
	{title: `๐งฉ ${pmenus} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
	{title: `๐ ${pmenus} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
	{title: `๐ ${pmenus} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
	{title: `โฉ๏ธ ${pmenus} Anime`, rowId: ".? anime", description: "Wibu wibu๐ฆ"},
	{title: `๐ ${pmenus} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagnean"},
	{title: `๐ ${pmenus} Premium`, rowId: ".? premium", description: "Untuk user premium"},
	{title: `๐ญ ${pmenus} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
	{title: `๐ ${pmenus} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
	{title: `๐ ${pmenus} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
	{title: `๐ฉ ${pmenus} Downloaders`, rowId: ".? downloader", description: "Download sesuatu dari BOT"},
	{title: `๐จ ${pmenus} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
	{title: `โ๏ธ ${pmenus} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
	{title: `๐ง ${pmenus} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
	{title: `๐ข ${pmenus} Group`, rowId: ".? group", description: "Only Groups"},
	{title: `๐ ${pmenus} Admin`, rowId: ".? admin", description: "Only Admin Group"},
	{title: `๐๏ธ ${pmenus} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
	{title: `๐?๏ธ ${pmenus} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
	{title: `โน๏ธ ${pmenus} Info`, rowId: ".? info", description: "Info info BOT"},
	{title: `๐ฉโ๐ป ${pmenus} Owner`, rowId: ".? owner", description: "Owner Only!"},
	{title: `โ ${pmenus} No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `*${ucapan()} ${conn.getName(m.sender)}*
โโโโโโโโโโโโโโโโโโโฅ
โใ Hai Kak๐ ใ
โโฌโ ใ ${conn.getName(m.sender)} ใ
โโคโ  Bagaimana Harimu? ๐
โโโโโโโโโโโโโโโ โณน
โ   ใ *๐ ๐ ๐ ๐  ๐ธ ๐ ๐ ๐ ๅ* ใ
โโฌโโข *ษดแดแดแด:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
โโฌโโข *แดแดษขs:* @${m.sender.split`@`[0]}
โโฌโโข *sแดแดแดแดs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
โโฌโโข *แดสแดแดษชแดแด:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
โโโโโโโโโโโโโโโโโโโฅ
โโโโโโโโโโโโโโโโโโโฅ
โ   ใ *๐ ๐ ๐ ๐ ๐ ๐   ๐ธ ๐ ๐ ๐ ๆฏ* ใ
โโฌโโข *แดแดแดษชแดแด:* ${mpt}
โโฌโโข *แดษชแดแด:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
โโฌโโข *แดsแดสs:* ${Object.keys(global.db.data.users).length}
โโฌโโข *สษชแดษชแด:* ${usrs.limit}
โโฌโโข *สแดแด?แดส:* ${usrs.level}
โโฌโโข *สแดสแด:* ${usrs.role}${usrs.premiumTime > 1 ? `
โโโโโโโโโโโโโโโโโโโโฅ
โโฌโโข *แดxแดษชสแดแด แดสแดแดษชแดแด:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
`
const listMessage = {
  text: tek,
  footer: '๐ฎ *โโโฃโ:* สแดแด ษชษดษช แดแดsษชส แดแดสแดแด แดแดษดษขแดแดสแดษดษขแดษด แดษชแดแด แดแดษดแดแดแดแดแดษด สแดษข/แดสสแดส sษชสแดสแดแดษด สแดแดแดสแดแดษด แดแดแดแดแดแด แดแดกษดแดส๐',
  mentions: await conn.parseMention(tek),
  title: `${htki} *๐ป๐๐๐ ๐ผ๐๐๐* ${htka}`,
  buttonText: `๐บ๐ป๐ธ๐บ ๐ณ๐ธ๐๐ธ๐ฝ๐ธ ๐บ๐ฐ๐บ โ`, 
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '๐ง ๐ ๐? ๐ : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.owner','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':_0x187932(0x1c6),'buttonText':{'displayText':'Donasi'},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.ping','.donasi','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','Owner','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','Speed','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumb)).buffer(),
            fileName: '๐ง ๐ ๐? ๐ : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\nโก Supported By VEN BOT',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://kannxapi.herokuapp.com/'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner๐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speedโก',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi๐ต',
                        id: '.donasi'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years ๐๏ธ*\n',  mo, ' *Month ๐*\n', d, ' *Days โ๏ธ*\n', h, ' *Hours ๐*\n', m, ' *Minute โฐ*\n', s, ' *Second โฑ๏ธ*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? ๐ฅฑ"
  if (time >= 4) {
    res = "Pagi Kak ๐"
  }
  if (time >= 10) {
    res = "Siang Kak โ๏ธ"
  }
  if (time >= 15) {
    res = "Sore Kak ๐"
  }
  if (time >= 18) {
    res = "Malam Kak ๐"
  }
  return res
}
