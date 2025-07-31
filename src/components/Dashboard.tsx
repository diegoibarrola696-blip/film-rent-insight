import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FinancialChart } from '@/components/FinancialChart';
import { ProjectCard } from '@/components/ProjectCard';
import { MetricCard } from '@/components/MetricCard';
import { DollarSign, TrendingUp, Calendar, Users } from 'lucide-react';

const Dashboard = () => {
  // Mock data - en producción vendría de QuickBooks API
  const projects = [
    {
      id: 1,
      name: "Comercial Coca-Cola",
      client: "Agencia Creativa ABC",
      budget: 150000,
      spent: 98000,
      progress: 65,
      status: "En Progreso",
      startDate: "2024-01-15",
      endDate: "2024-03-30"
    },
    {
      id: 2,
      name: "Documental Netflix",
      client: "Netflix Studios",
      budget: 500000,
      spent: 425000,
      progress: 85,
      status: "Finalizando",
      startDate: "2023-11-01",
      endDate: "2024-02-15"
    },
    {
      id: 3,
      name: "Video Musical Artista X",
      client: "Disquera Universal",
      budget: 75000,
      spent: 15000,
      progress: 20,
      status: "Iniciando",
      startDate: "2024-02-01",
      endDate: "2024-04-15"
    }
  ];

  const metrics = [
    {
      title: "Ingresos Totales",
      value: "$1,234,567",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
      color: "success" as const
    },
    {
      title: "Proyectos Activos",
      value: "24",
      change: "+3",
      trend: "up" as const,
      icon: Calendar,
      color: "info" as const
    },
    {
      title: "Clientes Activos",
      value: "15",
      change: "+2",
      trend: "up" as const,
      icon: Users,
      color: "warning" as const
    },
    {
      title: "Margen de Ganancia",
      value: "34.2%",
      change: "+2.1%",
      trend: "up" as const,
      icon: TrendingUp,
      color: "success" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Dashboard Financiero
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitoreo en tiempo real de proyectos y finanzas
          </p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.title}
              {...metric}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Gráfico financiero */}
        <Card className="bg-gradient-card shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Análisis Financiero
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FinancialChart />
          </CardContent>
        </Card>

        {/* Proyectos */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Proyectos Activos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;