// app/page.js
"use client";
import React, { useState } from 'react';

export default function KamponGraphicsMinimal() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    details: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#2C2C2C] font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header ร้าน สไตล์มินิมอล */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-wide text-slate-900 mb-3 font-serif">
            Kampon Graphics
          </h1>
          <p className="text-sm tracking-widest text-slate-400 uppercase">
            ระบบจองคิวและรับมัดจำออนไลน์
          </p>
          <div className="w-12 h-[1px] bg-slate-300 mx-auto mt-6"></div>
        </div>

        {/* ส่วนเนื้อหาหลัก */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* ซีกซ้าย: ข้อมูลการโอนเงิน (คลีนๆ) */}
          <div className="space-y-8 p-2">
            <div>
              <h2 className="text-lg font-medium text-slate-800 mb-4">ข้อมูลการวางมัดจำ</h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-500">ค่ามัดจำว่าจ้างงานถ่ายภาพ</span>
                  <span className="text-2xl font-semibold text-slate-900">฿300</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  กรุณาโอนเงินมัดจำเพื่อล็อคสิทธิ์คิวงานในปฏิทิน จากนั้นกรอกข้อมูลด้านขวาเพื่อยืนยันคิวครับ
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">บัญชีธนาคาร</h3>
              <div className="border-l-2 border-slate-200 pl-4 space-y-1 text-sm text-slate-600">
                <p className="font-medium text-slate-800">ธนาคารกสิกรไทย</p>
                <p className="font-mono text-base tracking-wider text-slate-900 my-1">012-3-45678-9</p>
                <p className="text-xs text-slate-400">ชื่อบัญชี: นายกำพล (Kampon Graphics)</p>
              </div>
            </div>
          </div>

          {/* ซีกขวา: ฟอร์มกรอกข้อมูลผู้จอง */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 bg-slate-50 text-slate-800 rounded-full flex items-center justify-center mx-auto border border-slate-200 text-xl">✓</div>
                <h3 className="text-xl font-medium text-slate-900">บันทึกคิวสำเร็จ</h3>
                <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
                  ระบบได้ทำการเชื่อมต่อและลงบันทึกวันนัดหมายใน Google Calendar ของร้านเรียบร้อยแล้ว
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-medium text-slate-800 mb-2">ข้อมูลผู้จองคิว</h2>

                <div>
                  <label className="block text-xs text-slate-400 mb-2">ชื่อ - นามสกุล</label>
                  <input
                    type="text" name="name" required placeholder="กรอกชื่อของคุณ"
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none"
                    value={formData.name} onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-2">เบอร์โทรศัพท์</label>
                  <input
                    type="tel" name="phone" required placeholder="089-XXX-XXXX"
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none"
                    value={formData.phone} onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">เลือกวันนัดหมาย</label>
                    <input
                      type="date" name="date" required
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none text-slate-600"
                      value={formData.date} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">เวลา</label>
                    <input
                      type="time" name="time" required
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none text-slate-600"
                      value={formData.time} onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-2">รายละเอียดงานเพิ่มเติม</label>
                  <textarea
                    name="details" rows="3" placeholder="ระบุสถานที่ หรือธีมงานที่ต้องการถ่ายภาพ..."
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all outline-none resize-none"
                    value={formData.details} onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl tracking-wider shadow-sm transition-all transform active:scale-[0.99] disabled:bg-slate-200 disabled:text-slate-400"
                >
                  {status === 'loading' ? 'กำลังบันทึกคิว...' : 'ยืนยันการจองและลงปฏิทิน'}
                </button>

                <p className="text-[11px] text-center text-slate-400 leading-relaxed">
                  * คิวงานจะลงปฏิทิน Google Calendar อัตโนมัติทันทีหลังกดยืนยัน
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
