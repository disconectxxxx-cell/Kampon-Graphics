"use client";
import React, { useState } from 'react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'standard',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // คำนวณค่ามัดจำตามบริการที่เลือก
  const depositAmount = formData.service === 'premium' ? 500 : 300;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: เชื่อมต่อระบบบันทึกข้อมูลและลิ้งก์จ่ายเงินตรงนี้
    setTimeout(() => {
      alert(`บันทึกข้อมูลสำเร็จ! กรุณาโอนเงินมัดจำจำนวน ${depositAmount} บาท`);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          จองคิวนัดหมายออนไลน์
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          กรุณากรอกข้อมูลเพื่อล็อควันและเวลาของคุณ
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-slate-100 rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* ชื่อ-นามสกุล */}
            <div>
              <label className="block text-sm font-medium text-slate-700">ชื่อ - นามสกุล</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                placeholder="สมชาย ใจดี"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* เบอร์โทรศัพท์ */}
            <div>
              <label className="block text-sm font-medium text-slate-700">เบอร์โทรศัพท์</label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                placeholder="089-XXX-XXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* เลือกบริการ */}
            <div>
              <label className="block text-sm font-medium text-slate-700">บริการที่ต้องการ</label>
              <select
                name="service"
                className="mt-1 block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all bg-white"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="standard">บริการทั่วไป (มัดจำ 300 บาท)</option>
                <option value="premium">บริการพิเศษ/VIP (มัดจำ 500 บาท)</option>
              </select>
            </div>

            {/* วันและเวลา */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">เลือกวัน</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">เลือกเวลา</label>
                <input
                  type="time"
                  name="time"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ยอดมัดจำสรุป */}
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex justify-between items-center">
              <span className="text-sm font-medium text-indigo-900">ยอดเงินมัดจำที่ต้องชำระ:</span>
              <span className="text-xl font-bold text-indigo-600">{depositAmount} บาท</span>
            </div>

            {/* ปุ่มกดยืนยัน */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:bg-slate-400"
              >
                {isSubmitting ? 'กำลังบันทึกข้อมูล...' : 'ยืนยันการจองและไปที่หน้าชำระเงิน'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}