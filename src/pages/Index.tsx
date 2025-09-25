import { useState } from "react";
import { getZodiacSign, getDailyHoroscope, type ZodiacSign } from "@/lib/zodiac";
import { ZodiacForm } from "@/components/ZodiacForm";
import { ZodiacResult } from "@/components/ZodiacResult";
import cosmicBackground from "@/assets/cosmic-background.jpg";
import fotoAni from "@/assets/foto-ani.jpg";

const Index = () => {
  const [result, setResult] = useState<{
    name: string;
    zodiacSign: ZodiacSign;
    horoscope: string;
  } | null>(null);

  const handleFormSubmit = (data: { name: string; birthDate: Date }) => {
    const zodiacSign = getZodiacSign(data.birthDate);
    const horoscope = getDailyHoroscope(zodiacSign.name);
    
    setResult({
      name: data.name,
      zodiacSign,
      horoscope
    });
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div 
      className="min-h-screen bg-background bg-gradient-starry relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 23, 40, 0.8), rgba(23, 23, 40, 0.9)), url(${cosmicBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated stars overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {!result ? (
          <div className="text-center space-y-12">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src={fotoAni} 
                  alt="Foto Profil" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 shadow-glow animate-scale-in"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-cosmic opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-cosmic bg-clip-text text-transparent leading-tight">
                Takdir Kosmik
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Buka rahasia zodiak Anda dan temukan apa yang telah diselaraskan bintang-bintang untuk Anda hari ini
              </p>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">✨ Ramalan Harian yang Dipersonalisasi ✨</span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Form */}
            <ZodiacForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-8">
            <ZodiacResult
              name={result.name}
              zodiacSign={result.zodiacSign}
              horoscope={result.horoscope}
              onReset={handleReset}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
