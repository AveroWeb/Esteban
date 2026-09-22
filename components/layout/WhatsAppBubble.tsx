const WHATSAPP_NUMBER = "33680062075";
const MESSAGE = encodeURIComponent(
  "Bonjour Esteban, je vous contacte depuis votre site. J’aimerais discuter d’un projet photo."
);

export default function WhatsAppBubble() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Esteban sur WhatsApp"
      className="group fixed bottom-5 right-5 z-[190] flex items-center gap-3 rounded-full bg-[#25D366] p-2.5 text-white shadow-[0_12px_35px_rgba(17,17,16,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7 sm:p-3"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/35 motion-safe:animate-ping" />
      <span className="hidden pl-2 font-sans text-xs font-medium tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block sm:max-w-0 sm:overflow-hidden sm:whitespace-nowrap sm:group-hover:max-w-40">
        Écrire sur WhatsApp
      </span>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 sm:h-11 sm:w-11">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-current sm:h-7 sm:w-7">
          <path d="M16.04 3A12.86 12.86 0 0 0 5.08 22.6L3.36 29l6.55-1.67A12.94 12.94 0 1 0 16.04 3Zm0 23.55c-2.02 0-4-.55-5.72-1.59l-.41-.24-3.89.99 1.04-3.78-.27-.43a10.58 10.58 0 1 1 9.25 5.05Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.52 9.52 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
