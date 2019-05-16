export class Globals {
    public static get APP_NAME(): string { return 'My Todo list'; }
    public static get APP_TAB_TITLE(): string { return this.APP_NAME; } 
    public static get APP_TAB_SEPARATOR(): string { return ' - '; }
    public static get APP_API(): string { return 'http://api.upload.fr/'; }
    public static get APP_USER_TOKEN(): string { return 'id-token';}       
}
