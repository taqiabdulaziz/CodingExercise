# Young Fox - Live Code 1

Pada livecode ini, kalian diminta untuk membuat beberapa fitur (akan dijelaskan lebih detail di bawah) baik dari server maupun client.

Salah satu fitur yang dibuat, mengharuskan kalian untuk mengakses 3rd PARTY API, bacalah dokumentasi API yang diberikan dengan detail. API Documentation nya ada pada link : https://younglivecode1.docs.apiary.io/

Aplikasi client dibangun menggunakan Vue.js

Fork repo `???`, kemudian buatlah dalam repo tersebut 2 folder, yaitu client dan server. Setelah selesai, tambahkan notes.md yang isinya .env, fitur optional yang dikerjakan, kendala, dll.

Tolong bikin akun untuk : user1@mail.com, user2@mail.com dengan password 123456 untuk membantu pengecekan instruktur.

**Notes :**
Berhubung kompetensi livecode ini bukan MVC, maka kalian diperbolehkan untuk tidak membuat controller.
apabila kalian membuat routing nya di dalam 1 file router/index.js juga diperbolehkan
File HTML telah disediakan, boleh menggunakan template ini, boleh juga menggunakan template sendiri asalkan layouting nya sama.

### Summary
* Aplikasi ini memungkinkan user untuk mendapatkan list dari food dan ingredients nya, menyimpan list food yang favorite dan mengkategorikannya secara otomatis.
* User harus login terlebih dahulu untuk dapat menyimpan list food tersebut.
* Aplikasi ini dibuat SPA (Single Page Application) DAN **harus reactive**. Apabila tidak reactive, -10 point.


## Release 1 - Authentication
**1. Server - Register (10)**  
Buatlah endpoint untuk membuat fitur register sesuai dengan spesifikasi yang terdapat pada API Documentation, perhatikan spesifikasi untuk value email dan password nya.

**2. Server - Login (7.5)**  
Buatlah endpoint untuk membuat fitur login sesuai dengan spesifikasi yang terdapat pada API Documentation.

**3. Client - Login (7.5)**  
- Buatlah fitur login di aplikasi client. Apabila user berhasil login, akan menampilkan pesan success (diusahakan tidak pakai alert), apabila user tidak berhasil login, misalnya salah email / password, akan menampilkan pesan error.
- Setelah berhasil login, maka form untuk login harus hilang, lalu muncul link / button untuk logout


## Release 2 - Get Food Lists
**1. Server (10)**  
- Buatlah endpoint untuk mendapatkan semua food list, dimana food list tsb pun didapatkan dari 3rd API yang telah disediakan
- Perhatikan parameter apa saja yang harus dikirimkan / direspon HARUS SAMA PERSIS dengan API documentation

**2. Client (7.5)**
- User perlu login terlebih dahulu untuk dapat mengakses fitur ini.
- Menampilkan semua food list beserta ingredients nya


## Release 3 - Add Food list
**1. Server (10)**  
- Buatlah endpoint untuk menyimpan food list yang dipilih ke dalam "My Food Lists"
- Perhatikan parameter apa saja yang harus dikirimkan / direspon HARUS SAMA PERSIS dengan API documentation

**2. Client (7.5)**
- User HARUS login terlebih dahulu untuk dapat mengakses fitur ini.
- Menyimpan food list yang dipiih ke dalam daftar "My Food List"


## Release 4 - Assign Category to food list automatically
**1. Server (7.5)**  
- Modifikasi endpoint kamu sebelumnya mengenai `add food list`, sehingga food tersebut memiliki category nya secara otomatis. Category yang saat ini tersedia hanya : ayam, ikan, dan other. Assign category ini berdasarkan pada title food nya, apabila mengandung kata 'ayam', maka category nya ayam. Apabila title food mendandung kata 'ikan', maka category nya adalah ikan. Selebihnya akan masuk ke dalam category 'other'.
- Perhatikan parameter apa saja yang harus dikirimkan / direspon HARUS SAMA PERSIS dengan API documentation


## Release 5 - Show My Food List
**1. Server (7.5)**  
- Buatlah endpoint untuk membuat fitur my food list sesuai dengan spesifikasi yang terdapat pada API documentation.

**2. Client (7.5)**
- User harus login terlebih dahulu untuk dapat melihat my food list. Data yang ditampilkan ada title, ingredients dan category nya.


## Release 6 - Filter My Food List by Category
**1. Server (10)**  
- Buatlah endpoint untuk men-filter my food list berdasarkan nama category.

**2. Client (7.5)**
- User harus login terlebih dahulu untuk dapat men-filter my food list by nama category.


## Release 7 - Optional Features
You can add optional features based on your own ideas, and relate to main features. For example, you can add features :
1. Menampilkan semua food list dan diurutkan berdasarkan jumlah food list yang disimpan terbanyak oleh user
