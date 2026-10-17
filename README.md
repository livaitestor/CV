# پروژه رزومه نیما حاجی مزدارانی (React + TypeScript + Vite)

نسخه فرانت‌اندی سایت رزومه — هر بخش از یک فایل JSON جداگانه تغذیه می‌شه، یعنی برای تغییر محتوا فقط کافیه JSON رو ویرایش کنی.

## اجرا

```bash
npm install
npm run dev      # dev server روی http://localhost:5173
npm run build    # بیلد پروداکشن در dist/
npm run preview  # پیش‌نمایش بیلد
```

## ساختار داینامیک (src/data/)

هر بخش سایت یه فایل JSON داره — ویرایش همون فایل = تغییر محتوای سایت:

| فایل | بخش سایت |
|---|---|
| `header.json` | منوی ناوبری (نام برند + لینک‌ها) |
| `hero.json` | سکشن خوش‌آمد (نام، توضیح، لینک‌های سوشال، عکس) |
| `about.json` | درباره من (عکس، عنوان، لیست مشخصات) |
| `services.json` | خدمات (آیکون SVG + عنوان هر سرویس) |
| `skills.json` | مهارت‌ها (دو ستون، هر مهارت با نام/سطح/درصد) |
| `portfolio.json` | نمونه‌کارها (تصویر، عنوان، لینک؛ `tall: true` برای کارت بزرگ) |
| `experience.json` | تجربیات (کارت‌ها با عکس/عنوان/توضیح) |
| `contact.json` | تماس (پاراگراف‌ها، ایمیل، تلفن) |
| `footer.json` | فوتر (نام، توضیح، سوشال) |

### مثال — اضافه کردن مهارت جدید

```json
{ "name": "MongoDB", "level": "متوسط", "percent": 60 }
```

به یکی از آرایه‌های `columns` در `skills.json` اضافه کن.

### مثال — اضافه کردن نمونه‌کار

```json
{
  "title": "پروژه جدید",
  "subtitle": "Github.com",
  "href": "https://github.com/NimaHaji/NewProject",
  "image": "/website_files/my-image.png",
  "tall": false
}
```

## ساختار کد

- `src/components/` — یک کامپوننت React برای هر بخش
- `src/types.ts` — تایپ‌های TypeScript برای همه JSONها
- `src/hooks/useTheme.ts` — تم دارک/لایت (با ذخیره در localStorage)
- `src/hooks/useScrollEffects.ts` — سایه نوبار و دکمه scroll-to-top
- `public/` — assets استاتیک (تصاویر، فونت‌ها، CSSها)

## تغییرات نسبت به نسخه قبلی

- لینک‌های `https://nimahajimazdarani.ir/#...` → انکر نسبی `#about` و ...
- لینک تلگرام اصلاح شد (`https://t.me/`)
- آیکون‌های SVG اینلاین خدمات → فایل‌های جدا در `public/images/services/`
- Masonry/BigPicture حذف شدن (گرید سفارشی CSS استفاده می‌شه)
- `target="_blank"` و `rel="noopener noreferrer"` روی لینک‌های خارجی
- `original.html` = بکاپ فایل HTML قبلی
