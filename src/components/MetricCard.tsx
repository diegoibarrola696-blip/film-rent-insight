import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'success' | 'info' | 'warning' | 'primary';
  className?: string;
  style?: React.CSSProperties;
}

export const MetricCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
  className,
  style
}: MetricCardProps) => {
  const colorClasses = {
    success: 'text-success bg-success/10',
    info: 'text-info bg-info/10',
    warning: 'text-warning bg-warning/10',
    primary: 'text-primary bg-primary/10'
  };

  const trendColor = trend === 'up' ? 'text-success' : 'text-destructive';
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <Card 
      className={cn(
        "bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-0",
        className
      )}
      style={style}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
          <div className={cn(
            "p-2 rounded-lg",
            colorClasses[color]
          )}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          <div className="flex items-center text-xs">
            <TrendIcon className={cn("h-3 w-3 mr-1", trendColor)} />
            <span className={trendColor}>
              {change}
            </span>
            <span className="text-muted-foreground ml-1">
              desde el mes pasado
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};