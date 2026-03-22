# 🎨 نظام التوحيد (Design System)

## 📋 نظرة عامة

تم إنشاء نظام توحيد شامل للتصميم يضمن الاتساق والقابلية للصيانة عبر جميع المكونات.

---

## 🎯 المتغيرات الأساسية (Design Tokens)

### 🎨 الألوان (Colors)

جميع الألوان معرّفة كمتغيرات CSS في `design-tokens.css`:

```css
--color-primary: 59 130 246;        /* الأزرق الأساسي */
--color-accent: 0 255 255;          /* السماوي للوضع الداكن */
--color-success: 16 185 129;        /* الأخضر للنجاح */
--color-danger: 239 68 68;          /* الأحمر للخطر */
--color-warning: 249 115 22;        /* البرتقالي للتحذير */
```

**الاستخدام:**
```css
background: rgba(var(--color-primary), 0.5);
```

---

### 📏 المسافات (Spacing)

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

---

### 🔲 الحواف المستديرة (Border Radius)

```css
--radius-sm: 0.5rem;     /* 8px */
--radius-md: 0.75rem;    /* 12px */
--radius-lg: 1rem;       /* 16px */
--radius-xl: 1.5rem;     /* 24px */
--radius-2xl: 2rem;      /* 32px */
```

---

## 🃏 نظام الكاردات (Card System)

### الكلاس الأساسي

```css
.glass-card
```

**يتضمن:**
- Glassmorphism effect
- Backdrop blur
- Borders متدرجة
- Shadows مناسبة للوضع الفاتح والداكن

### الأنواع (Variants)

```css
.glass-card-primary    /* للعناصر الأساسية */
.glass-card-success    /* للنجاح */
.glass-card-danger     /* للخطر */
.glass-card-warning    /* للتحذير */
```

**مثال الاستخدام:**
```jsx
<div className="glass-card-primary p-6 rounded-2xl">
  المحتوى هنا
</div>
```

---

## 🎭 التأثيرات المشتركة (Shared Effects)

### 1. التوهج العلوي (Top Glow)

```css
.glass-glow-top
```

يضيف تدرج ضوئي في الأعلى للكارد.

### 2. النسيج (Noise Texture)

```css
.noise-texture
```

يضيف نسيج خفيف للخلفية.

### 3. الكرة المحيطة (Ambient Sphere)

```css
.ambient-sphere-primary
.ambient-sphere-success
.ambient-sphere-danger
.ambient-sphere-accent
```

**مثال:**
```jsx
<div className="relative">
  <div className="ambient-sphere-primary -right-6 -top-6" />
  المحتوى
</div>
```

---

## 🔘 نظام الأزرار (Button System)

### الكلاسات المتاحة

```css
.btn-base       /* الأساس */
.btn-primary    /* الزر الأساسي */
.btn-danger     /* زر الخطر */
```

**الاستخدام في React:**
```jsx
<Button variant="primary">حفظ</Button>
<Button variant="danger">حذف</Button>
```

---

## 🪟 نظام النوافذ المنبثقة (Modal System)

### الكلاسات

```css
.modal-backdrop          /* الخلفية المعتمة */
.modal-panel-primary     /* النافذة الأساسية */
.modal-panel-danger      /* نافذة الخطر */
.modal-panel-warning     /* نافذة التحذير */
.modal-glow-primary      /* التوهج العلوي */
```

**الاستخدام:**
```jsx
<Modal theme="primary" title="عنوان">
  المحتوى
</Modal>
```

---

## 🏷️ نظام البادجات (Badge System)

```css
.badge-success    /* النجاح */
.badge-warning    /* التحذير */
.badge-danger     /* الخطر */
.badge-info       /* المعلومات */
```

**مثال:**
```jsx
<span className="badge-success">مكتمل</span>
<span className="badge-warning">قيد الانتظار</span>
```

---

## 📦 المكونات المحدّثة

### ✅ تم تحديثها لاستخدام نظام التوحيد:

1. **Button** - يستخدم `.btn-primary`, `.btn-danger`
2. **Modal** - يستخدم `.modal-panel-*`, `.modal-glow-*`
3. **StatisticsCard** - يستخدم `.glass-card-*`, `.ambient-sphere-*`, `.badge-*`

---

## 🎯 الفوائد

### ✅ قبل التحديث:
- ❌ ألوان مكتوبة مباشرة في كل مكون
- ❌ تكرار الكود في أماكن متعددة
- ❌ صعوبة الصيانة والتعديل
- ❌ عدم الاتساق بين المكونات

### ✅ بعد التحديث:
- ✅ متغيرات CSS موحدة
- ✅ كلاسات قابلة لإعادة الاستخدام
- ✅ سهولة التعديل من مكان واحد
- ✅ اتساق كامل في التصميم

---

## 🔄 كيفية استخدام النظام

### 1. للكاردات:
```jsx
<div className="glass-card-primary p-6 rounded-2xl">
  <div className="noise-texture" />
  <div className="glass-glow-top" />
  <div className="ambient-sphere-primary -right-6 -top-6" />
  المحتوى
</div>
```

### 2. للأزرار:
```jsx
<Button variant="primary">حفظ</Button>
```

### 3. للبادجات:
```jsx
<span className="badge-success">مكتمل</span>
```

### 4. للنوافذ:
```jsx
<Modal theme="danger" title="تأكيد الحذف">
  المحتوى
</Modal>
```

---

## 🚀 التوسع المستقبلي

لإضافة لون جديد:

1. أضف المتغير في `design-tokens.css`:
```css
--color-info: 14 165 233; /* sky-500 */
```

2. أضف الكلاسات المطلوبة:
```css
.glass-card-info { ... }
.badge-info { ... }
.ambient-sphere-info { ... }
```

3. استخدمه في المكونات:
```jsx
<StatisticsCard accent="info" />
```

---

## 📝 ملاحظات مهمة

- جميع المتغيرات تدعم الوضع الداكن تلقائياً
- الكلاسات تستخدم Tailwind CSS للمرونة
- يمكن دمج الكلاسات مع بعضها
- النظام قابل للتوسع بسهولة

---

**تم إنشاء هذا النظام لضمان:**
- 🎨 اتساق التصميم
- 🔧 سهولة الصيانة
- ⚡ الأداء الأفضل
- 📦 قابلية إعادة الاستخدام
