import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  CreditCard,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Utensils
} from "lucide-react";

const botUrl = "https://t.me/Kora_china_bot";

const scenarios = [
  {
    icon: CreditCard,
    title: "支付失败怎么办",
    text: "把支付宝、银行卡、网络连接等常见问题拆成可操作步骤，减少外国用户卡在付款环节。"
  },
  {
    icon: Utensils,
    title: "附近吃什么",
    text: "按位置给出餐厅、价格、地址和营业时间，不只是推荐名字，而是直接告诉用户怎么去。"
  },
  {
    icon: MapPin,
    title: "校园与街区生活",
    text: "围绕学校、商圈、地铁站和本地服务，回答刚到中国时最频繁出现的生活问题。"
  }
];

const partnerValues = [
  "把重复答疑从人工群聊里移出来",
  "让外国用户获得一致、及时、可执行的信息",
  "把学校、园区、商户和城市服务连接到真实使用场景",
  "用 Telegram 入口降低安装和培训成本"
];

const steps = [
  "打开 Telegram 中的 Kora Bot",
  "直接输入支付、吃饭、出行或附近地点问题",
  "获得步骤、地址、价格、时间和注意事项",
  "按结果行动，必要时继续追问细节"
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <nav className="nav" aria-label="Kora">
          <a className="brand" href="#top" aria-label="Kora home">
            <span className="brandMark">K</span>
            <span>Kora</span>
          </a>
          <a className="navCta" href={botUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            打开 Bot
          </a>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Telegram 上的来华生活 AI 助手
            </p>
            <h1 id="hero-title">
              Kora：来华生活问题，一个 Telegram Bot 就能问清楚
            </h1>
            <p className="lead">
              面向来华外国人的即时生活助手。Kora 把支付、餐饮、地点和校园周边问题，转成清晰的步骤、地址和本地化建议。
            </p>
            <div className="heroActions">
              <a className="primaryAction" href={botUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} aria-hidden="true" />
                立即打开 Kora
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="secondaryAction" href="#how-it-works">
                <Navigation size={19} aria-hidden="true" />
                查看怎么用
              </a>
            </div>
            <div className="proofRow" aria-label="Kora product proof">
              <span>Telegram 入口</span>
              <span>真实对话截图</span>
              <span>本地生活场景</span>
            </div>
          </div>

          <div className="deviceStage" aria-label="Kora Telegram screenshots">
            <div className="signalPanel">
              <span className="signalDot" />
              live guidance
            </div>
            <div className="phoneFrame phoneBack">
              <Image
                src="/screens/kora-food-recommendations.jpg"
                alt="Kora 在 Telegram 中推荐学校附近餐厅的截图"
                width={1080}
                height={2400}
                priority
              />
            </div>
            <div className="phoneFrame phoneFront">
              <Image
                src="/screens/kora-payment-help.jpg"
                alt="Kora 在 Telegram 中解释支付宝无法使用时的解决步骤截图"
                width={1080}
                height={2400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="introSection" aria-labelledby="what-title">
        <div className="sectionHeader">
          <p className="sectionKicker">What Kora does</p>
          <h2 id="what-title">Kora 是什么</h2>
          <p>
            它不是一个展示型网页，也不是复杂 App。Kora 是一个能直接在 Telegram 里对话的本地生活问答入口，适合刚到中国、还不熟悉支付和城市服务的外国用户。
          </p>
        </div>

        <div className="featureBand">
          <article>
            <Bot size={28} aria-hidden="true" />
            <h3>像本地向导一样回答</h3>
            <p>把模糊问题变成下一步行动，例如换卡、检查网络、找附近餐厅或确认地址。</p>
          </article>
          <article>
            <ShieldCheck size={28} aria-hidden="true" />
            <h3>减少人工重复解释</h3>
            <p>学校、社区、商户可以把高频问题交给 Kora 做第一轮回答。</p>
          </article>
          <article>
            <Building2 size={28} aria-hidden="true" />
            <h3>连接真实服务场景</h3>
            <p>围绕支付、餐饮、出行和校园生活，把信息放到用户真正需要的时刻。</p>
          </article>
        </div>
      </section>

      <section className="workflowSection" id="how-it-works" aria-labelledby="how-title">
        <div className="sectionHeader compact">
          <p className="sectionKicker">How it works</p>
          <h2 id="how-title">怎么用</h2>
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

      <section className="scenarioSection" aria-labelledby="scenario-title">
        <div className="sectionHeader">
          <p className="sectionKicker">Use cases</p>
          <h2 id="scenario-title">典型场景</h2>
          <p>截图里的问题不是演示台词，而是来华生活里真实会发生的阻塞点。</p>
        </div>

        <div className="scenarioGrid">
          {scenarios.map((scenario) => {
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

      <section className="partnerSection" aria-labelledby="partner-title">
        <div>
          <p className="sectionKicker">Partner value</p>
          <h2 id="partner-title">对中国合作方有什么价值</h2>
          <p>
            对学校、园区、城市服务方和本地商户来说，Kora 可以成为外国用户的第一层生活支持入口，把“不会用、找不到、不知道怎么问”的问题提前解决。
          </p>
        </div>
        <ul>
          {partnerValues.map((value) => (
            <li key={value}>
              <CheckCircle2 size={20} aria-hidden="true" />
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="finalCta" aria-labelledby="final-title">
        <h2 id="final-title">先从一个真实问题开始</h2>
        <p>打开 Kora，输入你想让外国用户最快解决的来华生活问题。</p>
        <a className="primaryAction dark" href={botUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={20} aria-hidden="true" />
          立即打开 Kora
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
