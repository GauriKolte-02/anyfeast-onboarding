import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 15;

  const [data, setData] = useState({
    goals: [],
    activity: "",
    cookingFreq: "",
    diet: "",
    cookingTime: "",
    kitchen: "",
    height: "",
    weight: "",
    goalWeight: "",
    budget: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const progress = (step / totalSteps) * 100;

  const toggleGoal = (goal) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  return (
    <div style={styles.page}>
      {/* CONTINUOUS PROGRESS BAR */}
      <div style={styles.progressWrap}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      <div style={styles.card}>
        {/* 1 — WELCOME */}
        {step === 1 && (
          <>
            <h1>Let’s build a meal plan that fits your life 🍽️</h1>
            <p style={styles.sub}>
              Answer a few questions to personalize your meals
            </p>
            <Primary text="Get Started →" onClick={next} />
          </>
        )}

        {/* 2 — GOALS */}
        {step === 2 && (
          <>
            <h2>Your goals</h2>
            {[
              "Lose weight",
              "Maintain weight",
              "Gain weight",
              "Modify diet",
            ].map((g) => (
              <Selectable
                key={g}
                text={g}
                selected={data.goals.includes(g)}
                onClick={() => toggleGoal(g)}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 3 — MICRO (GOALS) */}
        {step === 3 && (
          <>
            <h2>Nice choice! ✨</h2>
            <p style={styles.sub}>
              This helps us design a plan that actually works for you.
            </p>
            <Primary text="Continue →" onClick={next} />
          </>
        )}

        {/* 4 — LIFESTYLE */}
        {step === 4 && (
          <>
            <h2>How does your day usually look?</h2>
            {["Mostly sitting", "Moderately active", "Very active"].map((a) => (
              <Selectable
                key={a}
                text={a}
                selected={data.activity === a}
                onClick={() => setData({ ...data, activity: a })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 5 — MICRO (LIFESTYLE) */}
        {step === 5 && (
          <>
            <h2>Good to know 👍</h2>
            <p style={styles.sub}>
              Your activity level helps us balance calories correctly.
            </p>
            <Primary text="Continue →" onClick={next} />
          </>
        )}

        {/* 6 — COOKING FREQUENCY */}
        {step === 6 && (
          <>
            <h2>How often do you cook?</h2>
            {["Daily", "3–4x per week", "Rarely"].map((c) => (
              <Selectable
                key={c}
                text={c}
                selected={data.cookingFreq === c}
                onClick={() => setData({ ...data, cookingFreq: c })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 7 — MICRO (COOKING FREQ) */}
        {step === 7 && (
          <>
            <h2>Awesome! 🍳</h2>
            <p style={styles.sub}>
              Cooking habits give us flexibility in meal planning.
            </p>
            <Primary text="Continue →" onClick={next} />
          </>
        )}

        {/* 8 — FOOD PREFERENCE */}
        {step === 8 && (
          <>
            <h2>Food preference</h2>
            {["Vegetarian", "Eggetarian", "Non-vegetarian"].map((d) => (
              <Selectable
                key={d}
                text={d}
                selected={data.diet === d}
                onClick={() => setData({ ...data, diet: d })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 9 — COOKING TIME */}
        {step === 9 && (
          <>
            <h2>Cooking time</h2>
            {["⚡ 15–30 mins", "⏱ 30–60 mins", "🍳 Love cooking"].map((t) => (
              <Selectable
                key={t}
                text={t}
                selected={data.cookingTime === t}
                onClick={() => setData({ ...data, cookingTime: t })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 10 — MICRO (COOKING TIME) */}
        {step === 10 && (
          <>
            <h2>Perfect 👌</h2>
            <p style={styles.sub}>
              We’ll match recipes to your available time.
            </p>
            <Primary text="Continue →" onClick={next} />
          </>
        )}

        {/* 11 — KITCHEN SETUP */}
        {step === 11 && (
          <>
            <h2>Kitchen setup</h2>
            {["Basic", "Moderate", "Full kitchen"].map((k) => (
              <Selectable
                key={k}
                text={k}
                selected={data.kitchen === k}
                onClick={() => setData({ ...data, kitchen: k })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 12 — BODY DETAILS */}
        {step === 12 && (
          <>
            <h2>Just a few more details</h2>
            <input style={styles.input} placeholder="Height (cm)" />
            <input style={styles.input} placeholder="Weight (kg)" />
            <input style={styles.input} placeholder="Goal weight (kg)" />
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 13 — BUDGET */}
        {step === 13 && (
          <>
            <h2>Weekly food budget</h2>
            {["₹800–₹1200", "₹1200–₹2000", "₹2000+"].map((b) => (
              <Selectable
                key={b}
                text={b}
                selected={data.budget === b}
                onClick={() => setData({ ...data, budget: b })}
              />
            ))}
            <Primary text="Next →" onClick={next} />
          </>
        )}

        {/* 14 — MICRO (BUDGET) */}
        {step === 14 && (
          <>
            <h2>Nice 👍</h2>
            <p style={styles.sub}>We’ll optimize meals within your budget.</p>
            <Primary text="Continue →" onClick={next} />
          </>
        )}

        {/* 15 — SUMMARY */}
        {step === 15 && (
          <>
            <h2>🧠 Your Meal Plan is Ready!</h2>
            <div style={styles.summary}>
              <p>• Goals: {data.goals.join(", ")}</p>
              <p>• Lifestyle: {data.activity}</p>
              <p>• Diet: {data.diet}</p>
              <p>• Cooking: {data.cookingTime}</p>
              <p>• Budget: {data.budget}</p>
            </div>
            <p style={styles.micro}>
              We balance nutrition, cost, and prep time for you 💚
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* COMPONENTS */

function Selectable({ text, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.option,
        background: selected ? "#eef2ff" : "#fff",
        borderColor: selected ? "#4f46e5" : "#e5e7eb",
      }}
    >
      {text}
    </div>
  );
}

function Primary({ text, onClick }) {
  return (
    <button style={styles.primaryBtn} onClick={onClick}>
      {text}
    </button>
  );
}

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
    fontFamily: "system-ui, sans-serif",
  },
  progressWrap: {
    width: 360,
    height: 6,
    background: "#e5e7eb",
    borderRadius: 6,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    background: "#4f46e5",
    transition: "width 0.3s",
  },
  card: {
    width: 360,
    background: "#fff",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  option: {
    padding: 12,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    marginBottom: 10,
    cursor: "pointer",
  },
  primaryBtn: {
    marginTop: 14,
    padding: 12,
    width: "100%",
    borderRadius: 12,
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },
  sub: {
    color: "#6b7280",
    marginBottom: 16,
  },
  micro: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 12,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    marginBottom: 10,
  },
  summary: {
    background: "#eef2ff",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    textAlign: "left",
  },
};
