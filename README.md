# 🎯 Guess My Number

یک بازی ساده‌ی **حدس عدد** با استفاده از HTML، CSS و JavaScript خالص.

در این بازی، یک عدد تصادفی بین ۱ تا ۱۰ انتخاب می‌شود و کاربر باید با کمترین تعداد حدس، عدد موردنظر را پیدا کند.

## 🚀 Demo

[مشاهده نسخه آنلاین پروژه](#)

> لینک Demo را بعد از Deploy کردن پروژه اینجا قرار دهید.

## 📸 Preview

![Guess My Number Preview](./preview.png)

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* DOM Manipulation
* CSS Flexbox
* Responsive Design

## ✨ Features

* تولید عدد تصادفی
* سیستم حدس زدن عدد
* نمایش راهنمای حدس:

  * عدد بالاتر است
  * عدد پایین‌تر است
  * عدد درست است
* سیستم امتیازدهی با محدودیت ۲۰ حدس
* ثبت بالاترین امتیاز (Record)
* امکان شروع مجدد بازی
* طراحی Responsive برای صفحه‌های مختلف
* رابط کاربری فارسی و RTL
* استفاده از فونت‌های فارسی

## 🎮 How to Play

1. یک عدد بین ۱ تا ۱۰ وارد کنید.
2. روی دکمه‌ی «حدس بزن» کلیک کنید.
3. اگر عدد واردشده اشتباه باشد، بازی مشخص می‌کند که باید عدد بالاتر یا پایین‌تری را امتحان کنید.
4. با هر حدس اشتباه، یک امتیاز از تعداد حدس‌های باقی‌مانده کم می‌شود.
5. با پیدا کردن عدد صحیح، امتیاز نهایی شما ثبت می‌شود.
6. با دکمه‌ی «بارگذاری مجدد» می‌توانید یک دور جدید را شروع کنید.

## 📂 Project Structure

```text
Guess-My-Number/
│
├── index.html
├── style.css
├── javascript.js
│
├── fonts/
│   ├── Peyda-Bold.woff2
│   ├── Peyda-Regular.woff2
│   ├── Peyda-Medium.woff2
│   ├── Peyda-Light.woff2
│   └── IRANSansX-Bold.woff2
│
└── preview.png
```

## 🧠 What I Practiced

این پروژه با هدف تمرین JavaScript و تقویت توانایی حل مسئله ساخته شده است.

مباحثی که در این پروژه تمرین شده‌اند:

* Functions
* Variables
* `Math.random()`
* `Math.floor()`
* Conditional Statements
* Comparison Operators
* DOM Selection
* `textContent`
* `classList`
* Event Listeners
* User Input
* Type Conversion
* Game State Management
* Score & Record Logic

## 📱 Responsive Design

رابط کاربری برای اندازه‌های مختلف صفحه طراحی شده و با استفاده از CSS Media Queries در موبایل نیز قابل استفاده است.

## 🔄 Future Improvements

* اضافه کردن حالت باخت در صورت تمام شدن امتیاز
* جلوگیری از وارد کردن عدد خارج از محدوده ۱ تا ۱۰
* غیرفعال کردن دکمه‌ی حدس بعد از پایان بازی
* اضافه کردن انیمیشن‌های بیشتر
* نمایش پیام مناسب هنگام شروع بازی جدید
* ذخیره رکورد در `localStorage`

## 📄 License

This project was created for learning and practice purposes.
