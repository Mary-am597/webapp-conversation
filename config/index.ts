import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Robot teacher',
  description: 'تطبيق روبوت المعلم للتعليم التفاعلي',
  copyright: '© 2024 جميع الحقوق محفوظة',
  privacy_policy: 'https://www.termsfeed.com/live/a09bcee2-6b68-4f3e-ae9e-b3bed5106ffd', // رابط سياسة الخصوصية
  default_language: 'ar',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
