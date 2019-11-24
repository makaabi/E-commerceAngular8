
export class User
{
   private _theuser:string;
   private _password:string;
  
   constructor(theuser:string,password:string)
{
  this._theuser =theuser;
  this._password =password ;
 

}
public get password(): string {
   return this._password;
}
public set password(value: string) {
   this._password = value;
}
public get theuser_1(): string {
   return this._theuser;
}
public set theuser_1(value:string) {
   this._theuser = value;
}
}
