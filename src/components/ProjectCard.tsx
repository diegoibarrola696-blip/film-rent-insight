import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Calendar, DollarSign, User } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  client: string;
  budget: number;
  spent: number;
  progress: number;
  status: string;
  startDate: string;
  endDate: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export const ProjectCard = ({ project, className, style }: ProjectCardProps) => {
  const remaining = project.budget - project.spent;
  const spentPercentage = (project.spent / project.budget) * 100;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Progreso':
        return 'bg-primary text-primary-foreground';
      case 'Finalizando':
        return 'bg-warning text-warning-foreground';
      case 'Iniciando':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card 
      className={cn(
        "bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-0 group cursor-pointer",
        className
      )}
      style={style}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-3 w-3 mr-1" />
              {project.client}
            </div>
          </div>
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progreso del proyecto */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-medium text-foreground">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        {/* Información financiera */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground">
              <DollarSign className="h-3 w-3 mr-1" />
              Presupuesto
            </div>
            <div className="text-sm font-semibold text-foreground">
              {formatCurrency(project.budget)}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Gastado</div>
            <div className="text-sm font-semibold text-primary">
              {formatCurrency(project.spent)}
            </div>
          </div>
        </div>

        {/* Progreso financiero */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Uso del presupuesto</span>
            <span className="font-medium text-foreground">{spentPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={spentPercentage} className="h-2" />
          <div className="text-xs text-success">
            Restante: {formatCurrency(remaining)}
          </div>
        </div>

        {/* Fechas */}
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(project.startDate)}
          </div>
          <div>
            hasta {formatDate(project.endDate)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};