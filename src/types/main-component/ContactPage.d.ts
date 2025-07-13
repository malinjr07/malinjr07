import { FC } from 'react';

declare const ContactPage: FC;

declare const ContactForm: FC;

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default ContactPage;
