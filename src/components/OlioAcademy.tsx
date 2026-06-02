// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ═══════════════════════════════════════════════════════════
// LOGO COMPONENTS
// ═══════════════════════════════════════════════════════════

function LogoMark({ size = 64, strokeColor = "#3D4E2E", dotColor = "#C9A961" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
      <path
        d="M 68 18 C 50 12, 28 22, 18 42 C 8 62, 18 84, 38 90 C 60 96, 84 84, 88 62 C 90 48, 86 36, 78 28"
        fill="none"
        stroke={strokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="22" r="4.5" fill={dotColor} />
    </svg>
  );
}

function Logo({ markSize = 64, fontSize = 44, layout = "stacked", textColor = "#2A2A24", academyColor = "#8B7A4A", subtitle = "Sommelier Path" }) {
  const academySize = Math.max(Math.round(fontSize * 0.26), 9);
  const subSize = Math.max(Math.round(fontSize * 0.18), 8);
  if (layout === "horizontal") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <LogoMark size={markSize} />
        <div>
          <div className="display-font" style={{ fontSize: `${fontSize}px`, color: textColor, lineHeight: 0.9, fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em" }}>
            Olio
          </div>
          <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "#3D4E2E", fontSize: `${academySize}px`, marginTop: "4px" }}>
            Academy
          </div>
          {subtitle && (
            <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: academyColor, fontSize: `${subSize}px`, marginTop: "3px" }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
      <LogoMark size={markSize} />
      <div style={{ textAlign: "center" }}>
        <div className="display-font" style={{ fontSize: `${fontSize}px`, color: textColor, lineHeight: 0.9, fontStyle: "italic", fontWeight: 300 }}>
          Olio
        </div>
        <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "#3D4E2E", fontSize: `${academySize}px`, marginTop: "6px" }}>
          Academy
        </div>
        {subtitle && (
          <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", color: academyColor, fontSize: `${subSize}px`, marginTop: "6px" }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// COURSE CONTENT — 10 MODULES
// ═══════════════════════════════════════════════════════════

const MODULES = [
  // ──────────────────────────────────────────────────
  // MODULE 1: Foundation
  // ──────────────────────────────────────────────────
  {
    id: 1,
    roman: "I",
    title: "Foundation",
    title_th: "พื้นฐาน EVOO",
    subtitle: "What olive oil really is",
    description: "เริ่มจากศูนย์ — ประวัติศาสตร์ + เกรด + ทำไม EVOO ต่าง",
    duration: "30 นาที",
    icon: "🫒",
    lessons: [
      {
        id: "1.1",
        title: "ประวัติศาสตร์ EVOO 6,000 ปี",
        title_en: "6,000 Years of Olive Oil",
        sections: [
          {
            title: "ของเหลวศักดิ์สิทธิ์ของเมดิเตอร์เรเนียน",
            body: "EVOO เริ่มต้นเมื่อ **6,000 ปีก่อน** ที่ Mediterranean basin — ครีต ซีเรีย เลบานอน คนโบราณใช้น้ำมันมะกอกเป็น **อาหาร ยา เครื่องสำอาง น้ำหอม และเชื้อเพลิงโคมไฟ** ทั้งหมดในขวดเดียว",
            keyPoints: [
              { label: "5500 BC", detail: "ค้นพบหินบดมะกอกเก่าสุดที่ Crete (Minoan)" },
              { label: "1000 BC", detail: "ชาว Phoenicians กระจายต้นมะกอกทั่ว Mediterranean" },
              { label: "Ancient Greece", detail: "Olympic winners ได้รับ olive crown — สัญลักษณ์ของการชนะ" },
              { label: "Roman Empire", detail: "EVOO grading system แรกของโลก — มี 5 เกรด" },
              { label: "Today", detail: "Spain คือผู้ผลิตอันดับ 1 (50% ของโลก), Italy อันดับ 2" },
            ],
          },
          {
            title: "ทำไมเรื่องนี้สำคัญสำหรับ Hibi",
            body: "Hibi กำลังนำของที่มีประวัติ 6,000 ปีมาจับคู่กับมัทฉะ 800 ปี = สองวัฒนธรรมที่ลึกที่สุดของมนุษย์",
            highlight: true,
            keyPoints: [
              { label: "Story selling", detail: "เล่าประวัติ = ขายราคาได้สูงขึ้นโดยไม่ต้อง discount" },
              { label: "Authority", detail: "Founder ที่รู้ประวัติ = แบรนด์ที่มี depth" },
              { label: "Differentiation", detail: "คาเฟ่อื่นแค่ใส่ EVOO — Hibi มี story 6,000 ปี" },
            ],
          },
        ],
      },
      {
        id: "1.2",
        title: "8 เกรดของน้ำมันมะกอก",
        title_en: "The 8 Grades — EU Classification",
        sections: [
          {
            title: "Hierarchy ของน้ำมันมะกอก",
            body: "ตามมาตรฐาน EU (Regulation 2568/91) แบ่งน้ำมันมะกอกเป็น 8 เกรด เรียงจากดีที่สุดไปแย่ที่สุด — Hibi ใช้แค่เกรดบนสุด",
            keyPoints: [
              { label: "1. EVOO (Extra Virgin)", detail: "★★★★★ Acidity < 0.8% · ไม่มี defects · cold-pressed" },
              { label: "2. Virgin Olive Oil", detail: "★★★★ Acidity < 2% · มี defect เล็กน้อย" },
              { label: "3. Ordinary Virgin", detail: "★★★ Acidity < 3.3% · ใช้สำหรับ commerce" },
              { label: "4. Lampante Virgin", detail: "★★ Acidity > 3.3% · ใช้ทำอาหารไม่ได้ ต้อง refine" },
              { label: "5. Refined Olive Oil", detail: "★★ Lampante ที่ผ่านสาร chemical refining" },
              { label: "6. Olive Oil (blend)", detail: "★ Refined + นิดเดียวของ Virgin = ไม่มี character" },
              { label: "7. Crude Pomace Oil", detail: "❌ สกัดจากกาก ด้วย solvent" },
              { label: "8. Refined Pomace Oil", detail: "❌ Pomace ที่ refine แล้ว — ห้ามใช้ที่ Hibi!" },
            ],
            highlight: true,
          },
          {
            title: "วิธีอ่านขวดที่ supermarket",
            body: "เวลาช้อปที่ Tops, Villa, Lemon Farm ดูสิ่งเหล่านี้บนฉลาก",
            keyPoints: [
              { label: "✅ ต้องมี", detail: '"Extra Virgin" + harvest date + variety/origin' },
              { label: "⚠️ ระวัง", detail: '"Pure Olive Oil" = blend grade 6 ไม่ใช่ EVOO!' },
              { label: "❌ หลีกเลี่ยง", detail: '"Pomace", "Olive-Pomace" — เกรดต่ำสุด' },
              { label: "🔍 Hidden indicator", detail: "ขวดใส = แสงทำลายคุณภาพ — เลือก dark glass หรือ tin" },
            ],
          },
        ],
      },
      {
        id: "1.3",
        title: "EVOO vs น้ำมันอื่น",
        title_en: "Why EVOO is Different",
        sections: [
          {
            title: "เปรียบเทียบกับน้ำมันที่คนใช้บ่อย",
            body: "ทำไม EVOO ราคาแพงกว่า น้ำมันถั่วเหลือง 5-10 เท่า — มันคุ้มจริงไหม?",
            keyPoints: [
              { label: "EVOO", detail: "Cold-pressed · 60-80% MUFA · polyphenols 200-500 mg/kg · มี Oleocanthal" },
              { label: "Vegetable Oil (ทั่วไป)", detail: "Solvent-extracted · refined · ไม่มี antioxidants" },
              { label: "Canola/Rapeseed", detail: "Refined · มี omega-3 บ้าง แต่ไม่มี polyphenols" },
              { label: "Coconut Oil", detail: "92% saturated fat · มี MCT แต่ไม่มี anti-inflammatory" },
              { label: "Sunflower Oil", detail: "High omega-6 · ไม่ดีถ้ากินเยอะ" },
              { label: "Avocado Oil", detail: "MUFA สูงเหมือน EVOO แต่ไม่มี Oleocanthal" },
            ],
          },
          {
            title: "Key Insight",
            body: "EVOO ไม่ใช่ \"น้ำมัน\" ทั่วไป — เป็น **functional food** ที่มี anti-inflammatory compounds **ไม่มีในน้ำมันอื่นใด**",
            highlight: true,
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "EVOO มีประวัติยาวนานกี่ปี?", options: ["1,000 ปี", "3,000 ปี", "6,000 ปี", "10,000 ปี"], correct: 2 },
      { type: "mc", q: "ประเทศใดเป็นผู้ผลิต EVOO อันดับ 1 ของโลก?", options: ["Italy", "Spain", "Greece", "Tunisia"], correct: 1 },
      { type: "mc", q: "Acidity สูงสุดที่ EVOO มีได้คือเท่าไหร่?", options: ["0.5%", "0.8%", "1.5%", "3.3%"], correct: 1 },
      { type: "mc", q: "เกรดใดที่ Hibi ไม่ควรใช้?", options: ["Extra Virgin", "Virgin", "Olive Oil (blend)", "Pomace Oil"], correct: 3 },
      { type: "tf", q: "Pure Olive Oil คือ EVOO เกรดสูงสุด", correct: false, explain: '"Pure Olive Oil" คือ blend ของ refined + virgin — ไม่ใช่ EVOO' },
      { type: "tf", q: "EVOO มี Oleocanthal ที่ไม่มีในน้ำมันชนิดอื่น", correct: true, explain: "Oleocanthal เป็น polyphenol เฉพาะของ EVOO" },
      { type: "mc", q: "ทำไม EVOO ในขวดใสด้อยกว่าขวดสีเข้ม?", options: ["ราคาถูกกว่า", "แสงทำลาย polyphenols", "Plastic ละลาย", "ดูไม่สวย"], correct: 1 },
      { type: "mc", q: "ขั้นตอนใดทำให้น้ำมันมะกอกได้เกรด EVOO ได้?", options: ["Heat extraction", "Chemical refining", "Cold pressing", "Solvent extraction"], correct: 2 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 2: Chemistry
  // ──────────────────────────────────────────────────
  {
    id: 2,
    roman: "II",
    title: "Chemistry & Compounds",
    title_th: "เคมีและสารสำคัญ",
    subtitle: "What makes EVOO work",
    description: "Polyphenols, Oleocanthal, MUFA — สารที่ทำให้ EVOO เป็น superfood",
    duration: "45 นาที",
    icon: "🧪",
    lessons: [
      {
        id: "2.1",
        title: "Fatty Acid Profile",
        title_en: "ไขมันใน EVOO",
        sections: [
          {
            title: "3 ประเภทของไขมันที่ต้องรู้",
            body: "ไขมัน 100% ของ EVOO แบ่งเป็น 3 ประเภท — รู้สัดส่วนจะเข้าใจว่าทำไม EVOO ดีต่อหัวใจ",
            keyPoints: [
              { label: "MUFA (Monounsaturated)", detail: "70-80% · กรด Oleic เป็นหลัก · ดีต่อหัวใจ ลด LDL" },
              { label: "PUFA (Polyunsaturated)", detail: "5-15% · Linoleic acid (omega-6), Linolenic (omega-3)" },
              { label: "SFA (Saturated)", detail: "10-20% · Palmitic, Stearic — น้อยกว่าน้ำมันสัตว์มาก" },
            ],
            highlight: true,
          },
          {
            title: "Oleic Acid — พระเอกของ EVOO",
            body: "EVOO ที่ดีต้องมี Oleic acid 55-83% — เป็นกรดไขมันที่ทำให้ EVOO แตกต่าง",
            keyPoints: [
              { label: "ลด LDL (\"ไขมันร้าย\")", detail: "งานวิจัย Mediterranean Diet ยืนยันชัด" },
              { label: "ไม่กระทบ HDL (\"ไขมันดี\")", detail: "ไม่เหมือน PUFA ที่ลดทั้ง 2 ตัว" },
              { label: "Stable ที่ความร้อน", detail: "ทอด/ผัดได้ดีกว่าน้ำมันถั่วเหลือง" },
              { label: "เป็น carrier ของ polyphenols", detail: "ส่งสารดีไปยังเซลล์ได้" },
            ],
          },
        ],
      },
      {
        id: "2.2",
        title: "Polyphenols — สารต้านอนุมูลอิสระ",
        title_en: "The Antioxidant Powerhouse",
        sections: [
          {
            title: "Polyphenols คืออะไร",
            body: "Polyphenols เป็นสารประกอบอินทรีย์ที่มีในพืชเป็นล้านชนิด — ใน EVOO มี **30+ polyphenols** ที่ทำงานร่วมกันเป็น antioxidant complex",
            keyPoints: [
              { label: "ความเข้มข้น EVOO ดี", detail: "200-500 mg/kg (สูงคือดี!)" },
              { label: "ความเข้มข้น EVOO เกรดพรีเมียม", detail: "500-1,000+ mg/kg" },
              { label: "ขั้นต่ำที่กฎหมาย claim ได้", detail: "EU: ต้องมี 250 mg/kg ขึ้นไป" },
            ],
          },
          {
            title: "Polyphenols 5 ตัวสำคัญที่สุด",
            body: "ต้องท่องให้ได้ — จะได้ยินใน IRVEA และ ESAO",
            keyPoints: [
              { label: "1. Oleocanthal", detail: "Anti-inflammatory (เผ็ดร้อนในคอ!) เหมือน ibuprofen" },
              { label: "2. Oleacein", detail: "Anti-inflammatory + cardiovascular protection" },
              { label: "3. Hydroxytyrosol", detail: "Antioxidant แรงที่สุดในธรรมชาติ — 10x vitamin C" },
              { label: "4. Tyrosol", detail: "Anti-aging, neuroprotective" },
              { label: "5. Oleuropein", detail: "Antimicrobial, antiviral — สารที่ทำให้ olive ขม" },
            ],
            highlight: true,
          },
          {
            title: "Memory Trick",
            body: "จำ 3 ตัว O ที่สำคัญที่สุด: **O**leocanthal · **O**leacein · **O**leuropein — \"3 O ของ olive\"",
          },
        ],
      },
      {
        id: "2.3",
        title: "Oleocanthal Deep Dive",
        title_en: "The Magic Molecule",
        sections: [
          {
            title: "ทำไม Oleocanthal เป็น \"magic molecule\"",
            body: "ปี 2005 นักวิจัย Gary Beauchamp ค้นพบว่า EVOO สดทำให้คอเผ็ด **เหมือนกินยาแก้ปวด ibuprofen** — เพราะมี Oleocanthal",
            keyPoints: [
              { label: "Mechanism", detail: "ยับยั้ง enzyme COX-1 และ COX-2 — เหมือนยา anti-inflammatory" },
              { label: "ปริมาณต่อวัน", detail: '50ml EVOO ดีๆ = ผลเทียบเท่า 10% ของ "low-dose ibuprofen"' },
              { label: "ไม่มี side effects", detail: "ต่างจากยา NSAIDs ที่ทำลายกระเพาะ" },
              { label: "Alzheimer's research", detail: "พบว่าช่วยขจัด beta-amyloid plaques ในสมอง (lab tests)" },
            ],
            highlight: true,
          },
          {
            title: "เช็ค Oleocanthal ด้วยลิ้น",
            body: "**ความเผ็ดร้อนในคอ** ที่กลืน EVOO แล้วไอ = Oleocanthal สูง = EVOO สด คุณภาพดี",
            keyPoints: [
              { label: "3-cough Test", detail: "EVOO ที่ทำให้ไอ 3 ครั้ง = polyphenols สูง premium grade" },
              { label: "1-cough", detail: "ปานกลาง" },
              { label: "ไม่ไอเลย", detail: "Oleocanthal ต่ำ — อาจเก่า หรือเกรดธรรมดา" },
            ],
          },
        ],
      },
      {
        id: "2.4",
        title: "Vitamins & Pigments",
        title_en: "วิตามินและสี",
        sections: [
          {
            title: "สารอื่นๆ ที่ทำให้ EVOO สมบูรณ์",
            body: "นอกจาก polyphenols ยังมีสารอื่นๆ ที่ทำงานร่วมกัน",
            keyPoints: [
              { label: "Vitamin E (α-tocopherol)", detail: "Antioxidant fat-soluble · 14 mg ใน 100ml EVOO" },
              { label: "Chlorophyll", detail: "สีเขียว · มี antioxidant และ chelating effect" },
              { label: "Carotenoids", detail: "Beta-carotene, lutein · สีเหลือง-ส้ม · fat-soluble" },
              { label: "Squalene", detail: "ดีต่อผิว · 0.2-1% ของน้ำมัน — สูงที่สุดในน้ำมันพืช" },
              { label: "Sterols", detail: "β-sitosterol · ลดดูดซึม cholesterol" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "Oleic Acid ใน EVOO ดีคือควรมีกี่ %?", options: ["20-40%", "55-83%", "90-95%", "5-10%"], correct: 1 },
      { type: "mc", q: "Polyphenol ตัวใดที่ทำให้คอเผ็ดและมีฤทธิ์ anti-inflammatory?", options: ["Hydroxytyrosol", "Tyrosol", "Oleocanthal", "Oleuropein"], correct: 2 },
      { type: "mc", q: "Antioxidant ที่แรงที่สุดในธรรมชาติคือ?", options: ["Vitamin C", "Vitamin E", "Hydroxytyrosol", "Lycopene"], correct: 2 },
      { type: "tf", q: "EVOO มี Polyphenols 5-10 ชนิดเท่านั้น", correct: false, explain: "EVOO มี polyphenols 30+ ชนิด" },
      { type: "mc", q: "3-cough Test บ่งบอกอะไร?", options: ["EVOO มี acidity สูง", "Oleocanthal สูง (polyphenols ดี)", "EVOO เก่า", "EVOO แพง"], correct: 1 },
      { type: "mc", q: "MUFA ในที่นี้ย่อมาจาก?", options: ["Multi-Unsaturated Fatty Acids", "Monounsaturated Fatty Acids", "Modified Unrefined Fats", "Mediterranean Unsaturated Fats"], correct: 1 },
      { type: "tf", q: "EVOO ที่ดีต้องไม่ขมและไม่เผ็ดในคอ", correct: false, explain: "ความขมและเผ็ดเป็นสัญลักษณ์ของ polyphenols สูง = EVOO สดและดี" },
      { type: "mc", q: "ความเข้มข้น polyphenols ขั้นต่ำที่ EU อนุญาตให้ claim ได้?", options: ["100 mg/kg", "250 mg/kg", "500 mg/kg", "1000 mg/kg"], correct: 1 },
      { type: "mc", q: "Squalene ดีต่ออะไรเป็นพิเศษ?", options: ["ตา", "หัวใจ", "ผิว", "สมอง"], correct: 2 },
      { type: "tf", q: "Oleocanthal ทำงานคล้าย ibuprofen แต่ไม่มี side effects ต่อกระเพาะ", correct: true, explain: "ยับยั้ง COX-1/COX-2 แต่ในปริมาณที่ปลอดภัยไม่เหมือน NSAIDs" },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 3: Health Synergy
  // ──────────────────────────────────────────────────
  {
    id: 3,
    roman: "III",
    title: "Health & Matcha Synergy",
    title_th: "สุขภาพและการดูดซึม",
    subtitle: "Why EVOO + Matcha works",
    description: "Science ของ EVOO + matcha — Hibi DNA",
    duration: "40 นาที",
    icon: "💚",
    lessons: [
      {
        id: "3.1",
        title: "Cardiovascular Benefits",
        title_en: "ผลต่อหัวใจ",
        sections: [
          {
            title: "Mediterranean Diet — งานวิจัยใหญ่ที่สุด",
            body: "PREDIMED Study (Spain, 2013) — ติดตาม 7,447 คน 5 ปี กลุ่มที่กิน EVOO 50ml/วัน **ลดเสี่ยง heart disease 30%**",
            keyPoints: [
              { label: "Lower LDL", detail: "ไขมันร้ายลดลงผ่าน Oleic acid" },
              { label: "Higher HDL", detail: "ไขมันดีเพิ่มขึ้นเล็กน้อย" },
              { label: "Lower blood pressure", detail: "Polyphenols ขยายหลอดเลือด" },
              { label: "Anti-clotting", detail: "ลดการเกาะตัวของเกล็ดเลือด" },
            ],
          },
          {
            title: "⚠️ พูดอย่างปลอดภัยตามกฎหมายไทย",
            body: "พ.ร.บ.อาหาร 2522 ห้าม claim รักษาโรค — ใช้คำเหล่านี้แทน",
            highlight: true,
            keyPoints: [
              { label: "❌ ห้ามพูด", detail: '"รักษาโรคหัวใจ", "ลด cholesterol"' },
              { label: "✅ พูดได้", detail: '"เป็นส่วนหนึ่งของ heart-healthy diet"' },
              { label: "✅ พูดได้", detail: '"ไขมันดีจากเมดิเตอเรเนียน"' },
              { label: "✅ พูดได้", detail: '"PREDIMED study พบว่าเป็นส่วนของ Mediterranean diet"' },
            ],
          },
        ],
      },
      {
        id: "3.2",
        title: "Anti-Inflammatory Power",
        title_en: "ฤทธิ์ต้านการอักเสบ",
        sections: [
          {
            title: "Silent Inflammation — ปัญหายุคใหม่",
            body: "การอักเสบในร่างกายเรื้อรัง (silent inflammation) เชื่อมโยงกับโรค NCDs แทบทุกชนิด — EVOO ต่อสู้กับมัน",
            keyPoints: [
              { label: "Oleocanthal", detail: "ยับยั้ง COX-1/COX-2 enzymes" },
              { label: "Oleacein", detail: "ลด pro-inflammatory cytokines" },
              { label: "Hydroxytyrosol", detail: "ลด oxidative stress ในเซลล์" },
              { label: "Synergy", detail: "สาร 3 ตัวทำงานร่วมกัน = ผลแรงกว่าตัวเดียว 2-3 เท่า" },
            ],
          },
          {
            title: "ลูกค้าที่ Hibi ต้องการ Anti-inflammation",
            body: "กลุ่มที่ EVOO + Matcha ดีต่อพวกเขา",
            keyPoints: [
              { label: "Office workers", detail: "Stress + sedentary = inflammation" },
              { label: "Post-workout", detail: "Exercise inflammation recovery" },
              { label: "Aging skin care", detail: "Glycation + inflammation = wrinkles" },
              { label: "Athletes", detail: "Joint pain, muscle recovery" },
            ],
          },
        ],
      },
      {
        id: "3.3",
        title: "★ Matcha + EVOO Synergy",
        title_en: "หัวใจของ Hibi",
        sections: [
          {
            title: "Bioavailability Boost 2-7 เท่า",
            body: "สารดีในมัทฉะหลายตัวเป็น **fat-soluble** = ต้องการ \"ไขมันดี\" ในการดูดซึม — EVOO เป็น carrier ที่สมบูรณ์แบบ",
            highlight: true,
            keyPoints: [
              { label: "Catechins (EGCG)", detail: "ดูดซึมเพิ่ม 2-4 เท่า กับ MUFA" },
              { label: "Chlorophyll", detail: "Fat-soluble pigment — ต้องการไขมัน" },
              { label: "Carotenoids", detail: "Beta-carotene + lutein ใน matcha = fat-soluble" },
              { label: "L-theanine", detail: "Water-soluble แต่ EVOO ช่วย slow release" },
              { label: "Caffeine", detail: "Fat matrix ทำให้ release ช้า = no jitters" },
            ],
          },
          {
            title: "งานวิจัยที่ Hibi ใช้อ้างได้",
            body: "Source ที่อ้างถึงได้อย่างถูกต้อง — ไม่ใช่ marketing คำพูดเปล่าๆ",
            keyPoints: [
              { label: "Smith et al. (2008)", detail: "Catechins bioavailability with dietary fat" },
              { label: "Williamson & Manach (2005)", detail: "Polyphenol absorption review" },
              { label: "Berr & Mediterranean group", detail: "MUFA + antioxidants synergy" },
              { label: "Tip", detail: "ค้นหา PubMed (free database) ก่อน claim อะไร" },
            ],
          },
        ],
      },
      {
        id: "3.4",
        title: "Brain Health",
        title_en: "EVOO กับสมอง",
        sections: [
          {
            title: "EVOO และ Neuroprotection",
            body: "งานวิจัย 2020 (Temple University) พบว่า EVOO ช่วยขจัด **beta-amyloid plaques** ซึ่งเป็นสาเหตุของ Alzheimer's (lab study)",
            keyPoints: [
              { label: "Oleocanthal", detail: "ลด neuroinflammation" },
              { label: "Hydroxytyrosol", detail: "Cross blood-brain barrier ได้" },
              { label: "MIND Diet", detail: "Mediterranean + DASH = ลดเสี่ยง dementia 53%" },
              { label: "L-theanine (จากมัทฉะ)", detail: "เสริมฤทธิ์ neuroprotective ของ EVOO" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "PREDIMED Study พบว่า EVOO ช่วยลดเสี่ยง heart disease กี่ %?", options: ["10%", "20%", "30%", "50%"], correct: 2 },
      { type: "mc", q: "EVOO + มัทฉะดูดซึมสารต้านอนุมูลอิสระเพิ่มกี่เท่า?", options: ["1.2 เท่า", "2-7 เท่า", "10 เท่า", "50 เท่า"], correct: 1 },
      { type: "mc", q: "ตามกฎหมายไทย คำใดพูดได้?", options: ['"รักษาโรคหัวใจ"', '"ลด cholesterol"', '"ส่วนหนึ่งของ heart-healthy diet"', '"ป้องกันมะเร็ง"'], correct: 2 },
      { type: "tf", q: "EGCG ในมัทฉะดูดซึมดีขึ้นเมื่อกินกับไขมัน", correct: true, explain: "Catechins เป็น fat-soluble compounds" },
      { type: "mc", q: "Silent inflammation เกี่ยวข้องกับโรคใด?", options: ["NCDs (Heart, Diabetes, Cancer)", "ติดเชื้อ", "กระดูกหัก", "ไข้หวัด"], correct: 0 },
      { type: "mc", q: "ทำไม EVOO ทำให้คาเฟอีนปล่อยช้า?", options: ["เพราะลด pH", "ไขมันเป็น matrix slow release", "ทำลายคาเฟอีน", "เพิ่ม water absorption"], correct: 1 },
      { type: "tf", q: "Hydroxytyrosol สามารถข้าม blood-brain barrier ได้", correct: true, explain: "เป็น polyphenol ขนาดเล็กที่ลึกถึงสมองได้" },
      { type: "mc", q: "EVOO ปริมาณเท่าไหร่ต่อวันที่ Mediterranean Diet แนะนำ?", options: ["10ml", "25ml", "50ml", "100ml"], correct: 2 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 4: Olive Varieties
  // ──────────────────────────────────────────────────
  {
    id: 4,
    roman: "IV",
    title: "Olive Varieties",
    title_th: "พันธุ์มะกอก",
    subtitle: "The cultivars you must know",
    description: "20+ พันธุ์ที่จะเจอใน course และในตลาด",
    duration: "50 นาที",
    icon: "🌳",
    lessons: [
      {
        id: "4.1",
        title: "Spanish Cultivars",
        title_en: "พันธุ์สเปน",
        sections: [
          {
            title: "Spain — ผู้ผลิตอันดับ 1 โลก",
            body: "Spain ผลิต 50% ของ EVOO โลก — มี 260+ cultivars แต่ที่สำคัญมี 5 ตัว",
            keyPoints: [
              { label: "🌟 Arbequina", detail: "Catalonia · นุ่ม หวาน ผลไม้สุก แอลมอนด์ · เข้ากับมัทฉะดี" },
              { label: "Picual", detail: "Jaén · ขมจัด เผ็ดแรง polyphenols สูงสุด · ผลผลิต 50% ของ Spain" },
              { label: "Hojiblanca", detail: "Andalusia · สมดุล bitter, herbaceous, mature" },
              { label: "Cornicabra", detail: "Toledo · เผ็ดเด่น apple notes" },
              { label: "Empeltre", detail: "Aragon · นุ่ม sweet ผลไม้ rare" },
            ],
            highlight: true,
          },
          {
            title: "Arbequina ในตลาดไทย — ลอง flight",
            body: "Arbequina เป็นพันธุ์เดียวที่หาที่ Hibi เป้าหมายได้ ลองชิม 3 brands",
            keyPoints: [
              { label: "Carbonell Arbequina", detail: "Villa Market, Tops · entry-level Spanish" },
              { label: "Mueloliva", detail: "บางสาขา Tops, Lemon Farm · mid-tier" },
              { label: "O-MED Arbequina", detail: "Premium Food Thailand · premium grade" },
            ],
          },
        ],
      },
      {
        id: "4.2",
        title: "Italian Cultivars",
        title_en: "พันธุ์อิตาเลียน",
        sections: [
          {
            title: "Italy — Heart of Olive Oil Culture",
            body: "Italy ผลิต 15% ของโลก แต่มี **400+ cultivars** — มากที่สุด พันธุ์ที่ต้องจำมี 8",
            keyPoints: [
              { label: "🌟 Taggiasca", detail: "Liguria (Galateo!) · นุ่ม หวาน แอลมอนด์ · เข้ามัทฉะ" },
              { label: "Frantoio", detail: "Tuscany · สมดุล fruity-bitter-pungent · classic" },
              { label: "Leccino", detail: "Tuscany · มักผสมกับ Frantoio · นุ่มกว่า" },
              { label: "Moraiolo", detail: "Umbria · เข้ม pungent grass-tomato" },
              { label: "Coratina", detail: "Puglia · เข้มจัด bitter-pungent · polyphenols สูง" },
              { label: "Cellina di Nardò", detail: "Puglia · ผลไม้สุก almond" },
              { label: "Nocellara del Belice", detail: "Sicily · pronounced fruit, herbaceous" },
              { label: "Biancolilla", detail: "Sicily · นุ่ม light" },
            ],
            highlight: true,
          },
        ],
      },
      {
        id: "4.3",
        title: "Greek + Other Mediterranean",
        title_en: "กรีกและอื่นๆ",
        sections: [
          {
            title: "Greece — Highest Per-Capita Consumer",
            body: "ชาวกรีกบริโภค EVOO ที่สุดในโลก (~20 ลิตร/คน/ปี) — มี 3 cultivars หลัก",
            keyPoints: [
              { label: "Koroneiki", detail: "พันธุ์หลัก · เผ็ดเด่น polyphenols สูงมาก performance-grade" },
              { label: "Manaki", detail: "นุ่ม herbaceous" },
              { label: "Kalamata", detail: "พันธุ์ทำมะกอกตาราง (ผลใหญ่ ไม่ทำน้ำมัน)" },
            ],
          },
          {
            title: "Tunisia + อื่นๆ",
            body: "ผู้ผลิตเกิดใหม่ที่น่าจับตามอง",
            keyPoints: [
              { label: "Chetoui (Tunisia)", detail: "เผ็ดเด่น ราคาดี" },
              { label: "Chemlali (Tunisia)", detail: "นุ่ม mild ผลผลิตสูง" },
              { label: "Souri (Lebanon/Palestine)", detail: "พันธุ์โบราณ historical" },
            ],
          },
        ],
      },
      {
        id: "4.4",
        title: "Pairing Varieties with Food",
        title_en: "จับคู่อาหาร",
        sections: [
          {
            title: "Rule of Thumb",
            body: "**\"Light oil + delicate food, Bold oil + rich food\"**",
            highlight: true,
            keyPoints: [
              { label: "Arbequina · Taggiasca · Empeltre", detail: "ปลา, สลัด, ขนม, มัทฉะ" },
              { label: "Frantoio · Hojiblanca · Cornicabra", detail: "พาสต้า, เนื้อขาว, ผัก" },
              { label: "Picual · Coratina · Koroneiki", detail: "เนื้อแดง, สเต็ก, ของอวด polyphenols สาย health" },
              { label: "Nocellara · Moraiolo", detail: "Bruschetta, tomato dishes" },
            ],
          },
          {
            title: "Hibi-Specific Pairings",
            body: "พันธุ์ที่เหมาะกับเมนู Hibi",
            keyPoints: [
              { label: "Power Glow Latte", detail: "Arbequina (นุ่มกลมกล่อม) หรือ Taggiasca" },
              { label: "Daily Glow", detail: "Arbequina (entry-level, ลูกค้าเข้าใจง่าย)" },
              { label: "Premium Iced Matcha", detail: "Lemon EVOO (Agrumato จาก Galateo)" },
              { label: "Inner Glow Bowl", detail: "Basil EVOO (จาก Galateo) drizzle on top" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "พันธุ์มะกอกอิตาเลียนของ Liguria คือ?", options: ["Frantoio", "Taggiasca", "Picual", "Koroneiki"], correct: 1 },
      { type: "mc", q: "พันธุ์ใดเข้ากับมัทฉะดีที่สุด (นุ่ม หวาน)?", options: ["Picual", "Coratina", "Arbequina", "Koroneiki"], correct: 2 },
      { type: "mc", q: "พันธุ์ที่ polyphenols สูงสุด สาย performance?", options: ["Arbequina", "Empeltre", "Picual / Coratina / Koroneiki", "Taggiasca"], correct: 2 },
      { type: "tf", q: "Italy มีพันธุ์มะกอกมากกว่า 100 ชนิด", correct: true, explain: "Italy มี 400+ cultivars มากที่สุดในโลก" },
      { type: "mc", q: "Spain ผลิต EVOO กี่% ของโลก?", options: ["20%", "30%", "50%", "75%"], correct: 2 },
      { type: "mc", q: "Kalamata เป็นพันธุ์ที่ใช้ทำอะไร?", options: ["น้ำมัน EVOO", "มะกอกตาราง", "Olive butter", "Pomace"], correct: 1 },
      { type: "mc", q: "พันธุ์ Tuscan ที่มักผสมกับ Frantoio?", options: ["Picual", "Leccino", "Taggiasca", "Koroneiki"], correct: 1 },
      { type: "tf", q: "Coratina จาก Puglia มี profile นุ่มและหวาน", correct: false, explain: "Coratina ขมและเผ็ดจัด — polyphenols สูง" },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 5: Production Process
  // ──────────────────────────────────────────────────
  {
    id: 5,
    roman: "V",
    title: "Production Process",
    title_th: "กระบวนการผลิต",
    subtitle: "From tree to bottle",
    description: "Harvest → Mill → Bottle — ทุกขั้นมีผลต่อคุณภาพ",
    duration: "35 นาที",
    icon: "⚙️",
    lessons: [
      {
        id: "5.1",
        title: "Harvest Timing",
        title_en: "การเก็บเกี่ยว",
        sections: [
          {
            title: "Early Harvest vs Late Harvest",
            body: "ช่วงเวลาเก็บผลมีผลต่อรสและประโยชน์",
            keyPoints: [
              { label: "🌱 Early Harvest (ต.ค.-พ.ย.)", detail: "ผลเขียว · polyphenols สูงสุด · ผลผลิตน้อย · แพง" },
              { label: "🍃 Mid Harvest (ธ.ค.)", detail: "ผลเปลี่ยนสี · สมดุล" },
              { label: "🍂 Late Harvest (ม.ค.-ก.พ.)", detail: "ผลสุกดำ · ผลผลิตเยอะ · นุ่ม mild · ราคาถูก · polyphenols ต่ำ" },
            ],
            highlight: true,
          },
          {
            title: "วิธีเก็บ",
            body: "วิธีเก็บมีผลต่อคุณภาพอย่างมีนัยสำคัญ",
            keyPoints: [
              { label: "Hand-picked", detail: "Premium · ไม่ช้ำ · ต้องบีบภายใน 4-12 ชม." },
              { label: "Comb/Rake mechanical", detail: "Mid-tier · ผลช้ำได้บางส่วน" },
              { label: "Harvester machine", detail: "Mass · เร็ว ถูก · ผลช้ำ — quality drop" },
              { label: "Beating with poles", detail: "Old method · ผลช้ำหนัก · grade ต่ำ" },
            ],
          },
        ],
      },
      {
        id: "5.2",
        title: "Milling & Malaxation",
        title_en: "การบดและการกวน",
        sections: [
          {
            title: "Milling (Frangitura)",
            body: "บดผลและเมล็ดให้แตก เพื่อปล่อยน้ำมัน",
            keyPoints: [
              { label: "🪨 Stone mill", detail: "Traditional · ช้า · oxidation น้อย" },
              { label: "🔨 Hammer mill", detail: "Modern · เร็ว · oxidation มากกว่า แต่ controllable" },
              { label: "💎 Cryogenic", detail: "ใช้ liquid nitrogen · ใหม่ล่าสุด · เก็บ aromatic ที่สุด" },
            ],
          },
          {
            title: "Malaxation (Gramolatura) — ขั้นสำคัญที่สุด",
            body: "กวนเนื้อมะกอกบดที่อุณหภูมิควบคุม เพื่อให้หยดน้ำมันรวมกัน",
            highlight: true,
            keyPoints: [
              { label: "Temperature critical", detail: "ต้องไม่เกิน **27°C** = \"Cold extracted\"" },
              { label: "Time", detail: "30-90 นาที · สั้น = oil น้อยแต่ aromatic ดี · ยาว = oil มากแต่ aromatic หาย" },
              { label: "Oxygen control", detail: "Vacuum หรือ nitrogen blanket = ป้องกัน oxidation" },
              { label: ">27°C = ปัญหา", detail: "Heat denatures aroma compounds · ลด polyphenols · DOWNGRADES to virgin" },
            ],
          },
        ],
      },
      {
        id: "5.3",
        title: "Extraction & Filtration",
        title_en: "การแยกและกรอง",
        sections: [
          {
            title: "Separating Oil from Solids/Water",
            body: "หลัง malaxation ต้องแยกน้ำมันออกจากกาก",
            keyPoints: [
              { label: "🌀 Centrifuge (2-phase)", detail: "Modern · แยก oil จากกาก+น้ำในขั้นเดียว · efficient" },
              { label: "🌀 Centrifuge (3-phase)", detail: "Older · เพิ่มน้ำเพื่อแยก · loses water-soluble polyphenols" },
              { label: "💧 Decanter/Press", detail: "Traditional · ช้า · quality variable" },
            ],
          },
          {
            title: "Filtering Decision",
            body: "Filter หรือไม่ filter — ต่างกันอย่างไร",
            keyPoints: [
              { label: "Unfiltered", detail: "Cloudy · มี sediment · flavor มากกว่า · shelf life สั้น (6 เดือน)" },
              { label: "Filtered", detail: "Clear · stable · shelf life ยาว (12-18 เดือน) · มาตรฐาน export" },
              { label: "Hibi's choice", detail: "Filtered สำหรับ retail · unfiltered สำหรับ small-batch limited edition" },
            ],
          },
        ],
      },
      {
        id: "5.4",
        title: "Storage & Shelf Life",
        title_en: "เก็บรักษา",
        sections: [
          {
            title: "4 ศัตรูของ EVOO",
            body: "EVOO มีศัตรู 4 ตัว — ต้องจัดการให้ครบ",
            highlight: true,
            keyPoints: [
              { label: "☀️ แสง (Light)", detail: "UV ทำลาย polyphenols 30% ใน 1 เดือน" },
              { label: "🌡️ ความร้อน (Heat)", detail: "เกิน 30°C → oxidation เริ่มเร็ว" },
              { label: "💨 อ็อกซิเจน (Oxygen)", detail: "Oxidation = rancid · ขวดเปิดแล้วใช้ภายใน 60 วัน" },
              { label: "⏰ เวลา (Time)", detail: "12 เดือนจาก harvest = hard limit แม้เก็บดี" },
            ],
          },
          {
            title: "วิธีเก็บที่ Hibi",
            body: "Operational SOP",
            keyPoints: [
              { label: "ที่ Bar", detail: "Dark dispenser bottle (ไม่ใส) · ห่างเตา · ใช้หมดใน 1 สัปดาห์" },
              { label: "Stock room", detail: "ห้องเย็น (20-22°C) · ไม่มีแสง · stack vertical" },
              { label: "Refill rotation", detail: "FIFO · ขวดเก่าเปิดก่อน" },
              { label: "Customer education", detail: "บอกลูกค้า: เก็บที่มืดเย็น เปิดใช้ใน 2-3 เดือน อย่าแช่เย็นจะขุ่น" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "อุณหภูมิสูงสุดสำหรับ cold extraction?", options: ["20°C", "25°C", "27°C", "35°C"], correct: 2 },
      { type: "mc", q: "ช่วงไหนคือ early harvest ของ Mediterranean?", options: ["ก.ค.-ส.ค.", "ต.ค.-พ.ย.", "ม.ค.-ก.พ.", "เม.ย.-พ.ค."], correct: 1 },
      { type: "tf", q: "Early harvest มี polyphenols สูงกว่า late harvest", correct: true, explain: "ผลเขียว = polyphenols สูง · ผลสุกดำ = polyphenols ลดลง" },
      { type: "mc", q: "Centrifuge แบบใดเก็บ polyphenols ได้ดีกว่า?", options: ["3-phase", "2-phase", "Press", "ไม่ต่าง"], correct: 1 },
      { type: "mc", q: "4 ศัตรูของ EVOO คือ?", options: ["น้ำ ดิน เกลือ น้ำตาล", "แสง ความร้อน อ็อกซิเจน เวลา", "ฝุ่น น้ำตาล กรด ด่าง", "ไม่มี"], correct: 1 },
      { type: "tf", q: "Unfiltered EVOO เก็บได้นานกว่า filtered", correct: false, explain: "Unfiltered ขึ้นรา/oxidize เร็วกว่า — shelf life สั้นกว่า" },
      { type: "mc", q: "EVOO หลังเปิดขวดควรใช้ภายในกี่วัน?", options: ["7 วัน", "30 วัน", "60 วัน", "180 วัน"], correct: 2 },
      { type: "mc", q: "ทำไม EVOO ไม่ควรอยู่ใกล้เตา?", options: ["ดูไม่สวย", "ความร้อน + แสงทำลาย", "กลิ่นปนเปื้อน", "ทุกข้อ"], correct: 3 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 6: Sensory Analysis Fundamentals
  // ──────────────────────────────────────────────────
  {
    id: 6,
    roman: "VI",
    title: "Sensory Analysis",
    title_th: "การชิมแบบมืออาชีพ",
    subtitle: "How professionals taste",
    description: "Protocol การชิม + 3 attributes + tools",
    duration: "60 นาที",
    icon: "👃",
    lessons: [
      {
        id: "6.1",
        title: "The 3 Positive Attributes",
        title_en: "3 มิติบวก",
        sections: [
          {
            title: "Fruity · Bitter · Pungent",
            body: "**ทุก** EVOO ต้องมี 3 มิตินี้ และทุกตัวคือ **ข้อดี** ไม่ใช่ข้อเสีย — แต่ละมิติให้คะแนน 0-10",
            highlight: true,
            keyPoints: [
              { label: "🍏 Fruity (Fruttato)", detail: "กลิ่นและรสผลไม้สด · หญ้า · ใบไม้ · มะเขือเทศ · แอปเปิ้ล" },
              { label: "🌿 Bitter (Amaro)", detail: "ความขมที่ลิ้น = polyphenols สูง = ดี!" },
              { label: "🌶️ Pungent (Piccante)", detail: "ความเผ็ดในคอ = Oleocanthal = anti-inflammatory" },
            ],
          },
          {
            title: "Balance — เป้าหมายของ EVOO ที่ดี",
            body: "EVOO ระดับ premium = 3 มิติสมดุล หรือเด่นชัด 1 มิติแบบจงใจ",
            keyPoints: [
              { label: "Balanced (4-6/10 ทุกตัว)", detail: "Universal · เหมาะใช้ทั่วไป · เช่น Frantoio blend" },
              { label: "Delicate (Fruity 3, Bitter 2, Pungent 2)", detail: "นุ่ม · เหมาะ pairing delicate · Arbequina, Taggiasca" },
              { label: "Robust (Bitter 7, Pungent 7)", detail: "เข้ม · สาย health, polyphenols · Picual, Coratina" },
              { label: "Unbalanced", detail: "1 มิติเด่นเกินไป = อาจ defect = ปัญหา" },
            ],
          },
        ],
      },
      {
        id: "6.2",
        title: "Sensory Mechanisms",
        title_en: "วิทยาศาสตร์ของลิ้นและจมูก",
        sections: [
          {
            title: "ลิ้นและจมูกทำงานยังไง",
            body: "การชิมที่ถูกต้องต้องใช้ทั้ง 2 ระบบ",
            keyPoints: [
              { label: "Gustation (รส)", detail: "ลิ้นรับรู้ 5 รส: หวาน เปรี้ยว เค็ม ขม umami" },
              { label: "Olfaction (กลิ่น)", detail: "จมูกรับรู้กลิ่น 1,000+ ชนิด ผ่าน olfactory bulb" },
              { label: "Retronasal", detail: "กลิ่นที่ขึ้นจากปากไปจมูก = 80% ของ \"flavor\"" },
              { label: "Trigeminal", detail: "ระบบประสาทรับ pungency, temperature, texture" },
            ],
          },
          {
            title: "ทำไมต้อง \"strappo\" (aspirate)",
            body: "เทคนิคสำคัญของ Italian tasters — สูดอากาศเข้าปากตอนชิม",
            keyPoints: [
              { label: "Why", detail: "ระเหยกลิ่นในปาก → retronasal pathway → จมูก" },
              { label: "How", detail: "จิบ EVOO เล็ก · สูดอากาศเข้าปากเสียง 'sssp'" },
              { label: "Result", detail: "กลิ่นเข้มข้น 5-10 เท่า · ตรวจ aromatic ได้ละเอียด" },
            ],
            highlight: true,
          },
        ],
      },
      {
        id: "6.3",
        title: "Professional Tasting Protocol",
        title_en: "10 ขั้นตอนการชิมมาตรฐาน",
        sections: [
          {
            title: "Step-by-Step Protocol",
            body: "ใช้ในห้อง panel การประกวด และ Sensory Cert",
            highlight: true,
            keyPoints: [
              { label: "1. Pour 15ml", detail: "ใส่แก้ว cobalt blue tasting glass" },
              { label: "2. Warm in hand", detail: "Cover แก้ว · กลิ้งในมือ 30 วินาที จนถึง 28°C" },
              { label: "3. Sniff (uncovered)", detail: "เปิด · ดมจมูกขวา 3 วินาที · พัก · ดมจมูกซ้าย" },
              { label: "4. Sip small (5ml)", detail: "จิบเล็ก กลิ้งบนลิ้น" },
              { label: "5. Aspirate (strappo)", detail: "สูดอากาศเข้าปาก เสียง 'sssp' 2-3 ครั้ง" },
              { label: "6. Note Fruity", detail: "Score 0-10 · จดประเภทผลไม้ (apple/grass/tomato)" },
              { label: "7. Swallow or spit", detail: "ตามที่สะดวก" },
              { label: "8. Note Bitter", detail: "Score 0-10 · ขมที่ลิ้นกลาง-หลัง" },
              { label: "9. Note Pungent", detail: "Score 0-10 · เผ็ดที่คอ" },
              { label: "10. Aftertaste + cleanse", detail: "กินแอปเปิ้ลเขียว/ขนมปังก่อนชิมตัวต่อไป" },
            ],
          },
        ],
      },
      {
        id: "6.4",
        title: "Tasting Tools & Environment",
        title_en: "อุปกรณ์และสภาพแวดล้อม",
        sections: [
          {
            title: "Tools Standard",
            body: "ของที่ต้องมีถ้าจะ taste แบบ professional",
            keyPoints: [
              { label: "Cobalt Blue Tasting Glass", detail: "แก้วน้ำเงิน 50ml · ปิดสีของ oil ให้ unbiased" },
              { label: "Watch glass cover", detail: "ปิดแก้วระหว่างอุ่น · เก็บกลิ่น" },
              { label: "Tasting sheet", detail: "Form มาตรฐาน IOC · score 0-10 ทุก attribute" },
              { label: "Palette cleansers", detail: "แอปเปิ้ลเขียว · ขนมปังขาว · น้ำเปล่าอุณหภูมิห้อง" },
              { label: "Spittoon", detail: "ที่บ้วน · ถ้าชิมเยอะไม่กลืนทุกตัว" },
            ],
          },
          {
            title: "Environmental Rules",
            body: "ห้อง tasting ต้องปลอดจากปัจจัยรบกวน",
            keyPoints: [
              { label: "❌ ไม่มีน้ำหอม", detail: "นักชิมห้ามใส่ · ห้อง neutral" },
              { label: "❌ ไม่มีอาหาร", detail: "ทำกลิ่น contaminate" },
              { label: "🌡️ อุณหภูมิ 20-22°C", detail: "Oils ถึงอุณหภูมิ 28°C ในมือ" },
              { label: "🚫 ไม่สูบ ไม่กาแฟ 2 ชม.ก่อน", detail: "Reset ลิ้น" },
              { label: "🌅 เวลาดีที่สุด", detail: "10:00-12:00 · ลิ้น sensitive สุด" },
            ],
            highlight: true,
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "3 attributes บวกของ EVOO คือ?", options: ["Sweet, Sour, Salty", "Light, Medium, Heavy", "Fruity, Bitter, Pungent", "Soft, Bold, Crisp"], correct: 2 },
      { type: "mc", q: "ความเผ็ดร้อนในคอบ่งบอกอะไร?", options: ["EVOO เสีย", "Polyphenols / Oleocanthal สูง", "Acidity เกิน", "ผลสุกเกิน"], correct: 1 },
      { type: "mc", q: "อุณหภูมิที่ขอ EVOO ตอนชิม?", options: ["10°C", "20°C", "28°C", "40°C"], correct: 2 },
      { type: "tf", q: "Strappo (aspirate) คือการสูดอากาศเข้าปากตอนชิม", correct: true, explain: "เพิ่ม retronasal aroma 5-10 เท่า" },
      { type: "mc", q: "ทำไมต้องใช้แก้ว cobalt blue?", options: ["ทำให้สวย", "ซ่อนสี oil = ตัดสินได้ unbiased", "เก็บอุณหภูมิ", "ทุกข้อ"], correct: 1 },
      { type: "mc", q: "ระหว่างชิม ตัวต่อตัว ใช้อะไร cleanse ลิ้น?", options: ["กาแฟ", "นม", "แอปเปิ้ลเขียว / ขนมปังขาว", "ช็อกโกแลต"], correct: 2 },
      { type: "tf", q: "Tasting ควรทำหลังกินอาหารหนักทันที", correct: false, explain: "ต้องเว้น 2 ชั่วโมง ไม่สูบ ไม่กาแฟ" },
      { type: "mc", q: "เวลาที่ลิ้น sensitive ที่สุดของวัน?", options: ["6:00-8:00", "10:00-12:00", "14:00-16:00", "20:00-22:00"], correct: 1 },
      { type: "tf", q: "Bitter 7/10 ใน EVOO คือ defect", correct: false, explain: "Bitter เป็น positive attribute — 7/10 หมายถึง polyphenols สูง (robust)" },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 7: Defects (CRITICAL for Sensory Cert)
  // ──────────────────────────────────────────────────
  {
    id: 7,
    roman: "VII",
    title: "Defects Library",
    title_th: "ข้อบกพร่อง (สำคัญที่สุด!)",
    subtitle: "What you must identify",
    description: "9 defects + วิธีจำ + ฝึกที่บ้านได้",
    duration: "75 นาที",
    icon: "🚫",
    lessons: [
      {
        id: "7.1",
        title: "Why Defects Matter",
        title_en: "ทำไมเรื่องนี้สำคัญสุด",
        sections: [
          {
            title: "Sensory Cert = ระบุ defects ได้",
            body: "การสอบ **Physiological Sensory Suitability** ที่ IRVEA + การสอบในวงการ ทุกตัว — วัด ability ระบุ defect ที่ระดับ threshold (ต่ำมาก)",
            highlight: true,
            keyPoints: [
              { label: "ทำไม Hibi ต้องเก่ง", detail: "QC supplier · ทุกครั้งที่ batch ใหม่มา · ป้องกัน serve oil เสีย" },
              { label: "วงการรู้กัน", detail: "Sommelier ที่ใช้ defects กับ pos. attributes ผิด = ไม่ใช่ sommelier จริง" },
              { label: "Cost of wrong oil", detail: "Serve rancid oil = ลูกค้า return + brand damage" },
            ],
          },
          {
            title: "9 Defects ที่ IRVEA จะให้ฝึก",
            body: "Defects ตามมาตรฐาน IOC (International Olive Council)",
            keyPoints: [
              { label: "1. Rancid", detail: "Oxidation · ที่พบบ่อยที่สุด" },
              { label: "2. Fusty / Muddy", detail: "Olives fermented ก่อนสกัด" },
              { label: "3. Musty / Humid", detail: "Mold growth · ผลเปียก" },
              { label: "4. Winey / Vinegary", detail: "Ethanol fermentation" },
              { label: "5. Metallic", detail: "สัมผัสเหล็กในการผลิต" },
              { label: "6. Frostbitten", detail: "ผลโดน frost ก่อนเก็บ" },
              { label: "7. Cucumber", detail: "เก็บใน plastic นาน" },
              { label: "8. Heated / Cooked", detail: "Malaxation > 27°C" },
              { label: "9. Hay / Wood", detail: "ผลเก่าเกิน" },
            ],
          },
        ],
      },
      {
        id: "7.2",
        title: "Defect #1: Rancid",
        title_en: "หืน — พบบ่อยที่สุด",
        sections: [
          {
            title: "What is Rancid",
            body: "Oxidation ของ unsaturated fatty acids → aldehydes และ ketones ที่กลิ่นเหม็น — **defect ที่พบบ่อยสุด** เพราะเกิดจากเวลา + อ็อกซิเจน",
            highlight: true,
            keyPoints: [
              { label: "Cause", detail: "Old oil · ขวดเปิดนาน · เก็บไม่ดี · แสงโดน" },
              { label: "Smell like", detail: "เหมือนถั่ว/walnut เก่า · linseed oil · oil paint · old crayon" },
              { label: "Taste like", detail: "ขม metallic ติดคอ · aftertaste ไม่หาย" },
              { label: "Memory trick", detail: "นึกถึง 'น้ำมันเก่าในตู้' หรือ 'ถั่วลิสงเปิดถุงทิ้งไว้ 6 เดือน'" },
            ],
          },
          {
            title: "DIY Practice — สร้าง Rancid Sample ที่บ้าน",
            body: "วิธีฝึกจมูกให้รู้จัก rancid",
            keyPoints: [
              { label: "Step 1", detail: "ซื้อ EVOO good quality 1 ขวด · พักไว้ 1 ขวด" },
              { label: "Step 2", detail: "เปิด ขวดที่สอง · เทใส่ขวดใส · วางบนหน้าต่างที่มีแสงแดด" },
              { label: "Step 3", detail: "ทิ้งไว้ 3-4 สัปดาห์ · แสง + อากาศจะ oxidize อย่างเร็ว" },
              { label: "Step 4", detail: "ดมเปรียบเทียบกับขวดที่เก็บไว้ดี = clear difference!" },
            ],
          },
        ],
      },
      {
        id: "7.3",
        title: "Defect #2: Fusty / Muddy",
        title_en: "เน่า ขุ่น — defect ของผู้ผลิตประมาท",
        sections: [
          {
            title: "What is Fusty",
            body: "ผลมะกอกถูกกองไว้ใน sacks หรือ heaps **นานกว่า 24 ชั่วโมง** ก่อน milling → anaerobic fermentation → sulfur compounds + organic acids",
            highlight: true,
            keyPoints: [
              { label: "Cause", detail: "Producer ขี้เกียจ · กองผลรอบด · oxygen หมด" },
              { label: "Smell like", detail: "เน่าหวาน · จัดเก็บผ้าเปียกใน plastic 3 วัน" },
              { label: "Italian word", detail: '"Riscaldo" หรือ "Avvinato"' },
              { label: "Memory trick", detail: 'เหมือน "compost pile" หรือ "wet hay"' },
            ],
          },
          {
            title: "DIY Practice",
            body: "Fusty หาตัวอย่างยากในไทย — แต่ฝึกได้",
            keyPoints: [
              { label: "Reference", detail: "ดมผัก/ผลไม้สุกเกินไป ที่เริ่มหมัก เช่น แตงโมเน่า มะม่วงเน่าหวาน" },
              { label: "Aroma association", detail: "อย่าลืม sulfur note + sweet decay" },
            ],
          },
        ],
      },
      {
        id: "7.4",
        title: "Defect #3: Musty",
        title_en: "ขึ้นรา",
        sections: [
          {
            title: "What is Musty",
            body: "ผลที่เก็บในที่ชื้น → เชื้อราเจริญ → mold metabolites ใน oil",
            keyPoints: [
              { label: "Cause", detail: "ผลเปียกฝน · ที่เก็บชื้น · ผลรา" },
              { label: "Smell like", detail: "ห้องใต้ดิน · หนังสือเก่า · เห็ดเปียก · บ้านชื้น" },
              { label: "Italian word", detail: '"Muffa"' },
              { label: "Memory trick", detail: 'เหมือน "ห้องที่ปิดมานาน เปิดมาแล้วชื้น"' },
            ],
          },
          {
            title: "DIY Practice",
            body: "หา reference smell ที่บ้าน",
            keyPoints: [
              { label: "Reference 1", detail: "ดมเห็ดที่เปียก หรือใกล้เน่า" },
              { label: "Reference 2", detail: "ดมตู้/ลิ้นชักที่ปิดนานในที่ชื้น" },
              { label: "Reference 3", detail: "ดมหนังสือเก่าในห้องที่ไม่มี air ventilation" },
            ],
          },
        ],
      },
      {
        id: "7.5",
        title: "Defect #4: Winey / Vinegary",
        title_en: "ไวน์ / น้ำส้ม",
        sections: [
          {
            title: "What is Winey",
            body: "Ethanol fermentation จากผลสุกเกินไป → wine-like or vinegar-like compounds",
            keyPoints: [
              { label: "Cause", detail: "ผลสุกเกินไป · กองรอบด · yeast fermentation" },
              { label: "Smell like", detail: "ไวน์เปรี้ยว · cider · acetic acid · vinegar" },
              { label: "Italian word", detail: '"Avvinato" (winey) หรือ "Inacetito" (vinegary)' },
              { label: "Memory trick", detail: 'เหมือน "ส้มเริ่มเสียกลิ่นแอลกอฮอล์"' },
            ],
          },
          {
            title: "DIY Practice",
            body: "ฝึกจมูกกับ wine + vinegar ที่หาง่าย",
            keyPoints: [
              { label: "Reference 1", detail: "ดมไวน์ขาวที่เปิดทิ้งไว้ 2-3 วัน" },
              { label: "Reference 2", detail: "ดมน้ำส้ม apple cider vinegar" },
              { label: "Reference 3", detail: "ดมผลไม้ที่เริ่มหมัก เช่น สับปะรดเน่า" },
            ],
          },
        ],
      },
      {
        id: "7.6",
        title: "Defects #5-9: Other",
        title_en: "ข้อบกพร่องอื่น",
        sections: [
          {
            title: "5. Metallic — กลิ่นเหล็ก",
            body: "เกิดจาก oil สัมผัส iron/copper ในการผลิต — กลิ่นเหมือนเลือด, เหรียญทองแดง, สนิม",
            keyPoints: [
              { label: "Cause", detail: "Equipment ผลิตเก่า · stainless steel ไม่ดี" },
              { label: "Reference", detail: "เลียโลหะเหรียญ 10 บาท แล้วได้กลิ่น" },
            ],
          },
          {
            title: "6. Frostbitten — โดนน้ำแข็ง",
            body: "ผลโดน frost ก่อนเก็บ → cell damage → off-flavors",
            keyPoints: [
              { label: "Cause", detail: "เก็บผลหลังหิมะ" },
              { label: "Smell like", detail: "Hollow · empty · ไม่มี character · slightly sweet" },
            ],
          },
          {
            title: "7. Cucumber — กลิ่นแตงกวา",
            body: "เก็บใน plastic นาน → off-aroma คล้ายแตงกวา",
            keyPoints: [
              { label: "Cause", detail: "Stored in PE bottles 6+ months" },
              { label: "Reference", detail: "ดมแตงกวาสดผ่า" },
            ],
          },
          {
            title: "8. Heated / Cooked — โดนความร้อน",
            body: "Malaxation > 27°C → cooked aroma",
            keyPoints: [
              { label: "Smell like", detail: "ผลสุกเกินไป · stewed fruit · jam" },
              { label: "Producer mistake", detail: "Skip cold extraction → ราคา premium ผิด" },
            ],
          },
          {
            title: "9. Hay / Wood — ฟาง ไม้",
            body: "ผลแห้งเกินไป · เก็บนาน → flat, woody notes",
            keyPoints: [
              { label: "Cause", detail: "ผลแห้งบนต้น · late harvest extreme" },
              { label: "Smell like", detail: "ฟาง · กระดาษ · ไม้แห้ง" },
            ],
          },
        ],
      },
      {
        id: "7.7",
        title: "Memorization Strategy",
        title_en: "วิธีจำ 9 Defects",
        sections: [
          {
            title: "Mnemonic System",
            body: "จำเป็น 3 หมวด · ง่ายขึ้นมาก",
            highlight: true,
            keyPoints: [
              { label: "🍷 Fermentation defects", detail: "Fusty + Winey + Musty — กลิ่นเน่า/หมัก" },
              { label: "⏰ Time defects", detail: "Rancid + Hay/Wood — กลิ่นเก่า" },
              { label: "🌡️ Process defects", detail: "Metallic + Heated + Cucumber + Frostbitten — กลิ่นผิดจากผลิต/เก็บ" },
            ],
          },
          {
            title: "Practice ที่บ้าน — Weekly Plan",
            body: "ฝึก 1 defect ต่อสัปดาห์ · 9 สัปดาห์",
            keyPoints: [
              { label: "Week 1: Rancid", detail: "สร้าง sample · ดมทุกวัน 5 วัน" },
              { label: "Week 2: Fusty", detail: "ใช้ผลไม้เน่าหวาน reference" },
              { label: "Week 3: Musty", detail: "ดมตู้ลิ้นชักชื้น · เห็ด" },
              { label: "Week 4: Winey", detail: "ไวน์ทิ้งไว้ + vinegar" },
              { label: "Week 5-9", detail: "Other 5 defects · 1 ต่อสัปดาห์" },
              { label: "After 9 weeks", detail: "ทุกคืน ดม sample สุ่ม ฝึก identify" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "Defect ที่พบบ่อยที่สุดใน EVOO?", options: ["Fusty", "Rancid", "Musty", "Metallic"], correct: 1 },
      { type: "mc", q: "Rancid เกิดจากอะไร?", options: ["ผลหมัก", "Oxidation จากเวลา/แสง", "Mold", "ความร้อน"], correct: 1 },
      { type: "mc", q: "ผลมะกอกกองไว้ 2 วันก่อนสกัด → defect ใด?", options: ["Rancid", "Fusty", "Cucumber", "Frostbitten"], correct: 1 },
      { type: "mc", q: "ผลเก็บในที่ชื้น → defect ใด?", options: ["Musty", "Rancid", "Winey", "Hay"], correct: 0 },
      { type: "tf", q: "Pungent (เผ็ด) คือ defect", correct: false, explain: "Pungent เป็น positive attribute = Oleocanthal สูง" },
      { type: "mc", q: "Italian word ของ rancid?", options: ["Avvinato", "Muffa", "Rancido", "Riscaldo"], correct: 2 },
      { type: "mc", q: "Defect ที่เกิดจาก malaxation > 27°C?", options: ["Frostbitten", "Heated/Cooked", "Cucumber", "Metallic"], correct: 1 },
      { type: "tf", q: "Cucumber defect เกิดจากผลที่ผสมกับแตงกวา", correct: false, explain: "เกิดจากเก็บใน plastic นาน → off-aroma คล้ายแตงกวา" },
      { type: "mc", q: "ฝึก rancid ที่บ้านยังไงเร็วสุด?", options: ["แช่ตู้เย็น", "วาง EVOO ใต้แสงแดด 3-4 สัปดาห์", "เติม vinegar", "ต้ม"], correct: 1 },
      { type: "mc", q: "Defect ใดอยู่หมวด 'Fermentation defects'?", options: ["Rancid", "Hay", "Fusty / Winey / Musty", "Metallic"], correct: 2 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 8: Sensory Cert Preparation
  // ──────────────────────────────────────────────────
  {
    id: 8,
    roman: "VIII",
    title: "Sensory Cert Prep",
    title_th: "เตรียมสอบ Sensory Cert",
    subtitle: "Physiological Suitability Certificate",
    description: "เนื้อหาเฉพาะ + protocol สอบ + ฝึกที่บ้าน",
    duration: "60 นาที",
    icon: "🎖️",
    lessons: [
      {
        id: "8.1",
        title: "What is Physiological Sensory Suitability",
        title_en: "ทำความเข้าใจ Cert นี้",
        sections: [
          {
            title: "Background",
            body: "Italian Ministerial Decree **7 October 2021** บังคับว่าผู้ที่จะ:\n- เป็นส่วนของ olive oil tasting panel ทางการ\n- ลงทะเบียนใน Register of Olive Oil Experts\nต้องผ่าน **Physiological Sensory Suitability Certificate** = ทดสอบว่าประสาทสัมผัส **fit for panel work**",
            highlight: true,
            keyPoints: [
              { label: "Authority", detail: "Italian Ministry of Agriculture (MIPAAF)" },
              { label: "Recognition", detail: "EU + International tasting panels accept" },
              { label: "Validity", detail: "ทบทวนทุก 2-3 ปี · re-certify ได้" },
              { label: "Hibi value", detail: "Authority สูงสุดในวงการ · เปิดคลาส premium ได้" },
            ],
          },
        ],
      },
      {
        id: "8.2",
        title: "The Test Protocol",
        title_en: "วิธีสอบ",
        sections: [
          {
            title: "การสอบประกอบด้วย 3 ส่วน",
            body: "Tania Ciarini เป็นคนสอบที่ IRVEA",
            keyPoints: [
              { label: "Part 1: Defect Detection", detail: "ระบุ 4-5 defects ที่ระดับ threshold (ต่ำมาก)" },
              { label: "Part 2: Intensity Modulation", detail: "ให้คะแนน defect เดียวกันที่ 3-4 ระดับความเข้ม" },
              { label: "Part 3: Recognition Confidence", detail: "ทดสอบความสม่ำเสมอของผลตัดสิน" },
            ],
          },
          {
            title: "Detection Threshold คืออะไร",
            body: "**ระดับต่ำสุด** ที่คนยังตรวจเจอ defect — Sommelier มืออาชีพต้อง detect ได้ที่ระดับ threshold ที่ IOC กำหนด",
            keyPoints: [
              { label: "Rancid threshold", detail: "~2.0 (0-10 scale)" },
              { label: "Fusty threshold", detail: "~2.0" },
              { label: "Musty threshold", detail: "~2.0" },
              { label: "Winey threshold", detail: "~2.0" },
              { label: "Sommelier ต้อง", detail: "Detect ได้ที่ ≥1.5 = sub-threshold sensitivity" },
            ],
            highlight: true,
          },
        ],
      },
      {
        id: "8.3",
        title: "Training Protocol — 12 Weeks",
        title_en: "ตารางฝึก 12 สัปดาห์",
        sections: [
          {
            title: "Week-by-Week Plan",
            body: "เริ่มก่อน IRVEA 12 สัปดาห์ = สมบูรณ์",
            highlight: true,
            keyPoints: [
              { label: "Week 1-2: Rancid", detail: "DIY sample + เปรียบเทียบกับ reference EVOO" },
              { label: "Week 3-4: Fusty", detail: "ใช้ผลไม้สุก fermented references" },
              { label: "Week 5-6: Musty", detail: "Mushroom + damp basement references" },
              { label: "Week 7-8: Winey", detail: "Wine + vinegar references" },
              { label: "Week 9: Mixed practice", detail: "Random samples · ID defect" },
              { label: "Week 10: Threshold drills", detail: "Mix defective + good oil ใน ratios" },
              { label: "Week 11: Intensity scoring", detail: "ฝึกให้คะแนน 1-10 สม่ำเสมอ" },
              { label: "Week 12: Mock exam", detail: "ทำเอง · blind test กับเพื่อน" },
            ],
          },
        ],
      },
      {
        id: "8.4",
        title: "Daily Practice Routine",
        title_en: "Routine 10 นาที/วัน",
        sections: [
          {
            title: "เช้า: Sensory Wake-Up (5 นาที)",
            body: "ก่อนกาแฟ — ลิ้นยังบริสุทธิ์",
            keyPoints: [
              { label: "1. Smell test", detail: "ดม 3 ของในครัว ปิดตา · ตั้งชื่อให้ได้" },
              { label: "2. Taste test", detail: "ชิม 1 ผลไม้/ผัก · บรรยาย rsa 3 คำ" },
              { label: "3. Olive oil rep", detail: "ดม EVOO reference (ดี) 1 ขวด · 3 ครั้ง" },
            ],
          },
          {
            title: "ค่ำ: Deep Tasting (15 นาที)",
            body: "ใช้ tasting glass จริง",
            keyPoints: [
              { label: "1. Pour & warm", detail: "EVOO 15ml ในแก้ว · กลิ้งในมือ" },
              { label: "2. Smell evaluation", detail: "Score Fruity 0-10 · จด aromatics" },
              { label: "3. Taste evaluation", detail: "Sip + strappo · Score Bitter, Pungent" },
              { label: "4. Defect check", detail: "Identify defects ถ้ามี" },
              { label: "5. Notes", detail: "บันทึกใน sensory journal" },
            ],
          },
          {
            title: "สัปดาห์: Mock Panel (1 ชม. / สัปดาห์)",
            body: "Blind tasting · 4-5 oils ปิดฉลาก",
            keyPoints: [
              { label: "Setup", detail: "ขอเพื่อนเทออกใส่แก้ว · ไม่เห็นขวด" },
              { label: "Evaluate", detail: "Score ทุก oil · ID defects · จัดอันดับ" },
              { label: "Reveal", detail: "เปิดฉลาก · เปรียบเทียบความถูกต้อง" },
              { label: "Improve", detail: "พลาดอะไร? ทำไม? ปรับ training" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "Physiological Sensory Suitability Cert ออกโดย?", options: ["EU", "IOC", "Italian Ministry of Agriculture", "FDA"], correct: 2 },
      { type: "mc", q: "การสอบประกอบด้วยกี่ส่วน?", options: ["1 ส่วน", "2 ส่วน", "3 ส่วน", "5 ส่วน"], correct: 2 },
      { type: "mc", q: "Detection threshold ของ rancid (IOC)?", options: ["~0.5", "~2.0", "~5.0", "~8.0"], correct: 1 },
      { type: "tf", q: "Sommelier มืออาชีพต้อง detect defect ได้ที่ระดับต่ำกว่า threshold", correct: true, explain: "Sub-threshold sensitivity = sign of trained taster" },
      { type: "mc", q: "Cert นี้ valid กี่ปี?", options: ["ตลอดชีวิต", "1 ปี", "2-3 ปี ต้อง re-cert", "10 ปี"], correct: 2 },
      { type: "mc", q: "เวลาที่ดีที่สุดสำหรับ sensory practice?", options: ["หลังกินข้าวเช้า", "ก่อนกาแฟ ตื่นใหม่", "ก่อนนอน", "ระหว่างกินข้าว"], correct: 1 },
      { type: "tf", q: "Intensity modulation = ให้คะแนน defect ที่ความเข้มต่างกันสม่ำเสมอ", correct: true, explain: "Sommelier ต้อง score 2/10, 5/10, 8/10 ของ defect เดียวกันได้ถูก" },
      { type: "mc", q: "Mock panel ที่ดีควรทำกี่ครั้ง/สัปดาห์?", options: ["1 ครั้ง", "3 ครั้ง", "ทุกวัน", "เดือนละครั้ง"], correct: 0 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 9: Legal & Marketing
  // ──────────────────────────────────────────────────
  {
    id: 9,
    roman: "IX",
    title: "Legal & Marketing",
    title_th: "กฎหมายและการตลาด",
    subtitle: "What you can and can't say",
    description: "EU + Thai regulations · marketing pitfalls",
    duration: "40 นาที",
    icon: "⚖️",
    lessons: [
      {
        id: "9.1",
        title: "EU Regulations",
        title_en: "กฎ EU",
        sections: [
          {
            title: "Key Regulations to Know",
            body: "ถ้านำเข้า EVOO จาก EU มาขายไทย ต้องรู้กฎ EU ด้วย",
            keyPoints: [
              { label: "Reg 2568/91", detail: "Defines EVOO grades + analytical methods" },
              { label: "Reg 1308/2013", detail: "Market organization · labeling requirements" },
              { label: "Reg 432/2012", detail: "Health claims · EFSA-approved list" },
              { label: "Reg 29/2012", detail: "EVOO labeling specifics" },
            ],
          },
          {
            title: "Approved Health Claims (EU)",
            body: "**เฉพาะ claims เหล่านี้** ที่ EU อนุญาตให้ใช้บนฉลาก",
            highlight: true,
            keyPoints: [
              { label: "Heart claim", detail: '"Olive oil polyphenols contribute to protection of blood lipids from oxidative stress"' },
              { label: "Condition", detail: "ต้องมี polyphenols ≥ 250 mg/kg" },
              { label: "Daily intake", detail: "≥ 20g (~2 tablespoons) ต่อวัน" },
            ],
          },
        ],
      },
      {
        id: "9.2",
        title: "Thai Food Law — สำคัญสำหรับ Hibi",
        title_en: "พ.ร.บ. อาหาร 2522",
        sections: [
          {
            title: "What's Allowed in Thailand",
            body: "อย. (อาหาร) ดูแลโดย FDA Thailand — กฎเข้มกว่า EU เรื่อง claims",
            keyPoints: [
              { label: "❌ ห้าม disease claims", detail: '"รักษา", "ป้องกัน", "บำบัด"' },
              { label: "❌ ห้าม weight loss claims", detail: '"ลดน้ำหนัก", "Detox"' },
              { label: "❌ ห้าม direct comparisons", detail: '"ดีกว่า X"' },
              { label: "✅ Generic descriptors", detail: '"สารต้านอนุมูลอิสระ"' },
              { label: "✅ Nutrition facts", detail: "Vitamin E, MUFA % บนฉลาก" },
              { label: "✅ Origin & variety", detail: '"100% Italian Taggiasca"' },
            ],
            highlight: true,
          },
          {
            title: "Framework การพูดที่ Hibi (Safe)",
            body: "3-Layer Framework ที่ใช้ได้ทุกครั้ง",
            keyPoints: [
              { label: "Layer 1: Fact", detail: '"EVOO has polyphenols (สารต้านอนุมูลอิสระ)"' },
              { label: "Layer 2: Research", detail: '"Studies show polyphenols are part of Mediterranean diet"' },
              { label: "Layer 3: Lifestyle", detail: '"Hibi makes mindful indulgence accessible"' },
              { label: "Never", detail: 'Bridge to specific disease names!' },
            ],
          },
        ],
      },
      {
        id: "9.3",
        title: "DOP, IGP, Organic Certifications",
        title_en: "Certifications สำคัญ",
        sections: [
          {
            title: "Geographic Indications",
            body: "EU certifications ที่บ่งบอก quality + origin",
            keyPoints: [
              { label: "🏛️ DOP (PDO)", detail: "Denominazione di Origine Protetta · ทุกอย่างต้องจากพื้นที่นั้น" },
              { label: "🌍 IGP (PGI)", detail: "Indicazione Geografica Protetta · บางอย่างจากพื้นที่" },
              { label: "🇪🇺 BIO (Organic)", detail: "EU organic certification · ไม่มี pesticides/synthetic" },
            ],
          },
          {
            title: "DOP Regions ที่ Hibi อาจเจอ",
            body: "DOP ของ EVOO ใน Italy + Spain",
            keyPoints: [
              { label: "Riviera Ligure DOP", detail: "Galateo's region!" },
              { label: "Chianti Classico DOP", detail: "Tuscany" },
              { label: "Terra di Bari DOP", detail: "Puglia" },
              { label: "Sierra de Cazorla DOP", detail: "Spain · Picual region" },
              { label: "Sierra Mágina DOP", detail: "Spain · Andalusia" },
            ],
          },
        ],
      },
      {
        id: "9.4",
        title: "Marketing Pitfalls",
        title_en: "ข้อผิดพลาดที่ต้องหลีกเลี่ยง",
        sections: [
          {
            title: "5 Mistakes Cafes Make with EVOO",
            body: "อย่าทำผิดแบบคู่แข่ง",
            highlight: true,
            keyPoints: [
              { label: "1. \"Healthy\" claims", detail: 'ห้ามใช้คำเดี่ยว · ต้องบอก why specifically' },
              { label: "2. Imagery medical", detail: "ไม่ใช้ภาพหมอ ยา X-ray" },
              { label: "3. Before/after", detail: "ห้ามภาพเปลี่ยนแปลงร่างกาย" },
              { label: "4. Testimonials disease", detail: "ห้าม customer พูด disease names" },
              { label: "5. Comparison products", detail: 'ห้าม "ดีกว่าน้ำมัน X brand"' },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "Regulation EU ที่กำหนด EVOO grades?", options: ["432/2012", "2568/91", "1308/2013", "29/2012"], correct: 1 },
      { type: "mc", q: "EU approved claim ต้องมี polyphenols อย่างน้อย?", options: ["50 mg/kg", "100 mg/kg", "250 mg/kg", "500 mg/kg"], correct: 2 },
      { type: "mc", q: "ตามกฎหมายไทย คำใดพูดได้?", options: ['"รักษาโรคหัวใจ"', '"Detox"', '"สารต้านอนุมูลอิสระ"', '"ลดน้ำหนัก"'], correct: 2 },
      { type: "tf", q: "DOP ย่อมาจาก Denominazione di Origine Protetta", correct: true, explain: "= Protected Designation of Origin" },
      { type: "mc", q: "Riviera Ligure DOP เป็นพื้นที่ของ?", options: ["Frantoio", "Picual", "Taggiasca (Galateo)", "Arbequina"], correct: 2 },
      { type: "tf", q: "Hibi ใช้ภาพ before/after ของลูกค้าได้", correct: false, explain: "ห้ามตาม พ.ร.บ. อาหาร" },
      { type: "mc", q: "Framework การพูดที่ปลอดภัยมีกี่ Layer?", options: ["2", "3", "5", "7"], correct: 1 },
      { type: "mc", q: "ห้ามทำอะไรกับคู่แข่งในไทย?", options: ["ดูสินค้าเขา", "ขายราคาถูกกว่า", "อ้างว่า 'ดีกว่า brand X' direct", "ทุกข้อ"], correct: 2 },
    ],
  },

  // ──────────────────────────────────────────────────
  // MODULE 10: Practical Application
  // ──────────────────────────────────────────────────
  {
    id: 10,
    roman: "X",
    title: "Practical Application",
    title_th: "นำไปใช้ที่ Hibi",
    subtitle: "From knowledge to business",
    description: "การใช้จริง · pairing · buying · serving",
    duration: "45 นาที",
    icon: "✨",
    lessons: [
      {
        id: "10.1",
        title: "EVOO + Food Pairing",
        title_en: "Pairing principles",
        sections: [
          {
            title: "Universal Rules",
            body: "หลักสากลในการ pair EVOO กับอาหาร",
            keyPoints: [
              { label: "Rule 1: Match intensity", detail: "Light oil + delicate food · Bold oil + rich food" },
              { label: "Rule 2: Contrast or complement", detail: "ตัด (lemon EVOO + ปลามัน) หรือ เสริม (mild oil + bread)" },
              { label: "Rule 3: Season matters", detail: "Fresh harvest = aromatic peak · ใช้ uncooked" },
              { label: "Rule 4: Temperature", detail: "Cold/raw = retain compounds · Hot = lose aroma แต่ stable" },
            ],
          },
        ],
      },
      {
        id: "10.2",
        title: "EVOO × Matcha — Hibi Formulas",
        title_en: "สูตร Hibi",
        sections: [
          {
            title: "Glow Latte Formulas",
            body: "การคำนวณ ratio EVOO ในเครื่องดื่ม",
            highlight: true,
            keyPoints: [
              { label: "Daily Glow", detail: "Matcha 5g · Oat milk 150ml · Arbequina EVOO 3ml · salt pinch" },
              { label: "Power Glow", detail: "Matcha 7g · Hooray 340ml · Arbequina EVOO 5ml · salt pinch" },
              { label: "Inner Glow", detail: "Matcha 5g · Yogurt bowl · Lemon EVOO 5ml drizzle on top" },
              { label: "Bergamot Reserve (V2)", detail: "Matcha 6g · Steamed milk 180ml · Bergamot EVOO 4ml" },
            ],
          },
          {
            title: "Ratios ที่ใช้ได้",
            body: "Universal guidelines",
            keyPoints: [
              { label: "Latte (200-340ml)", detail: "EVOO 3-5ml = 1.5-2.5%" },
              { label: "Drizzle topping", detail: "5-10ml per serving" },
              { label: "Smoothie/Shake", detail: "5-7ml per 300ml" },
              { label: "Cocktail", detail: "2-3ml = subtle finish" },
            ],
          },
        ],
      },
      {
        id: "10.3",
        title: "Cooking with EVOO",
        title_en: "ทำอาหารด้วย EVOO",
        sections: [
          {
            title: "Heat Tolerance Myth-Busting",
            body: "EVOO ทำอาหารได้ — แต่ต้องเข้าใจ",
            keyPoints: [
              { label: "Smoke Point EVOO", detail: "190-210°C (สูงกว่าที่หลายคนคิด!)" },
              { label: "Pan-frying", detail: "OK · ผัด stir-fry ได้" },
              { label: "Deep frying", detail: "OK · แต่ aromatic หายเยอะ — เสียดาย" },
              { label: "Roasting", detail: "Best use · ผักรับน้ำมัน + heat brings out flavor" },
              { label: "Finishing", detail: "Premium use · ไม่ใช้ heat · drizzle หลังทำเสร็จ" },
            ],
          },
          {
            title: "Hibi Cafe Use Cases",
            body: "How Hibi uses EVOO operationally",
            keyPoints: [
              { label: "Drizzle finishing", detail: "ทุกเครื่องดื่ม + bowl · highest perceived value" },
              { label: "Salad dressings", detail: "Signature dressings = differentiation" },
              { label: "Bake (limited)", detail: "EVOO matcha brownies · cookies · cakes" },
              { label: "Never deep fry", detail: "Waste of premium oil" },
            ],
          },
        ],
      },
      {
        id: "10.4",
        title: "Buying Guide for Hibi",
        title_en: "ซื้อยังไงให้คุ้ม",
        sections: [
          {
            title: "Checklist ตอนซื้อ EVOO",
            body: "ทุกครั้งที่ source supplier ใหม่",
            highlight: true,
            keyPoints: [
              { label: "✅ Extra Virgin label", detail: "Not 'Pure' or 'Olive Oil'" },
              { label: "✅ Harvest date", detail: "≤ 12 เดือนจากวันซื้อ" },
              { label: "✅ Single variety หรือ traceable blend", detail: "บอก cultivar ชัด" },
              { label: "✅ Origin specific", detail: "Region · ไม่ใช่แค่ \"Italy\"" },
              { label: "✅ Dark glass/tin", detail: "ไม่ใช่ขวดใส" },
              { label: "✅ Acidity stated", detail: "≤ 0.3% = premium · ≤ 0.5% = good · ≤ 0.8% = OK" },
              { label: "✅ Polyphenol level", detail: "≥ 250 mg/kg = ดี · ≥ 500 mg/kg = premium" },
              { label: "✅ Cold-extracted/pressed", detail: "Stated on label" },
            ],
          },
          {
            title: "Brands ที่หาในไทย (For Practice)",
            body: "Recommended for Hibi sensory training + benchmarking",
            keyPoints: [
              { label: "Entry-level practice", detail: "Carbonell Arbequina, Filippo Berio, Bertolli (Tops/Villa)" },
              { label: "Mid-tier", detail: "Carapelli, Carbonell DOP, Castello di Ama (Eataly)" },
              { label: "Premium (compare)", detail: "O-MED Arbequina (Premium Food), Frantoia (Eataly)" },
              { label: "Galateo Taggiasca", detail: "Order from Italy directly (after meeting Marco)" },
            ],
          },
        ],
      },
    ],
    quiz: [
      { type: "mc", q: "Smoke point ของ EVOO?", options: ["100°C", "150°C", "190-210°C", "300°C"], correct: 2 },
      { type: "mc", q: "Power Glow ใช้ EVOO กี่ ml?", options: ["1ml", "3ml", "5ml", "10ml"], correct: 2 },
      { type: "tf", q: "EVOO ที่ดีต้องมีขวดใสเพื่อเห็นสี", correct: false, explain: "Dark glass/tin ป้องกันแสง — ขวดใส = แสงทำลาย polyphenols" },
      { type: "mc", q: "Acidity ของ EVOO premium ควรเท่าไหร่?", options: ["≤ 0.3%", "≤ 1.0%", "≤ 2.0%", "≤ 3.0%"], correct: 0 },
      { type: "mc", q: "Polyphenol level ของ premium EVOO?", options: ["≥ 100 mg/kg", "≥ 250 mg/kg", "≥ 500 mg/kg", "≥ 1000 mg/kg"], correct: 2 },
      { type: "mc", q: "การใช้ EVOO ที่ให้ value สูงสุด?", options: ["Deep fry", "Stir fry", "Drizzle finishing", "Salad dressing"], correct: 2 },
      { type: "tf", q: "EVOO ลึก deep frying ได้ทำให้คุ้มค่า", correct: false, explain: "Smoke point ได้แต่ aromatic compounds หาย = waste premium oil" },
      { type: "mc", q: "Harvest date ของ EVOO ควรไม่เกิน?", options: ["6 เดือน", "12 เดือน", "24 เดือน", "ไม่จำกัด"], correct: 1 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════

export default function OlioAcademy() {
  const [screen, setScreen] = useState("welcome");
  const [studentName, setStudentName] = useState("");
  const [currentModule, setCurrentModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [completedModules, setCompletedModules] = useState({});
  const [moduleScores, setModuleScores] = useState({});
  const [examAnswers, setExamAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const name = localStorage.getItem("sommelier_name");
      if (name) setStudentName(name);
      const completed = localStorage.getItem("sommelier_completed");
      if (completed) setCompletedModules(JSON.parse(completed));
      const scores = localStorage.getItem("sommelier_scores");
      if (scores) setModuleScores(JSON.parse(scores));
      if (name) setScreen("dashboard");
    } catch (e) {}
    setLoaded(true);
  }, []);

  const saveName = (name: string) => {
    setStudentName(name);
    try { localStorage.setItem("sommelier_name", name); } catch (e) {}
    setScreen("dashboard");
  };

  const startModule = (moduleId) => {
    setCurrentModule(moduleId);
    setCurrentLesson(0);
    setCurrentSection(0);
    setScreen("lesson");
  };

  const completeModule = (moduleId: number, score: number) => {
    const updated = { ...completedModules, [moduleId]: true };
    const updatedScores = { ...moduleScores, [moduleId]: score };
    setCompletedModules(updated);
    setModuleScores(updatedScores);
    try {
      localStorage.setItem("sommelier_completed", JSON.stringify(updated));
      localStorage.setItem("sommelier_scores", JSON.stringify(updatedScores));
    } catch (e) {}
    setScreen("dashboard");
  };

  const startQuiz = (moduleId) => {
    setCurrentModule(moduleId);
    setExamAnswers({});
    setCurrentQuestion(0);
    setScreen("quiz");
  };

  const submitQuiz = (answers) => {
    const mod = MODULES.find((m) => m.id === currentModule);
    let score = 0;
    mod.quiz.forEach((q, i) => {
      if (q.type === "tf") { if (answers[i] === q.correct) score++; }
      else { if (answers[i] === q.correct) score++; }
    });
    const percentage = Math.round((score / mod.quiz.length) * 100);
    if (percentage >= 75) {
      completeModule(currentModule, percentage);
    }
    setScreen("quizResult");
    return { score, total: mod.quiz.length, percentage };
  };

  const totalProgress = (Object.values(completedModules).filter(Boolean).length / MODULES.length) * 100;
  const allComplete = Object.values(completedModules).filter(Boolean).length === MODULES.length;
  const averageScore = Object.values(moduleScores).length > 0
    ? Math.round(Object.values(moduleScores).reduce((a, b) => a + b, 0) / Object.values(moduleScores).length)
    : 0;

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F5F1E8" }}>
        <div className="text-stone-600 font-serif italic">กำลังโหลด...</div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;300;400;500;600;700&family=Fraunces:opsz,wght@9..144,200..700&display=swap');
        .olio-academy { font-family: 'Bai Jamjuree', system-ui, sans-serif; background: #F5F1E8; color: #2A2A24; min-height: 100vh; position: relative; }
        .olio-academy::before { content: ''; position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.165 0 0 0 0 0.165 0 0 0 0 0.141 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity: 0.4; pointer-events: none; z-index: 0; }
        .display-font { font-family: 'Fraunces', serif; }
        .number-deco { font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; }
        .card-shadow { box-shadow: 0 1px 0 rgba(42,42,36,0.04), 0 8px 24px -8px rgba(42,42,36,0.08); }
        .btn-primary { background: #3D4E2E; color: #F5F1E8; transition: all 0.3s ease; }
        .btn-primary:hover:not(:disabled) { background: #2A3820; transform: translateY(-1px); }
        .btn-primary:disabled { background: #B8B5A8; cursor: not-allowed; }
        .quiz-option { transition: all 0.2s ease; border: 1.5px solid #D8D3C4; }
        .quiz-option:hover { border-color: #6B8A4A; background: rgba(107,138,74,0.04); }
        .quiz-option.selected { border-color: #3D4E2E; background: rgba(61,78,46,0.06); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .anim-in { animation: fadeUp 0.5s ease forwards; }
        .ornament { width: 24px; height: 1px; background: #C9A961; display: inline-block; }
        .module-locked { opacity: 0.5; cursor: not-allowed; }
      `}</style>

      <div className="olio-academy">
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {screen === "welcome" && <WelcomeScreen key="welcome" onSubmit={saveName} />}
            {screen === "dashboard" && (
              <Dashboard
                key="dashboard"
                name={studentName}
                completedModules={completedModules}
                moduleScores={moduleScores}
                totalProgress={totalProgress}
                averageScore={averageScore}
                allComplete={allComplete}
                onStartModule={startModule}
                onStartQuiz={startQuiz}
              />
            )}
            {screen === "lesson" && currentModule && (
              <LessonView
                key={`lesson-${currentModule}-${currentLesson}-${currentSection}`}
                module={MODULES.find((m) => m.id === currentModule)}
                lessonIndex={currentLesson}
                sectionIndex={currentSection}
                onNext={() => {
                  const mod = MODULES.find((m) => m.id === currentModule);
                  const lesson = mod.lessons[currentLesson];
                  if (currentSection < lesson.sections.length - 1) {
                    setCurrentSection(currentSection + 1);
                  } else if (currentLesson < mod.lessons.length - 1) {
                    setCurrentLesson(currentLesson + 1);
                    setCurrentSection(0);
                  } else {
                    startQuiz(currentModule);
                  }
                }}
                onPrev={() => {
                  if (currentSection > 0) {
                    setCurrentSection(currentSection - 1);
                  } else if (currentLesson > 0) {
                    const mod = MODULES.find((m) => m.id === currentModule);
                    const prevLesson = mod.lessons[currentLesson - 1];
                    setCurrentLesson(currentLesson - 1);
                    setCurrentSection(prevLesson.sections.length - 1);
                  } else {
                    setScreen("dashboard");
                  }
                }}
                onExit={() => setScreen("dashboard")}
              />
            )}
            {screen === "quiz" && currentModule && (
              <QuizView
                key={`quiz-${currentModule}`}
                module={MODULES.find((m) => m.id === currentModule)}
                questionIndex={currentQuestion}
                answers={examAnswers}
                onAnswer={(idx, val) => setExamAnswers({ ...examAnswers, [idx]: val })}
                onNext={() => {
                  const mod = MODULES.find((m) => m.id === currentModule);
                  if (currentQuestion < mod.quiz.length - 1) setCurrentQuestion(currentQuestion + 1);
                  else submitQuiz(examAnswers);
                }}
                onPrev={() => { if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1); }}
                onExit={() => setScreen("dashboard")}
              />
            )}
            {screen === "quizResult" && currentModule && (
              <QuizResultView
                key={`result-${currentModule}`}
                module={MODULES.find((m) => m.id === currentModule)}
                answers={examAnswers}
                onContinue={() => setScreen("dashboard")}
                onRetake={() => { setExamAnswers({}); setCurrentQuestion(0); setScreen("quiz"); }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// WELCOME SCREEN
// ═══════════════════════════════════════════════════════════

function WelcomeScreen({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full">
        <div className="text-center mb-12 anim-in">
          <Logo markSize={80} fontSize={56} layout="stacked" subtitle="Sommelier Path" />
        </div>

        <div className="text-center mb-10 anim-in" style={{ animationDelay: "0.1s" }}>
          <p className="display-font italic text-stone-600 text-lg mb-2">Founder's Pre-Sommelier Course</p>
          <p className="text-sm text-stone-500 mt-4 leading-relaxed max-w-xs mx-auto">
            10 modules · 80+ บทเรียน · Sensory Cert prep<br/>
            เตรียมตัวก่อน IRVEA + ESAO
          </p>
        </div>

        <div className="card-shadow bg-white/60 backdrop-blur-sm rounded-2xl p-7 anim-in" style={{ animationDelay: "0.2s" }}>
          <label className="block">
            <span className="text-sm font-semibold text-stone-800 block mb-3">ชื่อนักเรียน</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Bussarawa"
              className="w-full px-4 py-3 bg-transparent border-b-2 outline-none text-lg"
              style={{ borderColor: name ? "#3D4E2E" : "#D8D3C4" }}
            />
          </label>
          <button
            onClick={() => name.trim() && onSubmit(name.trim())}
            disabled={!name.trim()}
            className="btn-primary w-full mt-6 py-4 rounded-xl font-medium tracking-wide"
          >
            เริ่มเรียน →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════

function Dashboard({ name, completedModules, moduleScores, totalProgress, averageScore, allComplete, onStartModule, onStartQuiz }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen px-6 py-10 max-w-3xl mx-auto">

      <header className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <Logo markSize={36} fontSize={22} layout="horizontal" subtitle="Sommelier Path" />
        </div>

        <div className="mt-8">
          <p className="text-xs text-stone-500 mb-1">สวัสดี Sommelier</p>
          <h1 className="display-font italic text-3xl font-light">{name}</h1>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="card-shadow bg-white/60 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xs text-stone-500 mb-1">Modules</div>
            <div className="display-font text-2xl font-light">{Object.values(completedModules).filter(Boolean).length}<span className="text-stone-300">/10</span></div>
          </div>
          <div className="card-shadow bg-white/60 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xs text-stone-500 mb-1">Progress</div>
            <div className="display-font text-2xl font-light">{Math.round(totalProgress)}%</div>
          </div>
          <div className="card-shadow bg-white/60 backdrop-blur-sm rounded-xl p-4">
            <div className="text-xs text-stone-500 mb-1">Avg Score</div>
            <div className="display-font text-2xl font-light" style={{ color: averageScore >= 80 ? "#3D4E2E" : "#8B7A4A" }}>{averageScore}%</div>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="ornament"></span>
          <h2 className="number-deco text-sm tracking-[0.25em] uppercase text-stone-600">Curriculum</h2>
        </div>
        <div className="space-y-3">
          {MODULES.map((mod, idx) => {
            const isCompleted = completedModules[mod.id];
            const isPrevDone = idx === 0 || completedModules[MODULES[idx - 1].id];
            const isUnlocked = isPrevDone;
            const score = moduleScores[mod.id];

            return (
              <button
                key={mod.id}
                onClick={() => isUnlocked && onStartModule(mod.id)}
                disabled={!isUnlocked}
                className={`w-full card-shadow bg-white/60 backdrop-blur-sm rounded-2xl p-5 text-left transition-all ${isUnlocked ? 'hover:bg-white/80 hover:translate-x-1' : 'module-locked'}`}
              >
                <div className="flex gap-4 items-start">
                  <div className="number-deco italic text-3xl text-stone-300 leading-none mt-1 w-12">{mod.roman}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="display-font text-lg font-light leading-tight">{mod.title}</h3>
                        <p className="text-xs text-stone-500 mt-0.5">{mod.title_th}</p>
                      </div>
                      <div className="text-right shrink-0">
                        {!isUnlocked && <span className="text-xs text-stone-400">🔒</span>}
                        {isCompleted && (
                          <div className="flex items-center gap-1 text-xs" style={{ color: "#3D4E2E" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3D4E2E" }}></span>
                            {score}%
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{mod.description}</p>
                    <div className="flex gap-3 text-xs text-stone-500">
                      <span>{mod.lessons.length} บท</span>
                      <span>·</span>
                      <span>{mod.duration}</span>
                      <span>·</span>
                      <span>{mod.quiz.length} ข้อสอบ</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {allComplete && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="ornament"></span>
            <h2 className="number-deco text-sm tracking-[0.25em] uppercase text-stone-600">Achievement</h2>
          </div>
          <div className="card-shadow rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #3D4E2E 0%, #2A3820 100%)", color: "#F5F1E8" }}>
            <div className="mb-4">
              <LogoMark size={48} strokeColor="#F5F1E8" dotColor="#C9A961" />
            </div>
            <div className="number-deco text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#C9A961" }}>Pre-Sommelier Complete</div>
            <h2 className="display-font text-2xl mb-2">พร้อมเข้า IRVEA + ESAO แล้ว</h2>
            <p className="text-sm opacity-80">Average score: {averageScore}%</p>
          </div>
        </section>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// LESSON VIEW
// ═══════════════════════════════════════════════════════════

function LessonView({ module, lessonIndex, sectionIndex, onNext, onPrev, onExit }) {
  const lesson = module.lessons[lessonIndex];
  const section = lesson.sections[sectionIndex];
  const totalSections = module.lessons.reduce((acc, l) => acc + l.sections.length, 0);
  const currentTotal = module.lessons.slice(0, lessonIndex).reduce((acc, l) => acc + l.sections.length, 0) + sectionIndex + 1;
  const progress = (currentTotal / totalSections) * 100;
  const isLastSection = lessonIndex === module.lessons.length - 1 && sectionIndex === lesson.sections.length - 1;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col">
      <div className="sticky top-0 backdrop-blur-md bg-stone-50/80 z-20 border-b border-stone-200/50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <button onClick={onExit} className="text-xs text-stone-500 hover:text-stone-700">← Dashboard</button>
            <div className="flex items-center gap-2">
              <LogoMark size={16} />
              <p className="number-deco text-xs tracking-[0.2em] uppercase text-stone-500">Module {module.roman}</p>
            </div>
            <span className="text-xs text-stone-500">{currentTotal}/{totalSections}</span>
          </div>
          <div className="h-0.5 bg-stone-200 rounded-full overflow-hidden">
            <motion.div className="h-full" style={{ background: "#3D4E2E" }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
        <motion.div key={`${lessonIndex}-${sectionIndex}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="number-deco italic text-xs tracking-[0.25em] uppercase text-stone-500 mb-2">{lesson.title_en || lesson.title}</div>
          <h2 className="display-font text-3xl md:text-4xl font-light leading-tight mb-2" style={{ color: "#2A2A24" }}>{lesson.title}</h2>
          <div className="mt-6 mb-8">
            <h3 className="display-font italic text-xl font-light mb-3" style={{ color: "#3D4E2E" }}>{section.title}</h3>
            <p className="text-base leading-relaxed text-stone-700">{renderTextWithBold(section.body)}</p>
          </div>

          {section.highlight && (
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(201,169,97,0.15)", color: "#7A5F2C" }}>
              <span className="w-1 h-1 rounded-full" style={{ background: "#C9A961" }}></span>
              จุดสำคัญ
            </div>
          )}

          {section.keyPoints && (
            <div className="space-y-4 mb-8">
              {section.keyPoints.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }} className="card-shadow bg-white/60 backdrop-blur-sm rounded-xl p-5 flex gap-4">
                  <div className="number-deco italic text-2xl text-stone-300 leading-none mt-1">{String(i + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <div className="font-medium text-stone-900 mb-1">{p.label}</div>
                    <div className="text-sm text-stone-600 leading-relaxed">{p.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className="sticky bottom-0 backdrop-blur-md bg-stone-50/80 border-t border-stone-200/50">
        <div className="max-w-2xl mx-auto px-6 py-4 flex gap-3">
          <button onClick={onPrev} className="px-6 py-3 rounded-xl text-sm text-stone-600 hover:text-stone-900 transition-colors">← ก่อนหน้า</button>
          <button onClick={onNext} className="btn-primary flex-1 py-3 rounded-xl font-medium">{isLastSection ? "ทำข้อสอบ →" : "ถัดไป →"}</button>
        </div>
      </div>
    </motion.div>
  );
}

function renderTextWithBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} className="font-semibold" style={{ color: "#2A2A24" }}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

// ═══════════════════════════════════════════════════════════
// QUIZ VIEW
// ═══════════════════════════════════════════════════════════

function QuizView({ module, questionIndex, answers, onAnswer, onNext, onPrev, onExit }) {
  const q = module.quiz[questionIndex];
  const hasAnswer = answers[questionIndex] !== undefined;
  const progress = ((questionIndex + 1) / module.quiz.length) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col">
      <div className="sticky top-0 backdrop-blur-md bg-stone-50/80 z-20 border-b border-stone-200/50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <button onClick={() => { if (confirm("ออกจากข้อสอบ? คำตอบจะหายไป")) onExit(); }} className="text-xs text-stone-500 hover:text-stone-700">← ออก</button>
            <p className="number-deco text-xs tracking-[0.2em] uppercase" style={{ color: "#3D4E2E" }}>Quiz: Module {module.roman}</p>
            <span className="text-xs text-stone-500">{questionIndex + 1}/{module.quiz.length}</span>
          </div>
          <div className="h-0.5 bg-stone-200 rounded-full overflow-hidden">
            <motion.div className="h-full" style={{ background: "#3D4E2E" }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
        <motion.div key={questionIndex} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="number-deco italic text-stone-300 text-sm mb-3">Q {String(questionIndex + 1).padStart(2, "0")}</div>
          <h2 className="display-font text-2xl md:text-3xl font-light leading-tight mb-10" style={{ color: "#2A2A24" }}>{q.q}</h2>

          {q.type === "mc" && (
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => onAnswer(questionIndex, i)} className={`quiz-option w-full p-4 rounded-xl text-left bg-white/60 backdrop-blur-sm ${answers[questionIndex] === i ? "selected" : ""}`}>
                  <div className="flex items-start gap-3">
                    <div className="number-deco italic text-stone-400 mt-0.5">{String.fromCharCode(65 + i)}</div>
                    <div className="text-stone-700 leading-relaxed">{opt}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {q.type === "tf" && (
            <div className="space-y-3">
              <button onClick={() => onAnswer(questionIndex, true)} className={`quiz-option w-full p-5 rounded-xl text-left bg-white/60 backdrop-blur-sm ${answers[questionIndex] === true ? "selected" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="number-deco italic">✓</div>
                  <div className="text-stone-700 font-medium">ถูก (True)</div>
                </div>
              </button>
              <button onClick={() => onAnswer(questionIndex, false)} className={`quiz-option w-full p-5 rounded-xl text-left bg-white/60 backdrop-blur-sm ${answers[questionIndex] === false ? "selected" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="number-deco italic">✗</div>
                  <div className="text-stone-700 font-medium">ผิด (False)</div>
                </div>
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className="sticky bottom-0 backdrop-blur-md bg-stone-50/80 border-t border-stone-200/50">
        <div className="max-w-2xl mx-auto px-6 py-4 flex gap-3">
          <button onClick={onPrev} disabled={questionIndex === 0} className="px-6 py-3 rounded-xl text-sm text-stone-600 hover:text-stone-900 disabled:opacity-30 transition-colors">← ก่อนหน้า</button>
          <button onClick={onNext} disabled={!hasAnswer} className="btn-primary flex-1 py-3 rounded-xl font-medium">{questionIndex === module.quiz.length - 1 ? "ส่งคำตอบ ✓" : "ถัดไป →"}</button>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// QUIZ RESULT
// ═══════════════════════════════════════════════════════════

function QuizResultView({ module, answers, onContinue, onRetake }) {
  let score = 0;
  module.quiz.forEach((q, i) => {
    if (q.type === "tf") { if (answers[i] === q.correct) score++; }
    else { if (answers[i] === q.correct) score++; }
  });
  const percentage = Math.round((score / module.quiz.length) * 100);
  const passed = percentage >= 75;
  const wrong = module.quiz.map((q, i) => ({ ...q, index: i, correct_answer: q.correct, user_answer: answers[i] })).filter((q) => answers[q.index] !== q.correct_answer);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen px-6 py-12 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="number-deco text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Module {module.roman} · Result</div>
        <div className="display-font text-7xl font-light leading-none mb-3" style={{ color: passed ? "#3D4E2E" : "#8B6B45" }}>
          {score}<span className="text-stone-300">/{module.quiz.length}</span>
        </div>
        <div className="text-sm text-stone-500 mb-4">{percentage}%</div>
        <div className="inline-block px-6 py-3 rounded-full text-sm font-medium" style={{ background: passed ? "rgba(61,78,46,0.1)" : "rgba(184,132,80,0.1)", color: passed ? "#3D4E2E" : "#8B6B45" }}>
          {passed ? "🎉 ผ่าน — ปลดล็อก Module ถัดไป" : "💪 ผ่านที่ 75% — ทบทวนแล้วลองอีก"}
        </div>
      </div>

      {wrong.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="ornament"></span>
            <h3 className="number-deco text-xs tracking-[0.25em] uppercase text-stone-600">ตอบผิด ({wrong.length})</h3>
          </div>
          <div className="space-y-3">
            {wrong.map((q) => (
              <div key={q.index} className="card-shadow bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <div className="text-xs text-stone-500 mb-1">Q{q.index + 1}</div>
                <div className="text-stone-800 font-medium mb-2 text-sm">{q.q}</div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "#3D4E2E" }}>คำตอบที่ถูก</div>
                <div className="text-sm text-stone-700">{q.type === "tf" ? (q.correct ? "ถูก" : "ผิด") : q.options[q.correct]}</div>
                {q.explain && <div className="mt-2 pt-2 border-t border-stone-200/50 text-xs text-stone-600 italic">{q.explain}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {passed ? (
          <button onClick={onContinue} className="btn-primary py-4 rounded-xl font-medium">ไป Module ถัดไป →</button>
        ) : (
          <>
            <button onClick={onRetake} className="btn-primary py-4 rounded-xl font-medium">ทำใหม่</button>
            <button onClick={onContinue} className="py-3 text-sm text-stone-500 hover:text-stone-700">กลับ dashboard ทบทวน</button>
          </>
        )}
      </div>
    </motion.div>
  );
}
