# Clean Blog Projesi

Patika.dev üzerinden almakta olduğum. "Node.JS" modülünün, "PCAT Projesi" bölümü kapsamında yapmakta olduğumuz projedir.

Bu proje bölümler halinde yapılmaktadır. Her bölüm işlendikten sonra github üzerin gerekli commit işlemleri yapılacaktır.
Bu sebepten ötütü proje dahilinde yapılanların hepsi bu repoda barınmaktadır.

[Clean Blog App - Heroku sitesi](https://cleandb-blog-app.herokuapp.com/)

> **Not:** Şifre ve bilgi içeren kısımlar kaldırışmıştır. Son halinde *Herkese Açık* olabilecek şekilde düzenlenmiştir.
> Heroku üzerinden yayımlanan kısmında ise **UPDATE**, **DELETE**, **POST** işlemleri boşa çıkarılmıştır (*işlevsizleştirilmiştir*).

***

## Clean Blog Proje - 1. Bölüm - Ödev 7

PCAT projemizi birlikte yapıyoruz ancak işleri biraz daha zorlaştıralım, neden? Çünkü ne kadar çok pratik yaparsak öğrenme sürecimiz kısalır. PCAT projemizde öğrendiklerimizi aynı zamanda "CLEAN BLOG" olarak ikinci bir proje de kendi başımıza uygulamalı bir şekilde yapmaya çalışacağız. Aşağıda görselini gördüğümüz projemizin başlangıç dosyasını da bulacaksınız.

![Clean Blog Proje - 1. Bölüm - Ödev 7](./DOC-temp/odev-7-img-1.jpg)

[CLEAN BLOG Proje Başlangıç Dosyaları](https://drive.google.com/file/d/1yWS-hrxi7MwsyU2YxpcCpfXd6ilws1Xw/view?usp=sharing)

Clean Blog projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:

- CleanBlog proje klasörünü oluşturalım.
- Package.json dosyasını oluşturalım.
- Prettier ayarlarını yapalım.(İsteğe bağlı)
- Express ve Nodemon modüllerini indirelim.
- `git init` ile lokal repomuzu oluşturalım.
- get request içerisinde `const blog = { id: 1, title: "Blog title", description: "Blog description" }`, içeriğini gönderelim.
- .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.

***

## Clean Blog Projesi 2. Bölüm

Clean Blog projemizin bu 2. bölümünde aşağıdaki işlemleri yapalım.

- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
- EJS modülünü indirelim.
- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
- Partials klasör yapısını oluşturalım.
- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

***

## Clean Blog Projesi 3. Bölüm

Clean Blog projemizin bu 3. bölümünde aşağıdaki işlemleri yapalım.

- cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
- "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
- title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip `Post` modelini oluşturalım.
- Veri tabanımızda 3 adet pos dökümanı oluşturalım.
- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

***

## Clean Blog Projesi 4. Bölüm

Clean Blog projemizin bu 4. bölümünde aşağıdaki işlemleri yapalım.

- index.ejs içerisinde `/posts/<%= posts[i]._id %>` ile _id bilgisini gönderelim.
- app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
- tekil post bilgilerini post.ejs dosyasına gönderelim.
- post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)

***

## Clean Blog Projesi 5. Bölüm

Clean Blog projemizin bu 5. bölümünde aşağıdaki işlemleri yapalım.

- post.ejs template içerisinde **UPDATE** ve **DELETE** butonu oluşturalım.
- Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
- Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
- Kodumuzu MVC yapısına göre tekrar düzenleyelim.

***

## Clean Blog Projesi 6. Bölüm

Clean Blog projemizin bu 6. bölümünde aşağıdaki işlemleri yapalım.

- Uygulamamızı **HEROKU** ve **MongoDB Atlas** ücresiz servislerini kullanarak yükleyelim.
- Not: Uygulamamızda sayfalama ve görsel yükleme işlemlerini yapmadık. Sonraki projemizde de bu özellikleri kullanacağız.
