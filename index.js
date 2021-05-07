exports.handler = async(event,context)=>{
  let data = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  
  <body yahoo="fix" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" style="width:100% !important" bgcolor="#eeefef">
  <!-- MAIN TABLE WRAPPER START -->
  <img src="https://smetrics.cox.com/b/ss/$reportSuiteID$/5?campaign=cr_em_cns_z_z_$eventStatus$&amp;events=event76&amp;v62=$transactionID$" width="1" height="1" border="0" alt="" />
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="eeefef" id="backgroundTable" style="width:100%;background:#eeefef; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <tr>
      <td align="center" width="100%" style="width:100%;">
             <!-- MAIN DEVICE WIDTH TABLE START -->
             <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#f2f6f7" align="center" style="font-family:Arial, Helvetica, sans-serif;width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
             
    <!-- HEADER MODULE START -->			
        <!-- Logo Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_logo_top.png" width="640" height="102" alt="Cox Logo" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:102px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Logo Bar End -->	  	       		
        
      <!-- INTRO MODULE START -->			
        
        <!-- Intro Copy Start -->	
          
               <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="intro" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; line-height:25px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;"
  <br>
  <p>
  You are receiving this email because a request was made for a one-time code to be used for recovering your Cox Business User ID.
  Please enter the following code for verification:
  </p>
  <p style="color:#172b4d;text-align:center">
                                                                                                                                {{payload.onetimepassword}}
  </p>
  <p>
  If you didn't make this request, please <a href="https://www.cox.com/business/contact-us.html" target="_blank">contact us</a>. 
  <a href="https://www.cox.com/business/support/tips-to-secure-your-cox-business-account.html" target="_blank">Click here</a> to learn more about protecting your Cox Business account.
  </p>
  
  
                                      
                  </td>
                  <td><img class="spacerMarginWidth" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
                
              </table>
            </td>
          </tr>
          
        <!-- Intro Copy End -->		
        <!-- INTRO MODULE END -->			
                                                                            
    <!-- FOOTER MODULE START -->			
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="16" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Gradient Bar Start -->			
              <tr>	
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" class="deviceWidth" style="width:640px;">
                <tbody>
                  <tr>
                    <td align="center" class="deviceWidth" style="width:640px; max-width:640px;display:block">
                      <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_gradient_line.png" width="640" height="4" alt="Gradient Line" style="display:block; width:100%; height:auto; border:none; max-width:640px; max-height:4px;"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        <!-- Gradient Bar End -->				
        <!-- Spacer Start -->
          <tr>
            <td style="line-height:1px; font-size:1px;"><img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="1" height="20" style="display:block;" /></td>
          </tr>
        <!-- Spacer End -->
        <!-- Footer Copy Start -->			
               <tr >
            <td width="100%">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" align="left" style="width:100%; max-width:640px; border-collapse:collapse; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
                <tr>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                  <td class="footer" width="100%" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:18px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;text-align:left;">
                  
                  <a href="https://www.cox.com/business/contact-us.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Contact</font></span></a> | 
                  <a href="https://www.cox.com/business/learn/starthere.html?sc_id=cbcr_cbdm_cbcamp_cbzz_cbstarthere_vanity
  " style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Welcome Center</font></span></a> | 
                  <a href="https://www.cox.com/business/refer-a-biz.html" style="font-family:Arial, Helvetica, sans-serif;text-decoration:underline; -webkit-text-size-adjust:none;"  target="_blank"><span style="color:#000000 !important; text-decoration:underline !important;"><font color="#000000">Refer a Business</font></span></a><br/><br/>
                  &copy; {{currentYear}} Cox Communications, Inc. All rights reserved.<br/><br/>
                  </td>
                  <td><img class="spacerMarginWidthFooter" src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" alt="" border="0" width="40" height="5" style="display:block;" /></td>
                </tr>
              </table>
            </td>
          </tr>
        <!-- Footer Copy End -->
    <!-- FOOTER MODULE END -->	 
                
                              
           <!-- FORCE GMAIL APP DESKTOP VIEW START -->
              <tr  bgcolor="#f2f6f7">
                    <td class="force-gmail-desktop">
              <table  role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640">
                <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1" width="640" style="background-color:#f2f6f7; line-height:1px; width:640px; min-width: 640px;">
                    <img src="https://www.cox.com/content/dam/cox/apps/cns/cb/OC_spacer.gif" height="1" width="640" style="max-height:1px; min-height:1px; width:640px; min-width:640px;display:block; "/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              <!-- FORCE GMAIL APP DESKTOP VIEW END -->
          
        </table>
        <!-- MAIN DEVICE WIDTH TABLE END-->
      </td>
      </tr>
  </table>
  <!-- MAIN TABLE WRAPPER END -->
  </body>
  </html>
  
  
  
  
  `;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: data
      },
      null,
      2
    ),
  };
}