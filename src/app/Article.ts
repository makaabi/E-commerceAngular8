
export class Article
{

   private _matricule: number;
   private _libelle: string;
   private _marque: string;
   private _photo: string;
   private _prix: number;
   private _dateFabrication: Date;
   private _enstock: boolean;

  public get matricule(): number {
    return this._matricule;
  }
  public set matricule(value: number) {
    this._matricule = value;
  }
  public get libelle(): string {
    return this._libelle;
  }
  public set libelle(value: string) {
    this._libelle = value;
  }
  public get marque(): string {
    return this._marque;
  }
  public set marque(value: string) {
    this._marque = value;
  }
  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
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




  

  constructor(matricule:number ,libelle:string,marque:String,photo:string,prix:number,dateFabrication:Date,enstock:boolean)
  {
    this._matricule =matricule;
    this._libelle =libelle ;
    this._marque =marque ;
    this._photo = photo;
    this._prix = prix;
    this._dateFabrication = dateFabrication;
    this._enstock = enstock;

  }


}
