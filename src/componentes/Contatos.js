import React from 'react';

const ContactSection = () => {
  return (
    <main className="flex mx-auto max-w-5xl px-2 justify-center items-center mt-[70px]">
      <div className="p-4 flex justify-center items-center flex-col text-[#CEC7BF]" style={{ fontFamily: 'archivo' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className='flex items-center gap-3 flex-col md:flex-row hover:underline'>
                <a href="mailto:neusvaldomoura07@gmail.com">
                    <img src="./img/contato/email.png" alt="Email" className="size-10" />
                </a>
                neusvaldomoura07@gmail.com
            </div>
            <div className="hover:underline flex items-center gap-3 flex-col md:flex-row">
                <a href="https://github.com/neusmoura07">
                    <img src="./img/sobre/github.png" alt="GitHub" className="size-10" />
                </a>
                https://github.com/Neusmoura07
            </div>
            <div className="hover:underline flex items-center gap-3 flex-col md:flex-row">
                <a href="https://wa.me/82987450397">
                    <img src="./img/contato/whatsapp.png" alt="Whatsapp" className="size-10" />
                </a>
                (82) 9 8745-0397
            </div>
            <div className="hover:underline flex items-center gap-3 flex-col md:flex-row">
                <a href="https://www.linkedin.com/in/neusvaldo-moura-20608b312/">
                    <img src="./img/sobre/linkedin.png" alt="Instagram" className="size-10" />
                </a>
                Neusvaldo Moura
            </div>
        </div>
        <p className="text-center mt-28 md:text-xl">Fique à vontade para entrar em contato a qualquer momento.</p>
      </div>
    </main>
  );
};

export default ContactSection;
