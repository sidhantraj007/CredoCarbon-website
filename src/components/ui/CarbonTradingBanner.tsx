import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CarbonCredit {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change: number;
    volume: string;
    registry: string;
}

const initialCredits: CarbonCredit[] = [
    {
        id: '1',
        name: 'Verified Carbon Standard',
        symbol: 'VCS',
        price: 12.45,
        change: 2.3,
        volume: '1.2M',
        registry: 'Verra'
    },
    {
        id: '2',
        name: 'Gold Standard',
        symbol: 'GS',
        price: 18.90,
        change: -1.2,
        volume: '850K',
        registry: 'Gold Standard'
    },
    {
        id: '3',
        name: 'Climate Action Reserve',
        symbol: 'CAR',
        price: 15.30,
        change: 3.7,
        volume: '620K',
        registry: 'CAR'
    },
    {
        id: '4',
        name: 'American Carbon Registry',
        symbol: 'ACR',
        price: 14.75,
        change: 1.8,
        volume: '940K',
        registry: 'ACR'
    },
    {
        id: '5',
        name: 'Puro.earth',
        symbol: 'PURO',
        price: 22.60,
        change: 4.2,
        volume: '380K',
        registry: 'Puro.earth'
    },
    {
        id: '6',
        name: 'Global Carbon Council',
        symbol: 'GCC',
        price: 11.20,
        change: -0.5,
        volume: '710K',
        registry: 'GCC'
    }
];

export default function CarbonTradingBanner() {
    const [credits, setCredits] = useState<CarbonCredit[]>(initialCredits);

    // Simulate live price updates
    useEffect(() => {
        const interval = setInterval(() => {
            setCredits(prevCredits =>
                prevCredits.map(credit => {
                    // Random price fluctuation between -0.5% and +0.5%
                    const fluctuation = (Math.random() - 0.5) * 0.01;
                    const newPrice = credit.price * (1 + fluctuation);
                    const priceChange = ((newPrice - credit.price) / credit.price) * 100;

                    return {
                        ...credit,
                        price: parseFloat(newPrice.toFixed(2)),
                        change: parseFloat((credit.change + priceChange).toFixed(2))
                    };
                })
            );
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-white/5 backdrop-blur-md border-b border-white/10">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/3 to-transparent animate-shimmer" />

            <div className="relative flex items-center py-2 md:py-2.5 px-2 md:px-4">
                {/* Scrolling ticker - full width */}
                <div className="flex-1 overflow-hidden">
                    <div className="flex gap-3 md:gap-8 animate-scroll-left">
                        {/* Duplicate the credits array for seamless loop */}
                        {[...credits, ...credits].map((credit, index) => (
                            <div
                                key={`${credit.id}-${index}`}
                                className="flex-shrink-0 flex items-center gap-2 md:gap-4 px-2 md:px-4 py-1 md:py-1.5 rounded-lg bg-slate-900/90 border border-emerald-400/20 hover:border-emerald-400/40 hover:bg-slate-900/95 transition-all duration-300 shadow-lg"
                            >
                                {/* Symbol and Registry */}
                                <div className="flex flex-col">
                                    <span className="text-xs md:text-sm font-bold text-emerald-50">
                                        {credit.symbol}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] text-emerald-200/70 hidden sm:block">
                                        {credit.registry}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-0.5 md:gap-1">
                                    <span className="text-[10px] md:text-xs text-emerald-100/90">$</span>
                                    <span className="text-sm md:text-base font-semibold text-emerald-50">
                                        {credit.price.toFixed(2)}
                                    </span>
                                </div>

                                {/* Change */}
                                <div
                                    className={`flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded ${credit.change >= 0
                                        ? 'bg-emerald-500/30 text-emerald-200'
                                        : 'bg-red-500/30 text-red-200'
                                        }`}
                                >
                                    {credit.change >= 0 ? (
                                        <TrendingUp className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                    ) : (
                                        <TrendingDown className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                    )}
                                    <span className="text-[10px] md:text-xs font-semibold">
                                        {credit.change >= 0 ? '+' : ''}
                                        {credit.change.toFixed(1)}%
                                    </span>
                                </div>

                                {/* Volume - Hidden on mobile */}
                                <div className="hidden md:flex flex-col items-end">
                                    <span className="text-[10px] text-emerald-200/70">Vol</span>
                                    <span className="text-xs font-medium text-emerald-100">
                                        {credit.volume}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
