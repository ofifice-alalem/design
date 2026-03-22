# 🚀 مرجع سريع - نظام التوحيد

## 🎨 الألوان كمتغيرات

```css
/* استخدم هذه المتغيرات بدلاً من الألوان المباشرة */
rgba(var(--color-primary), 0.5)      /* أزرق بشفافية 50% */
rgba(var(--color-success), 0.2)      /* أخضر بشفافية 20% */
rgba(var(--color-danger), 0.8)       /* أحمر بشفافية 80% */
rgba(var(--color-warning), 0.3)      /* برتقالي بشفافية 30% */
rgba(var(--color-accent), 0.4)       /* سماوي بشفافية 40% */
```

---

## 🃏 الكاردات - استخدم هذه الكلاسات

```jsx
// ❌ لا تفعل هذا (القديم)
<div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-[40px] border border-white/60...">

// ✅ افعل هذا (الجديد)
<div className="glass-card-primary p-6 rounded-2xl">
  <div className="noise-texture" />
  <div className="glass-glow-top" />
</div>
```

**الأنواع المتاحة:**
- `glass-card-primary` - للعناصر الأساسية
- `glass-card-success` - للنجاح
- `glass-card-danger` - للخطر
- `glass-card-warning` - للتحذير

---

## 🔘 الأزرار

```jsx
// ❌ القديم
<button className="bg-gradient-to-br from-blue-500/90 to-blue-700/90...">

// ✅ الجديد
<Button variant="primary">حفظ</Button>
<Button variant="danger">حذف</Button>
<Button variant="outline">إلغاء</Button>
<Button variant="ghost">إغلاق</Button>
```

---

## 🏷️ البادجات

```jsx
// ❌ القديم
<span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-700...">

// ✅ الجديد
<span className="badge-success">مكتمل</span>
<span className="badge-warning">قيد الانتظار</span>
<span className="badge-danger">ملغي</span>
<span className="badge-info">معلومات</span>
```

---

## 🪟 النوافذ المنبثقة

```jsx
// ✅ استخدم theme prop
<Modal theme="primary" title="عنوان">المحتوى</Modal>
<Modal theme="danger" title="تأكيد الحذف">المحتوى</Modal>
<Modal theme="warning" title="تحذير">المحتوى</Modal>
```

---

## 🎭 التأثيرات الجاهزة

### الكرة المضيئة (Ambient Sphere)
```jsx
<div className="relative">
  <div className="ambient-sphere-primary -right-6 -top-6" />
  <div className="ambient-sphere-success -left-6 -bottom-6" />
</div>
```

### التوهج العلوي
```jsx
<div className="glass-glow-top" />
```

### النسيج
```jsx
<div className="noise-texture" />
```

---

## 📦 مثال كامل - كارد إحصائيات

```jsx
// ❌ القديم (70+ سطر من الستايلات)
<div className="relative overflow-hidden group min-h-[160px] bg-gradient-to-br from-blue-50/80...">
  {/* الكثير من الكود المكرر */}
</div>

// ✅ الجديد (نظيف ومختصر)
<StatisticsCard 
  title="إجمالي المستخدمين"
  value="1,204"
  icon={Users}
  accent="blue"
  trend="up"
  trendValue="+12%"
/>
```

---

## 🎯 قواعد مهمة

### ✅ افعل:
- استخدم المتغيرات `var(--color-*)`
- استخدم الكلاسات الموحدة `.glass-card-*`
- استخدم `.badge-*` للحالات
- استخدم التأثيرات الجاهزة

### ❌ لا تفعل:
- لا تكتب الألوان مباشرة `bg-blue-500`
- لا تكرر ستايلات الـ glassmorphism
- لا تكتب shadows يدوياً
- لا تكرر التأثيرات في كل مكون

---

## 🔄 تحويل الكود القديم

### مثال 1: كارد
```jsx
// القديم
<div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-[40px] border border-white/60 dark:border-white/10 rounded-2xl shadow-lg p-6">

// الجديد
<div className="glass-card-primary p-6 rounded-2xl">
```

### مثال 2: بادج
```jsx
// القديم
<span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">

// الجديد
<span className="badge-success">
```

### مثال 3: زر
```jsx
// القديم
<button className="bg-gradient-to-br from-blue-500/90 to-blue-700/90 text-white backdrop-blur-2xl border border-blue-400/50...">

// الجديد
<Button variant="primary">
```

---

## 📊 الإحصائيات

### قبل التحديث:
- 📄 StatisticsCard: **150+ سطر**
- 📄 Modal: **80+ سطر**
- 📄 Button: **60+ سطر**
- 🔄 تكرار الكود: **عالي جداً**

### بعد التحديث:
- 📄 StatisticsCard: **60 سطر** (-60%)
- 📄 Modal: **40 سطر** (-50%)
- 📄 Button: **30 سطر** (-50%)
- 🔄 تكرار الكود: **صفر** ✅

---

## 🎓 نصائح للمطورين

1. **اقرأ** `DESIGN_SYSTEM.md` للتفاصيل الكاملة
2. **استخدم** الكلاسات الموحدة دائماً
3. **لا تكرر** الستايلات
4. **اختبر** في الوضع الفاتح والداكن
5. **راجع** `design-tokens.css` عند الحاجة

---

## 🆘 الدعم

إذا كنت بحاجة لإضافة:
- **لون جديد** → أضفه في `design-tokens.css`
- **نوع كارد جديد** → أضف `.glass-card-*`
- **نوع بادج جديد** → أضف `.badge-*`
- **تأثير جديد** → أضفه في قسم Shared Effects

---

**تذكر:** النظام الموحد = كود أنظف + صيانة أسهل + أداء أفضل ✨
