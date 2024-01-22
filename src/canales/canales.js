
const canales = () => {

    const vectorCanales = [
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
            link: 'https://flow.fullbed.rest/cvatt.html?get=VE5UX1Nwb3J0c19IRA',
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
            nombre: 'universal tv',
            link: 'https://tv-libre.com/html/r/?r=L2h0bWwvZmwvP2dldD1WVzVwZG1WeWMyRnNYME5vWVc1dVpXeGZTRVE9',
            imagen: 'https://1.bp.blogspot.com/-kbZqCtfRbLI/X9TtqaHORcI/AAAAAAAA7nQ/ZeD4CLH7dWsYLYrmwBYScxQ0uMA7hl1mwCLcBGAsYHQ/s1280/UNIVERSAL-TV-2018.png'
        },
        {
            id: 25,
            nombre: 'gran hermano',
            link: 'https://tv-libre.com/en-vivo/gran-hermano/embed.html?r=embed5',
            imagen: 'https://th.bing.com/th/id/OIP.kKcCHWu9hXWsNtElTRav_QAAAA?rs=1&pid=ImgDetMain'
        },
        {
            id: 26,
            nombre: 'cronica tv',
            link: 'https://tv-libre.com/html/fl/?get=Q3JvbmljYVRW',
            imagen: 'https://th.bing.com/th/id/OIP.G8niLAqURCMUfkpClIfkNQHaEW?rs=1&pid=ImgDetMain'
        },
        {
            id:27,
            nombre:'a24',
            link:'https://tv-libre.com/html/fl/?get=QW1lcmljYTI0',
            imagen: 'https://th.bing.com/th/id/OIP.qgnj6ylLCy2jxp9XpjJgcgHaIa?rs=1&pid=ImgDetMain',
        },
        {
            id:28,
            nombre: 'fx',
            link: 'https://tv-libre.com/html/dtv/?id=1129',
            imagen: 'https://vignette.wikia.nocookie.net/americanhorrorstory/images/8/8b/Fx-tv-channel-logo.jpg/revision/latest?cb=20130116101957&path-prefix=es'
        }

    ]
    return vectorCanales;
}

export default canales