'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full p-4 flex flex-col items-center justify-center bg-background">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-1">أبرز مشاريعنا</h1>
        <p className="text-sm text-muted-foreground">نماذج من المشاريع التي قمنا بتنفيذها لعملائنا في مختلف المجالات</p>
      </div>

      <div className="cards-container w-full max-w-[2000px]">
        {/* Project 1 */}
        <Card className="flex-1 min-w-0 p-4 flex flex-row items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">برامج سطح المكتب</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">مميز</Badge>
            </div>
            <h2 className="text-lg font-bold mb-1">برنامج المحاسبة الشامل</h2>
            <p className="text-sm text-muted-foreground line-clamp-2">برنامج محاسبي متكامل مطور بلغة C# لإدارة الحسابات والمخزون والفواتير</p>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0 group">
            عرض التفاصيل
            <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>

        {/* Project 2 */}
        <Card className="flex-1 min-w-0 p-4 flex flex-row items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">تطبيقات الويب</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">مميز</Badge>
            </div>
            <h2 className="text-lg font-bold mb-1">منصة تعليمية</h2>
            <p className="text-sm text-muted-foreground line-clamp-2">منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت</p>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0 group">
            عرض التفاصيل
            <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>

        {/* Project 3 */}
        <Card className="flex-1 min-w-0 p-4 flex flex-row items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">تطبيقات الويب</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">مميز</Badge>
            </div>
            <h2 className="text-lg font-bold mb-1">نظام إدارة المحتوى</h2>
            <p className="text-sm text-muted-foreground line-clamp-2">نظام إدارة محتوى مخصص لشركة إعلامية</p>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0 group">
            عرض التفاصيل
            <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>
      </div>

      <Button variant="outline" size="sm" className="mt-4 group">
        عرض جميع المشاريع
        <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </main>
  );
} 