import { NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend('re_dLSqSgiP_9c3QYu3XRdi3LPxDM25c6myt')

export async function POST(request: Request) {
  try {
    console.log('Starting contact email send process...')

    const { name, email, phone, company, subject, message } = await request.json()
    console.log('Received contact form data:', { name, email, phone, company, subject, message })

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      console.log("Missing required fields")
      return NextResponse.json(
        { error: "جميع الحقول المطلوبة يجب ملؤها" },
        { status: 400 }
      )
    }

    // إعداد الإيميل
    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; text-align: center;">رسالة جديدة من نموذج الاتصال</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057;">بيانات المرسل:</h3>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          ${company ? `<p><strong>اسم الشركة:</strong> ${company}</p>` : ''}
          <p><strong>الموضوع:</strong> ${subject}</p>
          <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 4px;">
            <h4 style="color: #495057; margin-bottom: 10px;">الرسالة:</h4>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6c757d; font-size: 14px;">
            تم إرسال هذا الإيميل تلقائياً من نموذج الاتصال في موقع دفترة
          </p>
        </div>
      </div>
    `

    console.log('Sending contact email...')

    // إرسال الإيميل
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['eng.mahmoudmurad@gmail.com'],
      subject: `رسالة جديدة من ${name} - ${subject}`,
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

    console.log('Contact email sent successfully:', data)
    return NextResponse.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح',
      emailId: data.id 
    })

  } catch (error) {
    console.error('Error in contact email API:', error)
    return NextResponse.json(
      { 
        error: 'حدث خطأ أثناء إرسال الرسالة',
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    )
  }
} 