import { useState } from "react";

const DAYS = [
  {
    short: "ПН",
    title: "Вел (жиросжигание) + верх",
    location: "зал",
    tag: "cardio_upper",
    blocks: [
      {
        name: "🚴 Велосипед — 40 мин, жиросжигание",
        items: [
          "5 мин разминка → каденс 85–90, лёгкое сопротивление",
          "30 мин основная часть → каденс 80–85, сопротивление среднее-лёгкое",
          "Пульс: 125–145 уд/мин (зона 2). Тест: можете говорить предложениями, но петь уже нет",
          "НЕ ускоряться, НЕ вставать из седла. Ровное монотонное кручение",
          "Именно так горит жир — длительная работа на низком пульсе",
          "5 мин заминка → сбросить сопротивление, каденс свободный"
        ]
      },
      {
        name: "💪 Верх (короткая) — 20 мин",
        items: [
          "Жим гантелей лёжа или отжимания → 3×12",
          "Тяга гантели в наклоне → 3×12 каждая рука",
          "Жим гантелей сидя на плечи → 3×10",
          "Разгибание на трицепс + сгибание на бицепс → 2×12 суперсетом",
          "Отдых между подходами → 45 сек. Темп бодрый, без затягивания"
        ]
      }
    ]
  },
  {
    short: "ВТ",
    title: "Вел + силовая ног",
    location: "зал",
    tag: "strength",
    blocks: [
      {
        name: "🚴 Велосипед — 40 мин",
        items: [
          "10 мин разминка → каденс 85–90, лёгкое сопротивление",
          "5 × (3 мин тяжёлое из седла, каденс 55–65 + 2 мин лёгкое в седле, каденс 90) → имитация подъёмов",
          "5 мин заминка → лёгкое педалирование"
        ]
      },
      {
        name: "🦵 Силовая ног — 25 мин",
        items: [
          "Болгарские выпады → 3×12 каждая нога. Темп: 3 сек вниз / 1 сек вверх",
          "Присед на одной ноге на скамью → 3×10 каждая. Колено строго над стопой",
          "Подъёмы на носки → 3×20, пауза 2 сек наверху",
          "Ягодичный мост одной ногой → 3×15, пауза 1 сек наверху",
          "Отдых между подходами → 45–60 сек"
        ]
      }
    ]
  },
  {
    short: "СР",
    title: "Бег + горка (интервалы)",
    location: "улица",
    tag: "run_outdoor",
    blocks: [
      {
        name: "🏃‍♀️ Разминка — 2 км",
        items: [
          "Темп: 6:30–7:00 /км",
          "Перед стартом: суставная разминка 2 мин (стопы, колени, бёдра)"
        ]
      },
      {
        name: "⛰️ Горные повторы",
        items: [
          "5 × забегание в горку (вся длина вашей горки)",
          "Темп вверх → усилие 7/10, не спринт. Можете сказать 3–4 слова",
          "Техника: короткий шаг, стопа под центр тяжести, руки активно, корпус +5° вперёд",
          "Спуск = отдых → трусцой вниз, мелкий шаг, колени мягкие",
          "Пауза внизу → 30 сек"
        ]
      },
      {
        name: "🏃‍♀️ Добивка — 2 км",
        items: [
          "Темп: 6:10–6:30 /км — чуть быстрее разминки",
          "Цель: бежать ровно после горной работы"
        ]
      },
      {
        name: "📊 Итого: ~7 км, ~35–40 мин",
        items: [
          "Заминка: ходьба 3 мин + растяжка икр и квадрицепсов"
        ]
      }
    ]
  },
  {
    short: "ЧТ",
    title: "Дорожка (наклон) + йога",
    location: "зал",
    tag: "run_gym",
    blocks: [
      {
        name: "🏃‍♀️ Бег на дорожке — 35 мин",
        items: [
          "Разминка: 8 мин → темп 6:30 /км, наклон 1%",
          "Основная: 5 × (2 мин наклон 8–10%, темп 7:00–7:30 + 2 мин наклон 1%, темп 6:00)",
          "Вверх → терпим, дышим ровно. На плоскости → расслабляемся, ловим ритм",
          "Заминка: 7 мин → темп 6:30–7:00, наклон 0%"
        ]
      },
      {
        name: "🧘 Йога — 25 мин",
        items: [
          "Акцент: раскрытие бёдер, голеностоп, грудной отдел",
          "Обязательно: голубь, лягушка, собака мордой вниз с прокачкой икр"
        ]
      },
      {
        name: "📊 Итого бег: ~5 км",
        items: []
      }
    ]
  },
  {
    short: "ПТ",
    title: "Лёгкий бег + сила ног",
    location: "зал",
    tag: "run_strength",
    blocks: [
      {
        name: "🏃‍♀️ Лёгкий бег на дорожке — 25 мин",
        items: [
          "Темп: 6:30–6:50 /км, наклон 2–3%",
          "Пульс: зона 2, дышим носом, можно разговаривать",
          "Восстановительный бег → НЕ ускоряться"
        ]
      },
      {
        name: "🦵 Силовая ног (облегчённая) — 20 мин",
        items: [
          "Зашагивания на высокую платформу → 3×12 каждая нога, с гантелями",
          "Выпады назад → 3×10 каждая нога",
          "Планка → 3×45 сек",
          "Боковая планка → 3×30 сек каждая сторона",
          "Отдых между подходами → 45 сек"
        ]
      },
      {
        name: "📊 Итого бег: ~4 км",
        items: []
      }
    ]
  },
  {
    short: "СБ",
    title: "Длительный бег",
    location: "улица",
    tag: "long",
    blocks: [
      {
        name: "🏃‍♀️ Длительная — 12 км",
        items: [
          "Км 1–3 → разминка: 6:20–6:40 /км. Не рвать с места",
          "Км 4–9 → крейсер: 6:00–6:15 /км. Ваш будущий гоночный ритм",
          "Км 10–12 → ускорение: 5:40–5:50 /км. Финиш бодро",
          "Если по пути горка — забежать 1–2 раза, не обходить"
        ]
      },
      {
        name: "💧 Питание и вода",
        items: [
          "Взять воду → пить каждые 15–20 мин по 2–3 глотка",
          "Гель или банан → на 40-й минуте",
          "Завтрак за 1.5–2 ч до: каша + банан"
        ]
      },
      {
        name: "📊 Итого: 12 км, ~70–75 мин",
        items: [
          "Заминка: ходьба 5 мин, растяжка 10 мин, ролл вечером"
        ]
      }
    ]
  },
  {
    short: "ВС",
    title: "Выходной",
    location: "",
    tag: "rest",
    blocks: [
      {
        name: "Полный отдых",
        items: [
          "Пенный ролл → икры, квадрицепсы, ITB — по 60 сек на группу",
          "Растяжка 15 мин → акцент голеностоп + бёдра",
          "Раскатка стоп теннисным мячиком → 2×60 сек каждая",
          "Можно: лёгкая прогулка 20–30 мин, без нагрузки"
        ]
      }
    ]
  }
];

const tagConfig = {
  rest: { label: "ОТДЫХ", color: "#6b93d6", bg: "rgba(100,149,237,0.12)", cardBg: "rgba(100,149,237,0.04)", border: "rgba(100,149,237,0.18)" },
  cardio_upper: { label: "КАРДИО + ВЕРХ", color: "#e056a0", bg: "rgba(224,86,160,0.12)", cardBg: "rgba(224,86,160,0.04)", border: "rgba(224,86,160,0.18)" },
  strength: { label: "СИЛА", color: "#e67e22", bg: "rgba(230,126,34,0.12)", cardBg: "rgba(230,126,34,0.04)", border: "rgba(230,126,34,0.18)" },
  run_outdoor: { label: "БЕГ", color: "#2ecc71", bg: "rgba(46,204,113,0.12)", cardBg: "rgba(46,204,113,0.04)", border: "rgba(46,204,113,0.18)" },
  run_gym: { label: "БЕГ + ЙОГА", color: "#9b59b6", bg: "rgba(155,89,182,0.12)", cardBg: "rgba(155,89,182,0.04)", border: "rgba(155,89,182,0.18)" },
  run_strength: { label: "БЕГ + СИЛА", color: "#e74c3c", bg: "rgba(231,76,60,0.12)", cardBg: "rgba(231,76,60,0.04)", border: "rgba(231,76,60,0.18)" },
  long: { label: "ДЛИТЕЛЬНАЯ", color: "#f1c40f", bg: "rgba(241,196,15,0.12)", cardBg: "rgba(241,196,15,0.04)", border: "rgba(241,196,15,0.18)" }
};

const locIcon = { "зал": "🏋️", "улица": "🌿" };

export default function Week1() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "linear-gradient(170deg, #0f1923 0%, #1a2a3a 40%, #162230 100%)",
      color: "#e0e8f0",
      minHeight: "100vh",
      padding: "20px 14px 32px",
      maxWidth: 540,
      margin: "0 auto"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#4a6fa5", fontWeight: 600, textTransform: "uppercase" }}>Неделя 1 из 4</div>
        <h1 style={{ margin: "6px 0 0", fontSize: 22, fontWeight: 700, color: "#fff" }}>Адаптация к рельефу</h1>
        <div style={{ fontSize: 13, color: "#6b8a9e", marginTop: 4 }}>23–30 марта</div>
      </div>

      <div style={{
        display: "flex", justifyContent: "center", gap: 16, margin: "16px 0 20px",
        padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        {[
          { icon: "📏", label: "Бег", val: "~28 км" },
          { icon: "🚴", label: "Вел", val: "80 мин" },
          { icon: "⛰️", label: "Набор", val: "~200 м" },
          { icon: "🏃‍♀️", label: "Беговых", val: "4 дня" },
          { icon: "😴", label: "Отдых", val: "ВС" }
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15 }}>{s.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 2 }}>{s.val}</div>
            <div style={{ fontSize: 10, color: "#5a7a94" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {DAYS.map((d, i) => {
          const tc = tagConfig[d.tag];
          const isOpen = open === i;
          return (
            <div key={i} onClick={() => setOpen(isOpen ? null : i)} style={{
              background: isOpen ? tc.cardBg : "rgba(255,255,255,0.025)",
              borderRadius: 14,
              border: `1px solid ${isOpen ? tc.border : "rgba(255,255,255,0.05)"}`,
              overflow: "hidden", cursor: "pointer", transition: "all 0.2s ease"
            }}>
              <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: tc.bg, color: tc.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, flexShrink: 0
                  }}>{d.short}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: isOpen ? "#fff" : "#c0d0de" }}>{d.title}</div>
                    <div style={{ display: "flex", gap: 6, marginTop: 3, alignItems: "center" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 600, color: tc.color, background: tc.bg,
                        padding: "1px 7px", borderRadius: 5, letterSpacing: 0.5
                      }}>{tc.label}</span>
                      {d.location && (
                        <span style={{ fontSize: 11, color: "#5a7a94" }}>
                          {locIcon[d.location]} {d.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{
                  color: "#4a6a84", fontSize: 14, transition: "transform 0.2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)"
                }}>▾</div>
              </div>

              {isOpen && (
                <div style={{ padding: "0 16px 16px", animation: "fadeIn 0.25s ease" }}>
                  {d.blocks.map((block, bi) => (
                    <div key={bi} style={{
                      marginTop: bi === 0 ? 0 : 14,
                      paddingTop: bi === 0 ? 0 : 12,
                      borderTop: bi === 0 ? "none" : "1px solid rgba(255,255,255,0.06)"
                    }}>
                      <div style={{
                        fontSize: 13, fontWeight: 700, color: tc.color,
                        marginBottom: block.items.length ? 8 : 0, letterSpacing: 0.3
                      }}>{block.name}</div>
                      {block.items.map((item, ii) => (
                        <div key={ii} style={{
                          fontSize: 13, color: "#a8bece", lineHeight: 1.65,
                          padding: "3px 0 3px 14px",
                          borderLeft: `2px solid ${tc.border}`,
                          marginBottom: 4
                        }}>{item}</div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 20, background: "rgba(224,86,160,0.06)",
        border: "1px solid rgba(224,86,160,0.15)", borderRadius: 14, padding: "16px 18px"
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#e056a0", marginBottom: 6 }}>🔥 Почему вел на жиросжигание, а не силовой</div>
        <div style={{ fontSize: 13, color: "#8a9bb5", lineHeight: 1.6 }}>
          Зона 2 (пульс 125–145) — это где тело использует жир как основное топливо. Во вторник вел будет силовой (имитация подъёмов). А в понедельник — ровное кручение 30 мин на низком пульсе. Монотонно, скучно, но именно это жжёт жир и восстанавливает ноги после воскресного отдыха.
        </div>
      </div>

      <div style={{
        marginTop: 10, background: "rgba(107,147,214,0.06)",
        border: "1px solid rgba(107,147,214,0.15)", borderRadius: 14, padding: "16px 18px"
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#6b93d6", marginBottom: 6 }}>📝 После недели → обратная связь</div>
        <div style={{ fontSize: 13, color: "#8a9bb5", lineHeight: 1.6 }}>
          Напишите по каждому дню: реальный темп, самочувствие, где тяжело / легко. Скорректируем неделю 2.
        </div>
      </div>

      <div style={{
        marginTop: 10, background: "rgba(46,204,113,0.05)",
        border: "1px solid rgba(46,204,113,0.12)", borderRadius: 14, padding: "16px 18px"
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#2ecc71", marginBottom: 6 }}>🍽 Питание</div>
        <div style={{ fontSize: 13, color: "#8a9bb5", lineHeight: 1.6 }}>
          Тренировки (ПН–СБ): 1700 ккал → Б 145 / Ж 55 / У 150<br/>
          Отдых (ВС): 1500 ккал → Б 145 / Ж 50 / У 105<br/>
          СБ считаем как обычный день
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#3a5568" }}>
        Trail 15 км / 750 м D+ → 19 апреля 2026
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
      `}</style>
    </div>
  );
}
