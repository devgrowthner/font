'use client';
import { useState } from 'react';
import axios from 'axios';
import { API_END_POINTS } from '@/constants/apiEndPoints';
import styles from './page.module.css';
const sizes = ['1 to 20', '21 to 100', '101 to 500', '500+'];
const uses = ['Staff use tools like ChatGPT or Copilot', 'We have a customer chatbot or voice agent', 'We run AI agents or AI in our ERP', 'We are planning to adopt AI'];
export default function AssessmentForm() {
  const [status,setStatus]=useState('idle');
  async function submit(event) {
    event.preventDefault(); if(status==='sending') return;
    const form=event.currentTarget; const data=new FormData(form); setStatus('sending');
    try {
      const response=await axios.post(API_END_POINTS.CONTACT_US,{full_name:data.get('name').trim(),email:data.get('email').trim(),phone_number:data.get('phone').trim(),subject:'Free AI Security Assessment',message:`Company: ${data.get('company')}\nCompany size: ${data.get('size')}\nAI use: ${data.get('usage')}\nBiggest AI concern: ${data.get('concern') || 'Not specified'}`});
      if(!response.data.success) throw new Error('Submission failed');
      setStatus('success'); form.reset();
    } catch { setStatus('error'); }
  }
  return <div className={styles.formPanel}>{status==='success'?<div role="status"><h3>Thanks!</h3><p>A Zynex AI security specialist will contact you within one business day. Want to skip the wait?</p><a className={styles.primary} href="https://calendly.com/zynex-technologies/30min" target="_blank" rel="noopener noreferrer">Book a time directly on our calendar</a></div>:<form onSubmit={submit}>
    <div className={styles.formGrid}>{[['name','Full name','text','name'],['email','Work email','email','email'],['phone','Phone','tel','tel'],['company','Company name','text','organization']].map(([name,label,type,autoComplete])=><label key={name} htmlFor={`assessment-${name}`}>{label} <span aria-hidden="true">*</span><input id={`assessment-${name}`} name={name} type={type} autoComplete={autoComplete} required maxLength={200} pattern={type==='text'?'.*\\S.*':undefined}/></label>)}</div>
    {[['size','Company size',sizes],['usage','How does your business use AI today?',uses]].map(([name,label,options])=><label key={name} htmlFor={`assessment-${name}`}>{label} <span aria-hidden="true">*</span><select id={`assessment-${name}`} name={name} required defaultValue=""><option value="" disabled>Select an option</option>{options.map(t=><option key={t}>{t}</option>)}</select></label>)}
    <label htmlFor="assessment-concern">Biggest AI concern <span>(optional)</span><input id="assessment-concern" name="concern" maxLength={500}/></label>
    {status==='error'&&<p role="alert" className={styles.error}>We couldn’t send your request. Please try again or <a href="https://calendly.com/zynex-technologies/30min">book a time on our calendar</a>.</p>}
    <button className={styles.primary} type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Get My Free Assessment'}</button><p className={styles.formNote}>Your details stay confidential and are only used to arrange your assessment.</p>
  </form>}</div>;
}
