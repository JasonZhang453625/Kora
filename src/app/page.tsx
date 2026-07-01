import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  CreditCard,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Utensils
} from "lucide-react";

const botUrl = "https://t.me/Kora_china_bot";

const useCases = [
  {
    icon: Utensils,
    title: "Food locals actually eat",
    text: "From RMB30 street noodles to hidden gems, KORA filters out tourist traps and gives you specific places worth your time."
  },
  {
    icon: Sparkles,
    title: "Bars and nightlife",
    text: "Rooftops, speakeasies, dance floors, late-night streets. Ask for the mood and KORA turns it into a plan."
  },
  {
    icon: Navigation,
    title: "Getting around",
    text: "Metro, taxi, walking routes, Amap links and real Chinese addresses so you can actually get there."
  },
  {
    icon: CreditCard,
    title: "China survival",
    text: "Alipay, WeChat Pay, VPN, key phrases, weather and practical details that save you from wasting a trip."
  }
];

const steps = [
  "Tell KORA which city you are in",
  "Say what you want: food, drinks, nightlife, route or a plan",
  "Get local-style options with Chinese addresses and Amap links",
  "Go straight to the best move instead of searching for an hour"
];

const localAdvantages = [
  "Skips tourist traps and generic listicles",
  "Finds the option locals would actually choose",
  "Gives taxi-ready Chinese addresses",
  "Works across China, with Shanghai as home turf"
];

export default function Home() {
  return (
    <main>
      <section className="hero pageSection" aria-labelledby="hero-title">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <nav className="nav" aria-label="Kora">
          <a className="brand" href="#top" aria-label="Kora home">
            <span className="brandMark">K</span>
            <span>Kora</span>
          </a>
          <a className="navCta" href={botUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Open Bot
          </a>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Your local friend in China
            </p>
            <h1 id="hero-title">
              KORA helps foreign travelers find the local answer faster.
            </h1>
            <p className="lead">
              The well-traveled friend you wish you had on speed dial. Ask KORA where to eat, drink, go, pay, ride or survive in China, and get the option locals would actually choose.
            </p>
            <div className="heroActions">
              <a className="primaryAction" href={botUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} aria-hidden="true" />
                Chat with KORA
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="secondaryAction" href="#how-it-works">
                <Navigation size={19} aria-hidden="true" />
                How it works
              </a>
            </div>
            <div className="proofRow" aria-label="Kora product proof">
              <span>Food</span>
              <span>Nightlife</span>
              <span>Amap links</span>
              <span>China survival</span>
            </div>
          </div>

          <div className="deviceStage" aria-label="Kora Telegram screenshots">
            <div className="signalPanel">
              <span className="signalDot" />
              local guidance
            </div>
            <div className="phoneFrame phoneBack">
              <Image
                src="/screens/kora-food-recommendations.jpg"
                alt="Kora recommending local restaurants near ECNU in Telegram"
                width={1080}
                height={2400}
                priority
              />
            </div>
            <div className="phoneFrame phoneFront">
              <Image
                src="/screens/kora-payment-help.jpg"
                alt="Kora explaining practical payment fixes in Telegram"
                width={1080}
                height={2400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="introSection pageSection" aria-labelledby="what-title">
        <div className="sectionHeader">
          <p className="sectionKicker">What KORA is</p>
          <h2 id="what-title">Not another travel list. A local shortcut.</h2>
          <p>
            KORA is built for foreign tourists and short-term visitors in China. It saves time by turning vague questions into practical local choices: where to go, what to avoid, what to say, and how to get there.
          </p>
        </div>

        <div className="featureBand">
          <article>
            <Clock size={28} aria-hidden="true" />
            <h3>Save time</h3>
            <p>No endless searching, no outdated blogs, no guessing from star ratings. Ask once and get a usable next move.</p>
          </article>
          <article>
            <ShieldCheck size={28} aria-hidden="true" />
            <h3>Avoid bad tourist choices</h3>
            <p>KORA filters for places and routes that make sense locally, not just options that look good to first-time visitors.</p>
          </article>
          <article>
            <MapPin size={28} aria-hidden="true" />
            <h3>Get there smoothly</h3>
            <p>Real Chinese addresses and Amap-ready directions help taxi drivers, friends and hotel staff understand exactly where you mean.</p>
          </article>
        </div>
      </section>

      <section className="workflowSection pageSection" id="how-it-works" aria-labelledby="how-title">
        <div className="sectionHeader compact">
          <p className="sectionKicker">How it works</p>
          <h2 id="how-title">Tell KORA where you are and what you want.</h2>
        </div>
        <div className="workflowGrid">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="scenarioSection pageSection" aria-labelledby="scenario-title">
        <div className="sectionHeader">
          <p className="sectionKicker">What KORA does best</p>
          <h2 id="scenario-title">Food, drinks, routes and China survival.</h2>
          <p>
            Shanghai is KORA&apos;s home turf, but the assistant can help across China. English, Chinese and mixed-language questions are all fine.
          </p>
        </div>

        <div className="scenarioGrid">
          {useCases.map((scenario) => {
            const Icon = scenario.icon;
            return (
              <article className="scenario" key={scenario.title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="travelerSection pageSection" aria-labelledby="traveler-title">
        <div>
          <p className="sectionKicker">Why travelers use it</p>
          <h2 id="traveler-title">Make the same choice a local would make.</h2>
          <p>
            The goal is simple: spend less time decoding China and more time enjoying it. KORA helps tourists avoid friction, skip weak options and move with confidence.
          </p>
        </div>
        <ul>
          {localAdvantages.map((value) => (
            <li key={value}>
              <CheckCircle2 size={20} aria-hidden="true" />
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="finalCta pageSection" aria-labelledby="final-title">
        <p className="sectionKicker">Start with one question</p>
        <h2 id="final-title">Where are you in China right now?</h2>
        <p>
          Open KORA and say your city plus what you want: food, drinks, a route, payment help, or a plan for tonight.
        </p>
        <a className="primaryAction dark" href={botUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={20} aria-hidden="true" />
          Chat with KORA
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
