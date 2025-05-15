"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const projectData = [
  { id: "month-1", name: "يناير", projects: 4 },
  { id: "month-2", name: "فبراير", projects: 7 },
  { id: "month-3", name: "مارس", projects: 5 },
  { id: "month-4", name: "أبريل", projects: 8 },
  { id: "month-5", name: "مايو", projects: 12 },
  { id: "month-6", name: "يونيو", projects: 10 },
  { id: "month-7", name: "يوليو", projects: 15 },
  { id: "month-8", name: "أغسطس", projects: 13 },
  { id: "month-9", name: "سبتمبر", projects: 18 },
  { id: "month-10", name: "أكتوبر", projects: 20 },
  { id: "month-11", name: "نوفمبر", projects: 17 },
  { id: "month-12", name: "ديسمبر", projects: 22 },
]

const clientData = [
  { id: "client-1", name: "يناير", clients: 2 },
  { id: "client-2", name: "فبراير", clients: 3 },
  { id: "client-3", name: "مارس", clients: 2 },
  { id: "client-4", name: "أبريل", clients: 4 },
  { id: "client-5", name: "مايو", clients: 5 },
  { id: "client-6", name: "يونيو", clients: 3 },
  { id: "client-7", name: "يوليو", clients: 6 },
  { id: "client-8", name: "أغسطس", clients: 4 },
  { id: "client-9", name: "سبتمبر", clients: 7 },
  { id: "client-10", name: "أكتوبر", clients: 8 },
  { id: "client-11", name: "نوفمبر", clients: 6 },
  { id: "client-12", name: "ديسمبر", clients: 9 },
]

const serviceData = [
  { id: "service-1", name: "تطوير الويب", value: 40 },
  { id: "service-2", name: "تطوير الجوال", value: 30 },
  { id: "service-3", name: "واجهات المستخدم", value: 15 },
  { id: "service-4", name: "استشارات", value: 10 },
  { id: "service-5", name: "أخرى", value: 5 },
]

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"]

export function StatisticsCharts() {
  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 bg-slate-800">
        <TabsTrigger value="projects">المشاريع</TabsTrigger>
        <TabsTrigger value="clients">العملاء</TabsTrigger>
        <TabsTrigger value="services">الخدمات</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle>إحصائيات المشاريع</CardTitle>
            <CardDescription>عدد المشاريع المنجزة شهريًا خلال العام الماضي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "0.5rem" }}
                    itemStyle={{ color: "#f8fafc" }}
                  />
                  <Legend />
                  <Bar dataKey="projects" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="clients">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle>إحصائيات العملاء</CardTitle>
            <CardDescription>عدد العملاء الجدد شهريًا خلال العام الماضي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={clientData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "0.5rem" }}
                    itemStyle={{ color: "#f8fafc" }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="clients" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="services">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle>توزيع الخدمات</CardTitle>
            <CardDescription>نسبة الخدمات المقدمة حسب النوع</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`pie-cell-${entry.id}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "0.5rem" }}
                    itemStyle={{ color: "#f8fafc" }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
