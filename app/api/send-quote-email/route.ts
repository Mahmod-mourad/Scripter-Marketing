import { NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend('re_dLSqSgiP_9c3QYu3XRdi3LPxDM25c6myt')

export async function POST(request: Request) {
  try {
    console.log('Starting quote email send process...')

    const { 
      name, 
      email, 
      phone, 
      company,
      projectType,
      services,
      budget,
      description,
      timeline,
      hearAbout
    } = await request.json()
    
    console.log('Received quote form data:', { 
      name, 
      email, 
      phone, 
      company,
      projectType,
      services,
      budget,
      description,
      timeline,
      hearAbout
    })

    // Validate required fields
    if (!name || !email || !phone || !projectType || !services || !budget || !description || !timeline) {
      console.log("Missing required fields:", { 
        name: !name, 
        email: !email, 
        phone: !phone, 
        projectType: !projectType, 
        services: !services, 
        budget: !budget, 
        description: !description, 
        timeline: !timeline 
      })
      return NextResponse.json(
        { error: "جميع الحقول المطلوبة يجب ملؤها" },
        { status: 400 }
      )
    }

    // إعداد الإيميل
    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; text-align: center;">طلب عرض سعر جديد</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057;">معلومات العميل:</h3>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          ${company ? `<p><strong>اسم الشركة:</strong> ${company}</p>` : ''}
          
          <h3 style="color: #495057; margin-top: 20px;">تفاصيل المشروع:</h3>
          <p><strong>نوع المشروع:</strong> ${projectType}</p>
          <p><strong>الخدمات المطلوبة:</strong></p>
          <ul style="list-style-type: none; padding-right: 20px;">
            ${Array.isArray(services) ? services.map(service => `<li>• ${service}</li>`).join('') : `<li>• ${services}</li>`}
          </ul>
          <p><strong>الميزانية التقريبية:</strong> ${budget}</p>
          <p><strong>الإطار الزمني المتوقع:</strong> ${timeline}</p>
          
          <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 4px;">
            <h4 style="color: #495057; margin-bottom: 10px;">وصف المشروع:</h4>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>
          
          ${hearAbout ? `
            <div style="margin-top: 15px;">
              <p><strong>كيف سمعت عنا:</strong> ${hearAbout}</p>
            </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6c757d; font-size: 14px;">
            تم إرسال هذا الإيميل تلقائياً من نموذج طلب عرض السعر في موقع Scripter Marketing
          </p>
        </div>
      </div>
    `

    console.log('Sending quote email...')

    // إرسال الإيميل
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['eng.mahmoudmurad@gmail.com'],
      subject: `طلب عرض سعر جديد من ${name}`,
      html: emailHtml,
      replyTo: email,
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json(
        { 
          error: 'فشل في إرسال البريد الإلكتروني',
          details: error
        },
        { status: 500 }
      )
    }

    console.log('Quote email sent successfully:', data)
    return NextResponse.json({ 
      success: true, 
      message: 'تم إرسال طلبك بنجاح',
      emailId: data?.id || null
    })

  } catch (error) {
    console.error('Error in quote email API:', error)
    return NextResponse.json(
      { 
        error: 'حدث خطأ أثناء إرسال الطلب',
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    )
  }
} 