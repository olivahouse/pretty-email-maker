export const getSessionConfirmationHtml = (
  strings,
  memberFirstName = 'PENDING',
  therapistFullName = 'PENDING',
  date = 'PENDING',
  googleCalendarLink = 'PENDING',
  icsFileDownloadLink = 'PENDING',
  videoCallLink = 'PENDING',
  therapistFirstName = 'PENDING'
) => `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }</style><style type="text/css">.body-left > div { Margin: 0px 20px !important; } .gmail-show { display: none !important; } u ~ div .gmail-hide { display: none !important; } u ~ div .gmail-show { display: table-cell !important; } p { margin: 0; }</style></head><body style="background-color:#ffffff;"><div style="background-color:#ffffff;"><div class="body-left"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.HI} ${memberFirstName}</p></div></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.WE_HOPE_YOUR_SESSION_WITH} ${therapistFirstName} ${strings.WENT_WELL}.</p></div></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.YOUR_NEXT_SESSION_IS_SCHEDULED_FOR} <strong>${date}</strong>.</p></div></td></tr><tr><td align="left" vertical-align="middle" class="gmail-show" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="transparent" role="presentation" style="border:3px solid #202124;border-radius:0;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle"><a href="${googleCalendarLink}" style="display:inline-block;background:transparent;color:#202124;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:16px;font-weight:500;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:0;" target="_blank">${strings.ADD_TO_CALENDAR}</a></td></tr></table></td></tr><tr><td align="left" vertical-align="middle" class="gmail-hide" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="transparent" role="presentation" style="border:3px solid #202124;border-radius:0;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle"><a href="${icsFileDownloadLink}" style="display:inline-block;background:transparent;color:#202124;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:16px;font-weight:500;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:0;" target="_blank">${strings.ADD_TO_CALENDAR}</a></td></tr></table></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.WHEN_ITS_TIME} <a href="${videoCallLink}">${strings.THIS_LINK}</a> ${strings.TO_JOIN_THE_CALL}.</p></div></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.IF_YOU_HAVE_A_QUESTION_YOUD_LIKE_TO_ASK_BEFORE}</p></div></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.TAKE_CARE}</p></div></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;"><p>${strings.YOUR_TEAM_AT_OLIVA}</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:0px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:100px;"><img height="auto" src="https://oliva-static-assets.s3.amazonaws.com/Oliva-logo-93x29%402x.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100"></td></tr></tbody></table></td></tr><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr><tr><td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;"><div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#6A6C73;"><p>Focus on you</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></div></body></html>`
