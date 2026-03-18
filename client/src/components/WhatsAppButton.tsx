import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Número do WhatsApp (substitua pelo número real da empresa)
  // Formato: código do país + DDD + número (sem formatação)
  const whatsappNumber = "5511916155584";
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre os serviços da qodeseven.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Botão flutuante */}
      <div className="relative flex items-center justify-center">
        {/* Efeito de pulso de fundo */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-30" />
        
        {/* Botão principal */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA58] hover:from-[#22C55E] hover:to-[#16A34A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95">
          <MessageCircle size={32} className="text-white fill-white" strokeWidth={1.5} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Fale conosco!
        </div>
      </div>
    </a>
  );
}
