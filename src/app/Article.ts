
export class Article
{

   private _matricule: number;
   private _libelle:String;
   private _marque:String;
   private _photo:String;
   private _prix: number;
   private _dateFabrication: Date;
   private _enstock: boolean;



   constructor(matricule:number,libelle:String,marque:String,photo:String,prix:number,dateFabrication:Date,enstock:boolean)
  {
    this._matricule =matricule;
    this._libelle =libelle ;
    this._marque =marque ;
    this._photo = photo;
    this._prix = prix;
    this._dateFabrication = dateFabrication;
    this._enstock = enstock;

  }

  public get matricule(): number {
    return this._matricule;
  }
  public set matricule(value: number) {
    this._matricule = value;
  }
  public get libelle():String {
    return this._libelle;
  }
  public set libelle(value:String) {
    this._libelle = value;
  }
  public get marque():String {
    return this._marque;
  }
  public set marque(value:String) {
    this._marque = value;
  }
  public get photo():String {
    return this._photo;
  }
  public set photo(value:String) {
    this._photo = value;
  }
  public get prix(): number {
    return this._prix;
  }
  public set prix(value: number) {
    this._prix = value;
  }
  public get dateFabrication(): Date {
    return this._dateFabrication;
  }
  public set dateFabrication(value: Date) {
    this._dateFabrication = value;
  }
  public get enstock(): boolean {
    return this._enstock;
  }
  public set enstock(value: boolean) {
    this._enstock = value;
  }




  

  


}
