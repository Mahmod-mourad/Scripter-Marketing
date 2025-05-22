import { NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend('re_dLSqSgiP_9c3QYu3XRdi3LPxDM25c6myt')

export async function POST(request: Request) {
  try {
    console.log('Starting email send process...')

    const { fullName, email, phone, companyName } = await request.json()
    console.log('Received form data:', { fullName, email, phone, companyName })

    // Validate required fields
    if (!fullName || !email || !phone || !companyName) {
      console.log("Missing required fields")
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      )
    }

    // إعداد الإيميل
    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; text-align: center;">طلب تحميل برنامج دفترة جديد</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057;">بيانات العميل:</h3>
          <p><strong>الاسم:</strong> ${fullName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          <p><strong>اسم الشركة:</strong> ${companyName}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6c757d; font-size: 14px;">
            تم إرسال هذا الإيميل تلقائياً من موقع دفترة
          </p>
        </div>
      </div>
    `

    console.log('Sending email...')

    // إرسال الإيميل
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['eng.mahmoudmurad@gmail.com'],
      subject: `طلب تحميل برنامج دفترة جديد من ${fullName}`,
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

    console.log('Email sent successfully:', data)
    return NextResponse.json({
      success: true,
      message: 'تم إرسال البيانات بنجاح',
      emailId: data?.id || undefined
    })

  } catch (error) {
    console.error('Error in email API:', error)
    return NextResponse.json(
      { 
        error: 'حدث خطأ أثناء إرسال البيانات',
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    )
  }
} 