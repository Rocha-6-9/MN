import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Clock, 
  Database, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  MessageSquare,
  Target,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img 
          src="https://mnsolucoes.com/wp-content/uploads/2025/06/MN-Solucoes-Empresariais-12-scaled-01-1024x400.webp" 
          alt="MN Soluções Empresariais Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
      <a 
        href="https://wa.link/gi2e8l" 
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
      >
        Falar com Especialista
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3 py-1.5 rounded-full text-blue-200 font-medium text-sm animate-pulse">
          <ShieldCheck className="w-4 h-4" />
          <span>Gestão Financeira Profissional</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          BPO Financeiro para Empresas que precisam de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Controle, Clareza e Decisão Rápida.</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Terceirize sua rotina financeira e tenha relatórios claros, fluxo de caixa organizado e decisões baseadas em números reais, sem aumentar sua equipe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
            href="https://wa.link/gi2e8l" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-900/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Solicitar Avaliação Gratuita
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 pt-6 text-blue-100 text-sm font-medium">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Avaliação Sem Compromisso</span>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Retorno em até 24h</span>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 md:col-span-1">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Atendimento Personalizado</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
           <img 
            src="https://mnsolucoes.com/wp-content/uploads/2025/06/04-BPO-Financeiro-1.png" 
            alt="Profissional de finanças analisando dados" 
            className="rounded-xl w-full h-auto object-cover grayscale-[20%]"
          />
          <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:flex items-center gap-3 border border-gray-100 animate-bounce-slow">
             <div className="bg-green-100 p-2 rounded-full">
               <TrendingUp className="text-green-600 w-6 h-6" />
             </div>
             <div>
               <p className="text-xs text-gray-500 font-medium">Aumento de Lucratividade</p>
               <p className="text-lg font-bold text-gray-800">+24% no primeiro ano</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problems: React.FC = () => {
  const problems = [
    "Não sabe exatamente quanto a empresa ganha ou perde por mês.",
    "Pagamentos, boletos e cobranças são feitos de forma manual e desorganizada.",
    "Falta tempo ou equipe para cuidar do financeiro corretamente.",
    "As decisões são tomadas 'no feeling', sem dados confiáveis.",
    "O contador entrega impostos, mas não ajuda na gestão do dia a dia."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
          Sua empresa fatura, mas o dinheiro nunca parece sobrar?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Se você pesquisou por BPO Financeiro, provavelmente enfrenta um ou mais desses desafios que travam seu crescimento:
        </p>
        
        <div className="space-y-4 text-left">
          {problems.map((prob, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100 transition-all hover:bg-red-50 hover:border-red-200">
              <div className="bg-red-500 p-1 rounded-full mt-1 shrink-0">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700 font-medium md:text-lg">{prob}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4 text-left">
          <div className="text-3xl shrink-0">👉</div>
          <p className="text-blue-900 font-bold md:text-xl">
            Este é o cenário clássico de empresas sem um controle financeiro profissional. Nós resolvemos isso de ponta a ponta.
          </p>
        </div>
      </div>
    </section>
  );
};

const Solution: React.FC = () => {
  const activities = [
    { title: "Organização do Fluxo de Caixa", desc: "Visão diária, semanal e mensal de todas as entradas e saídas." },
    { title: "Controle de Contas a Pagar e Receber", desc: "Nunca mais pague juros por atraso ou esqueça de cobrar um cliente." },
    { title: "Conciliação Bancária", desc: "Seu saldo no banco batendo 100% com o seu sistema de gestão." },
    { title: "Relatórios Claros e Objetivos", desc: "DRE, Fluxo de Caixa e Indicadores de Performance fáceis de ler." },
    { title: "Suporte à Tomada de Decisão", desc: "Reuniões mensais para analisar os números e planejar o futuro." }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://mnsolucoes.com/wp-content/uploads/2025/06/04-BPO-Financeiro-1.png" 
              alt="Equipe discutindo finanças" 
              className="w-full h-auto object-cover min-h-[400px]" 
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            O BPO Financeiro assume o operacional para você focar no lucro.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nós somos a terceirização completa da sua rotina financeira. Assumimos o braçal e o controle, enquanto você foca na estratégia de crescimento do seu negócio.
          </p>
          
          <div className="space-y-6">
            <p className="font-bold text-blue-600 uppercase tracking-widest text-sm">O que fazemos na prática:</p>
            <div className="grid gap-4">
              {activities.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="bg-green-100 p-1.5 rounded-full shrink-0 group-hover:bg-green-500 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="italic text-gray-500 pt-4 border-t border-gray-200">
            "Tudo de forma simples, estruturada e sem complicação."
          </p>
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    { icon: <BarChart3 />, title: "Visão real do financeiro", desc: "Sem achismos. Dados precisos e atualizados em tempo real." },
    { icon: <Target />, title: "Previsibilidade de caixa", desc: "Saiba quanto terá no bolso daqui a 3 meses com segurança." },
    { icon: <ShieldCheck />, title: "Redução de erros", desc: "Menos atrasos, multas e retrabalho operacional." },
    { icon: <Database />, title: "Menos dependência", desc: "Diga adeus às planilhas improvisadas e frágeis." },
    { icon: <Zap />, title: "Decisões baseadas em dados", desc: "Invista com confiança sabendo exatamente seu ROI." },
    { icon: <Clock />, title: "Mais tempo para vender", desc: "Ganhe horas semanais para focar na operação e vendas." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-16">
          O que muda na sua empresa com a Elite BPO:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all text-left group">
              <div className="bg-blue-600 p-3 rounded-xl w-fit mb-6 text-white group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust: React.FC = () => {
  const points = [
    { icon: <Users />, title: "Foco total em PMEs", desc: "Entendemos a realidade de quem está crescendo." },
    { icon: <ShieldCheck />, title: "Processos Padronizados", desc: "Metodologia comprovada e acompanhamento contínuo." },
    { icon: <FileText />, title: "Integração com Contabilidade", desc: "Trabalhamos em conjunto para agilizar impostos e balancetes." },
    { icon: <MessageSquare />, title: "Atendimento Consultivo", desc: "Não somos apenas digitadores, somos analistas parceiros." }
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Por que confiar na Elite BPO?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experiência prática em rotinas financeiras que transformam empresas desorganizadas em máquinas de lucro.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {points.map((pt, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-white p-4 rounded-full shadow-md text-blue-600">
                {pt.icon}
              </div>
              <h4 className="font-bold text-blue-900">{pt.title}</h4>
              <p className="text-sm text-gray-500">{pt.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-blue-100 shadow-lg text-center space-y-4">
          <p className="text-gray-500 font-medium">Nossa Promessa:</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-900 italic">
            "Não prometemos milagres. Prometemos organização, clareza e controle financeiro real."
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Isso serve para empresas pequenas?", a: "Com certeza. O BPO é ideal para empresas que faturam de R$ 50k a R$ 500k/mês e ainda não podem ou não querem manter um setor financeiro interno completo com altos custos trabalhistas." },
    { q: "Vou perder o controle do meu dinheiro?", a: "Não! Pelo contrário: você passa a ter MAIS controle. Você é quem autoriza todos os pagamentos. Nós preparamos tudo no seu banco ou sistema, e você apenas dá o 'OK' final." },
    { q: "É caro contratar um BPO Financeiro?", a: "Geralmente custa entre 50% a 70% menos do que contratar um profissional interno qualificado, sem os encargos de férias, 13º e rescisão." },
    { q: "Funciona junto com meu contador?", a: "Sim. O BPO complementa a contabilidade. Nós cuidamos da gestão de caixa e entrega de dados prontos para o contador, o que melhora a qualidade da informação e evita erros nos impostos." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">Dúvidas comuns antes de contratar</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="shrink-0 text-blue-600" /> : <ChevronDown className="shrink-0 text-blue-600" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-500 leading-relaxed bg-gray-50/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FormSection: React.FC = () => {
  return (
    <section id="form" className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-blue-800 p-12 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold leading-tight">Solicitar Avaliação Personalizada</h2>
              <p className="text-blue-100">Preencha o formulário e nossa equipe entrará em contato para uma análise gratuita da saúde financeira da sua empresa.</p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                  <span className="text-sm">Avaliação 100% sem compromisso</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                  <span className="text-sm">Diagnóstico de Gargalos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                  <span className="text-sm">Atendimento Direto com Especialista</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 flex items-center gap-4 p-4 bg-blue-700/50 rounded-2xl border border-blue-600">
               <ShieldCheck className="w-10 h-10 text-blue-300" />
               <p className="text-xs text-blue-100">Seus dados financeiros são tratados com total confidencialidade e segurança.</p>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Pronto para organizar suas finanças?</h3>
                <p className="text-gray-600 leading-relaxed">Clique no botão abaixo para falar agora mesmo com um de nossos especialistas via WhatsApp e solicitar sua avaliação gratuita.</p>
              </div>
              
              <a 
                href="https://wa.link/gi2e8l" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xl py-6 rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-3 text-center transform hover:-translate-y-1"
              >
                Solicitar Avaliação Gratuita
                <MessageSquare className="w-6 h-6" />
              </a>
              
              <p className="text-center text-xs text-gray-400 italic">Atendimento rápido e personalizado para a realidade do seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
      <div className="flex items-center justify-center">
        <img 
          src="https://mnsolucoes.com/wp-content/uploads/2025/06/MN-Solucoes-Empresariais-12-scaled-01-1024x400.webp" 
          alt="MN Soluções Empresariais Logo" 
          className="h-12 w-auto object-contain brightness-0 invert opacity-80"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        <a 
          href="https://wa.link/gi2e8l" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Contato
        </a>
      </div>
      <p className="text-xs">
        © {new Date().getFullYear()} MN Soluções Empresariais. Todos os direitos reservados. <br className="md:hidden" />
        Feito para empresas que buscam crescimento sólido.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Benefits />
      <Trust />
      <FAQ />
      <FormSection />
      <Footer />
    </div>
  );
};

export default App;