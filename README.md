# t3kys-durum-izleyici
T3KYS başvurularının durumunu takip eden ve değişiklik durumunda telefona bildirim gönderen yazılım.

### Kurulum

İlk olarak, t3kys_session_id değişkenine, T3KYS'nin SessionID çerezini yazın.

Çerezler için, tarayıcınızda T3KYS'ye giriş yaptıktan sonra Ctrl+Shift+I ile geliştirici araçlarını açtıktan sonra, Depolama sekmesine gelin. Çerezler kategorisinin altında T3KYS'yi bulun ve tıklayın. Çerezler, sağda görünecektir. Buradaki SessionID'yi kopyalayıp değişkene yapıştırın.

Sonrasında, telefonunuza bildirim göndermesi için pushbullet_api_key değişkenine Pushbullet API anahtarınızı girmeniz gerekiyor. Eğer telefonunuza bildirim gelmesini istemiyorsanız, değişkeni boş bırakın.

Pushbullet API anahtarı için, Pushbullet'in sitesine girip hesap açın. Ardından hesap ayarlarında, Create Access Token butonuyla bir API anahtarı oluşturun. Bu anahtarı kopyalayıp değişkene yapıştırın. Bildirimi almak için telefonunuzda Pushbullet uygulamasının yüklü olması ve hesaba giriş yapılmış olması gerekmektedir.

Son olarak, takip_edilecek_basvuru değişkenine kaçıncı sıradaki başvuruyu takip etmek istediğinizi yazın. Örneğin Başvurularım sayfasındaki ilk başvuru için, 1 yazın.

Gerekli değerleri girdikten sonra, kodu çalıştırdığınızda yazılım her 30 saniyede bir başvurunuzun durumunu kontrol edecektir, değişiklik durumunda konsola mesaj yazacak ve telefonunuza bildirim gönderecektir.
