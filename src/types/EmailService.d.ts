export type EmailData = string | { name?: string; email: string; }

export interface MailContent {
  type: string;
  value: string;
}

export interface PersonalizationData {
  to: EmailData | EmailData[],
  cc?: EmailData | EmailData[],
  bcc?: EmailData | EmailData[],
  subject?: string;
  headers?: { [key: string]: string };
  substitutions?: { [key: string]: string };
  dynamicTemplateData?: { [key: string]: any; };
  customArgs?: { [key: string]: string };
  sendAt?: number;
}

export interface AttachmentData {
  content: string;
  filename: string;
  type?: string;
  disposition?: string;
  contentId?: string;
}

export interface MailData {
  to?: EmailData | EmailData[],
  cc?: EmailData | EmailData[],
  bcc?: EmailData | EmailData[],

  from: EmailData,
  replyTo?: EmailData,

  sendAt?: number,

  subject?: string,
  text?: string,
  html?: string,
  content?: MailContent[],
  templateId?: string,

  personalizations?: PersonalizationData[],
  attachments?: AttachmentData[],

  ipPoolName?: string,
  batchId?: string,

  sections?: { [key: string]: string },
  headers?: { [key: string]: string },

  categories?: string[],
  category?: string,

  customArgs?: { [key: string]: any },
  asm?: ASMOptions,

  mailSettings?: MailSettings,
  trackingSettings?: TrackingSettings,

  substitutions?: { [key: string]: string },
  substitutionWrappers?: string[],

  isMultiple?: boolean,
  dynamicTemplateData?: { [key: string]: any },

  hideWarnings?: boolean,
}

export interface TrackingSettings {
  clickTracking?: {
    enable?: boolean;
    enableText?: boolean;
  };
  openTracking?: {
    enable?: boolean;
    substitutionTag?: string;
  };
  subscriptionTracking?: {
    enable?: boolean;
    text?: string;
    html?: string;
    substitutionTag?: string;
  };
  ganalytics?: {
    enable?: boolean;
    utmSource?: string;
    utmMedium?: string;
    utmTerm?: string;
    utmContent?: string;
    utmCampaign?: string;
  };
}

export interface ASMOptions {
  groupId: number;
  groupsToDisplay?: number[];
}

export interface MailSettings {
  bcc?: {
    enable?: boolean;
    email?: string;
  };
  bypassListManagement?: {
    enable?: boolean;
  };
  footer?: {
    enable?: boolean;
    text?: string;
    html?: string;
  };
  sandboxMode?: {
    enable?: boolean;
  };
  spamCheck?: {
    enable?: boolean;
    threshold?: number;
    postToUrl?: string;
  };
}