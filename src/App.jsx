import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Heart, User, Calendar, CheckCircle, ArrowRight, Menu, X, BookOpen, Sparkles, Shield, Brain } from 'lucide-react';

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre as sessões de psicoterapia.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const ButtonPrimary = ({ children, href, className = "" }) => (
    <a href={href || WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-8 py-3.5 bg-[#829E8D] text-white font-medium rounded-full hover:bg-[#6c8576] transition-all duration-300 shadow-sm hover:shadow-md ${className}`}> 
        {children} 
    </a>
);

const ButtonSecondary = ({ children, href, className = "" }) => (
    <a href={href || WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-[#829E8D] text-[#829E8D] font-medium rounded-full hover:bg-[#829E8D] hover:text-white transition-all duration-300 ${className}`}> 
        {children} 
    </a>
);

const SectionTitle = ({ children, subtitle }) => (
    <div className="text-center mb-12"> 
        {subtitle && <span className="text-[#829E8D] font-medium tracking-wider uppercase text-sm mb-3 block">{subtitle}</span>} 
        <h2 className="text-3xl md:text-4xl font-serif text-[#333333]">{children}</h2> 
    </div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Sobre mim', href: '#sobre' },
        { name: 'Especialidades', href: '#especialidades' },
        { name: 'Como Funciona', href: '#como-funciona' },
        { name: 'Conteúdos', href: '#conteudos' },
    ];

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}> 
            <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center"> 
                <a href="#" className="font-serif text-2xl text-[#333333] tracking-wide"> Psi. <span className="text-[#829E8D]">Nome</span> </a> 
                <div className="hidden md:flex items-center space-x-8"> 
                    {links.map((link) => ( 
                        <a key={link.name} href={link.href} className="text-gray-600 hover:text-[#829E8D] transition-colors font-medium"> 
                            {link.name} 
                        </a>
                    ))} 
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#E8D9D2] text-[#5a4d47] font-medium rounded-full hover:bg-[#d8c5bc] transition-colors"> Agendar </a> 
                </div> 
                <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}> {isOpen ? <X size={28} /> : <Menu size={28} />} </button> 
            </div> 
            {isOpen && ( 
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 flex flex-col px-6 space-y-4"> 
                    {links.map((link) => ( 
                        <a key={link.name} href={link.href} className="text-lg text-gray-700 py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}> {link.name} </a> 
                    ))} 
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 text-center py-3 bg-[#829E8D] text-white rounded-lg font-medium"> Agendar Sessão </a> 
                </div> 
            )} 
        </nav>
    );
};

export default function App() {
    return (
        <div className="font-sans text-[#333333] bg-[#FAFAF8] scroll-smooth"> 
            <style dangerouslySetInnerHTML={{__html: ` 
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'); 
                .font-sans { font-family: 'Inter', sans-serif; } 
                .font-serif { font-family: 'Playfair Display', serif; } 
                @keyframes blob { 
                    0% { transform: translate(0px, 0px) scale(1); } 
                    33% { transform: translate(30px, -50px) scale(1.1); } 
                    66% { transform: translate(-20px, 20px) scale(0.9); } 
                    100% { transform: translate(0px, 0px) scale(1); } 
                } 
                .animate-blob { animation: blob 7s infinite; } 
                .animation-delay-2000 { animation-delay: 2s; } 
                html { scroll-behavior: smooth; } 
            `}} /> 
            <Navbar /> 
            <main> 
                <h1>Bem-vindo ao website de Anna Vieira</h1> 
            </main> 
        </div> 
    );
}