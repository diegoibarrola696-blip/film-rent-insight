import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const FinancialChart = () => {
  // Mock data - en producción vendría de QuickBooks API
  const revenueData = [
    { month: 'Ene', ingresos: 120000, gastos: 85000, ganancia: 35000 },
    { month: 'Feb', ingresos: 150000, gastos: 95000, ganancia: 55000 },
    { month: 'Mar', ingresos: 180000, gastos: 110000, ganancia: 70000 },
    { month: 'Abr', ingresos: 220000, gastos: 130000, ganancia: 90000 },
    { month: 'May', ingresos: 190000, gastos: 120000, ganancia: 70000 },
    { month: 'Jun', ingresos: 250000, gastos: 140000, ganancia: 110000 }
  ];

  const projectData = [
    { project: 'Comercial A', budget: 150000, spent: 98000, remaining: 52000 },
    { project: 'Documental B', budget: 500000, spent: 425000, remaining: 75000 },
    { project: 'Video Musical C', budget: 75000, spent: 15000, remaining: 60000 },
    { project: 'Cortometraje D', budget: 200000, spent: 180000, remaining: 20000 }
  ];

  return (
    <Tabs defaultValue="revenue" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="revenue">Ingresos y Gastos</TabsTrigger>
        <TabsTrigger value="projects">Presupuestos por Proyecto</TabsTrigger>
      </TabsList>
      
      <TabsContent value="revenue" className="space-y-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Line 
                type="monotone" 
                dataKey="ingresos" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                name="Ingresos"
              />
              <Line 
                type="monotone" 
                dataKey="gastos" 
                stroke="hsl(var(--destructive))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                name="Gastos"
              />
              <Line 
                type="monotone" 
                dataKey="ganancia" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                name="Ganancia"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>

      <TabsContent value="projects" className="space-y-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="project" 
                className="text-muted-foreground"
                fontSize={12}
              />
              <YAxis 
                className="text-muted-foreground"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Bar 
                dataKey="budget" 
                fill="hsl(var(--accent))" 
                name="Presupuesto"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="spent" 
                fill="hsl(var(--primary))" 
                name="Gastado"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  );
};