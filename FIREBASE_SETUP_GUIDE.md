# دليل إعداد Firebase لحل مشكلة Google Authentication في Vercel

## المشكلة

تسجيل الدخول بـ Google يعمل في localhost ولكن لا يعمل في Vercel.

## الحلول

### 1. إضافة نطاق Vercel إلى Firebase Authentication

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. اختر مشروعك `fresheat-ed0b3`
3. اذهب إلى **Authentication** → **Settings** → **Authorized domains**
4. أضف النطاقات التالية:
   - `your-app.vercel.app` (استبدل بـ اسم تطبيقك في Vercel)
   - `your-app-git-main-your-username.vercel.app` (إذا كان لديك custom domain)

### 2. التحقق من إعدادات Google OAuth

1. في Firebase Console، اذهب إلى **Authentication** → **Sign-in method**
2. تأكد من أن **Google** مفعل
3. انقر على **Google** → **Edit**
4. تأكد من أن **Project support email** محددة
5. احفظ التغييرات

### 3. إعدادات Vercel (اختياري)

إذا كنت تستخدم custom domain، تأكد من إضافة النطاق إلى Firebase أيضاً.

### 4. اختبار الحل

1. ارفع التحديثات إلى Vercel
2. جرب تسجيل الدخول بـ Google
3. تحقق من console في المتصفح لرؤية رسائل الخطأ المفصلة

### 5. مشاكل شائعة وحلولها

#### مشكلة: "unauthorized-domain"

**الحل:** أضف نطاق Vercel إلى Firebase Authorized domains

#### مشكلة: "popup-blocked"

**الحل:** السماح بالنوافذ المنبثقة للموقع

#### مشكلة: "network-request-failed"

**الحل:** تحقق من اتصال الإنترنت وإعدادات الشبكة

### 6. إعدادات إضافية للتحسين

يمكنك إضافة المزيد من providers مثل:

- Facebook
- Twitter
- GitHub

### 7. مراقبة الأخطاء

استخدم Firebase Analytics و Crashlytics لمراقبة الأخطاء في الإنتاج.

## ملاحظات مهمة

- تأكد من أن جميع النطاقات مضافة في Firebase
- انتظر بضع دقائق بعد إضافة النطاق قبل الاختبار
- تحقق من console المتصفح لرؤية رسائل الخطأ المفصلة
