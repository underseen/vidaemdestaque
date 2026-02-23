import { useEffect, useState, useRef } from 'react';
import { Clock, XCircle, CheckCircle, ShieldCheck, Star, Heart, AlertCircle, Users, Activity, ChevronDown, ChevronUp, Wind, Lock, CreditCard, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function StickyBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#A8C8D8] to-[#7BA7BC] text-white py-2 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm sm:text-base">
        <Zap className="w-4 h-4 animate-pulse" />
        <span className="font-medium">ACESSO IMEDIATO:</span>
        <span>Comece sua jornada de alívio por apenas R$37</span>
      </div>
    </div>
  );
}

function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-16" style={{ backgroundImage: 'linear-gradient(180deg, rgba(250,250,247,0.95), rgba(250,250,247,0.88)), url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24">
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[#7BA7BC]/15 text-[#5A8A9E] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wind className="w-4 h-4" /> PROTOCOLO DE CALMA VALIDADO POR +500 PESSOAS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D4A54] leading-tight mb-6">
            ENCONTRE <span className="text-[#7BA7BC]">PAZ</span> NOS DIAS DE ESPERA
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7B8A] mb-4">
            Ferramentas práticas para acalmar a mente entre tratamentos, exames e resultados.
          </p>
          <p className="text-base sm:text-lg text-[#6B7B8A] mb-8 max-w-2xl mx-auto">
            Quando a ansiedade domina e os pensamentos não param, 
            <span className="font-semibold text-[#3D4A54]"> existe um protocolo prático para você recuperar o controle emocional em minutos.</span>
          </p>
          <div className="space-y-4">
            <a href="https://pay.kiwify.com.br/f31mMob" className="bg-[#7BA7BC] text-white font-semibold px-8 py-4 rounded-xl inline-block text-lg sm:text-xl hover:bg-[#5A8A9E] hover:scale-[1.02] transition-all shadow-lg shadow-[#7BA7BC]/25">QUERO RECUPERAR MINHA PAZ AGORA</a>
            <p className="text-sm text-[#6B7B8A] flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Material Digital • Acesso imediato • 15 dias de garantia
            </p>
          </div>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-8 h-8 text-[#7BA7BC]" />
        </motion.div>
      </div>
    </section>
  );
}

function DoresSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const dores = [
    "Entrar em pânico a cada dor, pontada ou sensação diferente no corpo.",
    "Repassar mentalmente cada frase do médico, procurando um erro ou resposta.",
    "Acordar no meio da noite já imaginando o pior resultado possível.",
    "Viver os dias de espera como se o exame já tivesse dado errado.",
    "Adiar compromissos e decisões 'até sair o resultado', paralisando sua vida.",
    "Fingir tranquilidade para proteger a família, enquanto desmorona por dentro."
  ];
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[#F5F0E8]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3D4A54] mb-12">
            Com o Entre Consultas <span className="text-[#7BA7BC]">você não precisa mais</span>:
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {dores.map((dor, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7BA7BC]/10 transition-all">
                <XCircle className="w-6 h-6 text-[#B8B8D1] flex-shrink-0 mt-0.5" />
                <p className="text-[#3D4A54] text-sm sm:text-base">{dor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CriadorasSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="text-center mb-10">
            <span className="inline-block bg-[#8BA888]/15 text-[#6B8A68] px-4 py-2 rounded-full text-sm font-semibold">VOCÊ NÃO PRECISA LIDAR COM ISSO SOZINHO(A)</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <div className="relative">
                <img src="/creators.jpg" alt="Ana e Carolina" className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-[#A8C8D8]/40 shadow-md" />
                <div className="absolute -bottom-2 -right-2 bg-[#7BA7BC] text-white p-2 rounded-full"><Heart className="w-5 h-5" /></div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3D4A54] mb-4">Quem está ao seu lado:</h2>
              <p className="text-[#6B7B8A] mb-4 leading-relaxed">
                Somos irmãs: <span className="font-bold text-[#3D4A54]">Ana E.</span>, paciente oncológica desde 2023, e 
                <span className="font-bold text-[#3D4A54]"> Carolina</span>, cuidadora da nossa mãe e também da Ana.
              </p>
              <p className="text-[#6B7B8A] leading-relaxed">
                Depois de cirurgias, quimioterapias e anos de acompanhamento, reunimos aqui o que 
                <span className="font-semibold text-[#7BA7BC]"> de verdade ajudou a reduzir a ansiedade</span> nos intervalos em que nenhuma resposta chega.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-[#8BA888]/15 text-[#6B8A68] px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" /> CRIADO COM EMPATIA E VIVÊNCIA REAL
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProdutoSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const modulos = [
    { num: 1, title: "TERRITÓRIO ENTRE CONSULTAS", desc: "Entenda por que a espera desperta medo e pare de achar que isso é fraqueza sua." },
    { num: 2, title: "MÉTODO REAGIR (REGULAÇÃO)", desc: "Práticas simples e rápidas para desacelerar o corpo antes que o medo assuma o controle." },
    { num: 3, title: "PROTOCOLOS PARA CADA DIA", desc: "Roteiros claros para os dias críticos: susto, exame, laudo e espera por resultados." },
    { num: 4, title: "A VIDA CONTINUA NO CAOS", desc: "Como lidar com rotina, trabalho e família sem deixar o câncer ocupar todo o espaço." },
    { num: 5, title: "RECONEXÃO CONSIGO", desc: "Ferramentas práticas para lembrar quem você é, muito além da doença e dos exames." },
    { num: 6, title: "MÓDULO SOS (3 a 5 MINUTOS)", desc: "Protocolos para madrugadas e picos de medo, quando não dá para pensar, mas dá para agir." }
  ];
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#7BA7BC]/15 text-[#5A8A9E] px-4 py-2 rounded-full text-sm font-semibold mb-4">O QUE VOCÊ VAI RECEBER</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D4A54] mb-4">Ferramentas de alívio e acolhimento</h2>
            <p className="text-[#6B7B8A] max-w-2xl mx-auto">Material digital simples, direto e humanizado para você consultar sempre que a ansiedade bater.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modulos.map((modulo, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.15, ease: [0.175, 0.885, 0.32, 1.275] }} className="bg-white rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7BA7BC]/10 transition-all border border-[#F5F0E8]">
                <div className="w-12 h-12 bg-[#7BA7BC] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">{modulo.num}</div>
                <h3 className="font-bold text-[#3D4A54] mb-2 text-sm sm:text-base">{modulo.title}</h3>
                <p className="text-[#6B7B8A] text-sm leading-relaxed">{modulo.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://pay.kiwify.com.br/f31mMob" className="bg-[#8BA888] text-white font-semibold px-8 py-4 rounded-xl inline-block text-lg hover:bg-[#6B8A68] hover:scale-[1.02] transition-all shadow-lg shadow-[#8BA888]/25">QUERO ACESSAR O MATERIAL COMPLETO</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D4A54] mb-4">COMO VOCÊ VAI USAR</h2>
              <p className="text-[#6B7B8A] mb-6">Um exemplo do que você consegue fazer em apenas <span className="font-semibold text-[#7BA7BC]">3 minutos</span> dentro do método:</p>
              <div className="bg-[#F5F0E8] rounded-xl p-6 mb-6">
                <p className="text-[#3D4A54] font-medium mb-4">Você sente uma pontada. A mente dispara e tenta correr para o pior cenário. Nesse momento, você abre o Módulo SOS e aplica:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-[#3D4A54]"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /> Um passo rápido para baixar o alarme de pânico do corpo.</li>
                  <li className="flex items-start gap-2 text-sm text-[#3D4A54]"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /> Uma técnica simples para separar o que é "Fato" do que é "Imaginação".</li>
                  <li className="flex items-start gap-2 text-sm text-[#3D4A54]"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /> A definição clara do que precisa ser decidido agora, devolvendo sua paz.</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img src="/mockup.jpg" alt="Material Digital Entre Consultas" className="rounded-xl shadow-lg w-full" />
              <div className="absolute -bottom-4 -right-4 bg-[#7BA7BC] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">Acesso imediato no celular</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DepoimentosSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [activeIndex, setActiveIndex] = useState(0);
  const depoimentos = [
    { nome: "Maria S.", foto: "/testimonial-1.jpg", texto: "Pela primeira vez em semanas consegui dormir tranquila. O protocolo da noite me acolheu quando eu mais precisei e achei que ia desmoronar.", estrelas: 5 },
    { nome: "João P.", foto: "/testimonial-2.jpg", texto: "É diferente de tudo que já vi. Não é sobre fingir que o medo não existe, é sobre ter um método prático para acalmar o corpo na hora da crise.", estrelas: 5 },
    { nome: "Ana L.", foto: "/testimonial-3.jpg", texto: "No dia do exame, usei uma das práticas SOS e consegui ficar em paz. Até conversei com outras pessoas na sala de espera sem aquele nó na garganta.", estrelas: 5 }
  ];
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[#F5F0E8]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D4A54] mb-4">HISTÓRIAS DE QUEM ENCONTROU PAZ</h2>
            <div className="inline-flex items-center gap-2 bg-[#8BA888]/15 text-[#6B8A68] px-4 py-2 rounded-full text-sm font-semibold"><Users className="w-4 h-4" /> +500 pessoas já aplicaram e aprovaram</div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img src={depoimentos[activeIndex].foto} alt={depoimentos[activeIndex].nome} className="w-20 h-20 rounded-full object-cover" />
                <div className="text-center sm:text-left flex-1">
                  <div className="flex justify-center sm:justify-start gap-1 mb-3">
                    {[...Array(depoimentos[activeIndex].estrelas)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#A8C8D8] text-[#A8C8D8]" />)}
                  </div>
                  <p className="text-[#3D4A54] mb-4 italic">"{depoimentos[activeIndex].texto}"</p>
                  <p className="font-bold text-[#7BA7BC]">{depoimentos[activeIndex].nome}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {depoimentos.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-[#7BA7BC]' : 'bg-[#7BA7BC]/30'}`} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ParaQuemSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const perfis = [
    { Icon: Clock, title: "ESPERA RESULTADOS", desc: "Quando o laudo não sai e a vida fica completamente em suspenso." },
    { Icon: Heart, title: "VIVE TENSÃO PRÉ-CONSULTA", desc: "Quando chega no consultório com a mente acelerada e esquece as perguntas importantes." },
    { Icon: AlertCircle, title: "TEME RECIDIVA", desc: "Quando analisa cada sintoma, vive em alerta constante e nunca consegue relaxar de verdade." },
    { Icon: Users, title: "É FAMILIAR OU CUIDADOR(A)", desc: "Quando você sustenta todo mundo emocionalmente, mas não tem espaço para desmoronar." },
    { Icon: Activity, title: "VIVE O CÂNCER DE PERTO", desc: "Quando sabe que não dá para improvisar nesses dias de espera, pois o preço emocional é alto demais." }
  ];
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3D4A54] mb-12">O ENTRE CONSULTAS É PERFEITO PARA QUEM...</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 justify-center">
            {perfis.map((perfil, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1, ease: [0.175, 0.885, 0.32, 1.275] }} className="bg-[#F5F0E8] rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7BA7BC]/10 transition-all">
                <div className="w-14 h-14 bg-[#7BA7BC] text-white rounded-full flex items-center justify-center mx-auto mb-4"><perfil.Icon className="w-7 h-7" /></div>
                <h3 className="font-bold text-[#3D4A54] mb-2 text-sm uppercase">{perfil.title}</h3>
                <p className="text-[#6B7B8A] text-sm">{perfil.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://pay.kiwify.com.br/f31mMob" className="bg-[#7BA7BC] text-white font-semibold px-8 py-4 rounded-xl inline-block text-lg hover:bg-[#5A8A9E] hover:scale-[1.02] transition-all shadow-lg shadow-[#7BA7BC]/25">QUERO REDUZIR A ANSIEDADE ENTRE EXAMES</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GarantiaSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-[#7BA7BC] to-[#8BA888] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto text-center max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"><ShieldCheck className="w-10 h-10 text-[#7BA7BC]" /></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">15 DIAS PARA EXPERIMENTAR</h2>
          <p className="text-xl sm:text-2xl font-semibold mb-6 opacity-90">Risco Zero Absoluto</p>
          <p className="text-base sm:text-lg opacity-90 mb-8 max-w-xl mx-auto">Acesse o material, experimente as práticas no seu dia a dia e veja se elas te ajudam na espera. Se você achar que não fez sentido para você, basta solicitar o reembolso. Nós devolvemos seu dinheiro, sem burocracia.</p>
          <a href="https://pay.kiwify.com.br/f31mMob" className="inline-block bg-white text-[#7BA7BC] font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#FAFAF7] hover:scale-[1.02] transition-all shadow-xl">QUERO EXPERIMENTAR COM SEGURANÇA</a>
        </motion.div>
      </div>
    </section>
  );
}

function ComparacaoSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3D4A54] mb-12">UM ACOLHIMENTO DIFERENTE DE TUDO</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#3D4A54] mb-4 text-center">CONSULTAS MÉDICAS</h3>
              <ul className="space-y-3 text-sm text-[#6B7B8A]">
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Momentos programados</li>
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Foco estrito no tratamento</li>
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Longos intervalos de incerteza</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#3D4A54] mb-4 text-center">TERAPIA CONVENCIONAL</h3>
              <ul className="space-y-3 text-sm text-[#6B7B8A]">
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Sessões com dia e hora marcados</li>
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Processo contínuo e aprofundado</li>
                <li className="flex items-start gap-2"><span className="text-[#B8B8D1]">•</span> Indisponível de madrugada</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#7BA7BC] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7BA7BC] text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">O SEU "KIT SOS"</div>
              <h3 className="font-bold text-[#7BA7BC] mb-4 text-center">ENTRE CONSULTAS</h3>
              <ul className="space-y-3 text-sm text-[#3D4A54]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /><span className="font-medium">Acesso imediato no celular</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /><span className="font-medium">Práticas rápidas e direcionadas</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#8BA888] flex-shrink-0 mt-0.5" /><span className="font-medium">Suporte no exato momento da crise</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OfertaSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section ref={ref} className="py-16 sm:py-24 relative" style={{ backgroundImage: 'linear-gradient(180deg, rgba(250,250,247,0.95), rgba(250,250,247,0.95)), url(/offer-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-xl text-center">
            <p className="text-[#6B7B8A] mb-4">A sua paz mental não pode ficar em suspenso.</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#3D4A54] mb-2 uppercase">Protocolo Entre Consultas</h2>
            <p className="text-[#6B7B8A] mb-8">O mapa definitivo de acolhimento emocional para os dias de espera.</p>
            <div className="mb-8">
              <p className="text-sm text-[#6B7B8A] mb-2 font-medium">INVESTIMENTO ÚNICO</p>
              <p className="text-5xl sm:text-6xl font-bold text-[#7BA7BC]">R$ 37</p>
              <p className="text-[#6B7B8A] mt-2">Ou 3x R$ 13,20 no cartão</p>
            </div>
            <div className="space-y-4 mb-8">
              <a href="https://pay.kiwify.com.br/f31mMob" className="bg-[#7BA7BC] text-white font-bold px-8 py-4 rounded-xl block w-full text-lg hover:bg-[#5A8A9E] hover:scale-[1.02] transition-all shadow-lg shadow-[#7BA7BC]/25">QUERO COMEÇAR AGORA</a>
              <a href="https://pay.kiwify.com.br/f31mMob" className="border-2 border-[#7BA7BC] text-[#7BA7BC] font-semibold px-8 py-4 rounded-xl block w-full hover:bg-[#7BA7BC] hover:text-white transition-all">PAGAR COM PIX (Acesso Imediato)</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#6B7B8A] mb-6">
              <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-[#A8C8D8]" /> Envio imediato</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#8BA888]" /> 15 dias de garantia</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#7BA7BC]" /> 1 ano de acesso livre</span>
            </div>
            <div className="flex justify-center gap-4 text-[#6B7B8A]">
              <div className="flex items-center gap-1 text-xs"><Lock className="w-4 h-4" /> Pagamento 100% Seguro</div>
              <div className="flex items-center gap-1 text-xs"><CreditCard className="w-4 h-4" /> Ambiente Criptografado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { pergunta: "COMO É O FORMATO DO PRODUTO?", resposta: "O 'Entre Consultas' é um material digital (um guia prático em formato PDF interativo). Você poderá acessar as leituras, os protocolos SOS e todas as ferramentas de alívio diretamente pelo seu celular, computador ou até mesmo imprimir se preferir." },
    { pergunta: "SOU CUIDADOR(A), SERVE PARA MIM?", resposta: "Sim! Muitas ferramentas foram criadas a partir da experiência da Carolina como cuidadora da nossa mãe e da Ana. Você pode usar o material tanto para se organizar emocionalmente quanto para apoiar quem está enfrentando o tratamento." },
    { pergunta: "ISSO SUBSTITUI A TERAPIA OU O PSICÓLOGO?", resposta: "Não. O Entre Consultas funciona como um 'kit de primeiros socorros emocionais' para as madrugadas e momentos de desespero em que seu terapeuta não está disponível. É um complemento gentil e prático para o seu dia a dia, e não substitui acompanhamento médico ou psicoterapia." },
    { pergunta: "POR QUANTO TEMPO TEREI ACESSO?", resposta: "Seu acesso é válido por 1 ano a partir da data de compra. Durante esse período, você pode ler online, baixar o material e acessar as ferramentas quantas vezes precisar." },
    { pergunta: "COMO VOU RECEBER O MATERIAL?", resposta: "Assim que o pagamento for aprovado (pagamentos via PIX ou cartão de crédito aprovam na hora), você receberá um e-mail da nossa plataforma com todos os dados de acesso seguro para baixar o seu material." },
    { pergunta: "É SÓ PARA QUEM TEM CÂNCER DE MAMA?", resposta: "Não. Nossas práticas e ferramentas funcionam para qualquer tipo de diagnóstico oncológico. O que importa é a experiência da espera entre consultas e resultados, que infelizmente é uma dor universal para todos que passam pelo tratamento." }
  ];
  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div className="max-w-6xl mx-auto max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3D4A54] mb-12">PERGUNTAS FREQUENTES</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#F5F0E8] rounded-xl overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-[#F5F0E8] hover:bg-[#F5F0E8]/80 transition-colors">
                  <span className="font-semibold text-[#3D4A54] text-sm sm:text-base">{faq.pergunta}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-[#7BA7BC] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#7BA7BC] flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="p-4 sm:p-5 text-[#6B7B8A] text-sm leading-relaxed">{faq.resposta}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://pay.kiwify.com.br/f31mMob" className="bg-[#7BA7BC] text-white font-bold px-8 py-4 rounded-xl inline-block text-lg hover:bg-[#5A8A9E] hover:scale-[1.02] transition-all shadow-lg shadow-[#7BA7BC]/25">QUERO COMEÇAR AGORA</a>
          </div>
        </motion.div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#F5F0E8] text-center">
        <p className="text-[#6B7B8A] text-sm">Vida em Destaque - Copyright 2026 - Todos os direitos reservados.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <StickyBar />
      <main>
        <HeroSection />
        <DoresSection />
        <CriadorasSection />
        <ProdutoSection />
        <ComoFuncionaSection />
        <DepoimentosSection />
        <ParaQuemSection />
        <GarantiaSection />
        <ComparacaoSection />
        <OfertaSection />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
