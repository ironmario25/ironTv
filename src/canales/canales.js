
const canales = () => {

    const vectorCanales = [
        {
            id:1,
            nombre:'black sabbath',
            link:'https://player.kick.com/0zzymetal666',
            imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frotacult.com.br%2Fwp-content%2Fuploads%2F2017%2F12%2FBS.jpg&f=1&nofb=1&ipt=b9e592b5eaa6e6f98a6c05b1ec5827756352eac568a48b75e0359a8f814eba75',
        },
        {
            id:9,
            nombre:"canal 9",
            link: 'https://tv-libre.com/html/fl/?get=Q2FuYWw5&lang=1',
            imagen:'https://th.bing.com/th/id/R.1e8c69c177a8c02fcc62dec907d7e92f?rik=fSXJEC3V1z9HXw&riu=http%3a%2f%2fi.imgur.com%2f7d1x7.jpg&ehk=JMB4KTka4mnVVuXVYaysZncJWfrrgeXZrR1E1FMXSlE%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            id: 13,
            nombre: "canal 13",
            link: "https://blackface.world/dtvpl.html?id=1095",
            imagen: "https://www.minutoneuquen.com/u/fotografias/m/2023/6/28/f1280x720-610850_742525_5050.jpg",
        },
        {
            id: 11,
            nombre: "canal 11",
            link: "https://vercanalesonline.com/embed/cv.html?get=VGVsZWZlSEQ=&lang=1",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Telefe_(nuevo_logo).png",
        },
        {
            id: 2,
            nombre: "america tv",
            link: 'https://vercanalesonline.com/embed/cv.html?get=QW1lcmljYVRW',
            imagen: "https://elintransigente.com/wp-content/uploads/2021/04/America-TV-1.jpg",
        },
        {
            id: 14,
            nombre: 'warner channel tv',
            // link:'https://vercanalesonline.com/embed/cv.html?get=V2FybmVySEQ=',
            link: 'https://tv-libre.com/html/r/?r=L2h0bWwvZmwvP2dldD1WMkZ5Ym1WeVNFUT0=',
            imagen: 'https://th.bing.com/th/id/R.47bf4a0f005c61eb77ab156f114b5e68?rik=%2bHXjK4asbEQTng&pid=ImgRaw&r=0'
        },
        {
            id: 15,
            nombre: 'star channel',
            //link: 'https://vercanalesonline.com/embed/cv.html?get=Rk9YSEQ=',
            link: 'https://tv-libre.com/html/r/?r=L2h0bWwvZmwvP2dldD1SazlZU0VRPQ==',
            imagen: 'https://lumiere-a.akamaihd.net/v1/images/star_channel_500x575_e80d1d60.png'
        },
        {
            id: 16,
            nombre: 'tnt hd',
            //link: 'https://vercanalesonline.com/embed/cv.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=',
            link: 'https://tv-libre.com/html/fl/?get=VE5UX0hEX0FyZw==',
            imagen: 'https://th.bing.com/th/id/OIP.8O4HUyL8IrdF166LsY5D0AAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
        },
        {
            id: 17,
            nombre: 'tyc sports',
            link: 'https://flow.fullbed.rest/cvatt.html?get=VHlDU3BvcnQ',
            imagen: 'https://vignette.wikia.nocookie.net/logopedia/images/1/17/TyC_Sports_(1994).png/revision/latest?cb=20190620182054&path-prefix=es'
        },
        {
            id: 18,
            nombre: 'tnt sports',
           // link: 'https://flow.fullbed.rest/cvatt.html?get=VE5UX1Nwb3J0c19IRA',
            link:'https://tv-libre.com/html/fl/?get=VE5UX1Nwb3J0c19IRA',
            imagen: 'https://www.digitaltveurope.com/files/2023/02/1391584_tntsportslogo_606179.jpg'
        },
        {
            id: 19,
            nombre: 'cinecanal',
            // link:'https://vercanalesonline.com/embed/cv.html?get=Q2luZWNhbmFsSEQ=',
            link: 'https://tv-libre.com/html/r/?r=L2h0bWwvZmwvP2dldD1RMmx1WldOaGJtRnNTRVE9',
            imagen: 'https://th.bing.com/th/id/R.f1c5fa36b5dd4da595eb238a3c751a92?rik=LBbkqL7JFjTdrw&pid=ImgRaw&r=0'
        },
        {
            id: 20,
            nombre: 'c5n',
            link: 'https://vercanalesonline.com/embed/cv.html?get=QzVO',
            imagen: 'https://th.bing.com/th/id/R.12a56c3e312b419444e6efaa88334eef?rik=V9EJkSOmldteyw&pid=ImgRaw&r=0'
        },
        {
            id: 21,
            nombre: 'tn',
            link: 'https://vercanalesonline.com/embed/cv.html?get=VG9kb05vdGljaWFz',
            imagen: 'https://www.ipuntotv.com/IMAGES/TN%20logo%20nuevo.png'
        }
        ,
        {
            id: 22,
            nombre: 'hbo',
            link: 'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOUlSRjlOV0NrdmJXRnVhV1psYzNRdWJYQmsma2V5PU1qUmpNbUUwWkdZNFpUaGtaR1F4TnpZMk5qRmpZVFpsTUdRMk1XSXlObUk9JmtleTI9WWpGaU1UTTRPRGxtTnpGaE9UWTVNREpqTWpnMU9ESXpNREl4TmpOaE5XTT0mYXV0PXRydWU=',
            imagen: 'https://www.decalsplanet.com/img_b/vinyl-decal-sticker-1845.jpg'
        },
        {
            id: 23,
            nombre: 'hbo 2',
            link: 'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1R6SmZTRVJmVFZncEwyMWhibWxtWlhOMExtMXdaQT09JmtleT1NbVF5TXpRNE4ySTFZamc0TVdVME5HSmhNR1poWWprM05UbG1aRGcxWVRNPSZrZXkyPU1ESTVZemRtTVRJNE9Ua3pNRE0wWVdSbVpUUmlZelJsT1RVeE5EQTBNalE9',
            imagen: 'https://logowik.com/content/uploads/images/hbo-2-hd-nl3042.logowik.com.webp'
        },
        {
            id: 24,
            nombre: 'hbo +',
            link: "https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOVFURlZUWDBoRVgwMVlLUzl0WVc1cFptVnpkQzV0Y0dRPSZrZXk9T0dNMlpUa3pNMll6TVRVMU56aGlOVEV4TVdVeU1qa3labUZtT1RsbU56QT0ma2V5Mj1NelEwTm1Zek5UazBOemsxTjJRek56QXhZelE1Wm1ReE56STVaakl4Tm1ZPQ==",
            imagen:'https://i.ytimg.com/vi/p9MctNEcPKs/maxresdefault.jpg'
        },
        {
            id: 25,
            nombre: 'hbo family',
            link: 'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOUdRVTFKVEZsZlNFUXBMMjFoYm1sbVpYTjBMbTF3WkE9PSZrZXk9TVdRM1pXUXpPREUxWTJKaFpUTTNPRFZqWldKbVpUWmlOREptTTJNMk5UVT0ma2V5Mj1aVEV5TnpBeE1URXdPR0kyWWpWaU9UWTBObUV3WkdWaU0yRTFaRGN4WW1RPQ==',
            imagen:'https://2.bp.blogspot.com/-fWMY8sHAuHs/TqB9xKDM_-I/AAAAAAAAQh0/N-fI53l9A84/s1600/hbo-family.png'
        },
        {
            id: 26,
            nombre: 'hbo xtreme',
            link: 'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOVlWRkpGVFVWZlNFUmZUVmdwTDIxaGJtbG1aWE4wTG0xd1pBPT0ma2V5PU0yUmtOVGxqTVdNNU16WTFPREU0TVRneU5qSTVNVFJoWXpSa05XRXlNamc9JmtleTI9TjJSaU56VTBOV00yTVRreFlqTmtZamMzWkRjNVl6UmtPRFUwTmpWbE5EZz0=',
            imagen: 'https://seeklogo.com/images/H/hbo-xtreme-logo-D424105400-seeklogo.com.png'
        },
        {
            id: 27,
            nombre:'hbo pop',
            link:'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOVFUMUJmU0VSZlRWZ3BMMjFoYm1sbVpYTjBMbTF3WkE9PSZrZXk9TXprME16TTFNRGs1WVRabU1HVTJaalF6T1RBMFpEaGtNbVJqTldFeU0yWT0ma2V5Mj1ZakUwWTJVeVpqWXpPRFEwTkdJeE5HVXhaV1k0TUdSaE56QmhNV0kzWW1VPQ==',
            imagen: 'https://www.vivo.com.br/content/dam/vivo-sites/vivo-com-br/homepage/imagens/logos/logo-canal-hbo-pop-252x252.png'
        },
        {
            id: 28,
            nombre:'hbo signature',
            link:'https://tv-libre.com/html/r/?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLmxpYnJlZnV0Ym9sdHYuY29tL21wZGsyLmh0bWw/Z2V0PWFIUjBjSE02THk5c1lYUmhiWFp2YzJ4cGRtVmpiR0Z5YjNacFpHVnZMbUZyWVcxaGFYcGxaQzV1WlhRdlEyOXVkR1Z1ZEM5RVFWTklYMFJCVTBoZlJrc3ZUR2wyWlM5RGFHRnVibVZzS0VoQ1QxOVRTVWRPUVZSVlVrVmZTRVFwTDIxaGJtbG1aWE4wTG0xd1pBPT0ma2V5PVpUYzVNR1F5Wm1Sa01XTmlabU16TVdWak1EZGpPV1UyWkdVeFl6VTNaamc9JmtleTI9T1dReVpXUXpZbUZrWkRrM05qQTNaVFJoWlRCbU9EZGpNRGM0WTJSaE1qYz0=',
            imagen:'https://th.bing.com/th/id/R.a66b34a7cbff13352a8de381509869a0?rik=Hq4GcppyZ7lr%2bw&riu=http%3a%2f%2fi.imgur.com%2fXEd15.jpg&ehk=AfwT3vVyKtshcWZpzXb2swL%2bLdZTD4cmHlVuvNajPNA%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 29,
            nombre: 'universal tv',
            link: 'https://tv-libre.com/html/r/?r=L2h0bWwvZmwvP2dldD1WVzVwZG1WeWMyRnNYME5vWVc1dVpXeGZTRVE9',
            imagen: 'https://1.bp.blogspot.com/-kbZqCtfRbLI/X9TtqaHORcI/AAAAAAAA7nQ/ZeD4CLH7dWsYLYrmwBYScxQ0uMA7hl1mwCLcBGAsYHQ/s1280/UNIVERSAL-TV-2018.png'
        },
        {
            id: 30,
            nombre: 'gran hermano',
            link: 'https://tv-libre.com/en-vivo/gran-hermano/embed.html?r=embed5',
            imagen: 'https://th.bing.com/th/id/OIP.kKcCHWu9hXWsNtElTRav_QAAAA?rs=1&pid=ImgDetMain'
        },
        {
            id: 31,
            nombre: 'cronica tv',
            link: 'https://tv-libre.com/html/fl/?get=Q3JvbmljYVRW',
            imagen: 'https://th.bing.com/th/id/OIP.G8niLAqURCMUfkpClIfkNQHaEW?rs=1&pid=ImgDetMain'
        },
        {
            id:32,
            nombre:'a24',
            link:'https://tv-libre.com/html/fl/?get=QW1lcmljYTI0',
            imagen: 'https://th.bing.com/th/id/OIP.qgnj6ylLCy2jxp9XpjJgcgHaIa?rs=1&pid=ImgDetMain',
        },
        {
            id:33,
            nombre: 'fx',
            link: 'https://tv-libre.com/html/dtv/?id=1129',
            imagen: 'https://vignette.wikia.nocookie.net/americanhorrorstory/images/8/8b/Fx-tv-channel-logo.jpg/revision/latest?cb=20130116101957&path-prefix=es'
        },
        {
            id:34,
            nombre:'espn premium',
            link:'https://tv-libre.com/html/fl/?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE',
            imagen:'https://th.bing.com/th/id/R.6723ea67f1d619e7ab1c90ff0d3a5bda?rik=3Zu5PMVnFrSd0w&pid=ImgRaw&r=0'

        },
        {
            id:35,
            nombre:'espn premium 2',
            link:'https://vercanalesonline.com/embed/cv.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE&lang=1',
            imagen:'https://th.bing.com/th/id/OIP.xEg0eTMRqHdn_qLo4Jk8OwHaHa?rs=1&pid=ImgDetMain'

        },
        {
            id:36,
            nombre:'tnt sports 2',
            link:'//vercanalesonline.com/embed/cv.html?get=VE5UX1Nwb3J0c19IRA',
            imagen:'https://insports.lv/image/cache/catalog/INSPORTS%20LOGO-998x510.png'},

    ]
    return vectorCanales;
}

export default canales
