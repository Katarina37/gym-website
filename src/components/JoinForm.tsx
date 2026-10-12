import { useState, type ChangeEvent, type FormEvent } from "react";
import { Arrow, Check } from "./Icons";

interface FormState {
  name: string;
  phone: string;
  email: string;
  goal: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const goals = [
  "Mršavljenje",
  "Snaga i masa",
  "Kondicija",
  "Zdravlje i pokretljivost",
  "Još ne znam",
];

const validate = (values: FormState): Errors => {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Upiši ime i prezime.";
  }

  if (!/^[+\d][\d\s/-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Upiši ispravan broj telefona.";
  }

  if (
    values.email &&
    !/^\S+@\S+\.\S+$/.test(values.email)
  ) {
    errors.email = "Email nije ispravan.";
  }

  return errors;
};

export default function JoinForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    goal: goals[0],
  });

  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const foundErrors = validate(values);

    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return;
    }

    console.log("Prijava:", values);

    setSent(true);
  };

  return (
    <section className="join-section" id="probni-trening">
      <div className="container">
        <div className="join-box">
          <div className="join-content">
            <span className="pill">PRVI KORAK</span>

            <h2>
              Vrijeme je da
              <span> počneš.</span>
            </h2>

            <p>
              Ne treba ti savršen plan. Treba ti prvi korak.
              Zakaži besplatan probni trening i upoznaj naš prostor,
              trenere i način rada.
            </p>

            <div className="join-points">
              <div>
                <span>01</span>
                Besplatan probni trening
              </div>

              <div>
                <span>02</span>
                Upoznavanje sa trenerom
              </div>

              <div>
                <span>03</span>
                Plan prema tvom cilju
              </div>
            </div>
          </div>

          {sent ? (
            <div className="join-success">
              <div className="success-icon">
                <Check />
              </div>

              <span>PRIJAVA USPJEŠNA</span>

              <h3>Vidimo se u teretani.</h3>

              <p>
                Javićemo ti se na <strong>{values.phone}</strong> u roku
                od jednog dana.
              </p>
            </div>
          ) : (
            <form className="join-form" onSubmit={onSubmit} noValidate>
              <div className="form-heading">
                <span>ZA BESPLATAN PROBNI TRENING</span>
                <h3>Rezerviši svoje mjesto.</h3>
              </div>

              <label>
                Ime i prezime

                <input
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  autoComplete="name"
                  placeholder="Tvoje ime i prezime"
                  aria-invalid={!!errors.name}
                />

                {errors.name && (
                  <span className="error">{errors.name}</span>
                )}
              </label>

              <label>
                Telefon

                <input
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="065 123 456"
                  aria-invalid={!!errors.phone}
                />

                {errors.phone && (
                  <span className="error">{errors.phone}</span>
                )}
              </label>

              <label>
                Email
                <span className="optional">nije obavezno</span>

                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                  placeholder="email@example.com"
                  aria-invalid={!!errors.email}
                />

                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </label>

              <label>
                Moj cilj

                <select
                  name="goal"
                  value={values.goal}
                  onChange={onChange}
                >
                  {goals.map((goal) => (
                    <option key={goal}>{goal}</option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Zakaži probni trening
                <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}