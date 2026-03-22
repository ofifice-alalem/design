import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { SearchField } from '../components/ui/SearchField';
import { ViewToggle } from '../components/ui/ViewToggle';
import { ActionIcon } from '../components/ui/ActionIcons';
import { Tabs } from '../components/ui/Tabs';
import { FilterPanel } from '../components/filters/FilterPanel';
import { StatisticsCard } from '../components/cards/StatisticsCard';
import { Table } from '../components/table/Table';
import { DynamicRowInput } from '../components/forms/DynamicRowInput';
import { Modal } from '../components/ui/Modal';

import {
    Sun, Moon, Database, Activity, AlertTriangle, Users,
    Home, Settings, Shield, Bell, Plus, Trash, Printer, Download, UploadCloud, History, ImagePlus
} from 'lucide-react';

export default function App() {
    const [isDark, setIsDark] = useState(true);
    const [tableViewMode, setTableViewMode] = useState('table');
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [backupModalOpen, setBackupModalOpen] = useState(false);
    const [restoreModalOpen, setRestoreModalOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [backupType, setBackupType] = useState('full');

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const Section = ({ title, children, className = "", style = {} }) => (
        <section style={style} className={`section-wrapper group/section ${className}`}>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/5 to-transparent rounded-t-[32px] pointer-events-none"></div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-cyan-400 border-b border-gray-200/50 dark:border-white/10 pb-4 flex items-center gap-3 relative z-10">
                <span className="w-3 h-3 rounded-full bg-blue-500 dark:bg-cyanNeon shadow-[0_0_10px_rgba(59,130,246,0.6)] dark:shadow-[0_0_15px_rgba(0,255,255,1)]"></span>
                {title}
            </h2>
            <div className="space-y-6 relative z-10">{children}</div>
        </section>
    );

    return (
        <>
            <div className="fixed inset-0 cyber-grid pointer-events-none z-[-1]"></div>
            <div className="min-h-screen p-6 sm:p-10 font-sans relative z-0">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Header Options — Floating Glass Bar */}
                    <div className="page-header group/header">
                        <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter flex items-center gap-2 group-hover/header:tracking-tight transition-all">
                            <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-blue-600 to-cyan-400 dark:from-cyan-400 dark:to-blue-600 shadow-lg flex items-center justify-center">
                                <span className="text-white text-base">N</span>
                            </div>
                            NEXUS<span className="text-blue-600 dark:text-cyanNeon">WM</span>
                            <span className="text-[10px] font-bold text-blue-500/50 dark:text-cyan-400/50 uppercase tracking-widest ml-1 border-l border-gray-200 dark:border-white/10 pl-3">Design v2.1</span>
                        </h1>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                icon={isDark ? Sun : Moon}
                                onClick={toggleTheme}
                                className="w-11 h-11 p-0 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400 shadow-none"
                            />
                        </div>
                    </div>

                    {/* 0. Themes & Aesthetics */}
                    <Section title="0. Design Token & Highlights (الألوان والخلفيات)">
                        <div className="grid grid-cols-1 gap-10">
                            {/* Full Color Palette — Professional Circles */}
                            <div>
                                <h3 className="text-[11px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <div className="w-4 h-[2px] bg-blue-500" />
                                    Color Palette — All Tokens
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                                    {[
                                        { color: '#3b82f6', label: 'Primary', sub: 'Buttons / Main' },
                                        { color: '#00ffff', label: 'Cyan', sub: 'Dark Hover', glow: '#00ffff' },
                                        { color: '#b026ff', label: 'Purple', sub: 'BG Spheres', glow: '#b026ff' },
                                        { color: '#ef4444', label: 'Danger', sub: 'Delete / Error' },
                                        { color: '#f97316', label: 'Warning', sub: 'Restoration' },
                                        { color: '#10b981', label: 'Success', sub: 'Approved' },
                                        { color: '#f59e0b', label: 'Pending', sub: 'Waiting' },
                                        { color: '#0b0f1a', label: 'Dark Base', sub: 'Background' },
                                    ].map(({ color, label, sub, glow }) => (
                                        <div key={label} className="group relative flex flex-col items-center text-center gap-3">
                                            <div
                                                className="w-16 h-16 rounded-3xl transition-all duration-500 shadow-sm border-2 border-white/60 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6 group-hover:rounded-2xl"
                                                style={{
                                                    backgroundColor: color,
                                                    boxShadow: glow ? `0 10px 25px -5px ${glow}88` : `0 10px 20px -5px ${color}44`
                                                }}
                                            />
                                            <div className="space-y-0.5">
                                                <p className="text-sm font-black text-gray-800 dark:text-white uppercase tracking-tighter">{label}</p>
                                                <p className="text-[10px] text-gray-400 font-bold dark:text-gray-500 leading-none">{sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Backgrounds */}
                            <div>
                                <h3 className="text-[11px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <div className="w-4 h-[2px] bg-blue-500" />
                                    Background Effects
                                </h3>
                                <div className="flex gap-4 h-28">
                                    <div className="flex-1 relative rounded-3xl overflow-hidden glass-panel-vanilla flex items-center justify-center border border-white group/bg">
                                        <div className="noise-bg" />
                                        <span className="font-black relative z-10 text-gray-800 dark:text-white uppercase tracking-widest text-[10px] opacity-50 group-hover/bg:opacity-100 transition-opacity">Glass + Noise</span>
                                    </div>
                                    <div className="flex-1 relative rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/10 bg-white dark:bg-black/20 group/bg">
                                        <div className="absolute inset-0 cyber-grid opacity-30" />
                                        <span className="font-black relative z-10 text-gray-800 dark:text-white uppercase tracking-widest text-[10px] opacity-50 group-hover/bg:opacity-100 transition-opacity">Cyber Grid</span>
                                    </div>
                                    <div className="flex-1 relative rounded-3xl overflow-hidden flex items-center justify-center border border-cyan-500/20 dark:border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 group/bg">
                                        <span className="font-black text-blue-900/40 dark:text-cyan-400/50 uppercase tracking-widest text-[10px] opacity-50 group-hover/bg:opacity-100 transition-opacity">Glass Tint</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 1. Statistics Cards */}
                    <Section title="1. Statistics Cards (كاردات الاحصاءات)">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatisticsCard title="Total Users" value="1,204" icon={Users} accent="blue" trend="up" trendValue="+12%" />
                            <StatisticsCard title="Active Sessions" value="84" icon={Activity} accent="purple" trend="up" trendValue="+5%" />
                            <StatisticsCard title="System Alerts" value="3" icon={AlertTriangle} accent="red" trend="down" trendValue="-2%" />
                            <StatisticsCard title="Server nodes" value="12" icon={Database} accent="green" trend="up" trendValue="+18%" />
                        </div>
                    </Section>

                    {/* 2. Icons and Buttons */}
                    <Section title="2. Icons & Buttons (الايكون و الازرار)">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Action Buttons</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary" icon={<Plus size={18} />}>إضافة جديد</Button>
                                    <Button variant="danger" icon={<Trash size={18} />}>حذف المحدد</Button>
                                    <Button variant="outline" icon={<Printer size={18} />}>طباعة التقرير</Button>
                                    <Button variant="outline" icon={<Download size={18} />}>تصدير Excel</Button>
                                    <Button variant="primary" icon={<UploadCloud size={18} />}>رفع وصورة</Button>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Button variant="outline" icon={<Download size={18} />}>نسخ احتياطي</Button>
                                    <Button variant="outline" icon={<History size={18} />}>استعادة</Button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">View & Action Icons</h3>
                                <div className="flex flex-wrap items-center gap-4 p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/80 dark:border-white/10 w-fit backdrop-blur-xl">
                                    <ViewToggle />
                                    <div className="w-px h-8 bg-gray-300 dark:bg-white/10 mx-2"></div>
                                    <ActionIcon type="users" tooltip="Manage Employees" />
                                    <ActionIcon type="statistics" tooltip="Analytics" />

                                    <div className="w-px h-8 bg-gray-300 dark:bg-white/10 mx-2"></div>
                                    <ActionIcon type="upload" tooltip="رفع صورة" />
                                    <ActionIcon type="backup" tooltip="نسخ احتياطي" />
                                    <ActionIcon type="restore" tooltip="استعادة" />
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 3. Filters & Search */}
                    <Section title="3. Filter System & Search (نظام الفلتر و البحث)" className="relative" style={{ zIndex: 50 }}>
                        <div className="flex flex-wrap items-center gap-6">
                            <SearchField placeholder="Search the system..." />

                            <FilterPanel
                                filters={[
                                    { label: "Status", type: "select", key: "status", options: [{ value: "active", label: "Active" }, { value: "suspended", label: "Suspended" }, { value: "error", label: "Error" }] },
                                    { label: "Department", type: "select", key: "dept", options: [{ value: "sales", label: "Sales" }, { value: "hr", label: "HR" }] },
                                    { label: "Date From", type: "date", key: "dateFrom" },
                                    { label: "Date To", type: "date", key: "dateTo" },
                                ]}
                            />
                        </div>

                        <div className="mt-8 border-t border-gray-200/50 dark:border-white/10 pt-6 relative z-10">
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Inline Filter View (قائمة فلاتر مدمجة)</h3>
                            <FilterPanel
                                inline={true}
                                filters={[
                                    { label: "Product Matrix", type: "select", key: "pm", options: [{ value: "neon", label: "Neon Optics" }, { value: "quantum", label: "Quantum Cores" }] },
                                    { label: "Region Code", type: "text", key: "region", placeholder: "e.g. EU-01" },
                                    { label: "Min Quantity", type: "number", key: "qty", placeholder: "0" },
                                ]}
                            />
                        </div>
                    </Section>

                    {/* 4. Tabs */}
                    <Section title="4. Tabs System (تابات بنصوص، واخرى بأيقونات)">
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Text Only Tabs</h3>
                                <Tabs
                                    defaultTab="docs"
                                    tabs={[
                                        { id: 'docs', label: 'Documentation' },
                                        { id: 'api', label: 'API Reference' },
                                        { id: 'examples', label: 'Examples' }
                                    ]}
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tabs with Icons & Text</h3>
                                <Tabs
                                    defaultTab="dashboard"
                                    tabs={[
                                        { id: 'dashboard', label: 'Dashboard', icon: Home },
                                        { id: 'sec', label: 'Security', icon: Shield },
                                        { id: 'notif', label: 'Notifications', icon: Bell },
                                        { id: 'conf', label: 'Settings', icon: Settings }
                                    ]}
                                />
                            </div>
                        </div>
                    </Section>

                    {/* 5. Data Tables */}
                    <Section title="5. Data Tables (الجداول) - Table / Cards Toggle">
                        <div className="flex justify-between items-end mb-6">
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Reusable table with built-in view mode toggle.</p>
                            <div className="view-switcher">
                                <button onClick={() => setTableViewMode('table')} className={tableViewMode === 'table' ? 'view-switcher-btn-active' : 'view-switcher-btn-inactive'}>Table View</button>
                                <button onClick={() => setTableViewMode('grid')} className={tableViewMode === 'grid' ? 'view-switcher-btn-active' : 'view-switcher-btn-inactive'}>Card View</button>
                            </div>
                        </div>

                        <Table
                            viewMode={tableViewMode}
                            columns={[
                                { header: 'Trans ID', accessor: 'id', sortable: true },
                                { header: 'Product', accessor: 'product', sortable: true, render: (row) => <span className="font-semibold">{row.product}</span> },
                                { header: 'Type', accessor: 'type' },
                                {
                                    header: 'Status', accessor: 'status', render: (row) => (
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                                            {row.status}
                                        </div>
                                    )
                                },
                                { header: 'Date', accessor: 'date' }
                            ]}
                            data={[
                                { id: 'TRX-8902', product: 'Quantum Processors', type: 'INBOUND', status: 'Completed', date: 'Today, 10:42 AM' },
                                { id: 'TRX-8901', product: 'Neon Matrix Displays', type: 'OUTBOUND', status: 'Completed', date: 'Today, 09:15 AM' },
                                { id: 'TRX-8900', product: 'Memory Modules 32GB', type: 'TRANSFER', status: 'Completed', date: 'Yesterday' }
                            ]}
                        />

                        <div className="mt-10 border-t border-gray-200/50 dark:border-white/10 pt-8 relative z-10">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">Status Emphasized Table (تلوين الحواف بالبطاقات)</h3>
                            <Table
                                viewMode={tableViewMode}
                                cardClassName={(row) => {
                                    const s = row.status.toLowerCase();
                                    if (s.includes('approved') || s.includes('document')) return 'status-card-approved';
                                    if (s.includes('pending')) return 'status-card-pending';
                                    if (s.includes('reject') || s.includes('cancel')) return 'status-card-rejected';
                                    return '';
                                }}
                                columns={[
                                    { header: 'Request ID', accessor: 'reqId', sortable: true },
                                    { header: 'Applicant', accessor: 'user', sortable: true, render: (row) => <span className="font-semibold text-blue-600 dark:text-cyan-300">{row.user}</span> },
                                    { header: 'Department', accessor: 'dept' },
                                    {
                                        header: 'Status', accessor: 'status', render: (row) => {
                                            const s = row.status.toLowerCase();
                                            if (s.includes('approved') || s.includes('document')) return <span className="badge-success">Approved / Document</span>;
                                            if (s.includes('pending')) return <span className="badge-pending">Pending</span>;
                                            if (s.includes('reject') || s.includes('cancel')) return <span className="badge-danger">Reject / Canceled</span>;
                                            return <span className="px-3 py-1 rounded-xl text-xs font-bold border backdrop-blur-sm bg-gray-500/10 text-gray-700 border-gray-500 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-400">{row.status}</span>;
                                        }
                                    },
                                    { header: 'Created At', accessor: 'date' },
                                    {
                                        header: 'Actions', accessor: 'actions', render: (row) => (
                                            <div className="flex items-center gap-1.5 justify-end" onClick={(e) => e.stopPropagation()}>
                                                <ActionIcon type="view" tooltip="تفاصيل" />
                                                <ActionIcon type="edit" tooltip="تعديل" />
                                                <ActionIcon type="call" tooltip="اتصال" />
                                                <ActionIcon type="delete" tooltip="حذف" onClick={() => setDeleteModalOpen(true)} />
                                            </div>
                                        )
                                    }
                                ]}
                                data={[
                                    { reqId: 'RQ-A981', user: 'Sarah Jenkins', dept: 'Legal Operations', status: 'approved/document', date: 'Nov 12, 10:00 AM' },
                                    { reqId: 'RQ-A982', user: 'Mikael Ross', dept: 'Cyber Security', status: 'pending', date: 'Nov 14, 08:30 AM' },
                                    { reqId: 'RQ-A983', user: 'Dr. Alene', dept: 'System Architecture', status: 'reject/cancel', date: 'Nov 15, 14:45 PM' }
                                ]}
                            />
                        </div>
                    </Section>

                    {/* 6. Dynamic Forms */}
                    <Section title="6. Dynamic Form Setup (نظام الصفوف الديناميكية)">
                        <DynamicRowInput
                            columns={[
                                { key: 'item', label: 'اسم البند', placeholder: 'مثال: كمبيوتر' },
                                { key: 'qty', label: 'الكمية', placeholder: '0', type: 'number' },
                                { key: 'price', label: 'السعر (ر.س)', placeholder: '0.00', type: 'number' },
                            ]}
                            minRows={2}
                        />
                    </Section>

                    {/* 7. Background Details */}
                    <Section title="7. Base Background Explanation (الخلفيات الأساسية)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            <div className="bg-[#f3f6f9] rounded-3xl p-8 border border-gray-200 shadow-md relative overflow-hidden text-gray-800 min-h-[250px] group hover:shadow-xl transition-all">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(176, 38, 255, 0.12) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.08) 0%, transparent 50%)" }}></div>
                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-white shadow-md border border-gray-200"></div>
                                        <h4 className="font-bold text-xl tracking-tight text-blue-900">Light Mode Background</h4>
                                        <span className="font-mono bg-white px-2 py-0.5 rounded shadow-sm text-xs border border-gray-100 ml-auto select-all">#f3f6f9</span>
                                    </div>
                                    <p className="font-semibold text-gray-700 text-base">الخلفية فاتحة جداً وليست بيضاء بالكامل لتقليل إجهاد العين.</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                                        <li>تستخدم 3 تدرجات دائرية (Radial Gradients).</li>
                                        <li>تم تفعيل هذه التدرجات عند تمرير الماوس (Hover) لرؤيتها بوضوح!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#050810] rounded-3xl p-8 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden text-gray-200 min-h-[250px] group hover:shadow-[0_15px_50px_rgba(0,255,255,0.15)] transition-all">
                                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(0, 255, 255, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(176, 38, 255, 0.15), transparent 25%)" }}></div>
                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"></div>
                                        <h4 className="font-bold text-xl tracking-tight text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Dark Mode Background</h4>
                                        <span className="font-mono bg-black/50 px-2 py-0.5 rounded border border-white/20 ml-auto select-all text-cyan-300">#050810</span>
                                    </div>
                                    <p className="font-semibold text-gray-300 text-base">الخلفية سوداء مزرقة تخلق عمقاً للـ Glassmorphism.</p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1 mt-2">
                                        <li>تحتوي على تدرجات دائرية خافتة (0.06 opacity).</li>
                                        <li>مرر الماوس (Hover) لترى التنبيه الضوئي يسطع!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 7. Modals System */}
                    <Section title="7. Modals & Dialogs (النوافذ المنبثقة)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="preview-card preview-card-danger group">
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2"><Trash className="w-5 h-5 text-red-500" />نافذة الإجراءات الحرجة (Danger)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">نافذة طلب تأكيد لعملية حساسة مثل الحذف مع حقل لإدخال ملاحظات.</p>
                                </div>
                                <div className="relative z-10 pt-4 border-t border-gray-200/50 dark:border-white/10 mt-auto">
                                    <Button className="w-full" variant="danger" icon={<Trash size={18} />} onClick={() => setDeleteModalOpen(true)}>تجربة نافذة الحذف</Button>
                                </div>
                            </div>

                            <div className="preview-card preview-card-primary group">
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2"><UploadCloud className="w-5 h-5 text-cyan-500" />نافذة المهام التفاعلية (Primary)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">نافذة تتطلب تفاعلاً مثل رفع الملفات مع خيار السحب والإفلات وعرض الصورة.</p>
                                </div>
                                <div className="relative z-10 pt-4 border-t border-gray-200/50 dark:border-white/10 mt-auto">
                                    <Button className="w-full" variant="primary" icon={<UploadCloud size={18} />} onClick={() => setUploadModalOpen(true)}>تجربة نافذة الرفع</Button>
                                </div>
                            </div>

                            <div className="preview-card preview-card-success group">
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2"><Download className="w-5 h-5 text-emerald-500" />نظام النسخ الاحتياطي (Data)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">نافذة مخصصة لاختيار إعدادات وتاريخ إنشاء نسخة أمان لقاعدة البيانات.</p>
                                </div>
                                <div className="relative z-10 pt-4 border-t border-gray-200/50 dark:border-white/10 mt-auto">
                                    <Button className="w-full" variant="outline" icon={<Download size={18} />} onClick={() => setBackupModalOpen(true)}>تجربة النسخ الاحتياطي</Button>
                                </div>
                            </div>

                            <div className="preview-card preview-card-warning group">
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2"><History className="w-5 h-5 text-orange-500" />نظام الاستعادة (Warning)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">نافذة من نوع "تحذير" وتتضمن استعادة البيانات بحذر واختيار النقطة الزمنية.</p>
                                </div>
                                <div className="relative z-10 pt-4 border-t border-gray-200/50 dark:border-white/10 mt-auto">
                                    <Button className="w-full border-orange-500/20 hover:border-orange-500 hover:text-orange-500" variant="outline" icon={<History size={18} />} onClick={() => setRestoreModalOpen(true)}>تجربة استعادة النظام</Button>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Modals Implementation (Invisible Mounts) */}
                    <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title="تأكيد الحذف" icon={Trash} theme="danger">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">هل أنت متأكد من رغبتك في حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء.</p>
                        <div className="space-y-1.5 mb-5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">ملاحظة (اختياري)</label>
                            <textarea className="modal-textarea" rows="3" placeholder="أدخل سبب الحذف..." />
                        </div>
                        <div className="flex justify-end gap-2.5 pt-4 border-t border-black/8 dark:border-white/8">
                            <Button variant="ghost" onClick={() => setDeleteModalOpen(false)}>إلغاء</Button>
                            <Button variant="danger" icon={<Trash size={15} />}>تأكيد الحذف</Button>
                        </div>
                    </Modal>

                    <Modal isOpen={uploadModalOpen} onClose={() => { setUploadModalOpen(false); setImagePreview(null); }} title="رفع صورة" icon={ImagePlus} theme="primary">
                        <div className="mb-5">
                            {!imagePreview ? (
                                <label htmlFor="imageUpload" className="cursor-pointer block">
                                    <div className="upload-dropzone">
                                        <UploadCloud className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors" />
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">اجلب صورة هنا أو اضغط للتصفح</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">PNG, JPG, SVG — Max 5MB</p>
                                    </div>
                                    <input type="file" className="hidden" id="imageUpload" accept="image/*" onChange={(e) => {
                                        if (e.target.files[0]) setImagePreview(URL.createObjectURL(e.target.files[0]));
                                    }} />
                                </label>
                            ) : (
                                <div className="rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 shadow-sm">
                                    {/* Full image at natural proportions */}
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full object-contain max-h-72 bg-gray-50 dark:bg-black/20"
                                    />
                                    {/* Bottom strip */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-gray-800/60 border-t border-gray-200/60 dark:border-white/8 backdrop-blur-sm">
                                        <div className="flex items-center gap-2">
                                            <ImagePlus className="w-4 h-4 text-blue-500 dark:text-cyan-400 shrink-0" />
                                            <span className="text-xs text-gray-500 dark:text-gray-400">صورة محددة</span>
                                        </div>
                                        <button
                                            onClick={() => setImagePreview(null)}
                                            className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 border border-red-200 dark:border-red-500/20 px-3 py-1.5 rounded-lg transition-all"
                                        >
                                            <Trash className="w-3.5 h-3.5" />
                                            إزالة
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end gap-2.5 pt-4 border-t border-black/8 dark:border-white/8">
                            <Button variant="ghost" onClick={() => { setUploadModalOpen(false); setImagePreview(null); }}>إغلاق</Button>
                            <Button variant="primary" icon={<UploadCloud size={15} />} onClick={() => setUploadModalOpen(false)}>حفظ</Button>
                        </div>
                    </Modal>

                    <Modal isOpen={backupModalOpen} onClose={() => setBackupModalOpen(false)} title="نسخ احتياطي" icon={Download} theme="primary">
                        <div className="mb-5">
                            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-100 dark:border-cyan-500/15 text-sm text-blue-700 dark:text-cyan-300 mb-5">
                                <Database className="w-4 h-4 mt-0.5 shrink-0" />
                                <span className="leading-relaxed">سيتم إنشاء نسخة احتياطية مشفرة لجميع البيانات وتخزينها بأمان.</span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">اختر نوع النسخة</p>
                            <div className="space-y-2">
                                {[
                                    { value: 'full', label: 'نسخة كاملة', desc: 'قاعدة البيانات + الملفات' },
                                    { value: 'db', label: 'نسخة سريعة', desc: 'قاعدة البيانات فقط' },
                                    { value: 'data', label: 'بيانات فقط', desc: 'سجلات ومدخلات النظام فقط' },
                                ].map(opt => {
                                    const isActive = backupType === opt.value;
                                    return (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => setBackupType(opt.value)}
                                            className={isActive ? 'backup-option-active' : 'backup-option-inactive'}
                                        >
                                            {/* Radio indicator */}
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${isActive
                                                    ? 'border-blue-500 dark:border-cyan-400 bg-blue-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(0,255,255,0.6)]'
                                                    : 'border-gray-300 dark:border-gray-600'
                                                }`}>
                                                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                            </div>
                                            {/* Text */}
                                            <div className="flex-1 text-left">
                                                <p className={`text-sm font-semibold transition-colors ${isActive ? 'text-blue-700 dark:text-cyan-300' : 'text-gray-800 dark:text-gray-200'
                                                    }`}>{opt.label}</p>
                                                <p className={`text-xs transition-colors ${isActive ? 'text-blue-500/80 dark:text-cyan-400/70' : 'text-gray-400 dark:text-gray-500'
                                                    }`}>{opt.desc}</p>
                                            </div>
                                            {/* Active checkmark badge */}
                                            {isActive && (
                                                <span className="text-[10px] font-bold text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-500/30 px-2 py-0.5 rounded-full shrink-0">✓ محدد</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2.5 pt-4 border-t border-black/8 dark:border-white/8">
                            <Button variant="ghost" onClick={() => setBackupModalOpen(false)}>إلغاء</Button>
                            <Button variant="primary" icon={<Download size={15} />}>بدء النسخ</Button>
                        </div>
                    </Modal>

                    <Modal isOpen={restoreModalOpen} onClose={() => setRestoreModalOpen(false)} title="استعادة نسخة" icon={History} theme="warning">
                        <div className="mb-5">
                            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/15 text-sm text-orange-700 dark:text-orange-300 mb-5">
                                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                                <span className="leading-relaxed">ستتم استعادة البيانات إلى حالة سابقة. ستفقد التغييرات التي حدثت بعد هذه النسخة.</span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">اختر النسخة</p>
                            <div className="space-y-2">
                                {[
                                    { label: 'نسخة 21-03-2026 — 12:00 AM', badge: 'تلقائي', badgeColor: 'bg-blue-100 dark:bg-cyan-500/15 text-blue-600 dark:text-cyan-400 border-blue-200 dark:border-cyan-500/20' },
                                    { label: 'نسخة 20-03-2026 — 08:30 PM', badge: 'يدوي', badgeColor: 'bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' },
                                    { label: 'نسخة 19-03-2026 — 12:00 AM', badge: 'تلقائي', badgeColor: 'bg-blue-100 dark:bg-cyan-500/15 text-blue-600 dark:text-cyan-400 border-blue-200 dark:border-cyan-500/20' },
                                ].map((item, i) => (
                                    <label key={i} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-black/6 dark:border-white/6 bg-black/[0.02] dark:bg-white/[0.02] hover:border-orange-300 dark:hover:border-orange-500/40 hover:bg-orange-50/30 dark:hover:bg-orange-500/5 cursor-pointer transition-all duration-150 group">
                                        <div className="flex items-center gap-3">
                                            <input type="radio" name="restorePoint" defaultChecked={i === 0} className="peer sr-only" />
                                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-orange-400 dark:group-hover:border-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-500 dark:peer-checked:border-orange-400 dark:peer-checked:bg-orange-400 flex items-center justify-center shrink-0 transition-all">
                                            </div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                                        </div>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor} shrink-0`}>{item.badge}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2.5 pt-4 border-t border-black/8 dark:border-white/8">
                            <Button variant="ghost" onClick={() => setRestoreModalOpen(false)}>إلغاء</Button>
                            <Button variant="primary" icon={<History size={15} />}>استعادة الآن</Button>
                        </div>
                    </Modal>

                </div>
            </div>
        </>
    );
}
