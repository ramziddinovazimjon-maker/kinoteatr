# 🎬 Kinoteatr

Kinoteatr — React va Redux Toolkit yordamida yaratilgan onlayn kino biletlari bron qilish loyihasi.

## 🛠 Texnologiyalar

- React
- JavaScript
- React Router DOM
- Redux Toolkit
- React Redux
- Redux Persist
- CSS

## ✨ Bajarilgan vazifalar

- [x] Redux Store yaratish
- [x] Redux Persist orqali ma'lumotlarni saqlash
- [x] 6 ta film bilan Afisha sahifasi
- [x] Login va Logout
- [x] GuestRoute va ProtectedRoute
- [x] Login'dan keyin oldingi sahifaga qaytish
- [x] Bilet sotib olish
- [x] O'rindiqlarni tanlash
- [x] Band o'rindiqlarni ko'rsatish
- [x] Biletlarni o'chirish
- [x] Admin panel
- [x] Film qo'shish va o'chirish
- [x] 403 sahifasi
- [x] 404 sahifasi

## 👤 Foydalanuvchi rollari

**User:**
- Filmlarni ko'rish
- Bilet sotib olish
- O'z biletlarini ko'rish

**Admin:**
- Admin panelga kirish
- Film qo'shish
- Film o'chirish

## 📚 Savollarga javoblar

### 5. Navigate'da replace nima uchun ishlatiladi?

`replace` brauzer tarixidagi joriy sahifani almashtiradi. Masalan, login qilmagan foydalanuvchi `/tickets` sahifasiga kirsa, `/login` ga yuboriladi. `replace` ishlatilsa, Back tugmasi orqali yana himoyalangan sahifaga qaytib qolishining oldi olinadi.

### 11. Outlet nima?

`Outlet` React Router'da ichki route'larning sahifasini ko'rsatadi. Masalan, bitta ProtectedRoute orqali bir nechta himoyalangan sahifalarni boshqarish mumkin.

### 13. ProtectedRoute ma'lumotlarni to'liq himoya qiladimi?

Yo'q. ProtectedRoute frontenddagi sahifalarga kirishni cheklaydi, lekin ma'lumotlarni to'liq himoya qilmaydi. Foydalanuvchi LocalStorage ma'lumotlarini o'zgartirishi mumkin. Haqiqiy loyihada foydalanuvchi huquqlari server tomonida ham tekshirilishi kerak.

## ▶️ Loyihani ishga tushirish

```bash
npm install
npm run dev
```

## 🔗 GitHub

https://github.com/ramziddinovazimjon-maker/kinoteatr