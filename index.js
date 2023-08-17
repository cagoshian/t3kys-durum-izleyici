const axios = require('axios');

const t3kys_session_id = "" //T3KYS'nin SessionID çerezi
const pushbullet_api_key = "" //telefona bildirim göndermek için Pushbullet hesabının API anahtarı
const takip_edilecek_basvuru = 1 //takip edilecek başvurunun kaçıncı sırada olduğu (örneğin Başvurularım sayfasındaki ilk başvuru için 1)

const t3kysConfig = {
    headers: {
        Cookie: `sessionid=${t3kys_session_id}`
    }
};

function bildirimGonder(yeniDurum) {
    const pushbulletConfig = {
        headers: {
            'Access-Token': pushbullet_api_key,
            'Content-Type': 'application/json'
        }
    }
    const pushbulletData  = {
        "body": yeniDurum,
        "title":"Yeni Durum!",
        "type":"note"
    }
    axios.post("https://api.pushbullet.com/v2/pushes", pushbulletData, pushbulletConfig).then(response => {
        console.log("Bildirim Gönderildi")
    }).catch(error => {
        console.log("bildirim error: ", error)
    })
}

console.log("-Teknofest Durum Değişikliği Algılama-")

let mevcutOlan = ""

setInterval(() => {
    axios.get('https://t3kys.com/tr/mainpage/table-api/my-applications/?format=datatables', t3kysConfig).then(response => {
            const data = response.data.data[takip_edilecek_basvuru - 1].status
            if (mevcutOlan == "") {
                mevcutOlan = data
                console.log("İlk Durum Kaydedildi: " + mevcutOlan)
            } else {
                if (data == mevcutOlan) {
                    console.log("Aynı Durum: " + data)
                } else {
                    mevcutOlan = data
                    console.log("Yeni Durum Kaydedildi: " + mevcutOlan)
                    bildirimGonder(data);
                }
            }
        }).catch(error => {
            console.error("T3KYS error: ", error);
        });
}, 5000)
