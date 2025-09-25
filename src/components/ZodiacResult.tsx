import { ZodiacSign } from "@/lib/zodiac";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw } from "lucide-react";

interface ZodiacResultProps {
  name: string;
  zodiacSign: ZodiacSign;
  horoscope: string;
  onReset: () => void;
}

export function ZodiacResult({ name, zodiacSign, horoscope, onReset }: ZodiacResultProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Hello, {name}! ✨
        </h2>
        <p className="text-muted-foreground">
          Here's what the stars reveal about you
        </p>
      </div>

      {/* Zodiac Sign Card */}
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 shadow-card">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{zodiacSign.symbol}</div>
          <h3 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            {zodiacSign.name}
          </h3>
          <p className="text-secondary font-semibold mt-1">{zodiacSign.dates}</p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-muted/50 border border-border/30">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{zodiacSign.element} Element</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">About Your Sign</h4>
            <p className="text-muted-foreground leading-relaxed">{zodiacSign.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Your Key Traits</h4>
            <div className="flex flex-wrap gap-2">
              {zodiacSign.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Horoscope */}
      <div className="bg-gradient-aurora/10 backdrop-blur-sm border border-secondary/30 rounded-lg p-6 shadow-card">
        <div className="text-center mb-4">
          <h4 className="text-xl font-bold text-foreground mb-2">Today's Horoscope</h4>
          <div className="w-12 h-0.5 bg-gradient-aurora mx-auto rounded-full"></div>
        </div>
        <p className="text-foreground/90 leading-relaxed text-center italic">
          "{horoscope}"
        </p>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <Button
          onClick={onReset}
          variant="outline"
          className="bg-muted/30 border-border/50 hover:bg-muted/50 transition-colors"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Another Reading
        </Button>
      </div>
    </div>
  );
}