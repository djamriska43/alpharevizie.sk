import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: 'Vyplňte všetky povinné polia.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Alpha Revízie <kontakt@alphasafety.sk>',
      to: ['office@alpharevizie.sk'],
      replyTo: email,
      subject: `Nová požiadavka na revíziu — ${type}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#00d4ff;margin-bottom:20px;">Nová správa z alpharevizie.sk</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;width:140px;">Meno:</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;">E-mail:</td><td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;">Telefón:</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${phone || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;">Typ revízie:</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${type}</td></tr>
          </table>
          <div style="margin-top:20px;padding:15px;background:#f5f5f5;border-radius:8px;">
            <strong>Správa:</strong><br/><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="margin-top:30px;font-size:12px;color:#999;">Odoslané z kontaktného formulára na alpharevizie.sk</p>
        </div>
      `,
    });

    // Auto-reply klientovi
    await resend.emails.send({
      from: 'Alpha Revízie <kontakt@alphasafety.sk>',
      to: [email],
      replyTo: 'office@alpharevizie.sk',
      subject: 'Ďakujeme za vašu požiadavku — Alpha Revízie',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#111;margin-bottom:20px;">Ďakujeme za vašu požiadavku</h2>
          <p style="color:#333;font-size:15px;line-height:1.7;">Dobrý deň,</p>
          <p style="color:#333;font-size:15px;line-height:1.7;">ďakujeme za vašu požiadavku. Prijali sme ju a ozveme sa vám do 24 hodín.</p>
          <p style="color:#333;font-size:15px;line-height:1.7;">V prípade urgentnej potreby nás kontaktujte na <strong>+421 952 352 669</strong>.</p>
          <p style="color:#333;font-size:15px;line-height:1.7;margin-top:30px;">S pozdravom,<br/><strong>Alpha Revízie</strong><br/>office@alpharevizie.sk<br/>+421 952 352 669</p>
          <hr style="border:none;border-top:1px solid #eee;margin:30px 0;" />
          <p style="color:#999;font-size:12px;">Alpha Safety s.r.o. | Jeleňova 4154/9, 036 01 Martin | IČO: 54610982</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Nepodarilo sa odoslať správu. Skúste to znova.' }, { status: 500 });
  }
}
