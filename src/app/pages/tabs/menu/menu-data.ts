export enum MENUS {
    FOLLOW_UPS = 'followUPS',
    CALENDAR ='calendar',
    CALL_LOGS ='call_logs',
    REQUEST_REPORTS = 'request_reports',
    ADVANCED_REPORTS = 'advanced_reports',
    WHATS_APP_TEMPLATES = 'whats_app_templates',
    SMS_TEMPLATES = 'sms_templates',
    EMAIL_TEMPLATES = 'email_templates',
    RECURRING_FOLLOW_UPS = 'recurring_follow_ups',
    RECHURN_DATA = 'rechurn_data',
    INTERACTIONS = 'interactions',
    TEAM_LIVE_STATUS = 'team_live_status'
}

export interface MENU_MODEL {
    id : MENUS ,
    text : string ,
    icon : string 
}

export const MENU_LIST : MENU_MODEL[] = [
     { id : MENUS.FOLLOW_UPS , text : 'Followups' , icon : 'notifications-outline' },
     { id : MENUS.CALENDAR , text : 'Calendar' , icon : 'calendar-outline' },
     { id : MENUS.CALL_LOGS , text : 'Call Logs' , icon : 'call-outline' },
     { id : MENUS.REQUEST_REPORTS , text : 'Request Reports' , icon : 'trending-up-outline' },
     { id : MENUS.ADVANCED_REPORTS , text : 'Advanced Reports' , icon : 'stats-chart-outline' },
     { id : MENUS.WHATS_APP_TEMPLATES , text : 'Whatsapp Templates' , icon : 'logo-whatsapp' },
     { id : MENUS.SMS_TEMPLATES , text : 'SMS Templates' , icon : 'chatbox-outline' },
     { id : MENUS.EMAIL_TEMPLATES , text : 'Email Templates' , icon : 'mail-outline' },
     { id : MENUS.RECURRING_FOLLOW_UPS , text : 'Recurring Followups' , icon : 'git-compare-outline' },
     { id : MENUS.RECHURN_DATA , text : 'Rechurn Data' , icon : 'sync-outline' },
     { id : MENUS.INTERACTIONS , text : 'Interactions' , icon : 'people-outline' },
     { id : MENUS.TEAM_LIVE_STATUS , text : 'Team Live Status' , icon : 'person-outline' }
]